import Navbar from "./Components/Navbar";

const App = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default App;