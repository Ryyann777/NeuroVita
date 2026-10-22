export type StatusPaciente = 'acompanhamento' | 'aguardando' | 'inativo';
export type Secao = 'evolucoes' | 'laudos' | 'encaminhamentos' | 'avaliacoes' | 'atestados';
export type TipoAtendimento = 'Presencial' | 'Online';

export interface Responsavel {
  nome: string;
  relacao: string;
  telefone: string;
  endereco: string;
}

export interface Consulta {
  /** 'aaaa-mm-dd' */
  data: string;
  profissional: string;
  resumo: string;
}

export interface Paciente {
  id: string;
  /** Número que aparece como "ID: 00123". */
  codigo: string;
  nome: string;
  /** 'aaaa-mm-dd' */
  nascimento: string;
  telefone: string;
  email: string;
  endereco: string;
  status: StatusPaciente;
  /** Texto mostrado no prontuário (ex.: "Em andamento"). */
  situacao: string;
  ultimaConsulta: string | null;
  responsavel: Responsavel;
  diagnostico: { principal: string; cid: string; inicioTratamento: string | null };
  consultas: Consulta[];
  foto?: string;
}

export interface Anexo {
  nome: string;
  /** Endereço temporário do arquivo no navegador (some ao recarregar a página). */
  url: string;
}

export interface Documento {
  id: string;
  pacienteId: string;
  secao: Secao;
  titulo: string;
  /** 'aaaa-mm-dd' */
  dataSessao: string;
  tipoAtendimento: TipoAtendimento;
  /** Texto formatado (HTML). */
  conteudo: string;
  atualizadoEm: string;
  anexos: Anexo[];
  /** Presente quando o documento foi enviado como arquivo (upload). */
  arquivo?: Anexo;
}
