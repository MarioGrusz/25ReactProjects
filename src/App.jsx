import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import TodoList from "./components/TodoList/TodoList";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSider from "./components/ImageSlider/ImageSider";
import NotesApp from "./components/NotesApp/NotesApp";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";

const App = () => {
  return (
    <div className="app">
      {/* <ImageSider
        url={"https://picsum.photos/v2/list"}
        page={"5"}
        limit={"10"}
      /> */}

      <TodoList />
    </div>
  );
};

export default App;
