import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:8080"

//My components
import Header from "./components/Header.js"
import HomeGuest from "./components/HomeGuest.js"
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"
import About from "./components/About.js"
import Terms from "./components/Terms.js"
import CreatePost from "./components/CreatePost.js"
import ViewSinglePost from "./components/ViewSinglePost.js"

function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")))
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path="/post/:id">
          <ViewSinglePost />
        </Route>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
