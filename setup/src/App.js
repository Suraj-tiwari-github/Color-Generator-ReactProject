import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor]=useState('');
  const [error, setError]=useState(false);
  const [list, setList]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("hello");

  }


  return <>color generator project
  <section className="container">
    <h3>Color Generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#f15025'/>
      <button type='submit' className='btn'>Submit</button>
    </form>
  </section>

  <section className="color">
    <h3>List Goes here</h3>
  </section>
  </>
}

export default App
