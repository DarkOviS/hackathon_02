import { useState } from "react";
import Header from "../components/Header";
import ListContainer from "../components/ListContainer";
import Buttons from "../components/Buttons";
import "../style/header.css";
import "../style/App.css";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <main>
      <Header />
      <Buttons openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <ListContainer />
    </main>
  );
}
