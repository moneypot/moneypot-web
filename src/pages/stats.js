import React from 'react';
import Layout from '../components/layout';
import SectionDiv from '../components/section-div';
import RoadmapRenderer from '../components/roadmap-renderer';
import { Row, Col } from 'reactstrap';


// change between roadmap, custodian commit history and wallet commit history
const Stats = () => (


    <Layout>
        <SectionDiv>
         <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            This page will display notable changes made to the moneypot software along with some statistics! Check it out!
            <RoadmapRenderer/>
          </Col>
         </Row>
        </SectionDiv>
    </Layout>
)

export default Stats

