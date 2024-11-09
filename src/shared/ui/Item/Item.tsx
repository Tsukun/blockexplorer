import { ReactNode } from 'react'

import styles from './Item.module.scss'

interface ItemProps {
    children: ReactNode
}

const Item = (props: ItemProps) => {
    const { children } = props
    return <div className={styles.container}>{children}</div>
}
export default Item
