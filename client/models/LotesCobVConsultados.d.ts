import type { LoteCobVConsultado } from './LoteCobVConsultado';
import type { ParametrosConsultaLote } from './ParametrosConsultaLote';
export type LotesCobVConsultados = {
    parametros: ParametrosConsultaLote;
    lotes: Array<LoteCobVConsultado>;
};
