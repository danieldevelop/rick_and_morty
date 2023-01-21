import estilo from "./About.module.css";

const About = () => {
    return (
        <div className={estilo.container}>
            <section className={estilo.contenidoHero}>
                <div>
                    <h2 className={estilo.titleHero}>Hola, mi nombre es Daniel 👋</h2>
                    <h3 className={estilo.leyendHero}>Desarrollador Backend Junior ✨</h3>

                    <p className={estilo.descriptionHero}>
                        Soy Tecnico Analista Programador Computacional, me gusta mucho la programacion especificamente
                        por el lado en Backend y Actualmente soy estudiante del bootcamp <span><a href="https://www.soyhenry.com/" target="_blank">SoyHenry</a></span>
                    </p>
                </div>

                <img src="https://danieldevelop.github.io/assets/img/img_cabecera.svg" alt="programming" className={estilo.imgHero}/>
            </section>

            <section className={estilo.contenidoAbout}>
                <h3 className={estilo.titleAbout}>SOBRE MI</h3>

                <p className={estilo.descriptionAbout}>
                    Desde el inicio de mi carrera como sesarrollador de software, me han convertido en una persona con metas
                    claras, cada dia me levanto con las ganas de aprender temas nuevos. Esto hace de mi una persona constante,
                    curiosa y sin miedos a enfrentarme a nuevos Retos.
                </p>
                <p className={estilo.descriptionAbout}>
                    Actualmente soy Programador Backend junior egresado en el año 2018 como Analista Programador Computacional 
                    pero no conforme con eso fui mas alla, de Tecnico a formarme como Ingeniero en Informatica en  Mencion en
                    Desarrollo de Sistema
                </p>
            </section>
        </div>
    )
}

export default About;