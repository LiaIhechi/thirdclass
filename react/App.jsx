import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {
  const [count, setCount] = useState(0)
  const [a, setA] = useState(9)
  const [b, setB] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [vat, setVAT] = useState(0)
 
  // Function to increase B based on count and a
  const increaseB = () => {
    setB(count + a)
  }
 
  const handler = (e) => {
    const price = parseInt(e.target.value, 10)
    setA(price)
  }
 
  const handleDiscount = (e) => {
    const discountValue = parseInt(e.target.value, 10)
    setDiscount(discountValue)
    calculateVAT(a, discountValue)
  }
 
  const calculateVAT = (price, discount) => {
    const vatValue = (price - discount) * 0.07
    setVAT(vatValue)
  }
 
  return (
<>
<div className="container">
<div className="logos">
<a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="inputs">
<label>
            Price (A):
<input
              type="number"
              value={a}
              style={{ fontSize: "20px", marginLeft: "10px" }}
              onChange={handler}
            />
</label>
<label>
            Discount:
<input
              type="number"
              value={discount}
              style={{ fontSize: "20px", marginLeft: "10px" }}
              onChange={handleDiscount}
            />
</label>
</div>
<h1>Value of A is {a}</h1>
<h1>Discount is {discount}</h1>
<h1>VAT is {vat.toFixed(2)}</h1>
<div className="card">
<button onClick={() => setCount(count + 1)}>
            count is {count}
</button>
<button onClick={() => setA(a + 1)}>
            Increase A (a is {a})
</button>
<button onClick={increaseB}>
            Increase B (b is {b})
</button>
</div>
<p>
          Edit <code>src/App.jsx</code> and save to test HMR
</p>
<p className="read-the-docs">
          Click on the Vite and React logos to learn more
</p>
</div>
</>
  )
}
 
export default App
