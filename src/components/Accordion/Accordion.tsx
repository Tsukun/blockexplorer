import { useState } from 'react'
import ChevronIcon from 'app/icon/chevron-bottom-icon.svg'
import styles from './Accordion.module.scss'
import classNames from 'classnames'

interface AccordionProps {
    title: string
    children: React.ReactNode
}

const Accordion = (props: AccordionProps) => {
    const { title, children } = props

    const [isShow, setIsShow] = useState(false)

    const handeIsShow = () => {
        setIsShow((prev) => !prev)
    }
    console.log(styles)
    return (
        <>
            <span className={styles.wrapper}>
                <button className={styles.button} onClick={handeIsShow}>
                    {title}
                </button>
                <ChevronIcon
                    className={classNames(styles.icon, {
                        [styles.iconTranslate]: isShow,
                    })}
                />
            </span>
            {isShow && <div>{children}</div>}
        </>
    )
}
export default Accordion
