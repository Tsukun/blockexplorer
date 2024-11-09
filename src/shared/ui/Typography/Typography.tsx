import classNames from 'classnames'
import styles from './Typography.module.scss'
import { ReactNode } from 'react'
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
    typography: keyof typeof TypographyMap
}

const Typography = (props: TypographyProps) => {
    const { className, typography, children } = props
    return (
        <p className={classNames(className, styles[typography])}>{children}</p>
    )
}
export default Typography
