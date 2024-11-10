import styles from './Header.module.scss'

interface HeaderProps {
    title?: React.ReactNode | string
    children: React.ReactNode
}

const Header = (props: HeaderProps) => {
    const { children, title } = props
    return (
        <div className={styles.container}>
            {title}
            {children}
        </div>
    )
}
export default Header
