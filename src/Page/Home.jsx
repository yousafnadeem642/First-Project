

import React from 'react'
import Card from '../Components/Card'
import { card1, card2, card3, card4 } from "../Data/CardData";
const Home = () => {
  return (
   <>
   <div className='container'>
<div className="row align-items-center">
<div className='col-12 col-lg-6'>
<h1 className='display-4 fw-bold'>
  Stay Connected With <span className='text-danger'>Phonico</span> eSIM Across the USA, Instantly!
</h1>
<p>
  With Phonico eSIM, getting online in the U.S. is fast, easy, and completely digital. No KYC and no restrictions on Hotspot Sharing or Tethering. Select your Plan, Scan the QR, Activate, and Explore with uninterrupted coverage in all 50 states of the USA. Starting from $15/Month!
</p>
<button className='btn btn-danger'>
  Get your eSim now
</button>
</div>
<div className='col-12 col-lg-6 text-center mt-4 mt-lg-0'>
<img src="https://phonico.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FfemaleHero2.e02ce7c9.png&w=1920&q=75" alt="" className='img-fluid' />
</div>

</div>
   </div>
    <div className="row">

      <div className="col-md-3">
        <Card cardInfo={card1} />
      </div>

      <div className="col-md-3">
        <Card cardInfo={card2} />
      </div>

      <div className="col-md-3">
        <Card cardInfo={card3} />
      </div>

      <div className="col-md-3">
        <Card cardInfo={card4} />
      </div>

    </div>
   
<div className='container mt-5 mb-5'>
  <h1 style={{fontSize:"50px"}}>
    Buy the Best eSIM Prepaid Plans Meeting All Your <span className='text-danger'> Expectations!</span>
  </h1>
</div>

<div className="container " id='my' style={{padding:"90px"}}>
  <h1 style={{fontSize:"50px"}}>Full Coverage With the Best Prepaid {}
<span className="text-danger">USA</span> eSIM Plans</h1>
</div>

<div className='mt-5 container mb-5 col-12 col-md-6'>
  <h1 style={{fontSize:"50px"}}>
    You can get your Phonico
eSIM in 3 easy steps!
  </h1>

</div>
<div className="row container">
<div className='col-12 col-md-4'>
    <h1>1. Choose Your Plan</h1>
  <p>Select the best eSIM plan that meets your needs.</p>
</div>
 <div className='col-12 col-md-4'>
    <h1>1. Choose Your Plan</h1>
  <p>Select the best eSIM plan that meets your needs.</p>
 </div>
 <div className='col-12 col-md-4'>
  <h1>3. Active Instantly</h1>
  <p>There is no wait, and there is no paperwork. Just click buy now, and you will receive a QR code in your e-mail for activation</p>
 </div>
</div>
<div className="container">
  <div className="row align-items-center">

                      
    <div className="col-12 col-lg-8 col-md-6">
      <h1>
        Why Choose <br />
        PHONICO eSIM?
      </h1>

      <p>
        When you are in the United States, there should be no complications,
        especially with connectivity. Phonico makes it simple with affordable
        USA eSIM plans built for travellers, remote workers, and locals who
        want fast, reliable mobile data without the extra hassle.

        From Alaska to Hawaii or California to Maine, you’ll get strong
        nationwide coverage with instant activation, and clear voice quality
        powered by trusted U.S. carrier networks. No contracts & no hidden
        charges. Just seamless connectivity wherever you go. Phonico keeps you
        online with flexible data, call, and text plans that fit the way you
        travel and live. Choose Phonico to stay connected in the USA
        effortlessly.
      </p>
    </div>


    <div className="col-12 col-lg-4">
      <img
        className="img-fluid"
        src="https://phonico.com/_next/image/?url=%2Fimages%2FbenefitsImg1.png&w=1920&q=75"
        alt="Phonico eSIM"
      />
    </div>

  </div>
</div>

<div className="container mt-5 mb-5 " style={{border:"black 0.5px solid",borderRadius:"30px",padding:"30px"}}>
  <div className="row ">
    <div className='col-12 col-md-3 col-lg-3'>
      <h2>Uninterrupted Connectivity Across the USA</h2>
    </div>

    <div className='col-12 col-md-3 col-lg-3'>
<img src="https://phonico.com/images/Coverage.svg" alt="" />
<p style={{fontSize:"27px"}}>Effortless

Coverage</p>
    </div>
    <div className='col-12 col-md-3 col-lg-3'>
      <img src="https://phonico.com/images/Plans.svg" alt="" />
      <p style={{fontSize:"27px"}}>Custom Plans

To Choose</p>
    </div>
    <div className='col-12 col-md-3 col-lg-3'>
<img src="https://phonico.com/images/247Support.svg" alt="" />
<p style={{fontSize:"27px"}}>24/7 Support</p>
    </div>
</div>
  </div>





<div className='container mt-5'>
<div  className='row align-item-center'>
<div className='col-12 col-md-6 col-lg-6'>
<h1 style={{fontSize:"60px"}}>
  Introducing a World of Connectivity with the <span className='text-danger'>Phonico</span> eSIM App
</h1>
<p style={{fontSize:"27px"}}>
  Download our eSIM App for monitoring your real-time data usage. You can also use this app to activate your eSIM, manage profiles, and get updates on new features and promotions. You can find this app on the Play Store and Apple Store!
</p>
<p>Download the APP now</p>
<a href="#">
  <img src="https://phonico.com/images/appleLink.svg" alt="" />
</a>
<a className='ms-2' href="#">
  <img src="https://phonico.com/images/playLink.svg" alt="" />
</a>
</div>
<div className='col-12 col-md-6 col-lg-6 '>
<img src="https://phonico.com/_next/image/?url=%2Fimages%2FmobileImg.png&w=1920&q=75" alt="" />
</div>
</div>
</div>

   </>
  )
}

export default Home