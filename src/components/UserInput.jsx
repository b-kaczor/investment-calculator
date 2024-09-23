export default function UserInput({ initialValueChanged, annualInvestmentChanged, returnChanged, durationChanged }) {
    return <>
        <div id="user-input">
            <div className="input-group">
                <label>Initial investment</label>
                <label>Annual investment</label>
            </div>
            <div className="input-group">
                <input type="number" onChange={initialValueChanged}/>
                <input type="number" onChange={annualInvestmentChanged}/>
            </div>
            <div className="input-group">
                <label>Expected return</label>
                <label>Duration</label>
            </div>
            <div className="input-group">
                <input type="number" onChange={returnChanged}/>
                <input type="number" onChange={durationChanged}/>
            </div>
        </div>
    </>
}