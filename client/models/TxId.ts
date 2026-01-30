/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * # Identificador da transação
 *
 * O campo `txid` determina o identificador da transação.
 * O objetivo desse campo é ser um elemento que possibilite ao PSP do recebedor apresentar ao usuário recebedor a funcionalidade de conciliação de pagamentos.
 *
 * Na pacs.008, é referenciado como `TransactionIdentification <txId>` ou `idConciliacaoRecebedor`.
 *
 * Em termos de fluxo de funcionamento, o txid é lido pelo aplicativo do PSP do pagador e,
 * depois de confirmado o pagamento, é enviado para o SPI via pacs.008.
 * Uma pacs.008 também é enviada ao PSP do recebedor, contendo, além de todas as informações usuais
 * do pagamento, o txid.
 * Ao perceber um recebimento dotado de txid, o PSP do recebedor está apto a se comunicar com o usuário recebedor,
 * informando que um pagamento específico foi liquidado.
 *
 * O txid é criado exclusivamente pelo usuário recebedor e está sob sua responsabilidade.
 * O txid, no contexto de representação de uma cobrança, é único por CPF/CNPJ do usuário recebedor. Cabe ao
 * PSP recebedor validar essa regra na API Pix.
 *
 */
export type TxId = string;
