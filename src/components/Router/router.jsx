import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Test from "../../components/TestFolder/test";
import App from "../TicTacToe.jsx/App";
import Stepper from "../ProgressBar/Stepper";
import Pagination from "../Pagination/Pagination";
import Practice from "../Practice/Practice";
import Apps from "../Carousel/App";
import Card from "../Card/Card";
import ModalApp from "../Modal/ModalApp";
import Starting from "../../App";
const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         {/* <Route path="/" element={<App />} /> */}
         <Route path="/" element={<Starting />} />
         <Route path="/stepper" element={<Stepper />} />
         <Route path="/Pagination" element={<Pagination />} />
         <Route path="/test" element={<Practice />} />
         <Route path="/carousel" element={<Apps />} />
         <Route path="/card" element={<Card />} />
         <Route path="/modal" element={<ModalApp />} />
      </>
   )
);
export default router;
