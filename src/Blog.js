import React, { useState } from 'react'
import { Switch, Route, NavLink, Prompt } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Post from './pages/Post'
import Login from './pages/Login'
import Member from './pages/Member'
import GuardRoute from './components/GuardRoute'

function Blog() {

  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App">
      <ul className="menu">

        <li>
          <NavLink to="/" activeClassName="active"
            exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"
            activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/member"
            activeClassName="active">Member</NavLink>
        </li>
        <li>
          <NavLink to="/category"
            activeClassName="active">Category</NavLink>
        </li>
        <li>
          {isLogin
            ? <NavLink to="/logout" onClick={(e) => {
              e.preventDefault()
              setLogin(false)
            }} >Logout</NavLink>
            : <NavLink to="/login" activeClassName="active">Login</NavLink>
          }
        </li>
      </ul>

      <div className="main">
        <Switch>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/about">
            <About />
            <Prompt message="yakin mau keluar?" />
          </Route>
          <GuardRoute path="/member" isLogin={isLogin}>
            <Member />
          </GuardRoute>
          <Route path="/login">
            <Login setLogin={setLogin} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )

}

export default Blog;
