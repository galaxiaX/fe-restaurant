import { useState } from "react";
import styled from "styled-components";

interface RestaurantCardProps {
  restaurant: {
    name?: string;
    address?: string;
    rating?: number;
    status?: string;
    latitude?: number;
    longitude?: number;
    placeId?: string;
    photoUrl?: string;
  };
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <RestaurantCardWrapper isExpanded={isExpanded} onClick={handleCardClick}>
      {restaurant.photoUrl ? (
        <RestaurantPhotoWrapper>
          <RestaurantPhoto src={restaurant.photoUrl} alt={restaurant.name} />
        </RestaurantPhotoWrapper>
      ) : (
        <RestaurantNoPhoto>no photos</RestaurantNoPhoto>
      )}
      <RestaurantInfoWrapper>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <RestaurantAddress>{restaurant.address}</RestaurantAddress>
        <RestaurantRating>Rating: {restaurant.rating}</RestaurantRating>
        <RestaurantStatus>Status: {restaurant.status}</RestaurantStatus>
        {isExpanded && (
          <RestaurantDetails>
            <p>Latitude: {restaurant.latitude}</p>
            <p>Longitude: {restaurant.longitude}</p>
            <RestaurantMap
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDc1TkcvUBnzrNR1pAP72SUXJP1TwCRv88&q=place_id:${restaurant.placeId}`}
              allowFullScreen
            />
          </RestaurantDetails>
        )}
      </RestaurantInfoWrapper>
    </RestaurantCardWrapper>
  );
};

const RestaurantCardWrapper = styled.div<{ isExpanded: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  cursor: pointer;
  max-width: 1000px;
  width: 100%;

  ${(props) =>
    props.isExpanded &&
    `
    height: auto;
  `}

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const RestaurantPhotoWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const RestaurantPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RestaurantNoPhoto = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightgray;
  color: gray;
  font-size: xx-large;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const RestaurantInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  padding-left: 16px;

  @media only screen and (max-width: 600px) {
    padding-left: 0;
  }
`;

const RestaurantName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 8px;
  padding-top: 4px;
`;

const RestaurantAddress = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
`;

const RestaurantRating = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
`;

const RestaurantStatus = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
`;

const RestaurantDetails = styled.div`
  margin-top: 16px;
`;

const RestaurantMap = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 10px;
  margin-top: 16px;
`;

export default RestaurantCard;
