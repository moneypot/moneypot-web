import React from 'react'
import SectionDiv from './section-div'
import '../scss/components/_explore.scss'
import {  Button } from 'reactstrap';
import TxPreview from './tx-preview'
import * as Api from '../api-types'

interface AddressPageState {
    errorAddressApi: any;
    addressResponse?: Api.AddressResponse;
    errorTransactionsApi: any;
    transactionList:  Api.TxResponse[];
    errorMoreTransactionsApi: any;
    outspendsResponse?: any;
    errorOutspendsApi: any;

}


class AddressPage extends React.Component<any,AddressPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            errorAddressApi: undefined,
            addressResponse: undefined,
            errorTransactionsApi: undefined,
            transactionList: [],
            errorMoreTransactionsApi: undefined,
            outspendsResponse: undefined,
            errorOutspendsApi: undefined

        }
    }


    getAddressInfo(address: any){
        fetch("https://blockstream.info/testnet/api/address/"+address)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the address info is: ',result);
                    this.setState({
                        addressResponse: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        errorAddressApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )
    }



    getTransactionsInfo(address: any){
        fetch("https://blockstream.info/testnet/api/address/"+address+"/txs")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        transactionList: result
                    });
                },
                (error) => {
                    this.setState({
                        errorTransactionsApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )

    }

    getMoreTransactionsInfo(address: string, lastTx: string){
        fetch("https://blockstream.info/testnet/api/address/"+address+"/txs/chain/"+lastTx)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the additional tx info is: ',result);
                    this.setState({ transactionList:   [...this.state.transactionList, ...result] }
                    );
                },
                (error) => {
                    this.setState({
                        errorMoreTransactionsApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )

    }


    displayLoadMoreButton(){

        const { transactionList, addressResponse } = this.state;

        if (!addressResponse) {
            return
        }
        if (transactionList.length === 0) {
            return
        }

        if ( transactionList.length < addressResponse.chain_stats.funded_txo_count)
        return (
            <div style={{ display: 'flex', alignContent: 'center', padding: '3rem'}}>
                <Button onClick={
                    () => this.getMoreTransactionsInfo(this.props.page, transactionList[transactionList.length-1].txid)}>
                    Load More
                </Button>
            </div>
        )
    }



    componentDidMount() {
        this.getAddressInfo(this.props.page);
        this.getTransactionsInfo(this.props.page);


    }

    componentDidUpdate(prevProps: any) {
        if (this.props.page !== prevProps.page) {
            this.getAddressInfo(this.props.page);
            this.getTransactionsInfo(this.props.page);


        }

    }




    render() {
        const { errorAddressApi, errorTransactionsApi } = this.state;
        if (errorAddressApi) {
            return <div>Error: {errorAddressApi.message}</div>;
        }
        if (errorTransactionsApi) {
            return <div>Error: {errorTransactionsApi.message}</div>;
        }
        if ( this.state.addressResponse === undefined ) {
            return <div>Loading...</div>;
        }

        if ( this.state.transactionList === undefined ) {
            return <div>Loading...</div>;
        }

        const { funded_txo_count, funded_txo_sum, spent_txo_sum,   } = this.state.addressResponse.chain_stats;

        return (
            <div>
                <SectionDiv>
                    <div className="explore-header">
                        <h2>Address {this.props.page}</h2>
                    </div>
                    <div className="tx-stats-table">
                        <div>
                            <div># Transactions</div>
                            <div>{funded_txo_count }</div>
                        </div>
                        <div>
                            <div>Received</div>
                            <div>{ funded_txo_sum / 1e8 } BTC </div>
                        </div>
                        <div>
                            <div>Sent</div>
                            <div>{ spent_txo_sum/ 1e8 } BTC </div>
                        </div>
                        <div>
                            <div>Balance</div>
                            <div>{ (funded_txo_sum - spent_txo_sum)/ 1e8 } BTC</div>
                        </div>
                    </div>
                </SectionDiv>
                <SectionDiv>
                    <h3>Transactions</h3>
                    {
                        this.state.transactionList.map((tx, i) => {
                            return (
                                 <TxPreview key={i} tx={tx} highlightAddress={this.props.page}/>
                            );
                        })
                    }
                        { this.displayLoadMoreButton() }

                </SectionDiv>

            </div>
        );
    }

}

export default AddressPage
