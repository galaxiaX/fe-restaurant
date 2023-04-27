import { useState, useEffect } from "react";
import { setRestaurants } from "@/reducer";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

const SearchBox = () => {
  const [region, setRegion] = useState("");
  const [keyword, setKeyword] = useState("");
  const [radius, setRadius] = useState(3000);

  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const fetchRestaurants = async () => {
      const initialRegion = region ? region : "th";
      const initialKeyword = keyword ? keyword : "food";
      try {
        const response = await axios.get(
          `/api/restaurants?region=${initialRegion}&keyword=${initialKeyword}&radius=${radius}`,
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
          placeholder="Region"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        />
        <input
          type="text"
          placeholder="Keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>
      <label>
        <div>
          Radius:
          <input
            type="number"
            min="500"
            max="10000"
            value={radius}
            onChange={(event) => setRadius(event.target.valueAsNumber)}
          />
          meters
        </div>
        <input
          type="range"
          min="500"
          max="10000"
          value={radius}
          onChange={(event) => setRadius(event.target.valueAsNumber)}
        />
      </label>
    </SearchForm>
  );
};

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

export default SearchBox;
