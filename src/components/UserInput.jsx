export default function UserInput({ initialInput, inputChanged }) {
    let input = initialInput
    function updateInput(event) {
        const { name, value } = event.target
        input[name] = parseInt(value)
        inputChanged(input)
    }

    return <>
        <div id="user-input">
            <div className="input-group">
                <label>Initial investment</label>
                <label>Annual investment</label>
            </div>
            <div className="input-group">
                <input name="initialInvestment" type="number" value={input.initialInvestment} onChange={updateInput}/>
                <input name="annualInvestment" type="number" value={input.annualInvestment} onChange={updateInput}/>
            </div>
            <div className="input-group">
                <label>Expected return</label>
                <label>Duration</label>
            </div>
            <div className="input-group">
                <input name="expectedReturn" type="number" value={input.expectedReturn} onChange={updateInput}/>
                <input name="duration" type="number" value={input.duration} onChange={updateInput}/>
            </div>
        </div>
    </>
}