import React from 'react'
import {
  FooterContainer,
  FooterParagraph,
} from "./footer.style";

const Footer = () => { 
  return (
    <FooterContainer>
      <FooterParagraph>
        <span>© Copyright 2017 by Bukas Palad Tagaytay</span>
      </FooterParagraph>
      <FooterParagraph>
        <span>
          <h3>Contact Us</h3>
        </span>
        <span>Tel: +63 46 4830-930</span>
        <span>Email: legemme.bptag@gmal.com</span>
      </FooterParagraph>
      <FooterParagraph>
        <span>
          <h3>Address</h3>
        </span>
        <span>Ligaya Drive, Sungay West</span>
        <span>Tagaytay City, 4120</span>
        <span>Philippines</span>
      </FooterParagraph>
    </FooterContainer>
  );
}

export default Footer;