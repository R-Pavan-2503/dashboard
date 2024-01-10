import React from 'react'
import { useState } from 'react';
import { Box , useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen , setIsSidebarOpen] = useState(true);
    return <Box width="100%" height="100%">
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    </Box>
}

export default Layout;