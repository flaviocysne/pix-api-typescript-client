import type { RecPayload } from '../models/RecPayload';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class RecPayloadService {
    /**
     * Recuperar o payload JSON que representa a configuração da recorrência.
     * ## Endpoint (location) que serve um payload que representa uma recorrência.
     *
     * No momento em que o usuário pagador efetua a leitura de um QR Code composto gerado pelo recebedor, esta URL será acessada e seu conteúdo consiste em uma estrutura JWS.
     * As informações sobre a segurança no acesso às urls encontram-se no Manual de Segurança do Pix disponível nesse __[link](https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados)__.
     *
     * @param recUrlAccessToken
     * @returns RecPayload # Descrição do Retorno
     * O retorno desse endpoint é um objeto que apresenta estrutura JWS, conforme especificado no manual de segurança. Segue um exemplo:
     *
     * ```jws
     * eyJ4NXQjUzI1NiI6IkJOVkdUamZsRTVBaUplWGhHbTZSaGtGUXkwQ25pejJXSlF5cTZhQ0pnTFkiLCJqa3UiOiJodHRwczpcL1wvcXItaC5zYW5kYm94LnBpeC5iY2IuZ292LmJyXC9yZXN0XC9qd2tzLmpzb24iLCJraWQiOiJOMjROSVg5R3Z3bm4ycGktV09IOG9RQ2JkSGlaSFdpbnJvWllxZGhxMlYwUENJIiwiYWxnIjoiUlMyNTYifQ.eyJpZFJlYyI6IlJOMTIzNDU2NzgyMDI0MDExNTc3ODI1NDQ1NjEyIiwidmluY3VsbyI6eyJjb250cmF0byI6IjU1ODI2MTAiLCJkZXZlZG9yIjp7ImNwZiI6IjQ1MTY0NjMyNDgxIiwibm9tZSI6IkZ1bGFubyBkZSBUYWwifSwib2JqZXRvIjoiU2VydmnDp28gZGUgU3RyZWFtbWluZyBkZSBNw7pzaWNhLiJ9LCJjYWxlbmRhcmlvIjp7ImRhdGFGaW5hbCI6IjIwMjUtMDQtMDEiLCJkYXRhSW5pY2lhbCI6IjIwMjQtMDQtMDEiLCJwZXJpZGlvY2lkYWRlIjoiTUVOU0FMIn0sInBvbGl0aWNhUmV0ZW50YXRpdmEiOiJOQU9fUEVSTUlURSIsInZhbG9yIjp7InZhbG9yUmVjIjoiMzUuMDAifSwicmVjZWJlZG9yIjp7ImNucGoiOiIyODc2NTAwNzgwMjM3MSIsIm5vbWUiOiJTdGFydHVwIE11c2ljYWwiLCJpc3BiUGFydGljaXBhbnRlIjoiMTIzNDU2NzgifSwiYXR1YWxpemFjYW8iOlt7InN0YXR1cyI6IkNSSUFEQSIsImRhdGEiOiIyMDI0LTAzLTIwVDEwOjEyOjA3LjU2N1oifV19.JQ3nwpN75M7ADuFQD1lAYRU_3QIkU34OCGXcqmn0dmmvl_JYQggZDY-2cN9waqZtf0duJkDs9EcRu-pNZQZlNMjI7DCYCNfXOgiiofdQqMikDh-D6Zq82EkiUqS7cuTg1-GWylCTF9gH6-p_D-dhYPvf-s4FinbjZNwhkX8Sn-OhlLMS8roIWSMjo_J1hN4DdL-Q5zgZBb7Hbt4OZ3CnD1GNbnsdUUyPyy2GfmIUWZEnQ2rY7gVuI7chUAksYeZVaJiH34saBw4Ou8RjHbSGmeWFLmjiTSQYisyQEyotStu6GnHLS36ElNDVlZWOUnb87N3H5FAccWaIQhit3C4wmA
     * ```
     *
     * Este objeto JWS assinado deve ser validado pelo pagador. Maiores detalhes técnicos a respeito da especificação
     * de segurança encontram-se no __[Manual de Segurança do Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix)__.
     *
     * Conforme pode-se verificar no exemplo acima, o objeto JWS apresenta três fragmentos separados pelo caractere `.` (ponto). São eles: `header`, `payload` e `signature`.
     *
     * Em termos de funcionalidade, o fragmento que interessa ao pagador é o `payload`, que apresenta estrutura conforme especificada pelo `schema` do presente endpoint, contendo detalhes concernentes à recorrência.
     *
     * @throws ApiError
     */
    static getRec(recUrlAccessToken: string): CancelablePromise<RecPayload>;
}
