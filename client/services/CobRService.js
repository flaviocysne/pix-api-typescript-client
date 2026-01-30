"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobRService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CobRService {
    /**
     * Criar cobrança recorrente.
     * Endpoint para criar uma cobrança recorrente.
     * @param txid
     * @param requestBody Dados para geração da cobrança recorrente.
     * @returns CobRGerada Cobrança imediata recorrente.
     * @throws ApiError
     */
    static putCobr(txid, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/cobr/{txid}',
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
     * Revisar cobrança recorrente.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobRGerada Cobrança recorrente revisada.
     * @throws ApiError
     */
    static patchCobr(txid, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/cobr/{txid}',
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
     * Consultar cobrança recorrente.
     * Endpoint para consultar uma cobrança recorrente através de um determinado txid.
     * @param txid
     * @returns CobRCompleta Dados da cobrança recorrente.
     * @throws ApiError
     */
    static getCobr(txid) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/cobr/{txid}',
            path: {
                'txid': txid,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Criar cobrança recorrente.
     * Endpoint para criar uma cobrança recorrente, neste caso, o txid deve ser definido pelo PSP.
     * @param requestBody Dados para geração da cobrança recorrente.
     * @returns CobRGerada Cobrança recorrente criada.
     * @throws ApiError
     */
    static postCobr(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/cobr',
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
     * Consultar lista de cobranças recorrentes.
     * Endpoint para consultar cobranças recorrentes através de parâmetros como início, fim, idRec, cpf, cnpj, status e convênio.
     * @param inicio
     * @param fim
     * @param idRec
     * @param cpf
     * @param cnpj
     * @param status
     * @param convenio
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns CobsRConsultadas Lista de cobranças recorrentes.
     * @throws ApiError
     */
    static getCobr1(inicio, fim, idRec, cpf, cnpj, status, convenio, paginacaoPaginaAtual, paginacaoItensPorPagina = 100) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/cobr',
            query: {
                'inicio': inicio,
                'fim': fim,
                'idRec': idRec,
                'cpf': cpf,
                'cnpj': cnpj,
                'status': status,
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
     * Solicitar retentativa de cobrança.
     * Endpoint para solicitar retentativa de uma cobrança recorrente.
     * @param txid
     * @param data Data prevista para liquidação da ordem de pagamento correspondente. Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601.
     * @returns any Cobrança recorrente.
     * @throws ApiError
     */
    static postCobrRetentativa(txid, data) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/cobr/{txid}/retentativa/{data}',
            path: {
                'txid': txid,
                'data': data,
            },
            errors: {
                400: `Requisição com formato inválido.`,
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
exports.CobRService = CobRService;
