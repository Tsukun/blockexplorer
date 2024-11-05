import { useEffect, useState } from 'react'
import { Alchemy, Network } from 'alchemy-sdk'

import Info from 'components/Info/Info'
import { Block } from 'app/types/ethereum'

import styles from './BlockPage.module.scss'

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
}

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings)

const BlockPage = () => {
    const [blockNumber, setBlockNumber] = useState<number>()
    const [blockInfo, setBlockInfo] = useState<Block>()

    const getBlock = async (blockNumber: number) => {
        const result = await alchemy.core.getBlock(blockNumber)
        setBlockInfo(result)
        return result
    }

    useEffect(() => {
        async function getBlockNumber() {
            setBlockNumber(await alchemy.core.getBlockNumber())
        }

        getBlockNumber()
    }, [])

    useEffect(() => {
        if (blockNumber) {
            getBlock(blockNumber)
        }
    }, [blockNumber])

    return (
        <div className={styles.container}>
            Block Number: {blockNumber}
            <Info info={blockInfo} />
        </div>
    )
}
export default BlockPage
