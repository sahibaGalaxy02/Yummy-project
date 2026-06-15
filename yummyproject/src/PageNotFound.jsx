import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
   <>
   <center className='my-4'>
    <h1 className='text-danger'>This site cant be reached</h1>

    <p>DNS_PROBE_FINISHED_NXDOMAIN</p>
    <p className='fst-italic fw-light'>Looking for something?
    We're sorry. The Web address you entered is not a functioning page on our site.</p>
    <NavLink to='/' className='btn btn-danger fw-bold btn-lg '>Go To Home page</NavLink>
        </center>
        </>
  )
}

export default PageNotFound

