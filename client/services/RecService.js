"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class RecService {
    /**
     * Consultar recorrência.
     * Consultar recorrência.
     * @param idRec
     * @param txid
     * @returns RecCompleta Dados da recorrência.
     * @throws ApiError
     */
    static getRec(idRec, txid) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/rec/{idRec}',
            path: {
                'idRec': idRec,
            },
            query: {
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
     * Revisar recorrência.
     * Revisar recorrência.
     * @param idRec
     * @param requestBody Dados para revisão da recorrência.
     * @returns RecGerada Recorrência revisada.
     * @throws ApiError
     */
    static patchRec(idRec, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/rec/{idRec}',
            path: {
                'idRec': idRec,
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
     * Consultar lista de recorrências.
     * Consultar lista de recorrências.
     * @param inicio
     * @param fim
     * @param cpf
     * @param cnpj
     * @param locationPresente
     * @param status
     * @param convenio
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns RecsConsultadas OK
     * @throws ApiError
     */
    static getRec1(inicio, fim, cpf, cnpj, locationPresente, status, convenio, paginacaoPaginaAtual, paginacaoItensPorPagina = 100) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/rec',
            query: {
                'inicio': inicio,
                'fim': fim,
                'cpf': cpf,
                'cnpj': cnpj,
                'locationPresente': locationPresente,
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
     * Criar recorrência.
     * Criar recorrência
     * @param requestBody Dados para geração da recorrência.
     * @returns RecGerada Recorrência criada
     * @throws ApiError
     */
    static postRec(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/rec',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Requisição com formato inválido.`,
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
exports.RecService = RecService;
