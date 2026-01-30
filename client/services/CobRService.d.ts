import type { CobRCompleta } from '../models/CobRCompleta';
import type { CobRGerada } from '../models/CobRGerada';
import type { CobRRevisada } from '../models/CobRRevisada';
import type { CobRSolicitada } from '../models/CobRSolicitada';
import type { CobsRConsultadas } from '../models/CobsRConsultadas';
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { TxId } from '../models/TxId';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CobRService {
    /**
     * Criar cobrança recorrente.
     * Endpoint para criar uma cobrança recorrente.
     * @param txid
     * @param requestBody Dados para geração da cobrança recorrente.
     * @returns CobRGerada Cobrança imediata recorrente.
     * @throws ApiError
     */
    static putCobr(txid: TxId, requestBody: CobRSolicitada): CancelablePromise<CobRGerada>;
    /**
     * Revisar cobrança recorrente.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobRGerada Cobrança recorrente revisada.
     * @throws ApiError
     */
    static patchCobr(txid: TxId, requestBody: CobRRevisada): CancelablePromise<CobRGerada>;
    /**
     * Consultar cobrança recorrente.
     * Endpoint para consultar uma cobrança recorrente através de um determinado txid.
     * @param txid
     * @returns CobRCompleta Dados da cobrança recorrente.
     * @throws ApiError
     */
    static getCobr(txid: TxId): CancelablePromise<CobRCompleta>;
    /**
     * Criar cobrança recorrente.
     * Endpoint para criar uma cobrança recorrente, neste caso, o txid deve ser definido pelo PSP.
     * @param requestBody Dados para geração da cobrança recorrente.
     * @returns CobRGerada Cobrança recorrente criada.
     * @throws ApiError
     */
    static postCobr(requestBody: CobRSolicitada): CancelablePromise<CobRGerada>;
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
    static getCobr1(inicio: Inicio, fim: Fim, idRec?: string, cpf?: string, cnpj?: string, status?: string, convenio?: string, paginacaoPaginaAtual?: number, paginacaoItensPorPagina?: number): CancelablePromise<CobsRConsultadas>;
    /**
     * Solicitar retentativa de cobrança.
     * Endpoint para solicitar retentativa de uma cobrança recorrente.
     * @param txid
     * @param data Data prevista para liquidação da ordem de pagamento correspondente. Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601.
     * @returns any Cobrança recorrente.
     * @throws ApiError
     */
    static postCobrRetentativa(txid: TxId, data: string): CancelablePromise<CobRCompleta>;
}
