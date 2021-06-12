import React, {useState, useEffect} from "react";
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Row, Col } from 'reactstrap';
import { Link } from 'gatsby'



// hourfee = 6 blocks == immediate, etc.
const Fees = () => {
    // https://bitcoinfees.earn.com/api/v1/fees/recommended
    const [fees, setFees] = useState(undefined)
    const getData = () => fetch(`https://bitcoinfees.earn.com/api/v1/fees/recommended`).then((res) => res.status === 200 ? res.json() : null).catch(error => alert(error.message));
    

    useEffect(() => {
        getData().then((data) => setFees(data))
    }, [])

    if (fees === undefined) {
        return <div>Fetching feerates!</div>
    }


    return (
    <Layout>
      <Row>
       <Col sm="12" md={{ size: 10, offset: 1 }}>
        <SectionDiv>
            <h1>Fees</h1>
            <h2>Withdrawal</h2>
            <p>These fees includes both bitcoin blockchain fees and our commission. The list is updated dynamically, according to current market fees.</p>
            <Row>
                <Col className="fee-box green-fee"
                    sm={{ size: 3, offset: 3 }}>Immediate + High priority:
                </Col>
                <Col className="fee-box green-fee"
                    sm="3">{fees.fastestFee * 561} satoshi
                </Col>
            </Row>
            <Row>
                <Col className="fee-box list-group-item-success"
                    sm={{ size: 3, offset: 3 }}>Immediate + Normal priority:
                </Col>
                <Col className="fee-box list-group-item-success" sm="3">{fees.hourFee * 561} satoshi
                </Col>
            </Row>
            <Row>
                <Col className="fee-box list-group-item-warning"
                     sm={{ size: 3, offset: 3 }}>Queued (Batch transaction):
                </Col>
                <Col className="fee-box list-group-item-warning" sm="3">{fees.hourFee * (31 * 4)} satoshi
                </Col>
            </Row>
            <Row>
                <Col className="fee-box list-group-item-danger" sm={{ size: 3, offset: 3 }}>Low priority (~7 days):
                </Col>
                <Col className="fee-box list-group-item-danger" sm="3" >100 satoshi
                </Col>
            </Row>

            <h2>Deposit</h2>
            <p>Our fee system is optimized to offer the lowest cost in the market, as well as being transparent for you. There are no hidden fees.</p>
            <p>
                Following these efforts, we do charge a deposit fee, so that when, for example, you withdraw a balance that is product of several deposits,
                the fee you will pay will be just the one you see above and nothing else. To learn more about this, please refer to our <Link to="/faq">FAQ.</Link>
            </p>
            <Row>
                <Col className="fee-box list-group-item-info" sm={{ size: 3, offset: 3 }}>Deposit fee:
                </Col>
                <Col className="fee-box list-group-item-info" sm="3">50-1000 satoshi
                </Col>
            </Row>
        </SectionDiv>
        <SectionDiv>
            <h2>Executive Notes</h2>
            <p>One of moneypot's competitive advantages is <span style={{ fontWeight: 'bold'}}>the lowest fees in the market</span>.
                We are not only using several advanced methods to keep the blockchain fees low,
                but we are also operating at cost, keeping our commissions minimal.</p>
            <p>
                Since we are not collecting profit from these fees, our business model is based in locking in the bitcoin deposited in the system and not withdrawn for
                12-24 months. You can read more about this in the <Link to="/faq">FAQ</Link>.
            </p>
            <p>
                As long as you collect your bitcoin in less than 12 months, rest assured that you are trading bitcoin the best way.
            </p>
            <h2>How does moneypot manage to lower the bitcoin transaction fees for you?</h2>
            <ul>
                <li><b>Coin selection.</b> We own a cutting edge coin selection algorithm that allows our code to make the smartest choices while performing bitcoin transactions. </li>
                <li><b>Economies of scale.</b> Having a high volume of coins available allows us to perform better coin selection.</li>
                <li><b>Batching. </b> We perform batching to make blockchain fees even lower in the fastest way.</li>
                <li><b>Consolidation. </b>Consolidation is a very complex process to cost effectively manage. It trades off fees/security/privacy. We do this for you at scale.</li>
            </ul>
        </SectionDiv>
      </Col>
     </Row>
    </Layout>   
    )
}

export default Fees

