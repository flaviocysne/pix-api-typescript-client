"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PixService {
    /**
     * Consultar Pix.
     * Endpoint para consultar um Pix através de um e2eid.
     * @param e2Eid
     * @returns Pix Dados do Pix efetuado.
     * @throws ApiError
     */
    static getPix(e2Eid) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/pix/{e2eid}',
            path: {
                e2eid: e2Eid,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar Pix recebidos.
     * Endpoint para consultar Pix recebidos
     * @param inicio
     * @param fim
     * @param txid
     * @param txIdPresente
     * @param devolucaoPresente
     * @param cpf
     * @param cnpj
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns PixConsultados lista dos Pix recebidos de acordo com o critério de busca.
     * @throws ApiError
     */
    static getPixAll(inicio, fim, txid, txIdPresente, devolucaoPresente, cpf, cnpj, paginacaoPaginaAtual, paginacaoItensPorPagina = 100) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/pix',
            query: {
                inicio: inicio,
                fim: fim,
                txid: txid,
                txIdPresente: txIdPresente,
                devolucaoPresente: devolucaoPresente,
                cpf: cpf,
                cnpj: cnpj,
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
     * Solicitar devolução.
     * Endpoint para solicitar uma devolução através de um e2eid do Pix e do ID da devolução. O motivo que será atribuído à PACS.004 será "MD06" ou "SL02" de acordo com a aba RTReason da PACS.004 que consta no Catálogo de Mensagens do Pix a depender da `natureza` da devolução (Vide a descrição deste campo).
     *
     * @param e2Eid
     * @param id
     * @param requestBody Dados para pedido de devolução.
     * @returns Devolucao Dados da devolução.
     * @throws ApiError
     */
    static putPixDevolucao(e2Eid, id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/pix/{e2eid}/devolucao/{id}',
            path: {
                e2eid: e2Eid,
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Requisição com formato inválido.`,
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar devolução.
     * Endpoint para consultar uma devolução através de um End To End ID do Pix e do ID da devolução
     * @param e2Eid
     * @param id
     * @returns Devolucao Dados da devolução.
     * @throws ApiError
     */
    static getPixDevolucao(e2Eid, id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/pix/{e2eid}/devolucao/{id}',
            path: {
                e2eid: e2Eid,
                id: id,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
exports.PixService = PixService;
