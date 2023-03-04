import React, { useState } from "react";
import { AppBar, Avatar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import DrawerComp from "./DrawerComp";
import {Link} from "react-router-dom"
const pages = [
  { path: "/", label: "Home" },

  { path: "/questions", label: "Questions" },
  { path: "/solution", label: "Solutions" },

];

export default function Navbar(){
  const [value, setValue] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
      <AppBar position="static" sx={{ background: "#fff",padding:".5rem" }}>
        <Toolbar>
        <Link to="/" style={{ textDecoration: 'none',color:"white" }}  >
          <Typography fontWeight="400" fontSize="1.275rem" sx={{display:"flex",color:"#4c51ed"}} >
              <Avatar alt="NIOCLASS" src="https://www.nioclass.com/static/media/nioclass.efdaf55818f7b373b89e.png" />
              <Typography sx={{marginTop:".3rem",fontSize:"1.4rem"}}> NIOCLASS</Typography>
          </Typography>
          </Link>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "10px" }}
                textColor="inherit"
                value={value}
                onChange={(e, page) => setValue(page)}
                indicatorColor="secondary"
              >
                {pages.map((page, i) => (
                  <Link to={page.path} style={{ textDecoration: 'none' }}  >
                     <Tab key={i} label={page.label} sx={{color:"darkblue",fontWeight:"500",fontSize:"1rem",marginTop:".5rem"}}  />
                  </Link>
                ))}
              </Tabs>
                
                <EmailOutlinedIcon  sx={{marginLeft: "auto",color:"#4c51ed" }}/>
                <CallOutlinedIcon sx={{marginLeft: "10px",color:"#4c51ed"}}/>
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
