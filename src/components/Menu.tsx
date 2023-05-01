import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'
import { NavLink} from "react-router-dom"

export default function Menu () {
  const location = useLocation()
  return (
    <header>
      <nav className={styles.navegacao}>
        <NavLink to='/'
          className={({ isActive, isPending }) => isPending ? styles.link : isActive ?   `${styles.link} ${styles.linkAtivo}` : styles.link}
        > Home </NavLink>
        <Link to='/sobre' className={`
          ${styles.link}
          ${location.pathname === "/sobre" ? styles.linkAtivo : ""}
          `}>Sobre min </Link>
      </nav>
    </header>
  )
}
