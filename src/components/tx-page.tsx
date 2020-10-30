import React from 'react'
import SectionDiv from './section-div'
import { Row } from 'reactstrap';
import * as Api from '../api-types'
import TxPreview from './tx-preview'




interface TxPageState {
    errorTxApi: any;
    errorOutspendsApi: any;
    txResponse?: Api.TxResponse;
    outspendsResponse?: Api.OutspendsResponse;
}


class TxPage extends React.Component<any,TxPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            errorTxApi: null,
            errorOutspendsApi: null,

        };
    }



    getTransactionInfo(txid: any){
        fetch("https://blockstream.info/testnet/api/tx/"+txid)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        txResponse: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        errorTxApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )
    }

    componentDidMount() {
        console.log('a coinbase txid is: 35e78b61dce421c93cc476a90e2f416ffd13f6e70527b178617c888ebc43f0ff');
        this.getTransactionInfo(this.props.page);

    }

    componentDidUpdate(prevProps: any) {
        if (this.props.page !== prevProps.page) {
            this.getTransactionInfo(this.props.page);
        }

    }



    render() {
        const { errorTxApi } = this.state;
        if (errorTxApi) {
            return <div>Error: {errorTxApi.message}</div>;
        }
        if ( this.state.txResponse === undefined ) {
            return <div>Loading...</div>;
        }

        const { status, size, weight, fee, version, locktime } = this.state.txResponse;

        const vBytes = Math.ceil(weight / 4);
            const feeRate = fee/ vBytes;

            return (
                <div>
                    <SectionDiv>
                        <div className="explore-header">
                            <h2>Transaction {this.props.page}</h2>
                        </div>
                        <div className="tx-stats-table">
                            <div style={{ color: 'red' }}>
                                <div>Block Height</div>
                                <div>{ status.block_height }</div>
                            </div>
                            <div>
                                <div>Included in Block</div>
                                <div><a href="/">{ status.block_hash }</a></div>
                            </div>
                            <div>
                                <div>Size (bytes)</div>
                                <div>{ size }</div>
                            </div>
                            <div>
                                <div>Virtual size (vB)</div>
                                <div>{ vBytes }</div>
                            </div>
                            <div>
                                <div>Weight units (WU)</div>
                                <div>{ weight }</div>
                            </div>
                            <div>
                                <div>Transaction fees</div>
                                <div>{(fee / 1e8).toFixed(8)} tBTC ({ feeRate.toFixed(0) } sat/vB)</div>
                            </div>
                            <div>
                                <div>Version</div>
                                <div>{ version }</div>
                            </div>
                            <div>
                                <div>Lock time</div>
                                <div>{ locktime }</div>
                            </div>
                        </div>
                    </SectionDiv>
                    <SectionDiv>
                        <Row>
                                <h2>Details</h2>
                        </Row>
                        <Row>
                            <TxPreview key={this.props.page} tx={this.state.txResponse} highlightAddress=''/>
                        </Row>
                    </SectionDiv>
                </div>
            );
        }

}



export default TxPage
