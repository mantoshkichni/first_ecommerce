import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
