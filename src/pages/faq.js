import React, { useState }  from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { UncontrolledCollapse, CardBody, Button, Col, Row, Card, Collapse } from 'reactstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

import clientsync from '../images/client-sync.png';



const Wallet = () => { 
  return (
    <React.Fragment>
      <div className="faq-header">
      <h2>Questions related to the accessibility of our wallet.
      <a href="#Accessibility" className="anchor-section float-right">#</a>
      </h2>
      </div>
    <div id="wallet1" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! The wallet won't load on my device and/ or browser!</h3>   </div>
    <UncontrolledCollapse toggler="wallet1" style={{marginLeft: 50, marginBottom: 0}}><p>Check the error message! If there is a blank screen referencing the following error: <code> "Your browser doesn't support big integers. Please see: https://caniuse.com/#feat=bigint"</code>, 
    your browser and/ or device is <i>currently</i> unsupported. Either switch or upgrade your browser and/ or device to conform to the aforementioned standards. 
    There is nothing else we can do to help. </p>

   <p>For any persistent errors unrelated to this issue, contact our support with details regarding your error and any additional information you're able to gather. </p> </UncontrolledCollapse>


    <div id="wallet2" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! How do I secure my wallet, I can see my mnemonic phrase using developer tools?!</h3>   </div>
    <UncontrolledCollapse toggler="wallet2" style={{marginLeft: 50, marginBottom: 0}}><p>moneypot uses BIP39 for seed derivation, which makes use of mnemonic words plus an additional optional phrase.
     An attacker, <b>given that the additional phrase has sufficient <a href="https://xkcd.com/936/">entropy</a></b>, won't be able to do anything with the mnemonic phrase itself, as the seed would be derived from the mnemonic + additional phrase. </p>
   <p>Please be aware that this is a two-way street; adding an additional phrase to your wallet also means that you will need that phrase to recover your wallet, as just the mnemonic phrase will not be sufficient.</p> </UncontrolledCollapse>

    <div id="wallet3" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! I've forgotten my mnemonic/custodian/password!</h3> </div>
    <UncontrolledCollapse toggler="wallet3" style={{marginLeft: 50, marginBottom: 0}}><p>moneypot and/ or other custodians cannot help with either of the above-described issues.
     Please make sure you remember your custodian, mnemonic phrase and accompanying password. </p> 
    <p> Please note that for each "wallet" (unless specified otherwise by you) the wallet software generates a unique mnemonic phrase. </p> </UncontrolledCollapse>

    <div id="wallet9" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! I think I've found a (severe!?) bug!</h3>    </div>
    <UncontrolledCollapse toggler="wallet9" style={{marginLeft: 50, marginBottom: 0}}> <p>This is (not so!) great news. If you think you've found a severe vulnerability in either the wallet or custodian software, it would be extremely appreciated if you were to report it. 
    You can do so by sending an email to our support.
Certain bounties may be given in the form of monetary compensation or a fictitious share in the rollover profits of certain custodians.</p>

    <p> Reporting visual bugs and/ or other nuisances is also appreciated.</p>
    <p>     <small>Compensation is not guaranteed and depends on the severity of the reported issue.</small>
</p>  </UncontrolledCollapse>
{<br/>}
         {<hr/>}
    </React.Fragment>
    
  )
}

