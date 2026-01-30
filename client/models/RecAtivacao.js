"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecAtivacao = void 0;
var RecAtivacao;
(function (RecAtivacao) {
    /**
     * Dado relacionado ao caminho percorrido pelo processo de adesão a recorrência pelo usuário pagador, os valores possíveis são:
     * - JORNADA_1: Usuário pagador aceitou a recorrência através de notificação externa ao ecossistema
     * - JORNADA_2: Usuário pagador aceitou a recorrência através de leitura de QR Code de recorrência
     * - JORNADA_3: Usuário pagador iniciou a recorrência através de leitura de QR Code composto e pagamento de cobrança imediata. O uso desta jornada torna obrigatório o preenchimento da informação dadosJornada.txid
     * - JORNADA_4: Usuário pagador escolheu aderir à recorrência através de leitura de QR Code composto relacionado à cobrança com vencimento ou estática relacionada a um contrato vigente
     * - AGUARDANDO_DEFINICAO: Valor inicial posterior a criação e anterior a ativação da recorrência.
     *
     */
    let tipoJornada;
    (function (tipoJornada) {
        tipoJornada["JORNADA_1"] = "JORNADA_1";
        tipoJornada["JORNADA_2"] = "JORNADA_2";
        tipoJornada["JORNADA_3"] = "JORNADA_3";
        tipoJornada["JORNADA_4"] = "JORNADA_4";
        tipoJornada["AGUARDANDO_DEFINICAO"] = "AGUARDANDO_DEFINICAO";
    })(tipoJornada = RecAtivacao.tipoJornada || (RecAtivacao.tipoJornada = {}));
})(RecAtivacao || (exports.RecAtivacao = RecAtivacao = {}));
