import { useParams } from "react-router-dom"
import post from "../json/posts.json"
import Menu from "../components/Menu/Menu"
import Hero from "../components/Hero/Hero"
import AboutHero from "../components/AboutHero/AboutHero"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import "./post.css"
import Footer from "../components/Footer/Footer"


export default function Post() {
  const params =  useParams()
  const parsedId = Number(params.id)


  const postFiltered = post.find(post => post.id === parsedId)


  return (
    <>
      <Menu />
      <main>
        <Hero/>
        { postFiltered ? <AboutHero
          subHero={`../../public/posts/${postFiltered.id}/capa.png`}
          titulo={postFiltered.titulo}

        /> : <h2>"Post Nao encontrado"</h2>
        }
        <div className="post-markdown-container postConteudoContainer">
          <ReactMarkdown>
            {postFiltered && postFiltered.texto || "Post Nao encontrado"}
          </ReactMarkdown>
          </div>
      </main>
      <Footer/>
    </>
  )
}
