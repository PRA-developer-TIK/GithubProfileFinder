import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import User from "./components/Users/User";
import About from "./components/pages/About";
import Alert from "./components/Layout/Alert";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import './App.css';

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

/* This is functional components */
// function App() {
//   return (
//     <div className="App">
//       <h1>Hell0sdds dadadiadb anklan</h1>
//     </div>
//   );
// }

/* For class components */
const App = () =>
{



  
  // async componentDidMount()
  // {
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({loading:true})
  //   //if not using async await  use then()
  //   // axios.get("https://api.github.com/users")
  //   // .then(response => { console.log(response.data);});
    

  //   const response=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log(response.data)


  //   this.setState({loading:false,users:response.data.items});


  // }


  

  


  
  
    return (
  <GithubState>
    <AlertState>
    <Router>

      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        
        <div className="container">
            <Alert />
            <Switch >
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path ="/user/:login" component={User} />
              <Route component={NotFound}/>
            </Switch>
            
        </div>
      </div>
    </Router>
    </AlertState>
    </GithubState>
    );

};

export default App;
