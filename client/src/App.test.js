import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayerCard from "./components/PlayerCard"
import Players from "./components/Players"
import { render, getByTestId } from "@testing-library/react";

test("renders without crashing", () => {
  render(<App />);
});
test("PlayerCard renders", () => {
  const { getBytestId } = render(<Players />);
})
test("search text renders witout crashing", () =>{
  const { getByTestId } = render(<PlayerCard /> );
  getByTestId("searchText")
} )

test("header displays", () => {
  const { getByTestId } = render(<Players />);
  getByTestId("header") 
})
test("Player Name", () =>{
  const { getByTestId } = render(<Players />,<PlayerCard />);
  getByTestId("playerName")
} )
test("Player Country", () =>{
  const { getByTestId } = render(<Players />,<PlayerCard />);
  getByTestId("playerCountry")
} )
