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
                        Moneypot works similar to a gift card provider. Instead of gift cards, moneypot provides you with coins, which you can trade for bitcoin.
                        However, instead of taking a fee when conversing, as most gift card providers do, moneypot will once in a while reclaim all the "dead" gift cards (coins) which have yet to be used.
                        This allows us to run all of our services at cost, which provides clients with the lowest possible fees. This is done by rolling over the custodian every so often.
                    </p>
                    <p>
                        There are a number of reasons why you would want to rollover the custodian. 
                        The most significant one is already addressed above: over time, through entropy, people will lose access to their moneypot wallet, forget about it, or have other reasons that prohibit them from accessing their coins again. Given enough time, this could accumulate to relatively large sums of money.
                    </p>
                    <h2 id="Limitations">Technical Limitations
                        <a href="#withdrawals" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                    Although this has not been extensively tested yet, We expect there to be some sort of technical constraint once we've reached a certain number of transactions and or more importantly a certain number of UTXO's in combination with Bitcoin Core, the software most custodians will be underpinned by.
                    </p>
                    <p>
                    Let that be for example in the form of extensive loading times for the filtering of unspent UTXO's, up to the point where the UX becomes effected in such a way that using the wallet becomes unbearable. Hence why it becomes necessary to rollover the custodian to preserve the UX and prevent lag.

                    </p>
                    <h2 id="Advantages">Advantages of this model
                        <a href="#Advantages" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                    Considering the fact that moneypot does not rely on fees from outgoing transactions or hookins to make a profit, we can offer extremely competitive fee rates, better than any exchange could conceivably do. 
                    Not only is this advantageous for the client: (e, <i>you!</i>), but this allows moneypot, despite the fact that it consists of centralized entities, to be enourmously superior to other <i>(decentralized) </i> wallets in a vast number of aspects.
                    </p>
                    <h2 id="Advantages">Exit Scamming
                        <a href="#ExitScamming" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                    However, most importantly, scheduled rollovers mitigate the most significant business model: Running off <code>(exit scamming, for lack of a better term)</code> with users' funds after establishing a decent amount of trust.
                     Were we not to regularly rollover and collect these so-called "dead funds", this would become extremely lucrative as it is a given that over time the custodian will build up a lot of these types of funds.
                    </p>
                </Col>
            </Row>
        </SectionDiv>
    </Layout>
)

export default BusinessModel
