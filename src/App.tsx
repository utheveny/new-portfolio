import Navbar from "./Components/Navbar/Navbar";
import { ReactNode } from "react";
import "./App.scss";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <div className="app">
      <Navbar />
      {children}
    </div>
  );
};

export default App;