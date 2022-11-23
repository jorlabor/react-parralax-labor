import React, { useRef, useState, useEffect } from "react";
import Anime, { anime } from "react-anime";
import {
  HomeContainer,
  WhoTitle,
  WhoSection,
  WhoImage,
  WhoParagraphContainer,
  WhoParagraph,
  GoalsSection,
  ProgramTitle,
  HeroContainer,
  HeroTextContainer,
  HeroImage,
  HeroText,
} from "./home.style";
import GoalCard from "../../component/goalCard";
import FontSvg from "../../component/fontsvg";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const whoTitle = useRef(null);
  const visionGoal = useRef(null);

  const element = document.querySelector(".header1");

  const visionAnimation = anime({
    targets: element,
    easing: "easeOutElastic",
    loop: false,
    duration: 1000,
    delay: (el, index) => index * 240,
    translateX: 1400,
    opacity: [0, 1],
    scale: [0.75, 1],
  });

  anime({
    targets: ".heroText path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: (el, i) => {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });

  const handleScroll = () => {
    const position = window.scrollY;
    const offset = whoTitle.current.offsetTop;
    const scrollPercent = position - offset;
    visionAnimation.seek((scrollPercent / 100) * visionAnimation.duration);
    setScrollPosition(position);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // console.log(scrollPosition);
  // const whoTitle = document.querySelector(".whoTitle");
  // const rect = whoTitle.current.getBoundingClientRect();

  window.onscroll = () => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  return (
    <HomeContainer>
      {/* <Anime
        easing="easeOutElastic"
        loop={false}
        duration={1000}
        delay={(el, index) => index * 240}
        translateX={[0, 1400]}
        scale={[0.75, 1]}
      > */}
      {/* <WhoTitle ref={whoTitle}>WHO WE ARE</WhoTitle> */}
      {/* </Anime> */}
      <Anime>
        <WhoTitle className="header1" ref={whoTitle}>
          WHO WE ARE
        </WhoTitle>
      </Anime>
      <WhoSection>
        <WhoImage src="child_slide.jpg" alt="child_slide" />

        <WhoParagraphContainer>
          <WhoParagraph>
            <span>
              In 1983, a group of young filipinos felt very strong in their
              hearts the desire to help those in need and to give their lives in
              loving service to the neighbor. They were the youth of the
              Focolare Movement,
            </span>
            <span>
              a lay association present in 182 countries all over the world. The
              first Bukas Palad Social Center was born in Pasay City, in Manila.
              Now, this reality is all over the Philippines, including Tagaytay
              City.
            </span>
            <p></p>
            <span>
              Our center in Tagaytay started in 1987. At the beginning we had no
              building where to run this social center. We started with 14
              children and we were teaching them under the trees. Time has
              passed and with the help of lots of people and by Divine
              Providence,
            </span>
            <span>
              we acquired a small house, which is now the office, dental and
              medical clinic. We are located within Mariapolis Peace - a little
              city of the Focolare Movement - where pockets of poor families
              live in nearby communities.
            </span>
            <p></p>
            <span>
              Though Tagaytay is known to be a tourist destination, the gap
              between the rich who own vacation houses and those who scrounge
              for a living on a hand to mouth existence still exists. Many of
              these families have lived in Tagaytay for many years but still
              have not been able to improve their quality of life.
            </span>
            <span>
              In the 90's, we had around 50-60 pre-school children and the place
              became too small to conduct all the activities. Until one of the
              sponsors from Italy gave donations, so that we were able to
              acquire another structure which is now our school building,
              library and kitchen.
            </span>
          </WhoParagraph>
        </WhoParagraphContainer>
      </WhoSection>
      <GoalsSection>
        {scrollPosition >= 276 && (
          <Anime
            easing="easeOutElastic"
            loop={false}
            duration={1500}
            delay={(el, index) => index * 240}
            translateX={[-1000, 0]}
            scale={[0.1, 1]}
            autoplay={true}
          >
            <GoalCard title="VISION" ref={visionGoal}>
              To be a family united in building
              <br />
              universal brotherhood.
            </GoalCard>
          </Anime>
        )}
        {scrollPosition >= 690 && (
          <Anime
            easing="easeOutElastic"
            loop={false}
            duration={1500}
            delay={(el, index) => index * 240}
            translateX={[1000, 0]}
            scale={[0.1, 1]}
            autoplay={true}
          >
            <GoalCard title="MISSION">
              To build relationships based on mutual love where
              <br />
              "No one is so poor that he/she cannot give, and no one is so rich
              <br />
              that he/she cannot receive."
            </GoalCard>
          </Anime>
        )}
      </GoalsSection>
      <HeroContainer>
        <HeroImage src="child_presentation.jpg" alt="child_presentation" />
        <HeroTextContainer>
          {/* <HeroText>"Freely we receive, </HeroText>
          <HeroText>freely we give" </HeroText> */}
          <FontSvg />
        </HeroTextContainer>
      </HeroContainer>
      <ProgramTitle>OUR PROGRAMS</ProgramTitle>
    </HomeContainer>
  );
};

export default Home;
