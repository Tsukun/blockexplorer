import classNames from 'classnames'
import styles from './Scrollbar.module.scss'

interface ScrollbarProps {
    className?: string
    children: React.ReactNode
}

const Scrollbar = (props: ScrollbarProps) => {
    const { children, className } = props
    return (
        <div className={classNames(className, styles.container)}>
            {children}
        </div>
    )
}
export default Scrollbar
