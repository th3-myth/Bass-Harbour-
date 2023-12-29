import React  from 'react'
import { Link } from 'react-router-dom';
import './Address.css'


const Paytm = () => {

  return (
    <div className="container">
        <div className='address'>
            <label >Enter Name</label>
            <input type="text" placeholder='Fullname' />
            <label min-length='10' max-length='10'>Enter Number</label>
            <input type='number' placeholder='+91'/>
            <label >Address</label>
            <input type="text" placeholder='Flat No., Street Name'/>
            <label>City</label>
            <input type="text" placeholder='City' />
            <label>Pin Code</label>
            <input type="text" placeholder='123456' />
            <label>State</label>
            <input type="text" placeholder='Enter You State' />
            <Link to='/pay'><button>Place Order</button></Link>
        </div>
    </div>
  )
}

export default Paytm