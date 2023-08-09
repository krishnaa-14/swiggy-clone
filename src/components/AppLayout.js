import React from "react"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </React.Fragment>
    )
}

export default AppLayout;