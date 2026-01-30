import type { ParametrosConsultaPayloadLocationRec } from './ParametrosConsultaPayloadLocationRec';
import type { PayloadLocationRecCompleta } from './PayloadLocationRecCompleta';
export type PayloadLocationRecConsultadas = {
    parametros: ParametrosConsultaPayloadLocationRec;
    loc: Array<PayloadLocationRecCompleta>;
};
