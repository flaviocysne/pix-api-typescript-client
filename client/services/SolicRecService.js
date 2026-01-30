"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicRecService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SolicRecService {
    /**
     * Criar solicitação de confirmação de recorrência.
     * Criar solicitação de confirmação de recorrência.
     * @param requestBody Dados para geração da solicitação da recorrência.
     * @returns SolicRecCompleta Solicitação de recorrência criada
     * @throws ApiError
     */
    static postSolicrec(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/solicrec',
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
     * Consultar solicitação de confirmação de recorrência.
     * Consultar solicitação.
     * @param idSolicRec
     * @returns SolicRecCompleta Dados da solicitação da recorrência.
     * @throws ApiError
     */
    static getSolicrec(idSolicRec) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/solicrec/{idSolicRec}',
            path: {
                'idSolicRec': idSolicRec,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Revisar solicitação de confirmação de recorrência.
     * Revisar solicitação de confirmação de recorrência.
     * @param idSolicRec
     * @param requestBody Dados para revisão da solicitação da recorrência.
     * @returns SolicRecCompleta Solicitação de recorrência atualizada
     * @throws ApiError
     */
    static patchSolicrec(idSolicRec, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/solicrec/{idSolicRec}',
            path: {
                'idSolicRec': idSolicRec,
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
}
exports.SolicRecService = SolicRecService;
