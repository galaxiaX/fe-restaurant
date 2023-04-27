import RestaurantCard from "@/components/RestaurantCard";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "@/store";

const RestaurantsList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    align-items: start;
  }
`;

const Body = () => {
  const { restaurants } = useSelector((state: RootState) => state.restaurant);

  return (
    <RestaurantsList>
      {restaurants
        ? restaurants.map((restaurant: any) => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} />
          ))
        : null}
    </RestaurantsList>
  );
};

export default Body;
