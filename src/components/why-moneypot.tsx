import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faQuestion, faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from 'reactstrap';


const Table = () => {

    const [fees, setFees] = useState<undefined | any>(undefined) // poor timing
    const getData = () => fetch(`https://bitcoinfees.earn.com/api/v1/fees/recommended`).then((res) => res.status === 200 ? res.json() : null).catch(error => alert(error.message));
    

    useEffect(() => {
        getData().then((data) => setFees(data))
    }, [])

    if (fees === undefined) {
        return <div>Fetching feerates!</div>
    }

    return (
        <div className="comparison-table">
        <div>
            <div></div>
            <div>moneypot</div>
            <div>Any Wallet</div>

        </div>
        <div>
            <div>Private</div>
            <div><FontAwesomeIcon icon="check" style={{ color: 'green'}}/></div>
            <div><FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
        </div>
        <div>
            <div>Send fee [eco]</div>
            <div>{fees.hourFee * (31 * 4)} sat (-{(((fees.hourFee * (561)) - (fees.hourFee * (31 * 4))) / (fees.hourFee * (561)) * 100).toFixed(2)}%){" "} <FontAwesomeIcon icon="check" style={{ color: 'green'}}/></div>
    <div>{fees.hourFee * (561)} sat {" "}  <FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
        </div>
        <div>
            <div>Send fee [free]</div>
    <div>100 sat {" "} <FontAwesomeIcon icon="check" style={{ color: 'green'}}/></div>
            <div>{1 * (561)} sat {" "} <FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
        </div>
        <div>
            <div>Receive fee</div>
            <div>50 - 1000 sat <FontAwesomeIcon icon="times" style={{ color: 'grey'}}/></div>
            <div> 0 - 50k sat <FontAwesomeIcon icon="times" style={{ color: 'grey'}}/></div>
        </div>
        <div>
            <div>Instant tx</div>
            <div><FontAwesomeIcon icon="check" style={{ color: 'green'}}/> moneypot direct</div>
            <div><FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
        </div>
        <div>
            <div>Lightning</div>
            <div><FontAwesomeIcon icon="check" style={{ color: 'green'}}/> moneypot lightning</div>
            <div><FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
        </div>
        <div>
            <div>Native Segwit</div>
            <div><FontAwesomeIcon icon="check" style={{ color: 'green'}}/> </div>
            <div><FontAwesomeIcon icon={faQuestion} style={{ color: 'grey'}}/></div>
        </div>
        <div>
            <div>Taproot</div>
            <div><FontAwesomeIcon icon={faBusinessTime} style={{ color: 'green'}}/> </div>
            <div><FontAwesomeIcon icon={faQuestion} style={{ color: 'grey'}}/></div>
        </div>
    </div>
    )

}


export default function Whymoneypot() {

     return (    
        <div>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
        <div className="index-notice">
            <h2>Released!</h2>
            <p>
                The moneypot.com domain was acquired from monsterbyte.io and will be used for an exciting new crypto wallet.
            </p>
        </div>
        <h2>Why moneypot?</h2>
                <p style={{fontWeight: 'bold'}}>See for yourself:</p>
                </Col>
                </Row>
                <Table/>

    </div> )}

 

