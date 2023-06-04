import styled, { css } from "styled-components";

const ContactSection = styled.section`
  padding-bottom: 200px;
`;

const ContactSectionTitle = styled.h2`
  margin: 0 auto;
  margin-bottom: 16px;
  width: 100%;
  max-width: 411px;
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
  text-align: center;
  color: #101010;
`;

const ConatactSectionText = styled.p`
  margin: 0 auto;
  margin-bottom: 60px;
  width: 100%;
  max-width: 650px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  line-height: 150%;
  color: #636f87;
`;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
  border-radius: 6px;
`;

const ContactSectionLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #101010;

  ${(props) =>
    props.name &&
    css`
      padding-top: 64px;
    `}
`;

const ContactSectionInput = styled.input`
  margin-bottom: 51px;
  width: 384px;
  border: none;
  background: #ffffff;
  opacity: 0.2;
  border-bottom: 1px solid #636f87;
  outline: none;
`;

const ContactSectionSelect = styled.select`
  margin-bottom: 40px;
  width: 384px;
  border: none;
  background: #ffffff;
  opacity: 0.2;
  border-bottom: 1px solid #636f87;
  outline: none;
`;

const ContactSectionDesc = styled.p`
  margin-top: 0;
  margin-bottom: 64px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #858ea2;
`;

export {
  ContactSection,
  ContactSectionTitle,
  ConatactSectionText,
  ContactSectionWrapper,
  ContactSectionLabel,
  ContactSectionInput,
  ContactSectionSelect,
  ContactSectionDesc,
};
