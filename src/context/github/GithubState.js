import React,{useReducer}  from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from "../types";

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== "production")
{
    githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET;

}
else
{
    githubClientId=process.env.GITHUB_CLIENT_ID;
    githubClientSecret=process.env.GITHUB_CLIENT_SECRET;

}

const GithubState =props =>{
    const initialState ={
        users: [],
        user : {},
        repos : [],
        loading : false,
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState);

    //Searching the users 
    const searchUsers = async (text) =>{
        // this.setState({loading:true});
        //setLoading(true);
        setLoading();
        const response=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        // this.setState({loading:false,users:response.data.items});
        // setLoading(false);
        // setUsers(response.data.items);

        dispatch({
            type : SEARCH_USERS,
            //payload is basically the data 
            payload : response.data.items,

        });
    };


    //Clearing all the searched users
  const clearUSers = () =>dispatch({type : CLEAR_USERS})

  //Getting a single user  

  const getUser = async (username) =>{

    // this.setState({loading:true});
    setLoading();
    const response=await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    //console.log(response.data.name);
    // this.setState({loading:false,user:response.data});
    dispatch({
        type:GET_USER,
        payload : response.data
    })
  };

//getting user repos
    const getUserRepos = async (username) =>{

        // this.setState({loading:true});
        setLoading();
        const response=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        //console.log(response.data.name);
        // this.setState({loading:false,repos:response.data});
        dispatch({
            type:GET_REPOS,
            payload:response.data,

        })

        
      }
    





    //Set Loading 
    const setLoading = () => dispatch({type : SET_LOADING}); 


    return <GithubContext.Provider
        value={{
            users : state.users,
            user : state.user,
            repos : state.repos,
            loading : state.loading,
            searchUsers,
            clearUSers,
            getUser,
            getUserRepos
        }}
    
    >
        {props.children}


    </GithubContext.Provider>
};

export default GithubState;