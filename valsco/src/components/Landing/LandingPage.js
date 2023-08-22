import "./LandingPage.css"
import React from "react"
import imgvalsco from "../images/img2.png"
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <>
    <Helmet>
        <title>Valsco</title>
        <title>Welcome to Valsco - Empowering Solutions</title>
        <meta
          name="description"
          content="Welcome to Valsco! We provide innovative software products and services to businesses and individuals, tailored to meet their unique needs. Explore our solutions today."
        />
      </Helmet>
      <div className="wrapper">
        <div className="main">
          <div className="front">
            <div className="img1">
              <img
                src={require("../../components/images/newlogo.png")}
                id="lgo"
                alt="gb"
              />
            </div>
          </div>
          <div className="para">
            <span>VALSCO</span>
            <p>
              Our company provides software products and services to businesses
              individuals to help them meet their software needs. We strive to
              specialize in developing software solutions tailored to the unique
              needs of our clients.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='imghovercontainer'>
      <img className="imghover" src={imgvalsco} alt="" />
    </div> */}
    </>
  )
}

export default LandingPage
