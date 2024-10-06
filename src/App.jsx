import React, { useState } from 'react'
import './App.css'
import x from '../src/assests/winner.jpg'
export default function App() {
  let [state1,setstate]=useState("")
  let [state2,setstate2]=useState("")
  let [state3,setstate3]=useState("")
  let [state4,setstate4]=useState("")
  let [state5,setstate5]=useState("")
  let [state6,setstate6]=useState("")
  let [state7,setstate7]=useState("")
  let [state8,setstate8]=useState("")
  let [state9,setstate9]=useState("")  
  
  
  const winnerStyle = {
    color: '#fff',
    backgroundColor: '#4CAF50',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '3.5rem',
    textAlign: 'center',
    margin: '20px auto',
    width: '100%',
    height:'100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const imgStyle = {
    width: '800px',
    height: '600px',
    marginTop: '10px'
  };


  if (state1 === 'x' && state2 === 'x' && state3 === 'x') {
    return (
      <div style={winnerStyle}>
        X is the winner!
        <img src={x} alt="X wins" style={imgStyle} />
      </div>
    );
  } else if (state1 === 'o' && state2 === 'o' && state3 === 'o') {
    return (
      <div style={winnerStyle}>
        O is the winner!
        <img src={x} alt="O wins" style={imgStyle} />
      </div>
    );
  } else if (state4 === 'x' && state5 === 'x' && state6 === 'x') {
    return (
      <div style={winnerStyle}>
        X is the winner!
        <img src={x} alt="X wins" style={imgStyle} />
      </div>
    );
  } else if (state4 === 'o' && state5 === 'o' && state6 === 'o') {
    return (
      <div style={winnerStyle}>
        O is the winner!
        <img src={x} alt="O wins" style={imgStyle} />
      </div>
    );
  } else if (state7 === 'x' && state8 === 'x' && state9 === 'x') {
    return (
      <div style={winnerStyle}>
        X is the winner!
        <img src={x} alt="X wins" style={imgStyle} />
      </div>
    );
  } else if (state7 === 'o' && state8 === 'o' && state9 === 'o') {
    return (
      <div style={winnerStyle}>
        O is the winner!
        <img src={x} alt="O wins" style={imgStyle} />
      </div>
    );
  } else if (state1 === 'x' && state5 === 'x' && state9 === 'x') {
    return (
      <div style={winnerStyle}>
        X is the winner!
        <img src={x} alt="X wins" style={imgStyle} />
      </div>
    );
  } else if (state1 === 'o' && state5 === 'o' && state9 === 'o') {
    return (
      <div style={winnerStyle}>
        O is the winner!
        <img src={x} alt="O wins" style={imgStyle} />
      </div>
    );
  } else if (state3 === 'x' && state5 === 'x' && state7 === 'x') {
    return (
      <div style={winnerStyle}>
        X is the winner!
        <img src={x} alt="X wins" style={imgStyle} />
      </div>
    );
  } else if (state3 === 'o' && state5 === 'o' && state7 === 'o') {
    return (
      <div style={winnerStyle}>
        O is the winner!
        <img src={x} alt="O wins" style={imgStyle} />
      </div>
    );
  }


      
  return (
     <>
    <div id='main1'>
    <h1 id='hed'>Tic-Tac-Toe</h1>
    <img src="https://img.freepik.com/premium-vector/little-boy-holding-big-pencil_43633-2774.jpg" alt="img1" />
    <img style={{height:"350px",width:"250px",position:"absolute",left:"62%",top:"45%"}} src="https://static.vecteezy.com/system/resources/previews/012/850/218/non_2x/happy-boy-holding-pencil-vector.jpg" alt="img2" />
  <div id='main'>
  <table border={2}>
      <tbody>
      <tr>
        <td onClick={()=>setstate('x')} onDoubleClick={()=>setstate('o')}>{state1}</td>
        <td onClick={()=>setstate2('x')} onDoubleClick={()=>setstate2('o')}>{state2}</td>
        <td onClick={()=>setstate3('x')} onDoubleClick={()=>setstate3('o')}>{state3}</td>
      </tr>
      <tr>
        <td onClick={()=>setstate4('x')} onDoubleClick={()=>setstate4('o')}>{state4}</td>
        <td onClick={()=>setstate5('x')} onDoubleClick={()=>setstate5('o')}>{state5}</td>
        <td onClick={()=>setstate6('x')} onDoubleClick={()=>setstate6('o')}>{state6}</td>
      </tr>
      <tr>
        <td onClick={()=>setstate7('x')} onDoubleClick={()=>setstate7('o')}>{state7}</td>
        <td onClick={()=>setstate8('x')} onDoubleClick={()=>setstate8('o')}>{state8}</td>
        <td onClick={()=>setstate9('x')} onDoubleClick={()=>setstate9('o')}>{state9}</td>
      </tr>
      </tbody>
    </table>
    </div>
    </div>
    </>
  )
}