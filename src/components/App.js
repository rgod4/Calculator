import React, { Component } from 'react'
import './App.css';
import ResultBar from './ResultBar';
import KeyBox from './KeyBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputString: "0",
      eqnString: "0",
      eqnValue: 0
    }
  }





  evaluate = (eqnstr, inpstr, opr) => {
    let n1 = eqnstr.length;
    let eqn = eqnstr;
    let inp = "0";
    let d1=Number(inpstr);

    if (opr === "+" || opr === "-" || opr === "*" || opr === "/" || opr === "=") {
        
        if(isNaN(Number(eqnstr[n1 - 1]))){
          let d2=Number(eqnstr.slice(0,-2))
          if(inpstr === "0" && opr !=="=")
            eqn=`${d2}`;
          else if (eqnstr[n1 - 1] === "+")
            eqn=`${d2+d1}`;
          else if(eqnstr[n1 - 1] === "-")
            eqn=`${d2-d1}`;
          else if(eqnstr[n1 - 1] === "*")
            eqn=`${d2*d1}`;
          else if(eqnstr[n1 - 1] === "/")
            eqn=`${d2/d1}`;
        }
        else
          eqn=inpstr;
        if(opr === "=")
          inp=eqn;
        else
          eqn+=" "+opr;
    }
    else{
      if(opr === "1/x"){
        console.log("@");
        inp=`${1/d1}`;
      }
      else if(opr === "sqrt(x)"){
        inp=`${d1**(1/2)}`;
      }
      else if(opr === "x^2"){
        inp=`${d1**2}`;
      }
    }

    return {
      inputString : inp,
      eqnString: eqn
    };
  }




  handlekey = (event) => {
    let btn = event.target.textContent;
    console.log(btn);
    let val = Number(btn);

    if (isNaN(val) === false) {
      this.setState((prevstate) => {
        return {
          inputString: (prevstate.inputString === "0") ? (btn) : (prevstate.inputString + btn)
        }
      })
    }
    else if (btn === ".") {
      this.setState((prevstate) => {
        return {
          inputString: prevstate.inputString.includes('.') ? prevstate.inputString : prevstate.inputString + ".",
        }
      })
    }
    else if (btn === "C") {
      this.setState({
        inputString: "0",
        eqnString: "0",
        eqnValue: 0,
      })
    }
    else if (btn === "del") {
      this.setState((prevstate) => {
        return {
          inputString: prevstate.inputString.length === 1 || (prevstate.inputString.length === 2 && prevstate.inputString[0] === "-") ? "0" : prevstate.inputString.slice(0, -1),
        }
      })
    }
    else if (btn === "CE") {
      this.setState({
        inputString: "0",
      })
    }
    else if(btn === "+/-"){
      this.setState((prevstate)=>{
        let d=Number(prevstate.inputString);
        return{
          inputString: `${-d}`
        }
      })
    }
    else{
      this.setState((prevstate)=>{
        return this.evaluate(prevstate.eqnString,prevstate.inputString,btn);
        })
    }
  }

  render() {
    let { inputString, eqnString } = this.state;

    return (
      <>
        <div id="mainbox">
          <h1 id="heading">STANDARD CALCULATOR</h1>
          <ResultBar value={inputString} eqn={eqnString} />
          <div id="keybox" onClick={this.handlekey}>
            <KeyBox />
          </div>
        </div>
      </>
    );
  }
}

export default App;
