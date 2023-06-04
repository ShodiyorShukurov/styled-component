import {
  BusinesSection,
  BusinesSectionWrapper,
  BusinesSectionTitle,
  BusinesSectionText,
} from "./busines";
import { Container, BussinesButton } from "../main";
import youtube from "../../assets/You Tube.png";

const Busines = () => {
  return (
    <>
      <BusinesSection>
        <Container>
          <BusinesSectionWrapper>
            <div>
              <BusinesSectionTitle>
                Take your business to the next level take out
              </BusinesSectionTitle>
              <BusinesSectionText>
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis lacinia ex, eget sollicitudin massa pellentesque
                in. Vivamus mattis eros at sem pulvinar
              </BusinesSectionText>
            </div>

            <div>
              <img src={youtube} alt="You Tube" width={592} height={334} />
            </div>
          </BusinesSectionWrapper>
          <BussinesButton>Learn more</BussinesButton>
        </Container>
      </BusinesSection>
    </>
  );
};

export default Busines;
