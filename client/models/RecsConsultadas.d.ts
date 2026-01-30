import type { ParametrosConsultaRec } from './ParametrosConsultaRec';
import type { RecCompletaPesquisada } from './RecCompletaPesquisada';
export type RecsConsultadas = {
    parametros: ParametrosConsultaRec;
    recs: Array<RecCompletaPesquisada>;
};
