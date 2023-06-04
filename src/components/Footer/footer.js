import styled, { css } from "styled-components";

const SiteFooter = styled.footer`
  position: relative;
  padding-top: 100px;
  padding-bottom: 50px;
  background-color: #101010;
`;

const SiteFooterList = styled.ul`
  padding-bottom: 100px;
  display: flex;
  align-items: start;
  border-bottom: 2px solid #3b4155;
`;

const SiteFooterItem = styled.li`
  ${(props) =>
    props.resources &&
    css`
      margin-left: 151px;
    `}
  ${(props) =>
    props.connect &&
    css`
      margin-left: auto;
    `}
`;

const SiteFooterTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;

const SiteFooterLink = styled.a`
  margin-bottom: 26px;
  display: block;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #a1a8b7;
  transition: all 0.5s linear;

  &:hover{
    color:#1AAB7B;
  }

  ${(props) =>
    props.mexico &&
    css`
      width: 100%;
      max-width: 280px;
    `}
`;

const SiteFooterImages = styled.div`
  display: flex;
  justify-content: spac-between;
  align-items: center;
`;

const SiteFooterWrapper = styled.div`
  padding-top: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SiteFooterText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: right;
  color: #ffffff;
`;

const line = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid #fff;
`;

export {
  SiteFooter,
  SiteFooterList,
  SiteFooterItem,
  SiteFooterTitle,
  SiteFooterLink,
  SiteFooterImages,
  SiteFooterWrapper,
  SiteFooterText,
  line,
};
