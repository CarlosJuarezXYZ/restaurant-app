import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { DishesScreen } from "./pages/Dish/Dish";
import { CommentsPage } from "./pages/Comments/Comments";
import Ubication from "./pages/Ubication/Ubication";

function App() {

  return (
    <main>
      <Header Nav={<Navbar />} />
      <DishesScreen />
      <CommentsPage />
      <Ubication />
    </main>
  );
}

export default App;
