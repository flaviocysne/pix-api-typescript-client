"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CobService {
    /**
     * Criar cobrança imediata.
     * Endpoint para criar uma cobrança imediata.
     * @param txid
     * @param requestBody Dados para geração da cobrança imediata.
     * @returns CobGerada Cobrança imediata criada
     * @throws ApiError
     */
    static putCob(txid, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/cob/{txid}',
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
     * Revisar cobrança imediata.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobGerada Cobrança imediata revisada. A revisão deve ser incrementada em 1.
     * @throws ApiError
     */
    static patchCob(txid, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/cob/{txid}',
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
     * Consultar cobrança imediata.
     * Endpoint para consultar uma cobrança através de um determinado txid.
     * @param txid
     * @param revisao
     * @returns CobCompleta Dados da cobrança imediata.
     * @throws ApiError
     */
    static getCob(txid, revisao) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/cob/{txid}',
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
     * Criar cobrança imediata.
     * Endpoint para criar uma cobrança imediata, neste caso, o txid deve ser definido pelo PSP.
     * @param requestBody Dados para geração da cobrança imediata.
     * @returns CobGerada Cobrança imediata criada
     * @throws ApiError
     */
    static postCob(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/cob',
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
     * Consultar lista de cobranças imediatas.
     * Endpoint para consultar cobranças imediatas através de parâmetros como início, fim, cpf, cnpj e status.
     * @param inicio
     * @param fim
     * @param cpf
     * @param cnpj
     * @param locationPresente
     * @param status
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns CobsConsultadas Lista de cobranças imediatas.
     * @throws ApiError
     */
    static getCob1(inicio, fim, cpf, cnpj, locationPresente, status, paginacaoPaginaAtual, paginacaoItensPorPagina = 100) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/cob',
            query: {
                'inicio': inicio,
                'fim': fim,
                'cpf': cpf,
                'cnpj': cnpj,
                'locationPresente': locationPresente,
                'status': status,
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
exports.CobService = CobService;
