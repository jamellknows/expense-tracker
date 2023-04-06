import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Transaction = ({transaction}) => {
    const sign = (transaction.amount > 0) ? '+' : '-'
    // const amount = transaction.amount
    // console.log(`${amount} ${transaction.text}`)
    const { deleteTransaction } = useContext(GlobalContext)
    return(
        <>
        <li className={(transaction.amount >0) ? 'plus' : 'minus'}>{transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)} >x</button></li>
        </>
    )
}