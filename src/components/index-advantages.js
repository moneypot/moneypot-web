import React from 'react'
import { Link } from 'gatsby'
import {
    Row,
    Col
} from "reactstrap";
import '../scss/components/_index-advantages.scss'


const IndexAdvantages = () => { return (
<div className="index-advantages">
    
            <Row className="row-container" style={{ background: '#f5f5f5'}}>
    
                <Col className="text-container" xs={8}>
                    <h3 className="header">The most private service</h3>
                    <p>
                        There will be no way to track your transactions, moneypot offers you the most private service in the market.
                    </p>
                    <p>
                        All transactions are secured by <b>blinded schnorr signatures</b>.
                    </p>
                    <Link to="/privacy">Learn More</Link>
                </Col>
            </Row>
            <Row className="row-container">
                <Col xs={4}>
                    <h2 className="header">Save on fees!</h2>
                    <p>
                        moneypot uses a state-of-the-art algorithm for coin selection to ensure the fees paid in bitcoin transactions are the lowest possible.
                    </p>
                </Col>
                <Col className="text-container" xs={8}>
    
                    <Link to="/fees">Go to fees page</Link>
                </Col>
            </Row>
            <Row className="row-container" style={{ background: '#f5f5f5'}}>
    
                <Col xs={8} className="text-container">
                    <h3 className="header">It's fast, almost instant!</h3>
                    <p>
                        Trading within moneypot with other users is very fast. You don't need to wait for confirmations.
                    </p>
                    <Link to="/">Learn More</Link>
                </Col>
            </Row>
        </div>

    )
}

 
export default IndexAdvantages
