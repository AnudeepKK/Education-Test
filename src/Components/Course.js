import React from 'react';
import Navbar from './navbar';
import { Card } from 'react-bootstrap';
import Cprog from '../Images/Clan.png';
import Pyt from '../Images/Py.png';
import Php from '../Images/php.png';
import R from '../Images/R.jpeg';
import java from '../Images/java.png'
import htcs from '../Images/htmlcss.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Course = () => {
  return (
    <div className='bg-dark'>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item " aria-current="page">
                  <Link to="/" className="text-danger fw-bold text-decoration-none">Home</Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link to="/Course" className="text-danger fw-bold text-decoration-none">Course</Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
      <div className="row d-flex justify-content-center my-3 mx-2">
        <div className="col-md-4 mb-3 ">
          <Card className='text-center bg-info'>
            <div>
            <Card.Img variant="top" src={Cprog} className="img-fluid course-image " style={{ height: '300px', width: '80%' }}/>
            </div>
            <Card.Body>
              <Card.Title>Course 1:C</Card.Title>
              <Card.Text>C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs. It has found lasting use in operating systems, device drivers, protocol stacks, though decreasingly for application software. <br/><br/><br/></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-3">
          <Card className='text-center bg-info'>
            <div>
            <Card.Img variant="top" src={Pyt} className="img-fluid course-image" style={{ height: '300px', width: '80%' }}/>
            </div>
            <Card.Body>
              <Card.Title>Course 2:Python</Card.Title>
              <Card.Text>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. Python is dynamically typed and garbage-collected.It supports multiple programming paradigms, including structured , object-oriented and functional programming.<br/><br/><br/></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className='text-center bg-info'>
            <div>
            <Card.Img variant="top" src={R} className="img-fluid course-image" style={{ height: '300px', width: '80%'} }/>
            </div>
            <Card.Body>
              <Card.Title>Course 3:R</Card.Title>
              <Card.Text>R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing.Created by statisticians Ross Ihaka and Robert Gentleman, R is used among data miners, bioinformaticians and statisticians for data analysis and developing statistical software.<br/><br/><br/></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className='text-center bg-info'>
          <div>
            <Card.Img variant="top" src={Php} className="img-fluid course-image" style={{ height: '300px', width: '80%' }}/>
            </div>
            <Card.Body>
              <Card.Title>Course 4:PHP</Card.Title>
              <Card.Text>PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group. PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.<br/><br/><br/></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className='text-center bg-info'>
          <div>
            <Card.Img variant="top" src={java} className="img-fluid course-image" style={{ height: '300px', width: '80%' }}/>
            </div>
            <Card.Body>
              <Card.Title>Course 5:Java</Card.Title>
              <Card.Text>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.<br/><br/><br/></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className='text-center bg-info'>
          <div>
            <Card.Img variant="top" src={htcs} className="img-fluid course-image" style={{ height: '300px', width: '100%' }}/>
            </div>
            <Card.Body>
              <Card.Title>Course 6:HTML&CSS</Card.Title>
              <Card.Text> HTML and CSS are scripting languages used to create a web page and web applications. HTML provides web page structure, whereas CSS is mainly used to control web page styling.Since HTML is a markup language to define the web pages structure or organization, the same format and syntax cannot be used in CSS sheets. Two in one course with projects given at the end.<br/><br/><br/></Card.Text>
            </Card.Body>
          </Card>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Course;
