export interface Indicador {
    descricao: string
    id: number
    tema:{
        descricao: string
        id: number
        eixo:{
            descricao: string
            id: number
        }
    }
}


