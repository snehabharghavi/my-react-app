import { useState } from "react";

function Statefunction ()
{
    const[movie,setMovie]=useState({
        mname:"pushpa",
        mhero:"AA",
        mtkcost:"800"
    });
    const changeVal=()=>{
        setMovie(cng=>{
            return{...cng,mname:"Amaran",mhero:"sivakarthikeyan",mtkcost:"400"};
        });
    }
    return(
        <div>
        <h2>Movie name is {movie.mname} and hero of movie is {movie.mhero}
             and ticket cost is {movie.mtkcost} </h2>
        <button onClick={changeVal}>change</button>

        </div>
    );
}
export default Statefunction;