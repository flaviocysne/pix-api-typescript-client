"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobVService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CobVService {
    /**
     * Criar cobrança com vencimento.
     * Endpoint para criar uma cobrança com vencimento.
     * @param txid
     * @param requestBody Dados para geração da cobrança com vencimento.
     * @returns CobVGerada Cobrança com vencimento criada
     * @throws ApiError
     */
    static putCobv(txid, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/cobv/{txid}',
            path: {
                'txid': txid,
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
     * Revisar cobrança com vencimento.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobVGerada Cobrança com vencimento revisada. A revisão deve ser incrementada em 1.
     * @throws ApiError
     */
    static patchCobv(txid, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/cobv/{txid}',
            path: {
                'txid': txid,
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
     * Consultar cobrança com vencimento.
     * Endpoint para consultar uma cobrança com vencimento através de um determinado txid.
     * @param txid
     * @param revisao
     * @returns CobVCompleta Dados da cobrança com vencimento.
     * @throws ApiError
     */
    static getCobv(txid, revisao) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/cobv/{txid}',
            path: {
                'txid': txid,
            },
            query: {
                'revisao': revisao,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar lista de cobranças com vencimento.
     * Endpoint para consultar cobranças com vencimento através de parâmetros como início, fim, cpf, cnpj e status.
     * @param inicio
     * @param fim
     * @param cpf
     * @param cnpj
     * @param locationPresente
     * @param status
     * @param loteCobVId
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns CobsVConsultadas Lista de cobranças com vencimento.
     * @throws ApiError
     */
    static getCobv1(inicio, fim, cpf, cnpj, locationPresente, status, loteCobVId, paginacaoPaginaAtual, paginacaoItensPorPagina = 100) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/cobv',
            query: {
                'inicio': inicio,
                'fim': fim,
                'cpf': cpf,
                'cnpj': cnpj,
                'locationPresente': locationPresente,
                'status': status,
                'loteCobVId': loteCobVId,
                'paginacao.paginaAtual': paginacaoPaginaAtual,
                'paginacao.itensPorPagina': paginacaoItensPorPagina,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
exports.CobVService = CobVService;
