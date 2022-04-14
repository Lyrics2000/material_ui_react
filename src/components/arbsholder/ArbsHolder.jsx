import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import './ArbsHolder.css';


const ArbsHolder = () => {
  return (
    <div className='arbsHolder'>
        <div className="wrong-arb">
            <div className="percentage">
                <h2>0.98%</h2>
            </div>
            <div className="sport">
                <h2>Volleyball</h2>
            </div>
            <div className="icons">
                <AccessTimeIcon className="clock" />
                <h2  className="clock">2 h</h2>
                <DeleteForeverIcon   className="clock"/>

                
                
            </div>

        </div>
        <div className="event-name">
            <p className='change_color'>1xbet</p>
            <div className="time">
                <p>15 Apr</p>
                <p>22:00</p>
            </div>

            <div className="event_name">
                <p>Real-socialdad vs Real Bettis</p>
                <div className="country">
                    <p>Spain.</p>
                    <p>La-liga</p>
                </div>
            </div>

            <p className='change_color'>
                over(0.5) 
            </p>

            <p className='change_color change_text'>
               <span>Odds</span> 2.5
            </p>

            <CloseIcon />




        </div>
        <div className="event-name">
            <p className='change_color'>1xbet</p>
            <div className="time">
                <p>15 Apr</p>
                <p>22:00</p>
            </div>

            <div className="event_name">
                <p>Real-socialdad vs Real Bettis</p>
                <div className="country">
                    <p>Spain.</p>
                    <p>La-liga</p>
                </div>
            </div>

            <p className='change_color'>
                over(0.5) 
            </p>

            <p className='change_color change_text'>
               <span>Odds</span> 2.5
            </p>

            <CloseIcon />




        </div>
    </div>
  )
}

export default ArbsHolder