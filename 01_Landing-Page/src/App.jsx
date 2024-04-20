import Authors from "./components/Authors";
import CheckDemo from "./components/CheckDemo";
import ForWho from "./components/ForWho";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Opinions from "./components/Opinions";
import StartWithUs from "./components/StartWithUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Authors />
      <ForWho />
      <CheckDemo />
      <Opinions />
      <StartWithUs />
    </>
  )
}