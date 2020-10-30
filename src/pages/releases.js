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
                        <p>release: v0.0.1</p>
                    </div>
                        <Button href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v0.0.1/moneypot-0.0.1_Setup.exe" color="secondary">Download windows setup</Button> {<br/>}
                        <a href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v0.0.1/moneypot-0.0.1_Setup.exe.asc" style={{color: '#fff'}}><FontAwesomeIcon icon={faPaperclip} />Accompanying signature</a>

                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                    <div className="hero-fourth-text">
                        <p >Linux (.deb): </p>
                        <p>release: v0.0.1</p>
                    </div>
                        <Button href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v0.0.1/moneypot_0.0.1_amd64.deb" color="secondary">Download Linux setup</Button> {<br/>}
                        <a href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v0.0.1/moneypot_0.0.1_amd64.deb.asc" style={{color: '#fff'}}><FontAwesomeIcon icon={faPaperclip} />Accompanying signature</a>
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
      When you load the moneypot wallet in your browser, you assume that <code>https://moneypot.com</code> belongs to <i>"us"</i>, the <i>"original"</i> moneypot developers. However, through malice, error, or other circumstances, it can happen that either the domain name, or the wallet script is corrupted and or harmful.
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
        There are two ways you can verify the wallet signatures. First, you'll need to import our signing key, which can be found here. <a href="https://keybase.io/TODO/pgp_key.asc">TODO</a>
    </p>
    <p>
        After that, you can either download the accompanying signature and verify that against your respective redistributable, which should check out.
    </p>
    <p>
        Alternatively, you can calculate the hash of the redistributable yourself, and compare it against our signed hashes, which can be found here. <a href="https://github.com/moneypot/moneypot-wallet-electron/releases/download/v0.0.1/moneypot_0.0.1_SHASUMS256.asc">TODO SHASUMS256</a>
    </p>
    </SectionDiv>)
}

const LatestUrl = () => { 
    const [date, setDate] = useState({});
    const [VersionUrl, setVersionUrl] = useState({})

    useEffect(() => { 
        const wrapper = async () => { 
            // fetch updates.moneypot.dev
            const json = await (await fetch("../../latest-version/latest-version.json")).json()
            setDate(json.latestDate) 
            setVersionUrl(json.versionScript)
        }
        wrapper()
    }, [])
    return (
        <SectionDiv>
        {<br/>}{<hr/>}
        <h1>Load the latest version URL</h1>
        <p>
            You might be wondering: how do I know I am loading the <i>real</i> wallet file?
            We will periodically update the latest version url to appear right below. However, as we have just explained, domain hijackings can happen at random.
            Therefore, it might be possible that the url linked below is also malicious. <br/>
            To make sure you're not loading a malicious URL, please either visit our <a href="https://github.com/moneypot/moneypot-wallet-dist">github</a> and import the fingerprint we use to sign our releases with, or copy the fingerprint below.

        </p>

        <p>
            Fingerprint <code>TODO</code>
        </p>
        <p>
        Make sure to verify the fingerprint matches the one on github. If you're in doubt, contact our support!
        </p>

        <Col className="fee-box list-group-item-success" sm={{ size: 12, offset: 3 }}> 
    The version URL has last been changed on <strong>{JSON.stringify(new Date(date).toLocaleDateString()).replace(/"/g, '')}</strong> which is <strong>~{JSON.stringify(Math.round((new Date().getTime() - new Date(date).getTime()) / (60*60*24*1000)))}</strong>  days ago! For more information
          please check the{" "}
          <Link to="/changelog/#version-history">version history</Link>
         </Col>
        <p>
            The current version URL is as following: (as can be found <a href="https://github.com/moneypot/moneypot-wallet-dist/releases/v0.0.1">here</a> on github.)
        </p>
        <CopyToClipboard className="btn btn-light" style={{}} text={VersionUrl}>
        {JSON.stringify(VersionUrl).replace(/"/g, '')} {" "}
         <FontAwesomeIcon icon={faCopy} />
          </CopyToClipboard>
        <p>
            For which the signature is as following: (which can be found <a href="https://github.com/moneypot/moneypot-wallet-dist/releases/v0.0.1">here</a> on github)
        </p>
        <Col className="fee-box list-group-item-success" sm={{ size: 12, offset: 3 }}> 
        <code>Signature... Todo?</code>
         </Col>
        <p>
            As explained, the signature should verify with the key belonging to the fingerprint linked above.
        </p>
        </SectionDiv>

    )
}
// const UseURL = () => { 
//     return (
//         <SectionDiv>
//             <h1>Usage</h1>
//             <p>
//                 Please make sure when copying the URL, you 
//             </p>
//         </SectionDiv>
//     )
// }


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
