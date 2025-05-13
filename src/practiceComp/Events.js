import React, { useState } from "react";
import Getdata from "./getData";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import "./form.css";

const bcryptjs = require('bcryptjs');
const SpringbootUrl = process.env.REACT_APP_API_URL;
//const SpringbootUrl = "http://localhost:8080";
// Set a random fallback
bcryptjs.setRandomFallback((len) => crypto.randomBytes(len).toString('hex'));

function HariNadh1() {
    const navigate  = useNavigate ();
    const [name, setName] = useState('');    
    const [errorMessage, setErrorMessage] = useState('');
    const [userId, setUserId] = useState('');
    const [contact, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [hashedPassword, sethaspassowrd] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    async function senddata(e) {
        e.preventDefault();
        
        console.log(userId,contact,email,reEnterPassword);
        await axios.post(`${SpringbootUrl}/saveuser`, {
            userId,
            contact,
            email,
            reEnterPassword:hashedPassword
        });
        navigate(`/home/success`);
    }

    /*
    async function HashPasswd(password){
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        return hashedPassword;
      };
    */
    const handleNameChange = (e) => {
        // here harinadh should come from the data base, if any user name matched with our DB then it has to 
        // display already exit and disable the submmit button also 
        if (e.target.value === "harinadh") {
            setErrorMessage(`${e.target.value} is already exit `);
            setIsButtonDisabled(true);
        } else {
            setErrorMessage('');
            setName(e.target.value);
            setIsButtonDisabled(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handleContactNo = (e) => {
        setPhone(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(reEnterPassword !== e.target.value){
            setIsButtonDisabled(true)
        }
        else{
            setIsButtonDisabled(false)
        }
    };

    const handleRePassword = async (e) => {
        setReEnterPassword(e.target.value)

        //working with the below line is fine
        //setReEnterPassword("harinadhnaidu")

        if (password !== e.target.value) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
            const salt = await bcryptjs.genSalt(5);
            const hashedPassword = await bcryptjs.hash(e.target.value, salt);
            sethaspassowrd(await bcryptjs.hash(e.target.value, salt))
            setReEnterPassword(hashedPassword);
            //setReEnterPassword(e.target.value);
            
        }
        
        
    };

    // Disable button :: style-sheet 
    const buttonStyle = {
        backgroundColor: isButtonDisabled ? '#cccccc' : '#007bff',
        cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
        border: isButtonDisabled ? '1px solid #999' : '1px solid #ccc',
        color: 'white'
    };

    return (
        <div className="form-container">
            <form className="styled-form" onSubmit={senddata}>
                <h2>Contact Us</h2>
                
                {/* <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your Name asdfas" value={name} onChange={handleNameChange} required></input>
                {errorMessage && (    <div> <p>{errorMessage}</p>    </div>  )}
                */}

                <label htmlFor="userId">UserID</label>
                <input type="text" id="userId" name="userId" placeholder="Ex: Harinadh14" value={userId} onChange={handleUserIdChange} required></input>

                <label htmlFor="contact">Contact</label>
                <input type="text" id="contact" name="contact" placeholder="Ex: +91 1234567890" value={contact} onChange={handleContactNo} required></input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Ex: example@gmail.com" value={email} onChange={handleEmailChange} required></input>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password" value={password} onChange={handlePassword} required></input>

                <label htmlFor="reEnterPassword">ReEnter Password</label>
                <input type="password" id="reEnterPassword" name="reEnterPassword" placeholder="Re-Enter Password" value={reEnterPassword} onChange={handleRePassword} required></input>
                
                <button type="submit" disabled={isButtonDisabled} style={buttonStyle}>Register</button>
            </form>
            <br /><br />{/* <Getdata /> */}
        </div>
    );
}

export default HariNadh1;