import React,{ Fragment, useState } from "react";




const InputTodo = () => {
    
const onsubmitTodo=async(e) =>{
    e.preventDefault();
    try {
        const body ={description};
        const response = await fetch("http://localhost:5000/todos",{
            method :"POST",
            headers :{ "content-Type" : "application/json"},
            body: JSON.stringify(body)
        });
        console.log(response);
        window.location="/";
        
    } catch (error) {
        console.error(error.message);
    }
}



const [description, setDescription] = useState("");
    return(
        <Fragment>
        <h1 className="text-center mt-5"> Pern Input Todo</h1>
        <form className="d-flex mt-5" onSubmit={onsubmitTodo} >
            <input className="form-control" type="text" value={description}
            onChange={e=> setDescription(e.target.value)}  />
            <button className="btn btn-success">Add</button>
        </form>
        </Fragment>
    );
    
};

export default InputTodo;