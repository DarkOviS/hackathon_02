import Header from "../components/Header";
import ListContainer from "../components/ListContainer";
import Buttons from "../components/Buttons";
import "../style/header.css";

export default function Home() {
  return (
    <main>
      <Header />
      <ListContainer />
      <p>coucou</p>
      <Buttons />
    </main>
  );
}
