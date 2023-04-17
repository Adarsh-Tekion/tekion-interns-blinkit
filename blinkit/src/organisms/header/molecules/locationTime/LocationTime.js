import React from 'react'
import './locationTime.css'
import { DeliveryTime,DeliveryLocation } from '../../constants/header.deliveryDetails'
export default function Location_Time() {
  return (
    <div>
      <p className="time">{DeliveryTime}</p>
      <p className="location">{DeliveryLocation}</p>
       </div>
  )
}
