import React, { useEffect,Fragment,useContext } from 'react';
import Spinner from "../Layout/Spinner";
import {Link} from "react-router-dom";
import Repos from "../Repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({match }) => {
    const githubContext=useContext(GithubContext);
    useEffect(() =>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    },[]);

    const {getUser,loading,user,repos,getUserRepos}=githubContext;


        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }  = user;


        if(loading) return <Spinner/>;

        return (
            <Fragment>  
                <Link to="/" className="btn btn-light">Back To search</Link>
                Hireable :
                {hireable ? <i className="fas fa-check text-success" /> :  <i className="fas fa-times-circle text-danger" />}

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt=" " style={{width : "150px"}} /> 
                        <h1>{name}</h1>
                        <p>{location}</p>
                    </div>
                    <div>
                        {bio  && <Fragment>
                            <h3>BIO</h3>
                            <hr/> 
                            <p>{bio}</p>  
                                                     
                        </Fragment>
                        }
                        <a href={html_url } className="btn btn-dark my-1">Visit Github Profile</a>

                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Login :</strong>{login}
                                    
                                    
                                </Fragment>}

                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Blog :  </strong> {blog}
                                    

                                </Fragment>}

                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company : </strong> {company} 
                                    

                                </Fragment>}

                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card text-center">
                   <div className="badge badge-primary">Followers : {followers}</div>
                   <div className="badge badge-success">Following : {following}</div>
                   <div className="badge badge-danger">Public_Repos : {public_repos}</div>
                   <div className="badge badge-dark">Public_Gists : {public_gists}</div>

                </div>

                <Repos repos={repos}/>


            </Fragment>
        );
    
}



export default User;