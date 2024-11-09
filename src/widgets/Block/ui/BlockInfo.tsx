import { Block } from 'app/types/ethereum'
import classNames from 'classnames'

import Accordion from 'shared/ui/Accordion/Accordion'
import Scrollbar from 'shared/ui/Scrollbar/Scrollbar'

import styles from './BlockInfo.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import Typography from 'shared/ui/Typography/Typography'
import Item from 'shared/ui/Item/Item'

interface BlockMainInfoProps {
    className?: string
    info: Block
}

const format = (block: Block) => {
    type BlockKey = keyof Block

    return Object.keys(block).map((key) => {
        const blockElement = block[key as BlockKey]

        if (Array.isArray(blockElement)) {
            return (
                <Accordion title={key}>
                    <Scrollbar className={styles.scrollbar}>
                        {blockElement.map((transactionHash) => {
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
            )
        }
        if (typeof blockElement === 'object') {
            if (blockElement._isBigNumber) {
                return (
                    <Typography typography={'body1'}>
                        {key}: {blockElement._hex as string}
                    </Typography>
                )
            }
        }

        if (typeof blockElement === 'string') {
            return (
                <Typography typography={'body1'}>
                    {key}: {blockElement}
                </Typography>
            )
        }

        return (
            <p>
                {key}: {blockElement.toString()}
            </p>
        )
    })
}

const BlockInfo = (props: BlockMainInfoProps) => {
    const { info, className } = props

    return (
        <div className={classNames(className, styles.container)}>
            {info && format(info)}
        </div>
    )
}
export default BlockInfo
