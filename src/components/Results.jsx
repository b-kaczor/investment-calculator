import { formatter } from "../util/investment"

export default function Results({ results }) {
    let totalInterest = 0

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest (Year)</th>
                <th>Total interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
            {results.map(row => {
                totalInterest += row.interest
                return (
                    <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(row.valueEndOfYear - totalInterest)}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
}