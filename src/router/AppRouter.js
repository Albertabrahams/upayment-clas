import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Details from "../pages/Details";
import Create from "../pages/Create";
import axios from "axios";
import { useEffect, useState } from "react";

const AppRouter = () => {
  const baseUrl = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
   
    const {data} = await axios.get(baseUrl);
    // console.log(data);

    setProducts(data);
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main products={products} baseUrl={baseUrl} fetchTasks={fetchTasks}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:productId" element={<Details />} />
        <Route path="/create" element={<Create baseUrl={baseUrl} fetchTasks={fetchTasks} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;