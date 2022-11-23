import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const WhoTitle = styled.h1`
  color: #2095f7;
  font-weight: 900;
  font-size: 48px;
  text-shadow: 1px 1px 2px black;
  margin-bottom: 8px;
  margin-right: 72px;
  align-self: flex-end;
`;

export const WhoSection = styled.div`
  display: flex;
  margin: 0px 72px 0px 72px;
`;

export const WhoImage = styled.img`
  object-fit: cover;
  margin-right: 24px;
  margin-left: 24px;
`;

export const WhoParagraphContainer = styled.div`
  background-color: #cae6fd;
  padding: 8px;
  border-radius: 24px;
`;

export const WhoParagraph = styled.p`
  margin: 0px;
  padding: 8px;
  font-size: 24px;
  line-height: 1.5em;
  text-align: justify;
  font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
`;

export const GoalsSection = styled.div`
  margin-top: 72px;
  align-self: center;
  display: flex;
  gap: 120px;
`;

export const ProgramTitle = styled.h1`
  color: #2095f7;
  font-weight: 900;
  font-size: 48px;
  text-shadow: 1px 1px 2px black;
  margin: 72px 0px 0px 320px;
`;

export const HeroContainer = styled.div`
  position: relative;
  left: 50%;
  right: 50%;
  margin: 72px -50vw 0px -50vw;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 1000px;
  height: 500px;
  position: absolute;
  right: 50%;
  bottom: 10%;
`;

export const HeroImage = styled.img`
  width: 100vw;
`;
// ``
export const HeroText = styled.span`
  font-size: 136px;
  font-family: cookie, cursive;
  text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
  color: white;
`;
