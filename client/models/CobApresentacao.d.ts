export type CobApresentacao = {
    /**
     * Timestamp que indica o momento em que o payload JSON que representa a cobrança foi recuperado. Ou seja, idealmente, é o momento em que o usuário realizou a captura do QR Code para verificar os dados de pagamento. Respeita o formato definido na RFC 3339.
     */
    apresentacao: string;
};
