import React from "react";
import { FooterDescription, FooterFrame, StyledLinkFooter } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterFrame>
            <StyledLinkFooter href="https://github.com/dongyunkim96/JavascriptPractice" target="_blank">Github Page</StyledLinkFooter>
            <FooterDescription>
                If you want to check out my codes, Click on this link.
                © 2024 My Website. All rights reserved.
            </FooterDescription>
        </FooterFrame>
    );
};

export default Footer;