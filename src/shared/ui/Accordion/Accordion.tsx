import { useState } from 'react'
import ChevronIcon from 'app/icon/chevron-bottom-icon.svg'
import styles from './Accordion.module.scss'
import classNames from 'classnames'

interface AccordionProps {
    className?: string
    title: string
    children: React.ReactNode
}

const Accordion = (props: AccordionProps) => {
    const { title, children, className } = props

    const [isShow, setIsShow] = useState(false)

    const handeIsShow = () => {
        setIsShow((prev) => !prev)
    }

    return (
        <div className={styles.wrapper}>
            <span className={classNames(className, styles.container)}>
                <button className={styles.button} onClick={handeIsShow}>
                    {title}
                </button>
                <ChevronIcon
                    className={classNames(styles.icon, {
                        [styles.iconTranslate]: isShow,
                    })}
                />
            </span>
            {isShow && <div className={styles.items}>{children}</div>}
        </div>
    )
}
export default Accordion
