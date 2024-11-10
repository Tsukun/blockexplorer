import classNames from 'classnames'
import styles from './Typography.module.scss'
import { ReactNode } from 'react'
import Copy from './ui/Copy/Copy'
const TypographyMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    subtitle1: 'subtitle1',
    subtitle2: 'subtitle2',
    body1: 'body1',
    body2: 'body2',
}

interface TypographyProps {
    className?: string
    children: ReactNode
    copy?: string
    typography: keyof typeof TypographyMap
}

const Typography = (props: TypographyProps) => {
    const { className, typography, children, copy } = props
    return (
        <div className={styles.container}>
            <p
                className={classNames(
                    className,
                    styles.typography,
                    styles[typography]
                )}
            >
                {children}
                {copy && <Copy value={copy} />}
            </p>
        </div>
    )
}
export default Typography
