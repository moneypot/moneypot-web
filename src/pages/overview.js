import React, {useState, useEffect} from "react";
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap';

// seperate function to prevent page from not loading when cust is down
const LoadCoins = () => { 

    const [coins, setCoins] = useState(undefined)
    const getData = () => fetch(`https://testnet.moneypot.dev`).then((res) => res.status === 200 ? res.json() : null).catch(error => alert(error.message));
    

    useEffect(() => {
        getData().then((data) => setCoins(data))
    }, [])

    if (coins === undefined) {
        return <div>Fetching coins!</div>
    }

    return(
    <Row>
    <Col sm="12" md={{ size: 10, offset: 1 }}>
        <h1>Coins</h1>
        <p>
            There are exactly 32 different coins in moneypot, each having a different <strong>magnitude</strong>
        </p>
        <p>
            Here is an example from our testnet custodian: (https://testnet.moneypot.dev)
        </p>
        <table>
            <thead>
                <tr>
                    <th>Magnitude</th>
                    <th>Bitcoin Value</th>
                    <th>Signing Key</th>
                </tr>
            </thead>
            <tbody>
               {coins.blindCoinKeys.map( (key, index) => {
                   return (
                    <tr key={key}>
                        <th>
                            {key}
                        </th>
                        <th>
                        {(2**index / 1e8).toFixed(8)}
                        </th>
                        <th>
                        {index}
                        </th>
                    </tr>  
                   )
                })}
            </tbody>
        </table>
    </Col>
</Row>)
}



const Overview = () => (
    <Layout>
        <SectionDiv>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <h1>Technical Overview</h1>
                    <p>
                        This overview is written for a highly technical audience in mind, you do not need to understand this overview
                        to actually use our service (which is designed explicitly for ease-of-use).
                    </p>

                    <h2 id="thousand-foot-overview">Thousand Foot Overview
                        <a href="#thousand-foot-overview" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                        moneypot uses a <a href="https://en.wikipedia.org/wiki/Schnorr_signature">schnorr</a> <a href="https://en.wikipedia.org/wiki/Blind_signature" target="_blank" rel="noopener noreferrer">blind signatures</a>{' '}
                        to create a "coin" that represents ownership of bitcoin. There are 31 different <em>magnitudes</em> of coin, from 0 to 30 (inclusive) where each coin is represents <code>2^magnitude</code> satoshis.
                        (i.e. the smallest coin represents 1 satoshi, and the largest coin ~10.74 bitcoin). This makes it relatively <Link to="/docs/#convert-an-amount-to-magnitudes">easy to represent any amount as a set of magnitudes</Link>.
                        Bitcoin can be seemlessly converted to blinded coins. The blinded coins have incredible privacy, speed and cost characteristics that make them exceedingly practical
                        to use. And at any time they can be converted back to regular bitcoin. Using moneypot is quite simply the cheapest and most private way to use bitcoin.
                    </p>
                    <h2 id="provably-honest">Provably Honest
                        <a href="#provably-honest" className="anchor-section float-right">#</a>
                    </h2>
                    <p>
                        With traditional blind signatures the <em>blinded secret</em> is a (randomized) serial-number. While simple and elegant,
                        it suffers a serious limitation: repudiation. Through malice or mistake the server can falsely claim that serial-number was used before. And likewise
                        through malice or mistake the client can falsely claim the server has cheated them. Unsubstantiated accounts are messy for everyone,
                        and something we can completely avoid. Instead of blinding a serial-number, we <em>blind a public key</em>. This public key is known as the
                        <code>owner</code> of the coin.
                    </p>
                    <p>
                        All actions on the coin (e.g. spending it) must have an accompanying digital (schnorr) signature by the coin owner that authorizes
                        that specific action. The server stores that signed action, and can produce it on demand to prove that it only acted upon explicit instruction. Because the server
                        never learns the associated private keys it would be impossible to generate fake authorizations. Therefor if the server ever refuses
                        to act on a valid coin, it can be objectively proved the server is dishonest. Likewise after each instruction, the server provides the client
                        with an <code>acknowledgement</code> which the client can use to prove the server has claimed it has completed that action.
                    </p>
                    <h2 id="hookins">Hookins
                        <a href="#hookins" className="anchor-section float-right">#</a>
                    </h2>
                    <p>
                        A hookin (aka pegin) is the process of converting bitcoin into moneypot coins. With a little eliptical curve magic, we can generate
                        a special <em>hookin address</em> that is indistinguisable from a normal (native segwit) bitcoin address. Then <em>after</em> bitcoin has
                        been sent to that address and safely confirmed the client gives the server the neccessary information to spend the bitcoin
                        (most importantly the public key of the owner that was used to generate the hookin address) and the server gives the client some blinded coins, which
                        it is able to use.  Thanks to a little eliptical curve magic, only the server is able spend the coin and no one else. But also allows the client to prove it was the owner of that, to keep
                        the hookin system fully provably-honest.
                    </p>
                    <p>
                        From a user-point of view, a hookin is as simple as sending bitcoin to a bitcoin address! And for compatibility with software, can even be generated with bip32! 
                    </p>
                    <h2 id="hookouts">Hookouts
                        <a href="#hookouts" className="anchor-section float-right">#</a>
                    </h2>
                    <p>
                        A hookout (aka pegout) is the opposite of a hookin. It is the process of taking a set of blinded coins, and ask the server to send that amount to
                        a bitcoin address. Furthermore you can add some conditions to the hookout, such as the feerate to use for the bitcoin transfer and if you need the
                        transfer to happen immediately or not. The server is able to leverage economies of scale with large amounts of possible inputs, and able to
                        batch transations (when appropriate). For this reason, using moneypot as a bitcoin wallet is typically <em>signficantly</em> cheaper than using a
                        traditional wallet. 
                    </p>
                    <h2 id="hookouts">Transfers
                        <a href="#hookouts" className="anchor-section float-right">#</a>
                    </h2>
                    <p>
                        Blinded coins can also be transferred. The great thing about this is it is extremely efficient (no on-chain transaction) with
                        negligible fees and immedately finality (at least as quick as be when communicating with a server). It is also frequent to transfer and exchange
                        coins with yourself. For instance if you have 3 coins of magnitudes 5, it would make sense to convert 2 of them into a mangitude 6 coin.
                    </p>

                </Col>
            </Row>
        </SectionDiv>
        
        <SectionDiv>
           <LoadCoins/>
        </SectionDiv>
        
    </Layout>
)

export default Overview
