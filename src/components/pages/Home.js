import React,{Fragment} from 'react';
import AllUsers from "../Users/AllUsers";
import Search from "../Users/Search";

 const Home = () => {
    return (
        <Fragment>
            <Search />
            <AllUsers />
        </Fragment>
       
    )
}

export default Home;
