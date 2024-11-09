import { useEffect, useState } from 'react'
import { alchemy } from 'shared/api/alchemy'
import { useLocation } from 'react-router-dom'
import styles from './TransactionPage.module.scss'
import { queryParse, QueryVariables } from 'shared/utils/queryParse'

const TransactionPage = () => {
    const { search } = useLocation()
    console.log(`debug: search `, search)
    const [hash, setHash] = useState<QueryVariables | undefined>(undefined)

    const getTransaction = async (transactionHash: string) => {
        const result = await alchemy.core.getTransaction(transactionHash)

        return result
    }

    useEffect(() => {
        const query = queryParse(search)
        setHash(query)

        getTransaction(query.hash).then((value) => {
            console.log(`debug: value `, value)
        })
    }, [search])

    return <div>Transaction Page</div>
}

export default TransactionPage
