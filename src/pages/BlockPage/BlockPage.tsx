import { useEffect, useState } from 'react'

import { BlockInfo } from './ui'

import { alchemy } from 'shared/api/alchemy'
import Header from 'shared/ui/Header/Header'
import Typography from 'shared/ui/Typography/Typography'

import { Block } from 'app/types/ethereum'

import styles from './BlockPage.module.scss'

const BlockPage = () => {
    const [blockNumber, setBlockNumber] = useState<number>()
    const [blockInfo, setBlockInfo] = useState<Block | undefined>()

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
            <Header
                title={
                    <Typography typography="subtitle2">Block number</Typography>
                }
            >
                <Typography typography="body1">{blockNumber}</Typography>
            </Header>
            {blockInfo && <BlockInfo info={blockInfo} />}
        </div>
    )
}
export default BlockPage
