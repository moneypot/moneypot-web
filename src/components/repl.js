import React from 'react'
import * as mpImport from 'moneypot-lib'

export default class Repl extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRun = this.onRun.bind(this);
    this.state = {
      value: this.props.children,
      result: Repl.run(this.props.children),
    }
  }

  static run(code) {
    let r;
    try {
      // eslint-disable-next-line
      const mp = mpImport;
      // eslint-disable-next-line
      r = eval(code);
    } catch (ex) {
      console.error(ex);
      return "Caught exception " + ex + " and logged to browser console";
    }

    // return (typeof r === 'string') ? r : JSON.stringify(r, null, 4);
    return JSON.stringify(r, (_, v) => typeof v === 'bigint' ? `${v}n` : v);
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
      result: null,
    });
  }

  onRun() {
    this.setState({ result: Repl.run(this.state.value) })
  }

  info() {
    if (this.state.result) {
      return <span><strong>Result: </strong>{ this.state.result }</span>
    } else {
      return <small>Code will execute unsandboxed. Do not run untrusted code.</small>
    }

  }



  render() {
    return (
        <div>
          <textarea className="code-area"
                    value={this.state.value}
                    onChange={ this.onChange }
                    cols={80} rows={ this.state.value.split("\n").length } />
            <pre className="code-result">
            {  this.info() }
            </pre>
            <div className="text-right">
              <button
                  className="btn btn-info"
                  style={{ margin: '0px 15px 15px'}}
                  onClick={ this.onRun}
              >Run</button>
            </div>
    </div>
    )
  }
}
