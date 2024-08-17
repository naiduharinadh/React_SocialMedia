import react from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, CardMedia, Container, backdropClasses } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ControlledOpenSpeedDial from "../menu";
import SizeAvatars from './avatar';
import HariNadh1 from "../../practiceComp/Events";
import FileUpload from "./fileupload";
import SendMessages from "./message";
import FileUploadAWS from "./aws_fileupload";
import "./form.css"
import SizeAvatarsCarosa from "./carosalAvathat";
import { uptime } from "process";
import PostbottomBody from "./mypostsBottomBody";

const fetchData = async () => {
    try {
      const response = await axios.get("/allusers");
      return response.data.slice(0);
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };


  

function Myposts(){
    
  const [MyPostsButton, setMyPostsButton]= useState(false);
  const [AllPosts, setAllPostsButton] = useState(false);
  const [posts, setPosts] = useState([]);
  
  const [SignUp, setSignUp] = useState(false);

  const handlesetSignUp = () => {
    setSignUp(true);
  };
 
  async function handleAllposts(){
    setAllPostsButton(true);
    setMyPostsButton(false);
  }
  async function handleMyPostsButton(){
    setAllPostsButton(false);
    setMyPostsButton(true);

  }
  useEffect(() => {
    fetchData().then(data => setPosts(data));
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchData();
      setPosts(data);
    };
    loadPosts();
    const interval = setInterval(() => {
      loadPosts();
    }, 2000); // Fetch data every 5 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    
    <div>
    
    <AppBar position="fixed">
            <Toolbar>
            <Button color="inherit" onClick={handleMyPostsButton}>Myposts</Button>
            <Button color="inherit" onClick={handleAllposts}>AllPosts</Button>
            <Button color="inherit" >Login</Button>


            {/* <Button color="inherit" >SignUp</Button> */}
            {!SignUp ? (
        <>
          <Button color="inherit" onClick={handlesetSignUp}>Signup</Button>
          {/* Add more buttons or content here as needed */}
        </>
      ) : (
        <HariNadh1 />
      )}
            </Toolbar>
      </AppBar>

     <PostbottomBody />
    </div>
    )
  ;
}


export default Myposts;