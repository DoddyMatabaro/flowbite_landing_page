import { DarkThemeToggle, Flowbite, Footer, Navbar } from 'flowbite-react';
import React from 'react'
import { Outlet } from "react-router-dom";
import {footer} from '../assets/data'
import logo from '../assets/logook.svg'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'


function Layout() {
  return (
    <>
        <Navbar
            fluid={true}
            rounded={true}
            >
            <Navbar.Brand href="#">
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

            {/* footer */}
            <Footer container={true}>
  <div className="w-full">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div>
        <Footer.Brand
          href="https://flowbite.com"
          src={logo}
          alt="ECR logo"
          name="ECR sarl"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <Footer.Title title="Apropos" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="/about">
              E.C.R sarl
            </Footer.Link>
            <Footer.Link href="https://geniecivilpdf.com/pdf">
              Genie civil
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Suivrez-nous sur : " />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              Linkdin
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Mentions legales" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="ECR sarl"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsLinkedin}
            />

          </div>
        </div>
      </div>
    </Footer>
    </>
  )
}

export default Layout