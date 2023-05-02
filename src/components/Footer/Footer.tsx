import styles from './footer.module.css'
import icon from '../../assets/marca.svg'

export default function Footer() {
  return (
    <footer className={styles.rodape}>
     <img className={styles.img} src={icon} alt="icon"/>
     <span>Desenvolvido por My Blog</span>

    </footer>
  )
}
