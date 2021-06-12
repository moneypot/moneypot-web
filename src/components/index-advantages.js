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
    
                <Col className="text-container" xs={12} md={{ size: 10, offset: 1 }}>
                    <h3 className="header">The most private service</h3>
                    <p>
                        All transactions are secured by <b>blinded schnorr signatures</b>.
                    </p>
                    <p>
                        This means that there will be no way for moneypot to track your transactions! Moneypot offers you the most private mixing service in the market, and it's privacy is not based on promises or trust!
                    </p>
                </Col>
            </Row>
            <Row className="row-container">
                <Col xs={12} md={{ size: 8 }}>
                    <h2 className="header">Save on fees!</h2>
                    <p>
                        moneypot uses a state-of-the-art algorithm for coin selection to ensure the fees paid in bitcoin transactions are the lowest possible.
                    </p>
                </Col>
                <Col className="text-container" xs={8} md={{ size: 8}}>
    
                    <Link to="/fees">Go to fees page</Link>
                </Col>
            </Row>
            <Row className="row-container" style={{ background: '#f5f5f5'}}>
    
                <Col xs={12} md={{ size: 10, offset: 1 }}  className="text-container">
                    <h3 className="header">It's fast, almost instant!</h3>
                    <p>
                        Trading within moneypot with other users is very fast. You don't need to wait for confirmations. 
                    </p>
                </Col>
            </Row>
        </div>

    )
}

 
export default IndexAdvantages
