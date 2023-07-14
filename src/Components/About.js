import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Accordion, Col } from 'react-bootstrap';
import Cod from '../Images/code.jpeg'

const AboutUsPage = () => {
  return (
    <div className='bg-warning'>
      <Navbar />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
               <li className="breadcrumb-item" aria-current="page">
                <Link className="text-danger fw-bold text-decoration-none" to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link className="text-danger fw-bold text-decoration-none" to="/about">About</Link>
              </li> 
            </ol>
          </nav>
        </div>
      </nav>
    <div>
      <div>
      <h1 className='text-center text-success'>Have a bright future with us...</h1>
      </div>
      <div className='text-center '>
      <img
                className="p-3"
                src={Cod}
                alt="Coding Pic"
                style={{ width: '600px', height: '400px' }}
              />
        </div >
      <br /><br /><br />
      <h2 className='text-center fst-italic'>Contact and About Us</h2>
      <div className='d-flex justify-content-center'>
        <Col xs={14} md={8} lg={12}>
          <Accordion defaultActiveKey="0" flush className='acc'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4 className='acchead'>Organisation Name</h4>
              </Accordion.Header>
              <Accordion.Body className='text-center text-info bg-dark fs-4  accon'>
                <strong >Solid Course</strong>
                <p>By top world wide researcher</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2 className='acchead'>Location & Address</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center text-info bg-dark tw-bold accon'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae ullam veniam quasi earum sint, aperiam ratione impedit accusamus consectetur maxime, non laborum qui? Officia esse, minus quos voluptate beatae molestiae dignissimos quod omnis rem nulla vel accusamus. Temporibus obcaecati laudantium voluptas voluptates magnam omnis aut dignissimos recusandae mollitia dolorem officia, dolorum maiores! Cumque ad repudiandae qui nisi totam facilis temporibus ullam commodi aspernatur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h2 className='acchead'>Contact</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center fs-3 text-info bg-dark accon'>
                +91-1102324567
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h2 className='acchead'>Email Address</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center text-info bg-dark fs-4 accon'>
                freetolearn@sahyadri.edu.in
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default AboutUsPage;
