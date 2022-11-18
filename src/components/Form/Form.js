import './Form.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Form() {

const [city, setCity] = useState("");
const [address, setAddress] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phoneNum, setPhoneNum] = useState("");
const [agree, setAgree] = useState(false);

const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleSubmit = async(e) =>{
    e.preventDefault();
    let data = {city, address, name, email, phoneNum, agree};


    try {
        let response =  await axios.post("https://charming-ray-flannel-nightgown.cyclic.app/api/customer", data)
        setSuccess(response.data.message);
        setError('');
     } catch (error) {
         setError(error.response.data.message)
     }  


}

    return(
        <div className="formCon">
        <form onSubmit={handleSubmit}>

        <p style={{color:'green'}}>{success}</p>
                <p  style={{color:'red'}}>{error}</p>

            <label>City</label>
            <input placeholder='Enter city' onChange={(e)=>setCity(e.target.value)}/>
            <label>Address</label>
            <input placeholder='Enter Address' onChange={(e)=>setAddress(e.target.value)}/>
            <label> Recipient's details</label>
            <label>Full Name</label>
            <input placeholder='Enter name and surname' onChange={(e)=>setName(e.target.value)}/>
            <label>Phone</label>
            <input placeholder='input phone number'onChange={(e)=>setPhoneNum(e.target.value)}/>
            <label>Email</label>
            <input placeholder='input email' onChange={(e)=>setEmail(e.target.value)}/>
            <button> Payment Card</button>
            <button> Cash on Delivery</button>
        <input type ='checkbox' onChange={(e)=>setAgree(true)}/><p>I agree to the terms of the offer and the loyalty policy</p>
        <input type='submit' value='Place an order'/>
        </form>


        </div>
    )
}
export default Form;