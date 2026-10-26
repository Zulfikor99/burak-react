import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function OtherNavbar() {
  const authMember = null;
  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/burak.svg" alt="Burak" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/">Home</NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders">Orders</NavLink>
              </Box>
            ) : null}

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member_page" activeClassName={"underline"}>
                  MyPage
                </NavLink>
              </Box>
            ) : null}

            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            {/* Basket */}
            <Basket />

            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  LOGIN
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                alt="user-default"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
