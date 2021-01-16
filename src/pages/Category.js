import React from 'react'
import { Switch, Route, Link } from "react-router-dom";

const Category = () => {
    return (
        <div>
            <h2>Halaman Category</h2>
            <ul>
                <li><Link to="/category/foods">Foods</Link></li>
                <li><Link to="/category/drinks">Drinks</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path="/category/foods">
                    List of foods: bakso, sate, soto, dll
                </Route>
                <Route path="/category/drinks">
                    List of drinks: air mineral, es teh, kopi, dll
                </Route>
            </Switch>
        </div>
    )
}

export default Category
