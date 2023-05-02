import styles from './Hero.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minhafoto.png'


export default function Hero() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
       <h1 className={styles.titulo}> My Blog</h1>
       <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Flavio Andrade, instrutor e programador de Front-end Back-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
      </div>
      <div className={styles.imagens}>
        <img src={circuloColorido} alt="ciculo" className={styles.circuloColorido} aria-hidden={true} />
        <img src={minhaFoto} alt="foto" className={styles.minhaFoto}/>
      </div>
    </div>
  )
}
