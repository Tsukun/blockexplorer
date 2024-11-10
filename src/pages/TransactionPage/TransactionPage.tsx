import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { alchemy } from 'shared/api/alchemy'

import { queryParse } from 'shared/utils/queryParse'

import Header from 'shared/ui/Header/Header'
import Typography from 'shared/ui/Typography/Typography'

import styles from './TransactionPage.module.scss'
import { Transaction } from 'app/types/ethereum'
import { TransactionInfo } from './ui'

const TransactionPage = () => {
    const { search } = useLocation()
    const [hash, setHash] = useState<string | undefined>(undefined)
    const [transactionInfo, setTransactionInfo] = useState<
        Transaction | undefined
    >()

    const getTransaction = async (transactionHash: string) => {
        const result = await alchemy.core.getTransaction(transactionHash)

        return result
    }

    useEffect(() => {
        const query = queryParse(search)
        setHash(query.hash)

        getTransaction(query.hash).then((value: Transaction) => {
            console.log(`debug: value `, value)
            setTransactionInfo(value)
        })
    }, [search])

    return (
        <div className={styles.container}>
            <Header
                title={
                    <Typography typography="subtitle2">
                        Transaction hash
                    </Typography>
                }
            >
                <Typography typography="body1">{hash}</Typography>
            </Header>
            {transactionInfo && <TransactionInfo info={transactionInfo} />}
        </div>
    )
}

export default TransactionPage
