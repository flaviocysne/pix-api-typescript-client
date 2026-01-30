"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobPayloadService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CobPayloadService {
    /**
     * Recuperar o payload JSON que representa a cobrança imediata.
     * ## Endpoint (location) que serve um payload que representa uma cobrança imediata.
     *
     * No momento que o usuário devedor efetua a leitura de um QR Code dinâmico gerado pelo recebedor, esta URL será acessada e seu conteúdo consiste em uma estrutura JWS.
     * As informações sobre a segurança no acesso às urls encontram-se no Manual de Segurança do Pix disponível em nesse __[link](https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados)__.
     *
     * @param pixUrlAccessToken
     * @returns CobPayload # Descrição do Retorno
     * O retorno desse endpoint é um objeto que apresenta estrutura JWS, conforme especificado no manual de segurança. Segue um exemplo:
     *
     * ```jws
     * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyIsImtpZCI6IjIwMTEtMDQtMjkiLCJqa3UiOiJodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzUxNyIsIng1dCI6IkFwcGVuZGl4QUV4YW1wbGVBMUpXS1NSc2FLZXkifQ.eyJjYWxlbmRhcmlvIjp7ImNyaWFjYW8iOiIyMDIwLTA5LTE1VDE5OjM5OjU0LjAxM1oiLCJhcHJlc2VudGFjYW8iOiIyMDIwLTA0LTAxVDE4OjAwOjAwWiIsImV4cGlyYWNhbyI6IjM2MDAifSwidHhpZCI6ImZjOWE0MzY2ZmYzZDQ5NjRiNWRiYzZjOTFhODcyMmQzIiwicmV2aXNhbyI6IjMiLCJzdGF0dXMiOiJBVElWQSIsInZhbG9yIjp7Im9yaWdpbmFsIjoiNTAwLjAwIn0sImNoYXZlIjoiNzQwN2M5YzgtZjc4Yi0xMWVhLWFkYzEtMDI0MmFjMTIwMDAyIiwic29saWNpdGFjYW9QYWdhZG9yIjoiSW5mb3JtYXIgY2FydGFvIGZpZGVsaWRhZGUiLCJpbmZvQWRpY2lvbmFpcyI6W3sibm9tZSI6InF1YW50aWRhZGUiLCJ2YWxvciI6IjIifV19.qI7NUrYkwcgXmyoyOjt2YLQyhxH-lPdr3xQ7RId9TDXZ-MlWmPJkUScjuo1Nz_EvlSotbWDGOxErBXHeTLHOQM-9T7lBmG5iw6uEX7L5U72XiganIm80EZCFD1vBPq9j89i4cP2U2Yv21TTt8JLhjA57KHLOSlj-KB5UAKCH-MX3AORFcrXFrYL2rrSQDe-lFNtdyPRwLQHIrhkQ6RR2FPhynzUG0401LScS9mWLLYbYzhzwtP5lk07Ryf4MZq86ihmOLFZXkIiW7pbSd8QfD5Dvj28XebLQi_bam9wInqKB--57_N741BskCN_TXf0EHbQ1qjNTgiT8Y1GIrA4pFA
     * ```
     *
     * Este objeto JWS assinado deve ser validado pelo devedor. Maiores detalhes técnicos a respeito da especificação
     * de segurança encontram-se no __[Manual de Segurança do Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix)__.
     *
     * Conforme pode-se verificar no exemplo acima, o objeto JWS apresenta três fragmentos separados pelo caractere `.` (ponto). São eles: `header`, `payload` e `signature`.
     *
     * Em termos de funcionalidade, o fragmento que interessa ao devedor é o `payload`, que apresenta estrutura conforme especificada pelo `schema` do presente endpoint, contendo detalhes concernentes à cobrança.
     *
     * @throws ApiError
     */
    static get(pixUrlAccessToken) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/{pixUrlAccessToken}',
            path: {
                'pixUrlAccessToken': pixUrlAccessToken,
            },
            errors: {
                400: `Requisição com formato inválido.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Recuperar o payload JSON que representa a cobrança com vencimento.
     * ## Endpoint (location) que serve um payload que representa uma cobrança com vencimento.
     *
     * No momento que o usuário devedor efetua a leitura de um QR Code dinâmico gerado pelo recebedor, esta URL será acessada e seu conteúdo consiste em uma estrutura JWS.
     * As informações sobre a segurança no acesso às urls encontram-se no Manual de Segurança do Pix disponível em nesse __[link](https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados)__.
     *
     * @param pixUrlAccessToken
     * @param codMun Código baseado na Tabela de Códigos de Municípios do __[IBGE](https://www.ibge.gov.br/explica/codigos-dos-municipios.php)__ que apresenta a lista dos municípios brasileiros associados a um código composto de 7 dígitos, sendo os dois primeiros referentes ao código da Unidade da Federação.
     *
     * @param dpp Data de pagamento pretendida. Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601.
     * @returns CobVPayload # Descrição do Retorno
     * O retorno desse endpoint é um objeto que apresenta estrutura JWS, conforme especificado no manual de segurança. Segue um exemplo:
     *
     * ```jws
     * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyIsImtpZCI6IjIwMTEtMDQtMjkiLCJqa3UiOiJodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzUxNyIsIng1dCI6IkFwcGVuZGl4QUV4YW1wbGVBMUpXS1NSc2FLZXkifQ.eyJjYWxlbmRhcmlvIjp7ImNyaWFjYW8iOiIyMDIwLTA5LTE1VDE5OjM5OjU0LjAxM1oiLCJhcHJlc2VudGFjYW8iOiIyMDIwLTA0LTAxVDE4OjAwOjAwWiIsImRhdGFEZVZlbmNpbWVudG8iOiIyMDIwLTEyLTMxIiwidmFsaWRhZGVBcG9zVmVuY2ltZW50byI6MzB9LCJkZXZlZG9yIjp7ImxvZ3JhZG91cm8iOiJBbGFtZWRhIFNhbnRvcywgTnVtZXJvIDEwLCBCYWlycm8gQnJheiIsImNpZGFkZSI6IkRpYWRlbWEiLCJ1ZiI6IlNQIiwiY2VwIjoiNzA4MDAxMDAiLCJjbnBqIjoiNTY5ODkwMDAwMTk1MzMiLCJub21lIjoiRW1wcmVzYSBkZSBBbGltZW50b3MgU0EifSwicmVjZWJlZG9yIjp7ImxvZ3JhZG91cm8iOiJSdWEgMjAgTnVtZXJvIDcwLCBCYWlycm8gTHV6IiwiY2lkYWRlIjoiQmVsbyBIb3Jpem9udGUiLCJ1ZiI6Ik1HIiwiY2VwIjoiNTUxMjA3NTAiLCJjbnBqIjoiNTg5MDA2MzMxMjA3MTEiLCJub21lIjoiRW1wcmVzYSBkZSBBYmFzdGVjaW1lbnRvIFNBIn0sInR4aWQiOiJmYzlhNDM2NmZmM2Q0OTY0YjVkYmM2YzkxYTg3MjJkMyIsInJldmlzYW8iOiIzIiwic3RhdHVzIjoiQVRJVkEiLCJ2YWxvciI6eyJvcmlnaW5hbCI6IjEyMy40NSIsIm11bHRhIjoiMTUuMDAiLCJqdXJvcyI6IjIuMDAiLCJmaW5hbCI6IjE0MCw0NSJ9LCJjaGF2ZSI6Ijc0MDdjOWM4LWY3OGItMTFlYS1hZGMxLTAyNDJhYzEyMDAwMiIsInNvbGljaXRhY2FvUGFnYWRvciI6IkluZm9ybWFyIGNhcnRhbyBmaWRlbGlkYWRlIiwiaW5mb0FkaWNpb25haXMiOlt7Im5vbWUiOiJxdWFudGlkYWRlIiwidmFsb3IiOiIyIn1dfQ.BYibf_oK38IubbnnfThe4gaXuJgfoGQzFIezxHS76jGLQ4re2BwSdsiIzBW1t0JOtL094jLtJMVttdIdF9YJukrdzbknbf1jzfHghgBfNqXfZm7jxWuV8IO0jimoSoo7oMrG3MYytRFpdk2Q_ZhTL5UgZqVbfJkMwcp8o0FYmzrmiGPll-kgBulTgGgvGjzl-mC5dtl56351ix1-If1D7KAohHzcYTHzEFkvYZlNCcxyHJX94-8IqpYaTQ1rJlnPExPIgys-ioZ3U_QzcPz4d3tGvRAfHEU7VoIeZHeXR1jqKuqvz70ayc8mAbL7RXzJat1Ru_glS3krkSdXdZxK-w
     * ```
     *
     * Este objeto JWS assinado deve ser validado pelo devedor. Maiores detalhes técnicos a respeito da especificação
     * de segurança encontram-se no __[Manual de Segurança do Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix)__.
     *
     * Conforme pode-se verificar no exemplo acima, o objeto JWS apresenta três fragmentos separados pelo caractere `.` (ponto). São eles: `header`, `payload` e `signature`.
     *
     * Em termos de funcionalidade, o fragmento que interessa ao devedor é o `payload`, que apresenta estrutura conforme especificada pelo `schema` do presente endpoint, contendo detalhes concernentes à cobrança.
     *
     * @throws ApiError
     */
    static getCobv(pixUrlAccessToken, codMun, dpp) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/cobv/{pixUrlAccessToken}',
            path: {
                'pixUrlAccessToken': pixUrlAccessToken,
            },
            query: {
                'codMun': codMun,
                'DPP': dpp,
            },
            errors: {
                400: `Requisição com formato inválido.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
exports.CobPayloadService = CobPayloadService;
