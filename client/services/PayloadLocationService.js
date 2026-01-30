"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadLocationService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PayloadLocationService {
    /**
     * Criar location do payload.
     * Criar location do payload
     * @param requestBody Dados para geração da location.
     * @returns PayloadLocation Dados da location do Payload.
     * @throws ApiError
     */
    static postLoc(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/loc',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Requisição com formato inválido.`,
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
     * @param txIdPresente
     * @param tipoCob
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns PayloadLocationConsultadas lista dos locations cadastrados de acordo com o critério de busca.
     * @throws ApiError
     */
    static getLoc(inicio, fim, txIdPresente, tipoCob, paginacaoPaginaAtual, paginacaoItensPorPagina = 100) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/loc',
            query: {
                'inicio': inicio,
                'fim': fim,
                'txIdPresente': txIdPresente,
                'tipoCob': tipoCob,
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
     * @returns PayloadLocationCompleta Dados da location do Payload.
     * @throws ApiError
     */
    static getLoc1(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/loc/{id}',
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
     * Desvincular uma cobrança de uma location.
     * Endpoint utilizado para desvincular uma cobrança de uma location.
     *
     * Se executado com sucesso, a entidade `loc` não apresentará mais um txid,
     * se apresentava anteriormente à chamada. Adicionalmente, a entidade `cob` ou `cobv` associada ao
     * txid desvinculado também passará a não mais apresentar um _location_. Esta operação
     * não altera o `status` da `cob` ou `cobv` em questão.
     *
     * @param id
     * @returns PayloadLocation cobrança representada pelo txid informado desvinculada com sucesso.
     * @throws ApiError
     */
    static deleteLocTxid(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/loc/{id}/txid',
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
exports.PayloadLocationService = PayloadLocationService;
