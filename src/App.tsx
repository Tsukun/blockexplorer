import { Alchemy, Network } from 'alchemy-sdk'
import { useCallback, useEffect, useState } from 'react'
import { Block } from 'node_modules/@ethersproject/abstract-provider/lib'
import BlockMainInfo from './components/BlockMainInfo'

import './App.css'

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

function App() {
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
    })

    useEffect(() => {
        getBlock(blockNumber)
    }, [blockNumber])

    return (
        <div className="App">
            Block Number: {blockNumber}
            <BlockMainInfo info={blockInfo} />
        </div>
    )
}

export default App