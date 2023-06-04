import styled, { css } from "styled-components";

const HelpSection = styled.section`
  padding: 50px 0;
  background-color: #f2f4f6;
`;

const HelpSectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  color: #101010;
`;

const HelpSectionList = styled.ul`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
`;

const HelpSectionItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 378px;
  width: 405px;
  margin-bottom: 32px;
  border: 2px solid #e1e7ed;
  border-radius: 6px;
  background-color: transparent;
  padding: 30px 30px 40px;
  color: #101010;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #1aab7b;
    color: #fff;
  }

  ${(props) =>
    props.smm &&
    css`
      margin: 0 32px;
    `}
  ${(props) =>
    props.graphic &&
    css`
      margin-left: 32px;
    `}
`;

const HelpSectionItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HelpSectionItemTitle = styled.h3`
  margin-top: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
`;

const HelpSectionItemBox = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background: #e1e7ed;
  border-radius: 84px;
`;

const HelpSectionItemText = styled.p`
  width: 100%;
  max-width: 324px;
  margin-top: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
`;

const HelpSectionItemLink = styled.a`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  font-variant: all-small-caps;
  color: #000000;
`;

export {
  HelpSection,
  HelpSectionList,
  HelpSectionItem,
  HelpSectionItemTitle,
  HelpSectionItemWrapper,
  HelpSectionItemBox,
  HelpSectionItemText,
  HelpSectionItemLink,
  HelpSectionTitle,
};
