import {
  Header as SiteHedar,
  HeaderWrapper,
  HeaderList,
  HeaderStart,
  HeaderItem,
  HeaderEnd,
  HeaderLink,
} from "./header";
import { Container, Button } from "../main";
import logo from "../../assets/logo/logo.svg";

const Header = () => {
  return (
    <>
      <SiteHedar>
        <Container>
          <HeaderWrapper>
            <HeaderStart>
              <img src={logo} alt="Pixer" width={81} height={28} />
              <HeaderList>
                <HeaderItem>
                  <HeaderLink>Services</HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink>Portfolio</HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink>Team</HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink>Blog</HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink>Contacts</HeaderLink>
                </HeaderItem>
              </HeaderList>
            </HeaderStart>

            <HeaderEnd>
              <Button>(239) 555-0108</Button>
            </HeaderEnd>
          </HeaderWrapper>
        </Container>
      </SiteHedar>
    </>
  );
};

export default Header;
