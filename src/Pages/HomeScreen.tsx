import DropDown from "../Components/DropDown";
import InnerComponent from "../Components/InnerComponent";
import Writeups from "../Components/Writeups";
import Affliate from "./Affliate";
import CodeEditor from "./CodeEditor";
import Develop from "./Develop";
import Frameworks from "./Frameworks";
import Hero from "./Hero";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Affliate />
      <Develop />
      <CodeEditor />
      <Frameworks />
    </div>
  );
};

export default HomeScreen;
