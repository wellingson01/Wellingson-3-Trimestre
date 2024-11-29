import { getCSS } from "./common";

export {getCSS,tickConfig} from "./common";

async function quantidadedeUsuariosPorRede() {
    const url =
    const res = await fetch(url)
    const dados = await res.json ()
    const nomeDasRedes = Object.keys(dados)
    const quantidadedeUsuarios = Object.values(dados) 
}

const data = [
    {
        x:nomeDasRedes,
        y:quantidadedeUsuarios,
        type: "bar",
        marker: {
            color: getCSS("--primary-color")
        }
    }
]

const layout = {
    plot_bg_color: getCSS("--bg-color"),
    paper_bgcolor: getCSS("--bg-color"),
    title: {
        text: 'Redes Sociais',
        x:0 ,
        font:{
            color: getCSS("--primary-color"),
            size: 30,
            font: getCSS("--font")
        }    
    }
}