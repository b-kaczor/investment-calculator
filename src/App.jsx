import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { calculateInvestmentResults } from "./util/investment"

const INITIAL_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 5000,
  expectedReturn: 8,
  duration: 10  
}

function App() {
  const [input, setInput] = useState({ ...INITIAL_INPUT })
  const [result, setResult] = useState([])


  function onInputChanged() {
    let newResult = calculateInvestmentResults(input)
    setResult(newResult)
  }

  return <>
    <Header />
    <UserInput initialInput={INITIAL_INPUT} inputChanged={onInputChanged}/>
    <Results />
  </>
}

export default App
