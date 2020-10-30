import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Row, Col, Badge} from 'reactstrap';
import * as Api from '../api-types'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';


interface TxPreviewProps {
    tx: Api.TxResponse;
    highlightAddress: string;
}

export default function TxPreview( props: TxPreviewProps ) {
    const {tx, highlightAddress} = props;
    const [outspendsResponse, setOutspendsResponse] = useState<Api.OutspendsResponse>([]);

    function displaySpentStatus(i: number) {
        const outspend = outspendsResponse[i];
        if (outspend === undefined) {
            return <span>unknown</span>
        }
        if (!outspend.spent) {
            return <Badge color="light">unspent</Badge>
        }
        return (
            <Link to={"/explore/tbtc/tx/" + outspend.txid + "/#spent-by-" + tx.txid + "-" + i}>
                <Badge color="success">spent <FontAwesomeIcon icon="link" /></Badge>
            </Link>
        );

    }

    function displayOutput(output: Api.Vout, i: number){
        return (
            <div key={i} id={ 'output-index-'+i} className={ highlightAddress === output.scriptpubkey_address ? 'hl-input-and-output-cell' : '' }>
                <div>#{i}</div>
                <div>
                    { output.value/1e8 } tBTC to {' '}
                    <Link to={"/explore/tbtc/address/" + output.scriptpubkey_address}>{output.scriptpubkey_address}</Link>{' '}
                    { displaySpentStatus(i) }
                </div>
            </div>
        );
    }

    async function fetchOutspendsInfo() {
        fetch("https://blockstream.info/testnet/api/tx/"+tx.txid+"/outspends")
            .then(res => res.json())
            .then(
                (result) => {
                    setOutspendsResponse(result);
                }
            )
    }

    useEffect(
        () => {
            fetchOutspendsInfo();
        },
        []
    );



    return (
        <div key={props.tx.txid} className="transaction-card">
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <h4 className="transaction-subtitle">
                    <Link to={"/explore/tbtc/tx/" + tx.txid}>
                        <FontAwesomeIcon icon="exchange-alt"/>{' '}
                        {tx.txid}
                    </Link>
                </h4>
            </Row>
            <Row>
                <Col>
                    <h4 className="inputs-and-outputs-subtitle"> {tx.vin.length} Input{tx.vin.length > 1 ? 's' : ''} Consumed</h4>
                    <div className="tx-input-and-output-table">
                        {
                            tx.vin.map((vin: Api.Vin, i: number) => displayInput(vin, i, highlightAddress))
                        }
                    </div>
                </Col>
                <Col xs={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <FontAwesomeIcon icon="chevron-right"/>
                </Col>
                <Col>
                    <h4 className="inputs-and-outputs-subtitle"> {tx.vout.length} Output{tx.vout.length > 1 ? 's' : ''} Created</h4>
                    <div className="tx-input-and-output-table">
                        {
                            tx.vout.map((vout: Api.Vout, i: number) => displayOutput(vout, i))
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}




function displayInput(input: Api.Vin, i: number, highlightAddress: string) {
    if ( input.is_coinbase ) {
        return <div key={i}>coinbase</div>
    }
    return (
        <div key={i} id={ 'spent-by-'+input.txid+'-'+input.vout} className={ highlightAddress === input.prevout.scriptpubkey_address ? 'hl-input-and-output-cell' : '' }>
            <div>#{i}</div>
            <div>
                {input.prevout.value / 100000000} tBTC from {' '}
                <Link to={"/explore/tbtc/address/" + input.prevout.scriptpubkey_address}>
                    {input.prevout.scriptpubkey_address ? input.prevout.scriptpubkey_address : 'Unknown Script Type'}
                </Link>{' '}
                <Link to={"/explore/tbtc/tx/" + input.txid +"/#output-index-"+input.vout}>
                    <Badge color="primary">prev-output <FontAwesomeIcon icon="link" /></Badge>
                </Link>
            </div>
        </div>
    );
}


