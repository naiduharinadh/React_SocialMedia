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
const SpringbootUrl = process.env.REACT_APP_API_URL;

const fetchData = async () => {
    try {
      const response = await axios.get(`${SpringbootUrl}/allusers`);
      return response.data.slice(0);
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };


  const carouselItems = [
    { id: 1, title: 'Item 1', content: 'Content for item 1 ', imageUrl: 'https://gunsweek.com/sites/default/files/styles/mt_slideshow/public/archive/contents/rifles/news/springfield-armory-saint-edge-atc/Springfield-Armory-Saint-Edge-ATC-02a.jpg?itok=UA-eZrPi' },
    { id: 2, title: 'Item 2', content: 'Content for item 2', imageUrl: 'https://images.guns.com/prod/2023/04/21/6442bc0d268eaecb050dbbf16a16249b6f74a59b8a391.jpg' },
    { id: 3, title: 'Item 3', content: 'Content for item 3', imageUrl: 'https://th.bing.com/th/id/OIP.1Z1y_7ncKbcHQ_BcydbfXAHaEL?rs=1&pid=ImgDetMain' },
    { id: 4, title: 'Item 4', content: 'Content for item 4', imageUrl: 'https://wallpapercave.com/wp/wp3991882.jpg' },
  ];

function PostbottomBody(){
    
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
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    
      <Box sx={{ display: 'flex', flex: 1, height: "40vh" }}>
        <Box sx={{ marginTop:"12vh",width: '15%', bgcolor: '#f1f1f1', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
          <Button fullWidth variant="contained" sx={{ mb: 2 }}>Button 1</Button>
          <Button fullWidth variant="contained" sx={{ mb: 2 }}>Button 2</Button>
          <Button fullWidth variant="contained" sx={{ mb: 2 }}>Button 3</Button>
          <Button fullWidth variant="contained" sx={{ mb: 2 }}>Button 4</Button>
        </Box>
        <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
          <Carousel sx={{ marginTop:"10vh"}}>
            {carouselItems.map(item => (
              <Box key={item.id}>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.imageUrl}
                  alt={item.title}
                />
                <CardContent sx={{marginTop:"-15vh"}}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography>{item.content}</Typography>
                </CardContent>
              </Box>
            ))}
          </Carousel>
          <Grid container spacing={2} sx={{ mt: 2,marginTop:"-2vh" }}>
            {posts.map(post => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card>
                  <CardContent>
                  <SizeAvatars />   
                  
                  { /* <div id="headername"> {post.userId} </div> */}
                  <Typography   className="headername" sx={{  width: "50vh" ,textAlign: 'left', p: 0.8, marginLeft: "10vh", marginTop: "-6vh" }}> 
                        {post.userId} </Typography>

                    <Typography variant="h6" component="div">
                      <br/>
                      {post.email}
                      {/* /add photo in a circle here */}
                    </Typography>
                  
                    <Typography variant="body2" color="text.secondary">
                      {post.contact}
                      <ControlledOpenSpeedDial sx={{
          position: 'absolute',  // Positioning
          top: '10px',           // Adjust the top position
          left: '10px',          // Adjust the left position
          fontSize: '1.2rem',    // Reduce the icon size
        }}/>
        <FileUploadAWS />
        <SendMessages />

                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      
    </Box>
    </div>
    )
  ;
}


export default PostbottomBody;