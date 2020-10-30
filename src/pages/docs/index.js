import React from 'react'
import Scrollspy from 'react-scrollspy'
import { Row, Col } from 'reactstrap';


import Layout from '../../components/layout'
import SectionDiv from '../../components/section-div'
import Repl from '../../components/repl'


// an array of [title, react object]
const sections = [
    ["Create New Private Key", <div>
        We can easily create new private keys!
            <Repl>mp.PrivateKey.fromRand().toPOD()</Repl>
    </div>],
    ["Convert an amount to magnitudes", <div>
        <Repl>mp.amountToMagnitudes(10000)</Repl>
    </div>],
    ["Lorem ipsum dolor sit amet", <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium. Nisl pretium fusce id velit ut tortor pretium. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Vitae ultricies leo integer malesuada nunc vel risus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Phasellus vestibulum lorem sed risus ultricies tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Aenean euismod elementum nisi quis eleifend quam. Volutpat diam ut venenatis tellus in metus vulputate eu. Ultrices vitae auctor eu augue. Maecenas volutpat blandit aliquam etiam erat velit. Ridiculus mus mauris vitae ultricies leo. Donec enim diam vulputate ut pharetra sit amet aliquam id.

        A scelerisque purus semper eget duis at tellus. Dictum sit amet justo donec enim diam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. At lectus urna duis convallis convallis tellus. Nibh nisl condimentum id venenatis. Justo eget magna fermentum iaculis eu. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Nulla at volutpat diam ut. Purus faucibus ornare suspendisse sed. Elementum sagittis vitae et leo. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Ante in nibh mauris cursus mattis molestie. Ac turpis egestas sed tempus urna et pharetra. Accumsan lacus vel facilisis volutpat est. Mi bibendum neque egestas congue. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Nisi scelerisque eu ultrices vitae auctor eu augue. Sit amet porttitor eget dolor morbi. Ut venenatis tellus in metus vulputate. In nibh mauris cursus mattis molestie a iaculis at.
    </div>],
];


function urlize(u) {
    return encodeURIComponent(u.toLowerCase().replace(/\s/g, "-"))
}



const Docs = () => (
    <Layout>
        <SectionDiv>
            <Row className="this-row">
                <Col sm="3" className="sidenav">
                    <Scrollspy
                        className="list-group"
                        componentTag="div"
                        items={ sections.map(([title, body]) => urlize(title)) } currentClassName="sidenav-active">
                         { sections.map(([title, body]) => <a className="list-group-item list-group-item-action" href={ '#' + urlize(title) }  key={title} >{title}</a>) }
                    </Scrollspy>
                </Col>
                <Col sm='9'>
                    {
                        sections.map(([title, body]) => <section id={urlize(title)} key={title}>
                                <h2>{ title }
                                    <a href={ '#' + urlize(title) } className="anchor-section float-right">#</a>
                                </h2>
                                <hr />
                                { body }
                            </section>
                        )
                    }
                </Col>
            </Row>
        </SectionDiv>
    </Layout>
)

export default Docs

