import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Expenses from "./pages/Expenses";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Summary from "./pages/Summary";
import Wallets from "./pages/Wallets";
import Root from "./Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Expenses/>}/> 
      <Route path="/accounts" element={<Accounts/>}> </Route>
      <Route path="/dashboard" element={<Dashboard/>}> </Route>
      <Route path="/settings" element={<Settings/>}> </Route>
      <Route path="/summary" element={<Summary/>}> </Route>
      <Route path="/wallets" element={<Wallets/>}> </Route>
    </Route>
  )
);

function App() {
 

  return <RouterProvider router={router}/>
  
}

export default App;
