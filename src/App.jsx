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
  const [input, setInput] = useState(INITIAL_INPUT)

  function onInputChanged(event) {
    const { name, value } = event.target

    setInput((prevInput) => { return { ...prevInput, [name]: +value } })
  }

  return <>
    <Header />
    <UserInput userInput={input} handleChange={onInputChanged}/>
    <Results results={calculateInvestmentResults(input)}/>
  </>
}

export default App
