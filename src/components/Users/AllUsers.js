import React,{useContext} from 'react';
import UserItem  from './UserItem';
import Spinner from "../Layout/Spinner";
import GithubContext from '../../context/github/githubContext';

const AllUsers = () => {
    const githubContext=useContext(GithubContext);
    const {loading,users} = githubContext;

    
    if(loading)
    {
        return (
            <Spinner/>
        );
    }
    else
    {
        return (
            <div style={userStyles}>
                {
                    users.map(user => (
                        <UserItem  key={user.id} user={user}/>

                    ))
                }
            </div>
        ) ;

    }
        
    
}


const userStyles={
    display : "grid",
    gridTemplateColumns : "repeat(3,2fr)",
    gridGap: "1rem",

}

export default AllUsers
