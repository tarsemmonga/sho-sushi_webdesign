import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./top-nav/Header";
import HomePage from "./components/pages/Home";
import DownloadAppPage from "./components/pages/DownloadApp";
import ContactPage from "./components/pages/Contact";
import NewsPage from "./components/pages/News";
import MenuChefSelect from "./components/pages/MenuChefSelect";
import Page from 'react-page-loading'


import { HashRouter, Route, Switch } from 'react-router-dom';
import CustomNav from "./top-nav/CustomNav";
import MenuMainDishes from "./components/pages/MenuMainDishes";
import MenuAppetizers from "./components/pages/MenuAppetizers";
import MenuDesserts from "./components/pages/MenuDesserts";
import MenuDrink from "./components/pages/MenuDrink";
import firebase from "firebase";

function App() {
    const config = {
        apiKey: "AIzaSyCBuGFSd8CJg75gczg99dqbBXIJCxyDRhc",
        authDomain: "sho-sushi-a9065.firebaseapp.com",
        databaseURL: "https://sho-sushi-a9065.firebaseio.com",
        projectId: "sho-sushi-a9065",
        storageBucket: "sho-sushi-a9065.appspot.com",
        messagingSenderId: "167839584936",
        appId: "1:167839584936:web:9353b5e4db556cec"
    };

    firebase.initializeApp(config);
  return (

      <Page loader={"bar"} color={"#dc3545"} size={4}>
    <div className="App">

        {/*
       <HashRouter>
            <CustomNav/>
        </HashRouter>*/}
        <HashRouter>
            <CustomNav/>
            <div className={"app-body-container"}>
                <Route path="/" component={HomePage} exact/>
                <Route path="/news/" component={NewsPage}/>
                <Route path="/news/:id" component={NewsPage}/>
                <Route path="/download-app" component={DownloadAppPage}/>
                <Route path="/contact" component={ContactPage} />
                <Route path="/chef-select" component={MenuChefSelect} />
                <Route path="/main-dish" component={MenuMainDishes} />
                <Route path="/appetizers" component={MenuAppetizers} />
                <Route path="/dessert" component={MenuDesserts} />
                <Route path="/drinks" component={MenuDrink} />
            </div>
        </HashRouter>


    </div>
      </Page>
  );
}

export default App;
/*
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>*/