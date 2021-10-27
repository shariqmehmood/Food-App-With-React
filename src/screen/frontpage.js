import React from "react";
import "./frontpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousel  from "react-bootstrap/Carousel";
import  Card  from "react-bootstrap/Card";
import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.jpg"
import slide3 from "../images/sliade3.jpg"
import chiken from "../images/chiken.jpg"
import leg from "../images/leg.jpg"
import ok from "../images/ok.jpg"
import Like from "../images/like.jpg"
import dislike from "../images/dislke.jpg"




function Home(){
    return(
        <>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    ></img>
    <Carousel.Caption>
      <h3>Chiken Leg Peice</h3>
      <p>Signup for more fun and send order's.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
      ></img>

    <Carousel.Caption>
      <h3>Moton Boti</h3>
      <p>Signup for more fun and send order's.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
      ></img>
    <Carousel.Caption>
      <h3>Burger's</h3>
      <p>Signup for more fun and send order's.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    
</div>
<Card className="bg-dark text-white" >
  <Card.Img  className="bigcard" src={ok} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Chiken</Card.Title>
    <Card.Text>Send Me A Order</Card.Text>
  <img className="like" src={Like}></img>
  <img className="like" src={dislike}></img>

   
  </Card.ImgOverlay>
</Card>

<br></br>
<Card className="bg-dark text-white" >
  <Card.Img  className="bigcard" src={chiken} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Brost</Card.Title>
    <Card.Text>Send Me A Order</Card.Text>
    <img className="like" src={Like}></img>
  <img className="like" src={dislike}></img>
   
  </Card.ImgOverlay>
</Card>

<br></br>
<Card className="bg-dark text-white" >
  <Card.Img  className="bigcard" src={leg} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Tikka</Card.Title>
   
    <Card.Text>Send Me A Order</Card.Text>
    <img className="like" src={Like}></img>
    
  <img className="like" src={dislike}></img>
  </Card.ImgOverlay>
</Card>






<br /><br /><br />


<div className="coyntries-div"> 



</div>


        </>
    )
}

export default Home;