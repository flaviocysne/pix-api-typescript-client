/**
 * Dados criados ou alterados da cobrança recorrente via API Pix
 */
export type SolicRecId = {
    /**
     * # Identificador da Solicitação da Recorrência
     *
     * Regra de formação:
     * - SCxxxxxxxxyyyyMMddkkkkkkkkkkk (29 caracteres; “case sensitive”, isso é, diferencia letras maiúsculas e minúsculas), sendo:
     * - SC - fixo (2 caracteres);
     * - xxxxxxxx – ISPB do agente que envia a mensagem pain.009 de solicitação de confirmação da recorrência (8 caracteres alfanuméricos [A-Z|0-9]);
     * - yyyyMMdd – data (8 caracteres) de criação da mensagem pain.009 de solicitação de confirmação da recorrência;
     * - kkkkkkkkkkk – sequencial criado pelo agente que gerou a mensagem de solicitação de confirmação da recorrência (11 caracteres alfanuméricos [a-z|A-Z|0-9]). Deve ser único dentro de cada “yyyyMMdd”.
     *
     */
    idSolicRec: string;
};
