import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';


export default function Whymoneypot() {
     return (    
        <div>
        <div className="index-notice">
            <h2>Coming soon...</h2>
            <p>
                The moneypot.com domain was aquired from monsterbyte.io and will be used for an exciting new crypto wallet. Currently in limit private testing, so please come back in a week or two!
            </p>
        </div>
        <h2>Why moneypot?</h2>
                <p style={{fontWeight: 'bold'}}>See for yourself:</p>
                <div className="comparison-table">
                    <div>
                        <div></div>
                        <div>moneypot</div>
                        <div>Any Wallet</div>

                    </div>
                    <div>
                        <div>Private</div>
                        <div><FontAwesomeIcon icon="check" style={{ color: 'green'}}/></div>
                        <div><FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
                    </div>
                    <div>
                        <div>Send fee [fast]</div>
                        <div>....sat (-%)</div>
                        <div>....sat </div>
                    </div>
                    <div>
                        <div>Send fee [eco]</div>
                        <div>....sat (-%)</div>
                        <div>....sat </div>
                    </div>
                    <div>
                        <div>Receive fee</div>
                        <div>....sat (-%)</div>
                        <div>....sat </div>
                    </div>
                    <div>
                        <div>Instant tx</div>
                        <div><FontAwesomeIcon icon="check" style={{ color: 'green'}}/> moneypot direct</div>
                        <div><FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
                    </div>
                </div>
    </div> )}

 

