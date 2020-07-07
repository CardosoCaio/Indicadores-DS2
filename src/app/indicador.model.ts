export interface Indicador {
    ativo: string
    cumulativo: number
    descricao: string
    dtCadastro: number
    dtReferencia: number
    excluido: string
    font: string
    id: number
    idOrgao: number
    idPeriodicidade: number
    idTema: number
    idUsuarioCadastro: number
    indicador: string
    metodologia: string
    publico: string
    tecnicoResponsavel: number
    tipo: string
    unidade: string
    valorAlvo: number
}

export interface Registro { // Classe modelo teste
    id: number
    ano: number
    coleta: number
    meta: number
}


