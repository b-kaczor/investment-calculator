import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { calculateInvestmentResults } from "./util/investment"

const INITIAL_INPUT = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 7,
  duration: 10  
}

function App() {
  const [input, setInput] = useState({ ...INITIAL_INPUT })
  const [results, setResults] = useState([])


  function onInputChanged(newInput) {
    setInput(newInput)
    let newResults = calculateInvestmentResults(newInput)
    setResults(newResults)
  }

  return <>
    <Header />
    <UserInput initialInput={INITIAL_INPUT} inputChanged={onInputChanged}/>
    <Results results={results}/>
  </>
}

export default App
