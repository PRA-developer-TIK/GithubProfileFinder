import React,{Fragment} from "react";
import spinner from "../Layout/spinner.gif"

const Spinner =() =>{
    return (

        <Fragment>
            <img
                src={spinner}
                alt="loading.."
                style={{width: "200px" ,display:"block" , margin:"auto"}}
            />

        </Fragment>

    );

}

export default Spinner;