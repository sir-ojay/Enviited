import React from "react";
import { FaCalendarAlt} from 'react-icons/fa';
import { GrLocationPin} from 'react-icons/gr';
import { FiLink} from 'react-icons/fi';
import {AiOutlineRight } from "react-icons/ai"
import { FaHandshake} from 'react-icons/fa';
const Movie = () => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h2>Movie night</h2>
        <p></p>

        <div className="response">
          <p>14 respnonses . see guests </p>
          <button>
            <p><FaHandshake className="handshake"/>Invite</p>
          </button>
        </div>

      </div>

      <div>
      <div><FaCalendarAlt/></div>
      <div>
        <p>18 Auigustv 6:00PM</p>
        <p><small>to <b> 19 August 1:00PM</b> UTC +10</small></p>
      </div>
      <div>
      <AiOutlineRight/>
      </div>

      </div>

      <div>
      <div><GrLocationPin/></div>
      <div>
        <p>Street name</p>
        <p>310 Rowes lane, WA 7183</p>
      </div>
      <div>
      <AiOutlineRight/>
      </div>

      </div>

      <div>
      <div><FiLink/></div>
      <div>
        <p><a href="https://www.netflix.com">netflix.com</a></p>
      </div>
      <div>
        <AiOutlineRight/>
      </div>

      </div>
     
    </div>
  );
};

export default Movie;
