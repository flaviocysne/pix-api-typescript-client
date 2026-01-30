import type { ParametrosConsultaPayloadLocation } from './ParametrosConsultaPayloadLocation';
import type { PayloadLocationCompleta } from './PayloadLocationCompleta';
export type PayloadLocationConsultadas = {
    parametros: ParametrosConsultaPayloadLocation;
    loc: Array<PayloadLocationCompleta>;
};
