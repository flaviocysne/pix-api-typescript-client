export type Paginacao = {
    /**
     * Número da página recuperada.
     */
    paginaAtual: number;
    /**
     * Quantidade de registros retornado na página.
     */
    itensPorPagina: number;
    /**
     * Quantidade de páginas disponíveis para consulta.
     */
    quantidadeDePaginas: number;
    /**
     * Quantidade total de itens disponíveis de acordo com os parâmetros informados.
     */
    quantidadeTotalDeItens: number;
};
