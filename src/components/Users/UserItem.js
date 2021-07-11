import React from 'react';
import PropTypes from "prop-types";
import {Link } from "react-router-dom";

 const UserItem = ({user : {login,avatar_url,html_url}}) => {

    // state = {
    //             id : "id",
    //             login :"Mogombo",
    //             avatar_url : "https://avatars.githubusercontent.com/u/1?v=4",
    //             html_url : "https://github.com/mojombo"
    // };


    
    //YOU DONT NEED CONSTRUCTOR always
    // constructor() {
    //     super();

    // }



    

        // const {login,id,avatar_url,html_url}=this.state;
        
        //destructure 
        // const {login,avatar_url,html_url}=props.user;

        return (
            <div className="card text-center">
                <img 
                    src={avatar_url} 
                    alt={login} 
                    className="round-img"  
                    style={{width : "60px"}}
                />

                <h3>{login}</h3>

                <div>
                    <Link to={`/user/${login}`}  className="btn btn-dark btn-sm my-1">MORE</Link>
                </div>

            </div>
        );
};

//use propTypes with p small and T capital
UserItem.propTypes={
    user : PropTypes.object.isRequired,
};
export default UserItem;
