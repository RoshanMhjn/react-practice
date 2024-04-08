import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
Card;
import "./App.css";
import UserGreeting from "./UserGreeting";
import List from "./List";
import Button from "./Button";
import MyComponent from "./MyComponent/MyComponent";
import Counter from "./Counter/Counter";
import OnChange from "./onChange/OnChange";
import ColorPicker from "./ColorPicker/ColorPicker";
import Updater from "./Updater/Updater";
import UpdateObjects from "./UpdateObjects/UpdateObjects";
import UpadteArray from "./UpdateArray/UpadteArray";
import ArrayOfObjects from "./ArrayOfObjects/ArrayOfObjects";
import ToDoList from "./ToDoList/ToDoList";

const App = () => {
  return (
    <div>
      <Header />

      {/* <MyComponent /> */}

      <Counter />

      {/* <UpadteArray /> */}
      <ToDoList />
      {/*  <ArrayOfObjects /> */}
      <ColorPicker />
      {/*  <UpdateObjects /> */}

      {/*  <Updater /> */}
      {/* <OnChange /> */}
      {/*  <UserGreeting isLoggedIn={true} username="Zale" /> */}

      {/*  <Button /> */}

      {/*  <List /> */}

      {/* <div className="cards">
        <Card
          src="https://picsum.photos/200"
          name="Roshan Maharjan"
          desc="Web Developer"
        />
        <Card
          src="https://picsum.photos/200/300"
          name="Biplove Shrestha"
          desc="Baker"
        />
        <Card
          src="https://picsum.photos/100"
          name="Gautam Shrestha"
          desc="Businessman"
        />
        <Card
          src="https://picsum.photos/300"
          name="Ritima Shrestha"
          desc="Crochet Expert"
        />
        <Card
          src="https://picsum.photos/250"
          name="Shova Basnet"
          desc="Animation Specialist"
        />
        <Card
          src="https://picsum.photos/251"
          name="Himanshu Paudel"
          desc="good in everything"
        />
        <Card
          src="https://picsum.photos/252"
          name="Kritika Kapali"
          desc="army"
        />
      </div> */}
      {/*  <Food /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default App;
