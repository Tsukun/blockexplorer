import styles from './Header.module.scss'

interface HeaderProps {
    title?: string
    children: React.ReactNode
}

const Header = (props: HeaderProps) => {
    const { children, title } = props
    return (
        <div className={styles.container}>
            <p className={styles.title}> {title}</p>
            {children}
        </div>
    )
}
export default Header
