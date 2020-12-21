import React from 'react'
import { Button, Col, Row, Badge } from "reactstrap";

const Hero = () =>  { 
   return (
        <div
            className="hero"
            style={{
                background: `linear-gradient(#0552B1,#3D91F9), no-repeat center center fixed `,
                minHeight: '0vh',
                margin: '-5rem -2rem 0',
            }}
        >
            <div
                style={{
                    color: '#fff',
                    margin: '0% 8%',
                    padding: '10vh 2rem',
                    textAlign: 'center'
                }}
            >
                <Row style={{     display: 'flex', alignItems: 'center'}}>
                    <Col sm="8">
                        <h1 className="brand-title">moneypot</h1>
                        <p className="hero-first-text">A <del>cutting edge</del> revolutionary </p>
                        <p className="hero-second-text">Bitcoin Wallet</p>
                        <p style={{ fontSize: '1.5rem'}}>
                            <Badge color="primary">lowest fees</Badge>{'  '}
                            <Badge color="primary">private</Badge>{'  '}
                            <Badge color="primary">fast</Badge>{'  '}
                            <Badge color="primary">open source</Badge>{'  '}
                        </p>
    
                        <p className="hero-third-text">
                            Wield bitcoin like never before
                        </p>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="3">
                    <div className="hero-fourth-text">
                        <p >released! </p>
                        <p>release: v1.0.0</p>
                    </div>
                        <Button size="lg" href="https://wallet.moneypot.com" color="secondary">Go to Wallet</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
} 



export default Hero

