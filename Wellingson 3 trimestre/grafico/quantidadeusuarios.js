import { getCSS } from "./common";

export {getCSS,tickConfig} from "./common";

async function quantidadeDeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json ()
    const nomeDasRedes = Object.keys(dados)
    const quantidadedeUsuarios = Object.values(dados) 

    console.log(dados)
}

const data = [
    {
        x:nomeDasRedes,
        y:quantidadeDeUsuarios,
        type: 'bar',
        marker: {
            color: getCSS("--primary-color")
        }
    }

]

const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)



const layout = {
    plot_bg_color: getCSS("--bg-color"),
    paper_bgcolor: getCSS("--bg-color"),
    title: {
        text: 'Redes Sociais',
        x:0 ,
        font:{
            color: getCSS("--primary-color"),
            size: 16,
            font: getCSS("--font"),
        },
        xaxis: {
            title: {
                text: 'nome das redes sociais',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            text: 'bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }        
        }    
    }
}

quantidadeusuarios()