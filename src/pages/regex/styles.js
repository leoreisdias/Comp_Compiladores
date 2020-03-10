import styled from "styled-components";

import { Colors } from "./utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: ${Colors.first}; */
  background-image: linear-gradient(-45deg, ${Colors.first},${Colors.second}, ${Colors.third});

  min-height: 100vh;

  h1.title {
    text-align: center;
    margin-top: 50px;
    margin-bottom: -30px;
    font-size: 60px;
    color: ${Colors.fiveth};
  }

  div.text {
    margin: 100px;

    input {
      padding: 10px 15px;
      border-radius: 5px;
      border: 0px;
      width: 100%;
      display: inline-block;
    }

    h1 {
      text-align: center;
      font-size: 30px;
      color: ${Colors.fiveth};
      padding: 40px;
    }

    p {
      background-color: white;
      border-radius: 5px;
      padding: 25px;
      white-space: pre-line;
      font-size: 15px;
    }
  }
`;