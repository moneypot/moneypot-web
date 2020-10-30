import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Row, Col } from 'reactstrap';

const BusinessModel = () => (
    <Layout>
        <SectionDiv>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <h1>Business Model</h1>
                    <h2 id="philosopy">Philosopy
                        <a href="#philosopy" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                        There are a number of reasons why you would want to rollover the custodian every so often. 
                        The most significant one of them being: Entropy. <i>lack of order or predictability; gradual decline into disorder.</i>
                    </p>
                    <p>
                     Applying this principle to finance, but crypto in particular; we can establish the somewhat eery fact that a given percentage of people who deposit bitcoin, or for that matter, money, will never come back for said money.
                    There is no reason to withhold from utilizing this to the advantage of moneypot. If anything: there will be no safer bet for the foreseeable future than exploiting one of the most fundamental laws of physics.

                    </p>
                    <h2 id="Limitations">Technical Limitations
                        <a href="#withdrawals" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                    Although this has not been extensively tested yet, We expect there to be some sort of technical constraint once we've reached a certain number of transactions and or more importantly a certain number of UTXO's in combination with Bitcoin Core, the software most custodians will be underpinned by.
                    Let that be for example in the form of extensive loading times for the filtering of unspent UTXO's, up to the point where the UX becomes effected in such a way that using the wallet becomes unbearable. (Due to lagg and such.)
                    </p>
                    <h2 id="Advantages">Advantages of this model
                        <a href="#Advantages" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                    Considering the fact that moneypot does not rely on fees from transactions or hookins to make a profit, we can offer extremely competitive fee rates, better than any exchange could conceivably do. 
                    Not only is this advantageous for the client: (e, <i>you!</i>), but this allows moneypot, despite the fact that it consists of centralized entities, to be enourmously superior to other <i>(decentralized) </i> wallets in a vast number of aspects.
                    </p>
                    <p>
                    However, most importantly, scheduled rollovers mitigate the most significant business model: Running off <code>(exit scamming, for lack of a better term)</code> with users' funds after establishing a decent amount of trust.
                     Were we not to regularly rollover, this would become extremely lucrative as over time we will build up a lot of "dead" funds - as explained above.
                    </p>
                </Col>
            </Row>
        </SectionDiv>
    </Layout>
)

export default BusinessModel
