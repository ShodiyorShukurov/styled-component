import { Container } from "../main";
import {
  WorkSection,
  WorkSectionTitle,
  WorkSectionText,
  WorkSectionList,
  WorkSectionItem,
  WorkSectionItemStart,
  WorkSectionItemEnd,
  WorkSectionItemTitle,
  WorkSectionItemText,
} from "./work";

import dev from "../../assets/dev.png";
import calculus from "../../assets/calculus.png";
import team from "../../assets/team.png";

const Work = () => {
  return (
    <>
      <WorkSection>
        <Container>
          <WorkSectionTitle>How do we work?</WorkSectionTitle>
          <WorkSectionText>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </WorkSectionText>
          <WorkSectionList>
            <WorkSectionItem>
              <WorkSectionItemStart>
                <img src={dev} alt="Developer" width={488} height={390} />
              </WorkSectionItemStart>
              <WorkSectionItemEnd>
                <WorkSectionItemTitle>
                  Let's clarify the requirements
                </WorkSectionItemTitle>
                <WorkSectionItemText>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </WorkSectionItemText>
              </WorkSectionItemEnd>
            </WorkSectionItem>
            <WorkSectionItem calculus>
              <WorkSectionItemStart>
                <WorkSectionItemTitle>
                  Let's clarify the requirements
                </WorkSectionItemTitle>
                <WorkSectionItemText>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </WorkSectionItemText>
              </WorkSectionItemStart>
              <WorkSectionItemEnd>
                <img src={calculus} alt="Calculus" width={488} height={390} />
              </WorkSectionItemEnd>
            </WorkSectionItem>
            <WorkSectionItem team>
              <WorkSectionItemStart>
                <img src={team} alt="Developer" width={488} height={390} />
              </WorkSectionItemStart>
              <WorkSectionItemEnd>
                <WorkSectionItemTitle>
                  Let's clarify the requirements
                </WorkSectionItemTitle>
                <WorkSectionItemText>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </WorkSectionItemText>
              </WorkSectionItemEnd>
            </WorkSectionItem>
          </WorkSectionList>
        </Container>
      </WorkSection>
    </>
  );
};

export default Work;
