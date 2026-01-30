import type { CobCompleta } from '../models/CobCompleta';
import type { CobGerada } from '../models/CobGerada';
import type { CobRevisada } from '../models/CobRevisada';
import type { CobsConsultadas } from '../models/CobsConsultadas';
import type { CobSolicitada } from '../models/CobSolicitada';
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { Revisao } from '../models/Revisao';
import type { TxId } from '../models/TxId';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CobService {
    /**
     * Criar cobrança imediata.
     * Endpoint para criar uma cobrança imediata.
     * @param txid
     * @param requestBody Dados para geração da cobrança imediata.
     * @returns CobGerada Cobrança imediata criada
     * @throws ApiError
     */
    static putCob(txid: TxId, requestBody: CobSolicitada): CancelablePromise<CobGerada>;
    /**
     * Revisar cobrança imediata.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobGerada Cobrança imediata revisada. A revisão deve ser incrementada em 1.
     * @throws ApiError
     */
    static patchCob(txid: TxId, requestBody: CobRevisada): CancelablePromise<CobGerada>;
    /**
     * Consultar cobrança imediata.
     * Endpoint para consultar uma cobrança através de um determinado txid.
     * @param txid
     * @param revisao
     * @returns CobCompleta Dados da cobrança imediata.
     * @throws ApiError
     */
    static getCob(txid: TxId, revisao?: Revisao): CancelablePromise<CobCompleta>;
    /**
     * Criar cobrança imediata.
     * Endpoint para criar uma cobrança imediata, neste caso, o txid deve ser definido pelo PSP.
     * @param requestBody Dados para geração da cobrança imediata.
     * @returns CobGerada Cobrança imediata criada
     * @throws ApiError
     */
    static postCob(requestBody: CobSolicitada): CancelablePromise<CobGerada>;
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
    static getCob1(inicio: Inicio, fim: Fim, cpf?: string, cnpj?: string, locationPresente?: boolean, status?: string, paginacaoPaginaAtual?: number, paginacaoItensPorPagina?: number): CancelablePromise<CobsConsultadas>;
}
