import React from 'react'

import CopyIcon from 'app/icon/copy-icon.svg'

import styles from './Copy.module.scss'

interface CopyProps {
    value: string
}

const Copy = (props: CopyProps) => {
    const { value } = props
    return (
        <button className={styles.button}>
            <CopyIcon className={styles.icon} />
        </button>
    )
}
export default Copy
