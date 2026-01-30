"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadLocationRecService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PayloadLocationRecService {
    /**
     * Criar location do payload.
     * Criar location do payload
     * @returns PayloadLocationRecGerada Dados da location do Payload.
     * @throws ApiError
     */
    static postLocrec() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/locrec',
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar locations cadastradas.
     * Endpoint para consultar locations cadastradas
     * @param inicio
     * @param fim
     * @param idRecPresente
     * @param convenio
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns PayloadLocationRecConsultadas lista dos locations cadastrados de acordo com o critério de busca.
     * @throws ApiError
     */
    static getLocrec(inicio, fim, idRecPresente, convenio, paginacaoPaginaAtual, paginacaoItensPorPagina = 100) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/locrec',
            query: {
                'inicio': inicio,
                'fim': fim,
                'idRecPresente': idRecPresente,
                'convenio': convenio,
                'paginacao.paginaAtual': paginacaoPaginaAtual,
                'paginacao.itensPorPagina': paginacaoItensPorPagina,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Recuperar location do payload.
     * Recupera a location do payload
     * @param id
     * @returns PayloadLocationRecCompleta Dados da location do Payload.
     * @throws ApiError
     */
    static getLocrec1(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/locrec/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Desvincular uma recorrência de uma location.
     * Endpoint utilizado para desvincular uma recorrência de uma location.
     *
     * Se executado com sucesso, a entidade `loc` não apresentará mais uma recorrência,
     * se apresentava anteriormente à chamada. Adicionalmente, a entidade associada ao
     * recurso desvinculado também passará a não mais apresentar um _location_. Esta operação
     * não altera o `status` do recurso em questão.
     *
     * @param id
     * @returns PayloadLocationRecCompleta Entidade representada pelo recurso informado desvinculada com sucesso.
     * @throws ApiError
     */
    static deleteLocrecIdRec(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/locrec/{id}/idRec',
            path: {
                'id': id,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
exports.PayloadLocationRecService = PayloadLocationRecService;
