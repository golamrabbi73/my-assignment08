"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from 'react'
import Navlink from "../navlink/Navlink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = null;
  return (
    <>
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="w-full flex items-center justify-between">
          
          {/* left logo */}
          <div>
            <Navlink href={"/"}>
              <h1 className="text-xl font-bold tracking-wide">
                Tile<span className="text-blue-500">Gallery</span>
              </h1>
            </Navlink>
          </div>

          {/* centre - menu for desktop */}
          <div className='hidden md:flex gap-8 font-medium'>
            <Navlink href='/'>Home</Navlink>
            <Navlink href="/all-tiles">All Tiles</Navlink>
            <Navlink href="/profile">My Profile</Navlink>
          </div >
          

          {/* right - auth for desk */}
          <div className="hidden md:flex items-center gap-4">
            {
              !user? (
                <Navlink href="/login">
                  Login
                </Navlink>
              ) : (
                <>
                  <Navlink>
                    Profile
                  </Navlink>
                  <button>
                    Logout
                  </button>
                </>
              )
            }
          </div>
          
          {/* mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {
              open? <X /> : <Menu />
            }
          </button>
        </div>

        {/* mobile menu  */}
        {
          open && (
            <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-800 p-4 rounded-lg">
              <Navlink href="/" onClick={() => setOpen(false)}>Home</Navlink>
              <Navlink href="/tiles" onClick={() => setOpen(false)}>All Tiles</Navlink>
              <Navlink href="/profile" onClick={() => setOpen(false)}>My Profile</Navlink>

              {
                !user? (
                  <Navlink href="/login" onClick={() => setOpen(false)}>
                    Login
                  </Navlink>
                ) : (
                  <>
                    <Navlink href="/profile" onClick={() => setOpen(false)}>
                      Profile
                    </Navlink>
                    <button>
                      Logout
                    </button>
                  </>
                )
              }
            </div>
          )
        }
        
      </nav>
    </>
  )
}

export default Navbar
