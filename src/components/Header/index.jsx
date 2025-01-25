import s from "./header.module.scss"

export const Header = () => {
    return (
        <header className={s.container}>
            <nav className={s.navegation}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}