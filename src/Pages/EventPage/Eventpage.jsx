import React from 'react'
import Birthday from '../../assets/Birthdaycake.png'
import { IoL } from 'react-icons/hi';
// import { HiOutlineCalendar} from 'react-icons/hi';
import { IoIosAdd,IoLocationOutline} from 'react-icons/io';
const Eventpage = () => {
  return (
    <div className='eventpage'>
      <div className='image'>
        <img src={Birthday} alt="" />

      </div>
      <div className='Birthday'>
        <h2>Birthday Bash</h2>
        <p>Hosted by Elysia</p>

        <div className='calendar'>
          <div><IoIosAdd/></div>
          <div><p>
          18 August 6:00PM </p>
          <p>18 August 6:00PM</p></div>
        </div>

        <div className='location'>
          <div><IoLocationOutline/></div>
          <div><p>
          Street name </p>
          <p>Suburb, State, Postcode</p></div>
        </div>

      </div>
    </div>
  )
}

export default Eventpage