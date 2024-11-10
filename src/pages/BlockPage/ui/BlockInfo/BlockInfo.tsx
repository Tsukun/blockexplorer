import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Block, Transaction } from 'app/types/ethereum'

import Accordion from 'shared/ui/Accordion/Accordion'
import Scrollbar from 'shared/ui/Scrollbar/Scrollbar'
import Typography from 'shared/ui/Typography/Typography'
import Item from 'shared/ui/Item/Item'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import styles from './BlockInfo.module.scss'

interface BlockMainInfoProps {
    className?: string
    info: Block
}

const BlockInfo = (props: BlockMainInfoProps) => {
    const { info, className } = props

    return (
        <div className={classNames(className, styles.container)}>
            <Typography typography="body1">
                baseFeePerGas: {info.baseFeePerGas._hex}
            </Typography>
            <Typography typography="body1">
                difficulty: {info.difficulty}
            </Typography>
            <Typography typography="body1">
                extraData: {info.extraData}
            </Typography>
            <Typography typography="body1">
                gasLimit: {info.gasLimit._hex}
            </Typography>
            <Typography typography="body1">
                gasUsed: {info.gasUsed._hex}
            </Typography>
            <Typography typography="body1">hash: {info.hash}</Typography>
            <Typography typography="body1">miner: {info.miner}</Typography>
            <Typography typography="body1">nonce: {info.nonce}</Typography>
            <Typography typography="body1">number: {info.number}</Typography>
            <Typography typography="body1">
                parentHash: {info.parentHash}
            </Typography>
            <Typography typography="body1">
                timestamp: {info.timestamp}
            </Typography>
            <Accordion title={'transactions'}>
                <Scrollbar className={styles.scrollbar}>
                    {info.transactions.map((transactionHash) => {
                        return (
                            <Item key={transactionHash}>
                                <Link
                                    to={
                                        RoutePath.transaction +
                                        '?hash=' +
                                        transactionHash
                                    }
                                >
                                    <Typography typography={'body1'}>
                                        {transactionHash}
                                    </Typography>
                                </Link>
                            </Item>
                        )
                    })}
                </Scrollbar>
            </Accordion>
        </div>
    )
}
export default BlockInfo
