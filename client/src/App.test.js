import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayerCard from "./components/PlayerCard"
import Player from "./components/Players"
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<App />);
});

test("search text renders witout crashing", () =>{
  const { getByTestId } = render(<PlayerCard />);
  getByTestId("serachText")
} )

test("header displays", () => {
  const { getByTestId } = render(<Player />);
  getByTestId("header") 
})
test("Player Name", () =>{
  const { getByTestId } = render(<PlayerCard />);
  getByTestId("playerName")
} )
test("Player Country", () =>{
  const { getByTestId } = render(<PlayerCard />);
  getByTestId("playerCountry")
} )
