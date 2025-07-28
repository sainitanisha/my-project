import { useState } from 'react';
import './Add.css';
import axios from "axios";
export function Add(){

    const [empNo,setEmpNo]=useState(" ");
    const [empName,setEmpName]=useState(" ");
    const[empSal,setEmpSal] = useState(" ");

 async function addHandler(e)
    {
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:3001/api/employees', {empNo,empName,empSal});
                alert(response.data.message);
        }
        catch(err){
            alert(err);
        }
     }
    return(
        <div className='container'>
            <form onSubmit={addHandler}>
                <h1>Add Employee </h1>
                 <input  type="number" placeholder="enter No" className="inputs" onChange={(e)=>setEmpNo(e.target.value)}  required/> <br/><br/>
                <input  type="text" placeholder="enter Name" className="inputs" onChange={(e)=>setEmpName(e.target.value)}  required/><br/><br/>
                <input  type="number" placeholder="enter salary" className="inputs" onChange={(e)=>setEmpSal(e.target.value)}  required/><br/><br/>
                <input  type="submit" value="Add Employee" id="login" ></input><br/><br/>
            </form>
        </div>
    )

}

