import React from 'react';
import { Button, Container } from 'react-bootstrap';
import profileImg from '../../Utilities/20210406_133909.jpg'
const Home = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center">
                            <div className="border me-3 rounded-circle" style={{height:'80px',width:'80px',overflow:'hidden'}}><img className="w-100" src={profileImg} alt="" /></div>
                            <div>
                                <h4 className="p-0 m-0">Bipul Chandro Roy</h4>
                                <p className="p-0 m-0">Junior React Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <h3 className="p-0 m-0">About Myself</h3>
                        <p>I am Bipul Chandro Roy.and currently I am doing my honours in Chemistry at Dinajpur Govt College(NU).From an early age I had always been interested in computers and from last one year I tried hard to convert my interest to skills. So, I have gained my knowledge in web development.I have designed and built several websites using HTML,CSS, Bootstrap5,JavaScript, React, React Router, React Bootstrap, NodeJs, ExpressJs. I had completed a one months internship in Projanmo IT.as software developer.and after that I joined Peper Tree IT.just for one day.I always yearn to work hard and complete the assigned tasks within the allocated time windows while maintaining the required standards.My key strengths are leadership experience, creativity, troubleshooting skills and quick problem solving ability. I have excellent communication skills and negotiation skills.I am passionate about React and my goal to acquire more knowledge and practical experience and work with rumored worldwide organizations.
                            </p>
                        <Button>More Details</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;