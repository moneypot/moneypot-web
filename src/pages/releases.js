import React, {useState, useEffect} from "react";
import { Button, Col, Row, Badge } from "reactstrap";
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { faPaperclip, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CopyToClipboard from "../components/copy-to-clipboard";
import { Link } from 'gatsby'



const ReleasesHero = () =>  { 
   return (
        <div
            className="hero"
            style={{
                background: `linear-gradient(#0552B1,#3D91F9), no-repeat center center fixed `,
                minHeight: '0vh',
                margin: '-5rem -2rem 0',
            }}
        >
            <div
                style={{
                    color: '#fff',
                    margin: '0% 8%',
                    padding: '10vh 2rem',
                    textAlign: 'center'
                }}
            >
                <Row style={{     display: 'flex', alignItems: 'center'}}>
                    <Col sm="4">
                        <h1 className="brand-title">releases</h1>
                    </Col>

                    {/* make links dynamic */}
                    <Col xs="12" sm="4" md="4" lg="">
                    <div className="hero-fourth-text">
                        <p >Windows (.exe): </p>
                        <p>release: v1.0.0</p>
                    </div>
                        <Button href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v1.0.0/moneypot-1.0.0.Setup.exe" color="secondary">Download windows setup</Button> {<br/>}
                        <a href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v1.0.0/moneypot-1.0.0.Setup.exe.asc" style={{color: '#fff'}}><FontAwesomeIcon icon={faPaperclip} />Accompanying signature</a>

                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                    <div className="hero-fourth-text">
                        <p >Linux (.deb): </p>
                        <p>release: v1.0.0</p>
                    </div>
                        <Button href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v1.0.0/moneypot_1.0_amd64.deb" color="secondary">Download Linux setup</Button> {<br/>}
                        <a href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v1.0.0/moneypot_1.0_amd64.deb.asc" style={{color: '#fff'}}><FontAwesomeIcon icon={faPaperclip} />Accompanying signature</a>
                    </Col>
                    {/* <Col xs="12" sm="4" md="4" lg="4">
                    <div className="hero-fourth-text">
                        <p >SHAsum of both .deb and .exe files: </p>
                    </div>
                        <Button href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v0.0.1/moneypot_0.0.1_SHASUMS256.asc" color="secondary">Download SHASUMS </Button> {<br/>}
                    </Col> */}
                </Row>
            </div>
        </div>
    )
} 


const HowandWhy = () => { 
    return (
    <SectionDiv>
        {<br/>}
    <h1> Why is there an additional wallet? What's the purpose?</h1>
    <p>
        This is a valid question. An electron implementation of moneypot has been created for a number of purposes, with the most notable one of them being: heightened security and privacy.
    </p>
    <p>
      When you load the moneypot wallet in your browser, you assume that <code>moneypot.com</code> belongs to <i>"us"</i>, the <i>"original"</i> moneypot developers. However, through malice, error, or other circumstances, it can happen that either the domain name, or the wallet script is corrupted and or harmful.
      In that case, your browser will still load the <i>"script"</i>: (<i>read:</i> <b>wallet</b>), as long as the checksum is correct, which can cause a loss of funds.
    </p>
    <p>
        Using the electron wallet, you yourself specify the version of the wallet you'd like to use, and subsequently both the URL and the checksum. An attacker can in no way modify the code in such a way that the checksum is still valid, and thus, as long as the script was <i>originally</i> untempered with, cannot affect you.
    </p>
    <p>
        An example of such an attack whereby the electron user is protected, and the web user is not is a domain hijacking. The web user will automatically load the new wallet file, whereas the electron user will attempt to load the originally specified script (with the original checksum), or nothing at all.
    </p>

    <p>
    Additional privacy is attained because of the wallet's harded-coded policy of routing traffic through tor and tor alone. If access to tor is restricted in your country, you might not be able to use the wallet.
    </p>
    
    <hr/>
    <br/>
    <h1>Verify the wallet executables!</h1>

    <p>
        There are two ways you can verify the wallet signatures. First, you'll need to import our signing key, which can be found here. <a href="https://keybase.io/doofenshmirtz/pgp_keys.asc"> 3887 6AFC 1172 E3DF A17A  84BB 2E5F 4A83 BFE8 1B1B</a>
    </p>
<p>Or, you can also import the key using the fingerprint.
</p>
<Col className="fee-box list-group-item-success" sm={{ size: 12, offset: 3 }}> 
        <code>gpg --keyserver hpk://keyserver.ubuntu.com --recv-keys 38876AFC1172E3DFA17A84BB2E5F4A83BFE81B1B</code>
         </Col> 
    <p>
        After that, you can either download the accompanying signature and verify that against your respective redistributable, which should check out.
    </p>
    <p>
        Alternatively, you can calculate the hash of the redistributable yourself, and compare it against our signed hashes, <a href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v1.0.0/shasums.asc">which can be found here</a>.
    </p>
    </SectionDiv>)
}


// updates down for now
const LatestUrl = () => { 
    
    const [version, setData] = useState(null)
    const getData = () =>fetch(`https://updates.moneypot.dev/`).then((res) => res.status === 200 ? res.json() : null).catch(error => alert(error.message));
    
    useEffect(() => {
       getData().then((data) => setData(data))
    }, [])

    if (version === undefined) {
        return <div>Fetching version!</div>
      }

    return (
        <SectionDiv>
         {<br/>}{<hr/>}
        <h1>Load the latest version URL</h1>
        <p>
            You might be wondering: how do I know I am loading the <i>real</i> wallet file?
            We will periodically update the latest version url to appear right below. However, as we have just explained, domain hijackings can happen at random.
            Therefore, it might be possible that the url linked below is also malicious. <br/>
            To make sure you're not loading a malicious URL, please either visit our <a href="https://github.com/moneypot/moneypot-wallet-dist">github</a> and download the signature from there, or download it down below.

        </p>

        <p>
        Make sure to verify the fingerprint matches the one on github. If you're in doubt, contact our support!
        </p>

       {version != null ?  <Col className="fee-box list-group-item-success" sm={{ size: 12, offset: 3 }}> 
    The version URL has last been changed on <strong>{JSON.stringify(new Date(version.latestDate).toLocaleDateString()).replace(/"/g, '')}</strong> which is <strong>~{JSON.stringify(Math.round((new Date().getTime() - new Date(version.latestDate).getTime()) / (60*60*24*1000)))}</strong>  days ago! For more information
          please check the{" "}
          <Link to="/stats">version history</Link>
         </Col> : undefined}
        <p>
            The current version URL is as following: (as can be found <a href="https://github.com/moneypot/moneypot-wallet-dist/releases/v1.0.0">here</a> on github.)
        </p>
        {version != null ?
        <CopyToClipboard className="btn btn-light" style={{}} text={version.versionScript}>
        {JSON.stringify(version.versionScript).replace(/"/g, '')} {" "}
         <FontAwesomeIcon icon={faCopy} />
          </CopyToClipboard> : undefined } 
        <p> 
            For which the signature is as following: (which can be found <a href="https://github.com/moneypot/moneypot-wallet-dist/releases/v1.0.0">here</a> on github)
        </p>
        {version != null ?
       <div> <Col className="fee-box list-group-item-success" sm={{ size: 12, offset: 3 }}> 
        <code>{version.signature}</code>
 </Col> <Button color="primary" href={`data:text/json;charset=utf-8,${encodeURIComponent(version.signature)}`} download={`moneypot_wallet_url_v1.0.0_sig.asc`}>Download sig!</Button></div>: undefined } {<br/> }
        <p>
            As explained, the signature should verify with the key belonging to the fingerprint linked above.
        </p> 
        </SectionDiv>

    )
}

const Releases = () => { 
    return ( 
        <Layout isHomepage={true}>
            <ReleasesHero/>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
            <HowandWhy/>
            <LatestUrl/>
            </Col>
            </Row>
            </Layout>
    )
}



export default Releases
