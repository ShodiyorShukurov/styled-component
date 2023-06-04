import styled from "styled-components";

const Header = styled.header`
  padding: 30px, 0;
  background-color: #fff;
  border-bottom: 1px solid #eeeef4;
`;

const HeaderWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderList = styled.ul`
  margin-bottom: 0;
  list-style: none;
  padding-left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderItem = styled.li`
  margin-right: 30px;
`;

const HeaderLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #101010;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #1aab7b;
  }
  &:active {
    opacity: 0.6;
  }
`;

const HeaderEnd = styled.div`
  margin: 0;
`;

export {
  Header,
  HeaderWrapper,
  HeaderList,
  HeaderStart,
  HeaderItem,
  HeaderEnd,
  HeaderLink,
};
