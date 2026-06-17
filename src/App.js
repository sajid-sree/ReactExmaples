import logo from "./logo.svg";
import "./App.css";
import Layer3 from "./Componens/Layers/Layer3";
import CounterCard from "./Componens/Cards/CounterCard";
import TodoCard from "./Componens/Cards/TodoCard";
import RefCard from "./Componens/Cards/RefCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componens/Sections/Navabar";
import BiryaniProvider from "./Contexts/BiryaniProvider";
import AxiosCard from "./Componens/Cards/AxiosCard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route
          path="/path1"
          element={ 
            <BiryaniProvider>
              <CounterCard />
            </BiryaniProvider>
          }
        ></Route>

        <Route
          path="/path2"
          element={
            <BiryaniProvider>
              <TodoCard />
            </BiryaniProvider>
          }
        ></Route>

        <Route
          path="/path3"
          element={
            <BiryaniProvider>
              <AxiosCard />
            </BiryaniProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
