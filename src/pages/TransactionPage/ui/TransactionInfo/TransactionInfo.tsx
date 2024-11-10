import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Transaction } from 'app/types/ethereum'

import Accordion from 'shared/ui/Accordion/Accordion'
import Scrollbar from 'shared/ui/Scrollbar/Scrollbar'
import Typography from 'shared/ui/Typography/Typography'
import Item from 'shared/ui/Item/Item'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import styles from './TransactionInfo.module.scss'

interface TransactionInfoProps {
    className?: string
    info: Transaction
}

const TransactionInfo = (props: TransactionInfoProps) => {
    const { info, className } = props

    return (
        <div className={classNames(className, styles.container)}>
            <Typography typography="body1">chainId: {info.chainId}</Typography>
            <Typography typography="body1" copy={info.data}>
                data: {info.data}
            </Typography>
            <Typography typography="body1">from: {info.from}</Typography>
            <Typography typography="body1">to: {info.to}</Typography>
            <Typography typography="body1">
                gasLimit: {info.gasLimit._hex}
            </Typography>
            <Typography typography="body1">
                gasPrice: {info.gasPrice._hex}
            </Typography>
            <Typography typography="body1">nonce: {info.nonce}</Typography>
            <Typography typography="body1">number: {info.r}</Typography>
            <Typography typography="body1">parentHash: {info.s}</Typography>
            <Typography typography="body1">timestamp: {info.type}</Typography>
            <Typography typography="body1">value: {info.value._hex}</Typography>
            <Accordion title={'transactions'}>
                <Scrollbar className={styles.scrollbar}>
                    {info.accessList.map(({ address }) => {
                        return (
                            <Item key={address}>
                                <Link
                                    to={
                                        RoutePath.transaction +
                                        '?hash=' +
                                        address
                                    }
                                >
                                    <Typography typography={'body1'}>
                                        {address}
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
export default TransactionInfo
