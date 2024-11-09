import Typography from '../Typography/Typography'

import styles from './Header.module.scss'

interface HeaderProps {
    title?: string
    children: React.ReactNode
}

const Header = (props: HeaderProps) => {
    const { children, title } = props
    return (
        <div className={styles.container}>
            <Typography typography="subtitle2"> {title}</Typography>
            {children}
        </div>
    )
}
export default Header
