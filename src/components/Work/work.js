import styled, { css } from "styled-components";

const WorkSection = styled.section`
  padding-top: 100px;
  padding-bottom: 150px;
`;

const WorkSectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  text-align: center;
  color: #101010;
`;

const WorkSectionText = styled.p`
  margin: 0 auto;
  width: 650px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #636f87;
`;

const WorkSectionList = styled.ul`
  padding-top: 90px;
`;

const WorkSectionItem = styled.li`
  display: flex;
  align-items: start;

  ${(props) =>
    props.calculus &&
    css`
      margin-top: 100px;
      padding-left: 160px;
    `}
  ${(props) =>
    props.team &&
    css`
      margin-top: 100px;
    `}
`;

const WorkSectionItemStart = styled.div`
  width: 488px;
  height: 390px;
`;

const WorkSectionItemEnd = styled.div`
  margin-left: 32px;
`;

const WorkSectionItemTitle = styled.h3`
  width: 400px;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  color: #101010;
`;

const WorkSectionItemText = styled.p`
  width: 100%;
  margin: 0;
  max-width: 488px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #636f87;
`;

export {
  WorkSection,
  WorkSectionTitle,
  WorkSectionText,
  WorkSectionList,
  WorkSectionItem,
  WorkSectionItemStart,
  WorkSectionItemEnd,
  WorkSectionItemTitle,
  WorkSectionItemText,
};
