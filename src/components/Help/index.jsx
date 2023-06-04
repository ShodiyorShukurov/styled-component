import {
  HelpSection,
  HelpSectionList,
  HelpSectionItem,
  HelpSectionItemTitle,
  HelpSectionItemWrapper,
  HelpSectionItemBox,
  HelpSectionItemText,
  HelpSectionItemLink,
  HelpSectionTitle,
} from "./help";
import { Container } from "../main";
import designer from "../../assets/logo/designer.svg";
import smm from "../../assets/logo/smm.svg";
import brand from "../../assets/logo/brand.svg";
import developer from "../../assets/logo/developer.svg";
import graphic from "../../assets/logo/graphic.svg";

const Help = () => {
  return (
    <>
      <HelpSection>
        <Container>
          <HelpSectionTitle>How can we help you?</HelpSectionTitle>
          <HelpSectionList>
            <HelpSectionItem>
              <HelpSectionItemWrapper>
                <HelpSectionItemTitle>Web Designer</HelpSectionItemTitle>
                <HelpSectionItemBox>
                  <img src={designer} alt="Designer" width={30} height={30} />
                </HelpSectionItemBox>
              </HelpSectionItemWrapper>
              <HelpSectionItemText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim Ut enim ad minim veniam, quis
              </HelpSectionItemText>
              <HelpSectionItemLink>View more</HelpSectionItemLink>
            </HelpSectionItem>
            <HelpSectionItem smm>
              <HelpSectionItemWrapper>
                <HelpSectionItemTitle>SMM</HelpSectionItemTitle>
                <HelpSectionItemBox>
                  <img src={smm} alt="SMM" width={30} height={30} />
                </HelpSectionItemBox>
              </HelpSectionItemWrapper>
              <HelpSectionItemText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </HelpSectionItemText>
              <HelpSectionItemLink>View more</HelpSectionItemLink>
            </HelpSectionItem>
            <HelpSectionItem>
              <HelpSectionItemWrapper>
                <HelpSectionItemTitle>Branding</HelpSectionItemTitle>
                <HelpSectionItemBox>
                  <img src={brand} alt="Branding" width={30} height={30} />
                </HelpSectionItemBox>
              </HelpSectionItemWrapper>
              <HelpSectionItemText>
                No the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee
              </HelpSectionItemText>
              <HelpSectionItemLink>View more</HelpSectionItemLink>
            </HelpSectionItem>
            <HelpSectionItem>
              <HelpSectionItemWrapper>
                <HelpSectionItemTitle>Developer</HelpSectionItemTitle>
                <HelpSectionItemBox>
                  <img src={developer} alt="Developer" width={30} height={30} />
                </HelpSectionItemBox>
              </HelpSectionItemWrapper>
              <HelpSectionItemText>
                Which is the same as saying through shrinking from toil and
                pain. These cases are perfectly simple and easy to distinguish.
                In a free hour, when our
              </HelpSectionItemText>
              <HelpSectionItemLink>View more</HelpSectionItemLink>
            </HelpSectionItem>
            <HelpSectionItem graphic>
              <HelpSectionItemWrapper>
                <HelpSectionItemTitle>Graphic design</HelpSectionItemTitle>
                <HelpSectionItemBox>
                  <img
                    src={graphic}
                    alt="Graphic design"
                    width={30}
                    height={30}
                  />
                </HelpSectionItemBox>
              </HelpSectionItemWrapper>
              <HelpSectionItemText>
                But in certain circumstances and owing to the claims of duty or
                the obligations of business it will frequently occur that
                pleasures have to be repudiated and annoyances accepted
              </HelpSectionItemText>
              <HelpSectionItemLink>View more</HelpSectionItemLink>
            </HelpSectionItem>
          </HelpSectionList>
        </Container>
      </HelpSection>
    </>
  );
};

export default Help;
