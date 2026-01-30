/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { LoteCobVConsultado } from '../models/LoteCobVConsultado';
import type { LotesCobVConsultados } from '../models/LotesCobVConsultados';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoteCobVService {
    /**
     * Criar/Alterar lote de cobranças com vencimento.
     * Endpoint utilizado para criar ou alterar um lote de cobranças com vencimento.
     *
     * Para o caso de uso de alteração de cobranças, o array a ser atribuído na requisicão
     * deve ser composto pelas exatas requisições de criação de cobranças que
     * constaram no array atribuído na requisição originária.
     *
     * Não se pode utilizar este endpoint para _alterar_ um lote de cobranças com vencimento
     * agregando ou removendo cobranças já existentes dentro do conjunto de cobranças
     * criadas na requisição originária do lote.
     *
     * Em outras palavras, se originalmente criou-se um lote, por exemplo, com as cobranças
     * [`a`, `b` e `c`], não se pode _alterar_ esse conjunto de cobranças original que o
     * lote representa para [`a`, `b`, `c`, `d`], ou para [`a`, `b`].
     * Por outro lado, pode-se alterar, _em lote_ as cobranças [`a`, `b`, `c`],
     * conforme originalmente constam na requisição originária do lote.
     *
     * Uma solicitação de __criação__ de cobrança com status "EM_PROCESSAMENTO" ou "NEGADA"
     * está associada a uma cobrança não _existe_ de fato, portanto não será
     * listada em `GET /cobv` ou `GET /cobv/{txid}`.
     *
     * Uma cobrança, uma vez criada via `PUT /cobv/{txid}`,
     * não pode ser associada a um lote posteriormente.
     *
     * Uma cobrança, uma vez criada via `PUT /lotecobv/{id}`,
     * não pode ser associada a um novo lote posteriormente.
     * @param id
     * @param requestBody Dados para geração de lote de cobranças com vencimento.
     * @returns any Lote de cobranças com vencimento solicitado para criação.
     * @throws ApiError
     */
    public static putLotecobv(
        id: string,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lotecobv/{id}',
            path: {
                'id': id,
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
     * Utilizado para revisar cobranças específicas dentro de um lote de cobranças com vencimento.
     * Endpoint utilizado para revisar cobranças específicas dentro de um lote de cobranças com vencimento.
     *
     * A diferença deste endpoint para o endpoint PUT correlato é que este endpoint admite um array
     * `cobsv` com menos solicitações de criação ou alteração de cobranças do que o array atribuído na requisição originária do lote.
     *
     * Não se pode, entretanto, utilizar esse endpoint para agregar ou remover solicitações de
     * alteração ou criação de cobranças conforme constam na requisição originária do lote.
     * @param id
     * @param requestBody Dados para geração de lote de cobranças com vencimento.
     * @returns any Solicitação de revisão do Lote de cobranças encaminhada para processamento.
     * @throws ApiError
     */
    public static patchLotecobv(
        id: string,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/lotecobv/{id}',
            path: {
                'id': id,
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
     * Consultar um lote específico de cobranças com vencimento.
     * Endpoint para consultar um lote de cobranças com vencimento.
     * @param id
     * @returns LoteCobVConsultado Lote de cobranças com vencimento.
     * @throws ApiError
     */
    public static getLotecobv(
        id: string,
    ): CancelablePromise<LoteCobVConsultado> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lotecobv/{id}',
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
     * Consultar lotes de cobranças com vencimento.
     * Endpoint para consultar lista de lotes de cobranças com vencimento.
     * @param inicio
     * @param fim
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns LotesCobVConsultados Lotes de cobranças com vencimento.
     * @throws ApiError
     */
    public static getLotecobv1(
        inicio: Inicio,
        fim: Fim,
        paginacaoPaginaAtual?: number,
        paginacaoItensPorPagina: number = 100,
    ): CancelablePromise<LotesCobVConsultados> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lotecobv',
            query: {
                'inicio': inicio,
                'fim': fim,
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
