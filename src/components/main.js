import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background: #101010;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;
  transition: all 0.5s;
  &:hover {
    background: #ffffff;
    border: 1px solid #1aab7b;
    color: #1aab7b;
  }
  &:active {
    background-color: #101010;
    opacity: 0.6;
    color: #fff;
  }
`;

const BussinesButton = styled(Button)`
  margin-top: 40px;
  padding: 20px 40px;
  border: 1.5px solid #1aab7b;
  background: #1aab7b;
  &:active {
    background-color: #1aab7b;
    opacity: 0.7;
  }

  ${(props) =>
    props.send &&
    css`
      display: block;
      margin: 0 auto;
      margin-bottom: 24px;
    `}
`;

export { Container, Button, BussinesButton };
