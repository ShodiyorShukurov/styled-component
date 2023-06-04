import styled from "styled-components";

const BusinesSection = styled.section`
  padding-top: 91px;
  padding-bottom: 156px;
`;

const BusinesSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BusinesSectionTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  width: 100%;
  max-width: 530px;
  font-weight: 700;
  font-size: 56px;
  line-height: 140%;
  color: #101010;
`;


const BusinesSectionText = styled.p`
  margin: 0;
  width: 100%;
  max-width: 537px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #636f87;
`;

export { BusinesSection, BusinesSectionWrapper, BusinesSectionTitle,BusinesSectionText };
