import { DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react';
import React from 'react'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
        <Navbar
            fluid={true}
            rounded={true}
            >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                ECR sarl
                </span>
            </Navbar.Brand>
            <Flowbite>
                <DarkThemeToggle />
            </Flowbite>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                href="/"
                active={true}
                >
                Accueil
                </Navbar.Link>
                <Navbar.Link href="/projets">
                Projets
                </Navbar.Link>
                <Navbar.Link href="/about">
                About
                </Navbar.Link>
            </Navbar.Collapse>
            </Navbar>
            
            <Outlet/>
    </>
  )
}

export default Layout