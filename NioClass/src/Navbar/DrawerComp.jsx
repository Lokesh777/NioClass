import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"

export default function DrawerComp(){
  const [openDrawer, setOpenDrawer] = useState(false);
  const pages = [
    { path: "/", label: "Home" },
  
    { path: "/questions", label: "Questions" },
    { path: "/solution", label: "Solutions" },
  
  ];

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <List>
          {pages.map((page, index) => (
              <Link to={page.path} key={page.label} style={{ textDecoration: 'none' }}  >
                <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                  <ListItemIcon>
                    <ListItemText>{page.label}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Link>
          ))}
      </List>
      </Drawer>

      <IconButton sx={{ marginLeft: "auto", color: "#4c51ed" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