const WorkingsWallet = () => { 
  return ( 
    <React.Fragment>
    <div className="faq-header">
    <h2 id="Principles">Principles of the moneypot wallet.
    <a href="#Principles" className="anchor-section float-right">#</a>
    </h2>
    </div>
  <div id="Workingswallet1" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! I received my own inputs back!</h3>   </div>
  <UncontrolledCollapse toggler="Workingswallet1" style={{marginLeft: 50, marginBottom: 0}}><p> This may seem weird, but it can happen. 
  One of the most fundamental principles of moneypot is that all coins <i>(read: inputs)</i> are blinded. As a result, moneypot cannot determine which inputs originally belonged to you, and which didn't. 
  It is therefore possible to receive your own inputs back. </p> 
  <p> If this is something you are bothered about, note that there is invariably a possibility that the link is not broken. This is not the or a focus of moneypot.</p> 
  
  <p>Certain measures that could decrease the chances of you receiving your own inputs back could be: switching from <i>lightning</i> to <i>normal</i> transactions and vice versa; waiting a certain amount of time for your original inputs to rollover, or spending radically different amounts. <code>These measures should not be confused with unlinkeability!</code>. Again, this is not a priority for moneypot, nor possible, so we cannot be of help with such problems. </p> </UncontrolledCollapse>
  <div id="Workingswallet2" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! Does moneypot offer on-chain unlinkeability?!</h3>   </div>
  <UncontrolledCollapse toggler="Workingswallet2" style={{marginLeft: 50, marginBottom: 0}}> <p>This question is a bit of a rehash and or has a lot of common ground with the above-mentioned question, yet it is still important to make clear: <b>NO!</b> moneypot does <b>NOT</b> offer on-chain unlinkeability.</p>
  <p> What moneypot does offer, (that is, under the most ideal conditions) is unlinkeability within its own ecosystem. What exactly does this mean, you ask? For that we first need to explore what exactly unlinkeability is, and how it's applied in this context. 
    </p>
    <p> At moneypot, we speak of something being unlinked if there is a statistical improbability that calculates to a functional impossibility of A provably being related to B.</p>
      <p> Within the moneypot ecosystem, we can speak to the variables that make this possible; that is, if our software is used correctly, this environment can be created. Partly as a result thereof, it is impossible for us to speak to the unlinkeability outside of our ecosystem.
        </p></UncontrolledCollapse>
  

  <div id="Workingswallet3" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! My lightning/regular tx has not been sent yet!</h3>   </div>
  <UncontrolledCollapse toggler="Workingswallet3" style={{marginLeft: 50, marginBottom: 0}}> <p>moneypot has been designed in such a way that there should be, relatively speaking, immediate settlement of funds. 
  There might be some conditions under which these constraints break. </p> 
  <p>If you have requested a lightning payment or an <code>immediate / custom</code> hookout which has been acknowledged by the custodian, but not deployed and/ or settled, contact the related operator. </p>  </UncontrolledCollapse>
  
  <div id="Workingswallet4" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! I think the custodian cheated on my Hookin/Hookout/Lightning Payment/Lightning Invoice!</h3>   </div>
  <UncontrolledCollapse toggler="Workingswallet4" style={{marginLeft: 50, marginBottom: 0}}>
    <p>This is possible. It could be that the custodian neglected to either credit or send out your transaction. moneypot has been designed in such a way that this should be trivial to prove.</p>
  <p>If you are convinced that the custodian purposefully did not credit your hookin, you can prove it by posting the claimant (public key) belonging to your address. Using the public key, It can be tweaked by the fundingKey of the custodian and subsequently publicly verified that the address belongs to the custodian.
    </p>
    <p>
    Given the parameters of your hookin, anyone will be able to query to see whether the custodian accredited your deposit. Once proof is provided of the address belonging to the custodian in question, it can be reasoned that the burden of proof from that point forward falls on the custodian: they should and could publish the hash of the claimable.
    {<br/>} However, delayed accredition of deposits is <i>usually</i> not a sign of cheating!
    </p>
    <p>
      If the server does not send out your hookout, it is trivial to share this and subsequently make it obvious they are cheating you. However, please note that delayed hookouts are <i>usually</i> not signs of cheating attempts!
    </p>
    <p>
      It becomes a bit more complicated with regard to the lightning network; but there are various methods in which cheating can be proven.
    </p>
    <p>
    In regard to lightning payments: If a custodian does not publish the preimage of the invoice within a reasonable amount of time, while offering no explanation for not doing so (a rebate!), a dialogue can and should be opened.
      If the custodian publishes a preimage that does not correlate with the payment hash, cheating can easily be established.
    </p>
    <p>
      In regard to lightning invoices: This becomes a bit more tricky. A custodian could generate your invoice, relay it you and you subsequently to the payee, whom then subsequently pays the invoice.
      The custodian could never relay the payment status to you, <i>the client</i>, and instead keep the funds for himself.
      To prove this, you will need help from the payee of the invoice. He will need to supply you with the preimage that matches the payment hash of the generated invoice to prove the invoice was in fact paid.
    </p>
    <p>
      More sophisticated and traditional methods of cheating include: marking your coins as spent, marking your coins as invalid.
    </p>
    <p>
    If your custodian marks one or more of your coins as spent without providing an accompanying signature that matches the coin's spending parameters (a hash of variables such as the amount, address), it is trivial to point out that they're cheating you.
    The only person that can create a valid signature is the owner of the coin(s), as no one else would have access to the private key(s) belonging to the coin(s).
    </p>
<p>
   If the custodian provides you with your own authorization signature, but incorrect spending parameters, the signature should not verify, and cheating would be trivial to prove.
    If a custodian does not accept a valid receipt (unblinded blind signature), we can simply publish the (receipt) signature along with the coin's pubkey and the pubkey corresponding to the blinded magnitude for anyone to verify.
</p>
    <p>
  <strong>Note! Because of the fact that moneypot is still in beta, there might be extreme edge-cases where custodians could cheat the client whereby it is impossible for the client to prove he was cheated upon.
Reporting these edge-cases is genuinely appreciated and depending on the severity will most likely result in monetary compensation!</strong>
    </p>

  </UncontrolledCollapse>
  {<br/>}
         {<hr/>}

  </React.Fragment>
  )
}

