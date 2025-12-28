import React from 'react'
import Container from './Container'


const Navbar = () => {
  return (
    
        <div className=" bg-white shadow-md border-b-[0.5px] border-gray-300">
      <Container>
      <nav className="px-8 py-4 flex justify-between items-center">
        <h1 className="md:text-xl text-sm font-bold text-black">CS — Ticket System</h1>
        <div className="md:flex hidden items-center gap-6">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            FAQ
          </a>
          <a href="#" className="text-gray-600">
           Changelog
          </a>
          <a href="#" className="text-gray-600">
           Blog
          </a>
          <a href="#" className="text-gray-600">
           Download
          </a>

          <a href="#" className="text-gray-600">
            Contact
          </a>
          <button className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            + New Ticket
          </button>
        </div>
        <div className="block md:hidden">
        
        </div>
      </nav>
    </Container>
    </div>
    
  )
}

export default Navbar
