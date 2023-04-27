import { IoRestaurant } from "react-icons/io5";
import styled from "styled-components";
import SearchBox from "./SearchBox";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem 0 3rem;
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 110px;
  position: fixed;
  top: 0;

  @media only screen and (max-width: 600px) {
    padding: 1rem 1rem 0 1rem;
  }
  @media only screen and (max-width: 800px) {
    padding: 1rem 1.5rem 0 1.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    overflow: hidden;
  }

  h1 {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 600px) {
    h1,
    p {
      display: none;
    }
  }
`;

const TopBar = () => {
  return (
    <Header>
      <Title>
        <IoRestaurant size={70} />
        <div>
          <h1>FoodScout</h1>
          <p>Welcome to my restaurant search app!</p>
        </div>
      </Title>
      <SearchBox />
    </Header>
  );
};

export default TopBar;
