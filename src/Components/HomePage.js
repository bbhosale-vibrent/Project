import React from "react";
import {
  AppBar,
  Box,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const Navigate = useNavigate();
  const naviagtetologin = () => {
    Navigate("/login");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: "0ch" }}
            >
              Welcome To WebSite
            </Typography>
            <Select
              sx={{ marginLeft: "1ch" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Login"
              onClick={naviagtetologin}
            >
              <MenuItem>Sign In</MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default HomePage;
