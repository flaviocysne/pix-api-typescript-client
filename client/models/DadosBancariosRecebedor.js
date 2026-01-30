"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosBancariosRecebedor = void 0;
var DadosBancariosRecebedor;
(function (DadosBancariosRecebedor) {
    /**
     * Tipo da conta do usuário recebedor.
     */
    let tipoConta;
    (function (tipoConta) {
        tipoConta["CORRENTE"] = "CORRENTE";
        tipoConta["POUPANCA"] = "POUPANCA";
        tipoConta["PAGAMENTO"] = "PAGAMENTO";
    })(tipoConta = DadosBancariosRecebedor.tipoConta || (DadosBancariosRecebedor.tipoConta = {}));
})(DadosBancariosRecebedor || (exports.DadosBancariosRecebedor = DadosBancariosRecebedor = {}));
