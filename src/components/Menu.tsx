import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu () {
  const location = useLocation()
  console.log(location)
  return (
    <header>
      <nav className={styles.navegacao}>
        <Link to='/' className={`
          ${styles.link}
          ${location.pathname === "/" ? styles.linkAtivo : ""}
          `} >Home</Link>
        <Link to='/sobre' className={`
          ${styles.link}
          ${location.pathname === "/sobre" ? styles.linkAtivo : ""}
          `}>Sobre min </Link>
      </nav>
    </header>
  )
}
