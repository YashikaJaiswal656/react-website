import React from 'react'
import Header from './include/header'
import './app.css'
import Footer from './include/footer'
const App = () => {
  return (
    <>
      <Header />
      <div className="bg_cont">
        <div className="cont">
          <p>Lorem ipsum dolor sit amet.</p>
          <h1> Lorem, ipsum dolor. <br /> Lorem, ipsum.</h1>
          <span>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam <br /> aperiam maiores sunt fugit, deserunt rem suscipit placeat.

          </span>
          <button>Make appointment </button>
        </div>

      </div>
      <div className="box">
        <div className="contt">
          <div className="sm">
            <div className="sm_box">
              <i className='fas fa-user-doctor'></i>
              <span>24 Hours Service
              </span>
              <h4>Online Appoinment
              </h4>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, accusantium!

              </p>
              <button>Make An Appointment</button>
            </div>
            <div className="sm_box">
              <i className='fas fa-clock'></i>
              <span>Timing schedule

              </span>
              <h4>Working Hours

              </h4>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, labore!

              </p>
              <button>Make An Appointment</button>
            </div>
            <div className="sm_box">
              <i className='fas fa-user-doctor'></i>
              <span>Contact

              </span>
              <h4>1-800-700-6200

              </h4>
              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, beatae?

              </p>
              <button>Make An Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App