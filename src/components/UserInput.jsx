export default function UserInput({ userInput, handleChange }) {
    return <>
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input name="initialInvestment" type="number" value={userInput.initialInvestment} onChange={handleChange}/>
                </p>
                <p>
                    <label>Annual investment</label>
                    <input name="annualInvestment" type="number" value={userInput.annualInvestment} onChange={handleChange}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input name="expectedReturn" type="number" value={userInput.expectedReturn} onChange={handleChange}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input min="1" name="duration" type="number" value={userInput.duration} onChange={handleChange}/>
                </p>
            </div>
        </div>
    </>
}