const BusinessModel = () => { 
  return (
  <React.Fragment>
  <div className="faq-header">
  <h2 id="Business-model">Questions related to the business model of Custodians.
  <a href="#Business-model" className="anchor-section float-right">#</a>

  </h2>
  </div>

<div id="biz1" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help!? Uhm... Moneypot and or other custodians will  “take“ my money if I don't withdraw it before X date..?</h3> </div>
<UncontrolledCollapse toggler="biz1" style={{marginLeft: 50, marginBottom: 0}}><p>In short: Yes. Most custodians will do this. Please read more about the business model of custodians <Link to="/business-model">here!</Link> </p> </UncontrolledCollapse>


<div id="biz2" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} /> Help! How do I know when my custodian will rollover/wipe?!</h3> </div>
<UncontrolledCollapse toggler="biz2" style={{marginLeft: 50, marginBottom: 0}}><p>If your custodian has scheduled wipes, they should provide the wallet with a signed date if asked for it, which can be found both in your configuration, and <a href="https://wallet.moneypot.com/faq">here.</a>
<br/> Be wary of custodians which don't specify wipe dates and/ or subsequently ask what their "alternative" business model is.</p> </UncontrolledCollapse>


<div id="biz3" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} /> Help! My custodian wiped before I was able to withdraw my money!</h3> </div>
<UncontrolledCollapse toggler="biz3" style={{marginLeft: 50, marginBottom: 0}}><p>Please differentiate between the two most obvious scenario's: <i>Either you were too late</i>, in which case moneypot will likely be unable to assist you. 
You could contact moneypot (or the operator of the custodian) with a list of your unblinded coins along with the receipt(s) and magnitude(s), but there are no guarantees. (moneypot will most likely publish a recovery policy in a little while which specifies how and in which timeframe you'll be able to recover your lost coins on their affiliated custodians.) </p> 
<p><i>Or the custodian diverted from their previously announced wipe date</i>: In which case you should immediately publish and/ or email a copy of your config + the accompanying signature signed by the custodian. 
There is little chance you'll be able to get your money back, but everyone should be aware of this as soon as possible.</p></UncontrolledCollapse>
{<br/>}
         {<hr/>}
</React.Fragment>
  )
}

