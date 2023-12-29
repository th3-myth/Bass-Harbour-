import React from 'react'
import './Pay.css'
import qr from '../Assets/qrcode.jpg'

const Pay = () => {

  return (
    <div className='pay'>
            <div className='upi'>
            <h2>UPI ID: fcbiz5snoii@freecharge</h2>
            </div>
            <h2>OR By QR</h2>
            <div className="qr">
            <img src={qr} alt="" />
            </div>
            <div className='txnid'>
            <input type="text" placeholder='Enter Transaction Id' />
            <button>Submit</button>
            </div>
        </div>
  )
}

export default Pay