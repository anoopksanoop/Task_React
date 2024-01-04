import React from 'react'
import "./Content.css"

const Content = () => {
  return (
    <div className='all' >
     <div className='images-row'>
     
        <div>
            
        <img  className="img12" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDCMUe_JDAGtxi1ivlM9BHrUJ4C8Sxy95DjunxUtYgvAR7ywq' alt=''/>
        <h6>Explore Large, Destructible Environments Where No Two Games Are Ever The Same</h6>
        </div>
        <div>
        <img className="img12" src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6k3LBuyCOLic1FvZZbG-GTAmudSXd8lgP-4gO3vHuHR2moxlZ' alt=''/>
        <h6>Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale</h6>
        </div>

        <div>
        <img className="img12" src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0zokoCpbty67SUmoGquvvZwIXRJUS-1p-AZmGeK979Xxx2RRN' alt=''/>
        <h6>Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres</h6>
        </div>
        
    </div>

    <div className='foot'>
            <h2 style={{width:"80%"}}>Our Contribution</h2>
            <h6 style={{width:"80%"}}>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</h6>
        </div>

        <div className='tags'>

          <div>
            <h1> 5M</h1>
            <h6>Daily User <br/> Engagments</h6>
            </div>

            <div>
            <h1>$500k</h1>
            <h6>Revenue Surge for <br/> an Platform</h6>
            </div>

            <div>
            <h1>10X</h1>
            <h6>ROAS on all our  marketing <br/> campaigns</h6>
            </div>
      </div>
      <br/> <br/> <br/> <br/>
            <div className='foot'>
                <h4 style={{width:"80%"}}>Interested In Delving Deeper Into The Project ?</h4>
                <h6 style={{width:"80%"}}>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</h6>
            </div>
            <div>
                <button className='btn2'>Ring us on Skype </button>
                <button className='btn3'>Contact Us</button>
            </div>
        
   </div>
  )
}

export default Content