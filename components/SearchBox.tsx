import { useState, useEffect } from "react";
import { setRestaurants } from "@/reducer";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

const SearchForm = styled.form`
  display: flex;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  > label {
    display: flex;
    flex-direction: column;

    div {
      height: 35px;
    }
  }

  input:not([type="range"]) {
    border-radius: 10px;
    height: 32px;
    padding-left: 4px;
    margin-left: 4px;
  }

  input[type="number"] {
    border-radius: 10px;
    height: 32px;
    width: 52px;
    padding-left: 4px;
    margin-left: 4px;
    margin-right: 4px;
  }

  @media only screen and (max-width: 600px) {
    label {
      display: none;
    }
  }
`;

const SearchBox = () => {
  const [region, setRegion] = useState("");
  const [keyword, setKeyword] = useState("");
  const [radius, setRadius] = useState(3);

  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const fetchRestaurants = async () => {
      const initialRegion = region ? region : "th";
      const initialKeyword = keyword ? keyword : "food";
      const metersRadius = radius * 1000;
      console.log(metersRadius);
      try {
        const response = await axios.get(
          `/api/restaurants?region=${initialRegion}&keyword=${initialKeyword}&radius=${metersRadius}`,
          {
            withCredentials: true,
          }
        );
        const restaurants = response.data;
        dispatch(setRestaurants(restaurants));
      } catch (error) {
        console.error(error);
      }
    };

    if (region || keyword || radius) {
      timeoutId = setTimeout(fetchRestaurants, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, keyword, region, radius]);

  return (
    <SearchForm>
      <div>
        <input
          type="text"
          placeholder="Region ex. th, jp, us"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        />
        <input
          type="text"
          placeholder="Keyword ex. ไก่ทอด, pizza"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>
      <label>
        <div>
          Radius:
          <input
            type="number"
            min="1"
            max="1000"
            value={radius}
            onChange={(event) => setRadius(event.target.valueAsNumber)}
          />
          km
        </div>
        <input
          type="range"
          min="1"
          max="1000"
          value={radius}
          onChange={(event) => setRadius(event.target.valueAsNumber)}
        />
      </label>
    </SearchForm>
  );
};

export default SearchBox;
