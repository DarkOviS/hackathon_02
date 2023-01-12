import Header from "../components/Header";
import Buttons from "../components/Buttons";
import List from "./List";
import "../style/header.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Buttons />
      <List />
    </main>
  );
}
