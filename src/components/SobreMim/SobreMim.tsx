import styles from './sobreMim.module.css'
import sobreMim from '../../assets/sobreMin.png'

export default function SobreMim() {
  return (
    <div className={styles.postConteudoContainer}>
      <h3 className={styles.subtitulo}>Ola eu sou Flavio</h3>
      <img src={sobreMim} alt="foto" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou instrutor e desenvolverdor sou feliz por ser dev.
      </p>
      <p className={styles.paragrafo}>
          Minha história com programação começou na falculdade Estacio de Sa (ES), quando decideir mudar de carreira onde ja trabalhava com Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como Java, Python, C++, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que como trabalharia com isso.
      </p>
      <p className={styles.paragrafo}>
          No ensino superior, escolhi cursar Ciencias da Computacao na Universidade Estacio de Sa (ES).
          mundando para escola Trybe, uma escola focada em programacao e softskils
      </p>
      <p className={styles.paragrafo}>
          Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
      </p>
      <p className={styles.paragrafo}>
          E foi enquanto eu estava trybe conseguir estágio em desenvolvimento fullStack. Eu encontrei uma vaga na Remessa Online trabalhando com docker javascript. angular logica de solucoes de projetos.

      </p>
      <p className={styles.paragrafo}>
          Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Trybe é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade
      </p>

    </div>
  )
}