const Trust = () => { 
  return (
    <React.Fragment>
    <div className="faq-header">
    <h2 id="Trust">Questions related to trust and SPOF.
    <a href="#Trust" className="anchor-section float-right">#</a>

    </h2>
    </div>
  
  <div id="trt1" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} />  Help! I have to trust moneypot and/ or the custodian operator blindly?</h3></div>
  <UncontrolledCollapse toggler="trt1" style={{marginLeft: 50, marginBottom: 0}}>  <p>Unfortunately, yes. Various aspects come into play: While the wallet software is open-source, there might be unspotted bugs that can lead to a loss of funds. 
  There is no guarantee in regards to the stability of any of our software. Please read our TOS before using our services. </p>
  <p>The design of the communication between the wallet client and the custodian is supposed to be 100% provably fair, but this A. does not mean that this is guaranteed: there might be certain exploits which allow for unprovable communications.
   And B: communications cannot be enforced, merely proven. Custodians can run off with your funds at any given time. Custodians who claim otherwise should provide mathematical proof of their inability to do so.</p>
   
   <p> Consequently: Please do not use or store more funds in custodians than you're willing to lose. </p>
  <p>Do not use the moneypot wallet as your primary or long storage wallet, but instead, recognize it as a wallet that can be used for day-to-day operations and/ or similar. 
  </p> </UncontrolledCollapse>
  {/* TODO */}
<div id="trt3" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} /> Help! What happens if a custodian goes offline? Can i get my bitcoins back?!</h3> </div>
  <UncontrolledCollapse toggler="trt3" style={{marginLeft: 50, marginBottom: 0}}> <p> A custodian that has gone offline is not instantaneously reason for concern, as there can be various causes ranging from DDOS-attacks to maintenance. </p>
 <p> Regarding data-loss and/ or other time sensitive issues, there will always be a signature required for actions that involve coins. 
  custodians cannot, without it being unprovable that is, go offline and take your money or anything of that nature. </p>
 <p>Please note however that it might be possible for a custodian to go down, broadcast your requested transaction, and not post an acknowledgement back. Be wary of accidently double-spending this way. </p> <p> It is impossible to get your money back without communications from the custodian. </p>
</UncontrolledCollapse>
<div id="trt4" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} /> Help! What data exactly can or is logged by the custodian?</h3> </div>
  <UncontrolledCollapse toggler="trt4" style={{marginLeft: 50, marginBottom: 0}}> <p> Custodians can potentially create extremely accurate profiles of their clients, and might do so when and where required. It is therefore extremely important that you are aware of what can be logged. This includes but is not limited to: IP addresses, User agents and or metadata ( + anything you might send to the custodian). <code>Note: We only take into consideration what can be logged in an unnoticeable manner.</code> </p>
  <p>There are certain ways custodians could, up to an acceptable level of certainty, link your inputs and outputs together. This would for example be possible when you immediately after hooking in sweep your blinded coins out again. </p>
    <p>Another huge vector you should keep in mind is resyncing and or restoring your wallet. Depending on the size of the custodian, and certain mitigations you may or may not take, it can be trivial for a custodian to fully deanonymize you.</p>
   <p>
     Let's make up a small scenario: We are recovering a wallet: Imagine you've hooked in Z satoshi's between n hookins (a hookin is nothing more than a regular bitcoin deposit!). First, <i>you</i> (the client) will scan his addresses until he has found any transactions, or the gap limit.. (up until we have n hookins)
     Then, given that a transaction has been found, the client constructs a hookin and asks the custodian to add it. The custodian now learns someone is asking for these hookins. It'll respond with an acknowledgement of the hookin, or the just the queried hookin itself if it has seen the transaction before.
   </p>
   <p>
     Now, the wallet does not know whether he has already claimed these coins, so he will query for this (statuses of the hookin) as well. the client now learns whether or not he already received coins (in the case of a recovery), and will otherwise try to claim the hookin, (given that the hookin was accepted). From this action, the custodian learns very little new information; He can only reinforce which claimables might belong to you, as you are requesting the statuses from the same set of claimables that have just been requested before.
   </p>
   <p>
     However, now that you've relearned or claimed your n set of (unnested) coins, you will need to check which ones have already been used and or spent with. The most efficient way to learn this as the client is to simply query all of your unblinded coins to the custodian (one by one) and see what the custodian returns.
     This however almost <i>completely</i> deanonymizes you depending on how much traffic the custodian is receiving. Why you ask? The custodian has previously learned your claimables, and it's accompanying blinded coins.
     Through simple heuristics, the custodian can approximate the coins belonging to the previously synced claimables, especially if they approximate to around the same magnitude.
   </p>
   <img
                    src={clientsync}
                    alt="Client Sync vs Custodian"
                    style={{ width: '560px'}}
                />
   <p>
     An example of how this looks: [1]: Syncing of hookins, [2]: requesting hookin statuses, [3]: requesting "unblinded" coin statuses, [4]: requesting spending statuses, [3.2]: requesting "unblinded" coin statuses resulting from the spending statuses (if they exist, for the claimable amount of a spending claimable =/= 0), plus the ones we haven't yet requested from the original array.
   </p>
   <p>
     The consequences of this are enormous, as a malicious custodian could sell and or blackmail you with this data. It's highly likely that with this data in the majority of cases a blockchain analysis company such as chainanalysis[1] could track where exactly the bitcoins were coming from and where you sent them in a matter of seconds.
   </p>
    <p>
      Moneypot has recognized this issue, and we've implemented some slight improvements to combat this issue. In settings, you'll need to enable <code>Add a random delay when synchronizing, Add ghost coins when synchronizing</code>.
      The idea of these measures is to somewhat thwart the custodian. Depending on the size of the custodian, it becomes increasingly hard to correctly group inputs and outputs when multiple people are syncing, or when the magnitudes of the unblinded coins do not add up to the magnitudes of the blinded coins.
    </p>

   <p>
     However, if you're extremely privacy-oriented, these mitigations probably won't be sufficient. 
    </p>
    <p>
     Additional steps you can take: Use a new seed for every N set of transactions, (for example by self-transferring all of your coins), so that when you need to resync, only a small portion of claimables is potentially affected.
   </p>
   {/* <p>
     We advise this in general: Try to keep the amount of coins in your wallet under 1000. There might be unforeseen bugs and or other problems that arise after reaching this amount, including extremely large and resource-intensive sync times, with potentially disastrous consequences in regards to your privacy and anonimity.
   </p> */}
   <p>
     Additional note: the above scenario assumes you're using a (rotating) TOR IP address. If you are using a residential IP or uncommon proxy, the custodian can use this to link your inputs, outputs or both of them together, the same applies to browser metadata, (uncommon headers and so forth).
   </p>
    {/* IP, browser info, group blinded coins through heuristics, group unblinded coins through heuristics</p> */}
