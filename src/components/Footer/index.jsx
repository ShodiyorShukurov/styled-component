import { Container } from "../main";
import {
  SiteFooter,
  SiteFooterList,
  SiteFooterItem,
  SiteFooterTitle,
  SiteFooterLink,
  SiteFooterImages,
  SiteFooterText,
  SiteFooterWrapper,
} from "./footer";

import twitter from "../../assets/logo/twitter.svg";
import facebook from "../../assets/logo/facebook.svg";
import linkedin from "../../assets/logo/linkedn.svg";
import instagram from "../../assets/logo/instagram.svg";
import footer from "../../assets/logo/footer.svg";

const Footer = () => {
  return (
    <>
      <SiteFooter>
        <Container>
          <SiteFooterList>
            <SiteFooterItem>
              <SiteFooterTitle>Services</SiteFooterTitle>
              <SiteFooterLink href="#l">SMM</SiteFooterLink>
              <SiteFooterLink href="#l">Web development</SiteFooterLink>
              <SiteFooterLink href="#l">Mobile apps</SiteFooterLink>
              <SiteFooterLink href="#l">Branding</SiteFooterLink>
              <SiteFooterLink href="#l">Graphic design</SiteFooterLink>
            </SiteFooterItem>
            <SiteFooterItem resources>
              <SiteFooterTitle>Resources</SiteFooterTitle>
              <SiteFooterLink href="#l">About us</SiteFooterLink>
              <SiteFooterLink href="#l">Showcase</SiteFooterLink>
              <SiteFooterLink href="#l">Blog</SiteFooterLink>
            </SiteFooterItem>
            <SiteFooterItem connect>
              <SiteFooterTitle>Connect with us</SiteFooterTitle>
              <SiteFooterLink href="tel: (239) 555-0108">
                (239) 555-0108
              </SiteFooterLink>
              <SiteFooterLink href="hello@pixer.com">
                hello@pixer.com
              </SiteFooterLink>
              <SiteFooterLink mexico>
                4140 Parker Rd. Allentown, New Mexico 31134
              </SiteFooterLink>
              <SiteFooterImages>
                <img src={twitter} alt="Twitter" width={24} height={24} />
                <img
                  className="mx-5"
                  src={facebook}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
                <img src={linkedin} alt="Linkedin" width={24} height={24} />
                <img
                  className="ms-5"
                  src={instagram}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </SiteFooterImages>
            </SiteFooterItem>
          </SiteFooterList>
          <SiteFooterWrapper>
            <div>
              <img src={footer} alt="PIXER" width={81} height={28} />
            </div>
            <div>
              <SiteFooterText>Copyright © 2022 Pixer</SiteFooterText>
            </div>
          </SiteFooterWrapper>
        </Container>
      </SiteFooter>
    </>
  );
};

export default Footer;
