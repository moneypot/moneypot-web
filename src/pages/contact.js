import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import {Row, Col} from 'reactstrap'



const Contact = () => (
    <Layout>
        <SectionDiv>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <h1>Contact</h1>
                    <h2 id="Email">Email
                        <a href="#Email" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                        For support requests related to the wallet or its affiliated custodians, you can send an email to <a href="mailto:support@moneypot.dev?Subject=Support%20Request">support@moneypot.dev</a> 
                    </p>
                    <p>
                        Alternatively, if the question is of public significance, or does not involve sensitive information, you can post in our ANN thread / PM our account on bitcointalk <code>TODO</code>
                    </p>
                    <p>
                        For extremely sensitive issues you can encrypt your message using the following PGP key: <code>TODO</code> 
                    </p>
                    <p>
                        <b>Note:</b> Never send your private keys, wallet seeds, and or any other private information to anyone. Be aware: certain support requests could potentially deanonymize you.
                    </p>
                    </Col>
                    </Row>
        </SectionDiv>
    </Layout>
)

export default Contact
