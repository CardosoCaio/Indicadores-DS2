export interface Coleta { 
    ano: number
    coleta: number
    id: number
    indicador:{
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
    meta?: number // Ainda não temos
}