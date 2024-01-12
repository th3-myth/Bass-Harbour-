import React from 'react'
import './Pay.css'
import qr from '../Assets/qrcode.jpg'

const Pay = () => {
  const deliver = alert("Your Order will be deliverd in 3 to 5 working days after payment is Confirmed");
  return (
    <div className='pay'>
            
            <div className="qr">
            <img src={qr} alt="" />
            </div>
            <div className='txnid'>
            <input type="text" placeholder='Enter Transaction Id' />
            <button onClick={deliver}>Submit</button>
            </div>
        </div>
  )
}

export default Pay