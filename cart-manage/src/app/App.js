import * as React from "react";
import Login from "../pages/Login";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

function App() {
    return (
        /*<Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='dashboard' element={<Dashboard />}/>
        </Routes>*/
        /*<Login/>*/
        <Dashboard/>
        /*<User/>*/
        /*<Products/>*/
        /*<Cart/>*/
    );
}

export default App;
