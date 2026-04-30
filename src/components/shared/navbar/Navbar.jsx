"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link"
import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = null;
  return (
    <>
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="w-full flex items-center justify-between">
          
          {/* left logo */}
          <div>
            <Link href='/'>
              <h1 className="text-xl font-bold tracking-wide">
                Tile<span className="text-blue-500">Gallery</span>
              </h1>
            </Link>
          </div>

          {/* centre - menu for desktop */}
          <div className='hidden md:flex gap-8 font-medium'>
            <Link href="/">Home</Link>
            <Link href="/tiles">All Tiles</Link>
            <Link href="/profile">My Profile</Link>
          </div >
          

          {/* right - auth for desk */}
          <div className="hidden md:flex items-center gap-4">
            {
              !user? (
                <Link href="">
                  Login
                </Link>
              ) : (
                <>
                  <Link>
                    Profile
                  </Link>
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
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/tiles" onClick={() => setOpen(false)}>All Tiles</Link>
              <Link href="/profile" onClick={() => setOpen(false)}>My Profile</Link>

              {
                !user? (
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                ) : (
                  <>
                    <Link href="/profile" onClick={() => setOpen(false)}>
                      Profile
                    </Link>
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
