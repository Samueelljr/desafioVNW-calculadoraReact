import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [resultado, setResultado] = useState();
  const [error, setError] = useState();


  function soma() {
    setResultado(number1 + number2)
  }

  function subtracao() {
    if (number1 <= number2) {
      return setError("Operação inválida, digite um valor maior no primeiro espaço.")
    } else {
      setResultado(number1 - number2)
    }
  }
      


  function multiplicacao() {
    setResultado(number1 * number2)
  }

  function divisao() {
    if (number1 <= number2) {
      return setError("Operação inválida, digite um valor maior no primeiro espaço.")
    } else {
      setResultado(number1 / number2)
    }
  }

  function porcentagem() {
    setResultado((number1 * number2) / 100)
  }


  return (
    <main>
      <div className="container">

      <h1>Calculadora</h1>

      <input
      className='input'
      type="number"
      placeholder='Digite um número'
      value={number1}
      onChange={(event) => setNumber1(Number(event.target.value))}
      />

      <input
      className='input'
      type="number"
      placeholder='Digite um número'
      value={number2}
      onChange={(event) => setNumber2(Number(event.target.value))}
      />

      <h3>{error}</h3>

      <div className="btn-container">

        <button onClick={soma}>+</button>

        <button onClick={subtracao}>-</button>

        <button onClick={multiplicacao}>x</button>

        <button onClick={divisao}>/</button>

        <button onClick={porcentagem}>%</button>
      </div>

      <h2>{resultado}</h2>
      </div>
    </main>
  )
}

export default App