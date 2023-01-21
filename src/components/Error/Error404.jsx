import estilo from "./Error404.module.css";

const Error404 = () => {
    return (
        <div className={estilo.container}>
            <h1 className={estilo.errorType}>404</h1>
            <h2 className={estilo.errorLegend}>Archivo no encontrado</h2>
            <p className={estilo.errorDescription}>El sitio configurado es esta direccion no contiene el archivo solicitado.</p>
        </div>
    )
}

export default Error404;