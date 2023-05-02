import Sobre from '../Sobre/Sobre'
import styles from './AboutHero.module.css'

export default function AboutHero({subHero, titulo}:any) {

  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{backgroundImage:`url(${subHero})` }}
        >
      </div>
      <h2 className={styles.titulo}>{titulo}</h2>
      <Sobre />

    </article>
  )


}