</UncontrolledCollapse>
{<br/>}
         {<hr/>}
  </React.Fragment>
    )
}

const DesktopWallet = () => {
  return (
    <React.Fragment>
          <div className="faq-header">
    <h2 id="Desktop">Questions related to our Desktop wallet.
    <a href="#Desktop" className="anchor-section float-right">#</a>

    </h2>
    </div>
    <div id="desk1" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} /> Help! Moneypot has a desktop wallet?!</h3> </div>
<UncontrolledCollapse toggler="desk1" style={{marginLeft: 50, marginBottom: 0}}><p>Yes. Moneypot has an electron implementation of the web wallet. In short: we load the webpack script (wallet) into electron which offers additional privacy and security in comparison to using the wallet in a browser. <Link to="/releases">you can read more here.</Link> </p></UncontrolledCollapse>
<div id="desk2" className="faq-linebreak"><h3> <FontAwesomeIcon icon={faQuestionCircle} /> Help! I don't want to use the desktop wallet but I neither want to load insecure wallet files?!</h3> </div>
<UncontrolledCollapse toggler="desk2" style={{marginLeft: 50, marginBottom: 0}}><p>Luckily for you, we've kept this in mind. Head over to <a href='https://wallet.moneypot.com'>our wallet</a>, right click, and save the HTML page. From now on, you can load the HTML file instead of <code>https://wallet.moneypot.com</code>. 
<br/>
Using F12, you can see that the local HTML file loads a (the!) webpack script, as long as the checksum matches. If the checksum does not match (a malicious actor has changed the contents of the webpack file!), the wallet will not load.</p>
<p><b>Note:</b> You will still need to manually update!</p></UncontrolledCollapse>
{<br/>}
         {<hr/>}
    </React.Fragment>
  )
}

const Api = () => { 
   
}
const Faq = () => (
    <Layout>
        <SectionDiv>
        <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
            <h1>Frequently asked questions</h1>
            <p>Please, before contacting our support, check if your issue is listed below. If not, or if in doubt: feel free to contact us anyway! We'd be happy to answer your questions.</p>
        <hr/>
         <Wallet/>
         <WorkingsWallet/>  
         <BusinessModel/>
         <Trust/>
         <DesktopWallet/>
     <Link to="/contact"><Button color="primary">Contact us! </Button></Link>
     {<br/>}
     {<br/>}
     </Col>
     </Row>
       </SectionDiv>

    </Layout>
)

export default Faq
