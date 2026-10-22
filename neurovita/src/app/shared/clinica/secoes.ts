import { Secao } from './modelos';

export interface ConfigSecao {
  id: Secao;
  /** "Laudos" */
  rotulo: string;
  /** "Laudo" */
  singular: string;
  botaoNovo: string;
  tituloCartao: string;
  botaoSalvar: string;
  dialogoTitulo: string;
  dialogoConfirmar: string;
  vazioEditor: string;
  vazioLista: string;
  informacao: string;
  /** 'leitura' = abre direto no texto (evoluções); 'lista' = tela com a lista de documentos. */
  modo: 'leitura' | 'lista';
  /** Filtros da tela de lista. */
  filtros: 'data-busca' | 'data-tipo-anexo';
  /** O editor mostra data, tipo de atendimento e anexos? */
  camposNoEditor: boolean;
  /** O editor mostra a lista da lateral? */
  listaNoEditor: boolean;
}

export const SECOES: Record<Secao, ConfigSecao> = {
  evolucoes: {
    id: 'evolucoes',
    rotulo: 'Evoluções',
    singular: 'Evolução',
    botaoNovo: '+Nova Evolução',
    tituloCartao: 'Evolução do Paciente',
    botaoSalvar: 'Salvar Evolução',
    dialogoTitulo: 'Salvar Edição?',
    dialogoConfirmar: 'Salvar',
    vazioEditor: 'Comece a escrever uma nova evolução',
    vazioLista: 'Nenhuma evolução registrada ainda.',
    informacao: 'Aqui você encontra todas as evoluções registradas no acompanhamento do paciente.',
    modo: 'leitura',
    filtros: 'data-tipo-anexo',
    camposNoEditor: true,
    listaNoEditor: true,
  },
  laudos: {
    id: 'laudos',
    rotulo: 'Laudos',
    singular: 'Laudo',
    botaoNovo: '+ Novo Laudo',
    tituloCartao: 'Laudos do Paciente',
    botaoSalvar: 'Salvar Laudo',
    dialogoTitulo: 'Confirmar Laudo?',
    dialogoConfirmar: 'Confirmar',
    vazioEditor: 'Comece a escrever seu laudo',
    vazioLista: 'Nenhum laudo cadastrado ainda.',
    informacao: 'Os laudos devem ser elaborados com base em dados clínicos, entrevistas, testes e observações do acompanhamento.',
    modo: 'lista',
    filtros: 'data-busca',
    camposNoEditor: false,
    listaNoEditor: false,
  },
  encaminhamentos: {
    id: 'encaminhamentos',
    rotulo: 'Encaminhamentos',
    singular: 'Encaminhamento',
    botaoNovo: '+ Novo Encaminhamento',
    tituloCartao: 'Encaminhamentos do Paciente',
    botaoSalvar: 'Salvar',
    dialogoTitulo: 'Confirmar Edição?',
    dialogoConfirmar: 'Confirmar',
    vazioEditor: 'Comece a escrever seu encaminhamento',
    vazioLista: 'Nenhum encaminhamento cadastrado ainda.',
    informacao: 'Os encaminhamentos devem informar o motivo, o objetivo e o serviço ou profissional de destino.',
    modo: 'lista',
    filtros: 'data-tipo-anexo',
    camposNoEditor: true,
    listaNoEditor: true,
  },
  avaliacoes: {
    id: 'avaliacoes',
    rotulo: 'Avaliações Psicológicas',
    singular: 'Avaliação Psicológica',
    botaoNovo: '+ Nova Avaliação',
    tituloCartao: 'Avaliações Psicológicas do Paciente',
    botaoSalvar: 'Salvar',
    dialogoTitulo: 'Confirmar Edição?',
    dialogoConfirmar: 'Confirmar',
    vazioEditor: 'Comece a escrever sua avaliação',
    vazioLista: 'Nenhuma avaliação cadastrada ainda.',
    informacao: 'As avaliações devem registrar os procedimentos, instrumentos utilizados e os resultados obtidos.',
    modo: 'lista',
    filtros: 'data-tipo-anexo',
    camposNoEditor: true,
    listaNoEditor: true,
  },
  atestados: {
    id: 'atestados',
    rotulo: 'Atestados',
    singular: 'Atestado',
    botaoNovo: '+ Novo Atestado',
    tituloCartao: 'Atestados do Paciente',
    botaoSalvar: 'Salvar',
    dialogoTitulo: 'Confirmar Edição?',
    dialogoConfirmar: 'Confirmar',
    vazioEditor: 'Comece a escrever seu atestado',
    vazioLista: 'Nenhum atestado cadastrado ainda.',
    informacao: 'Os atestados devem conter data, finalidade e identificação do profissional responsável.',
    modo: 'lista',
    filtros: 'data-tipo-anexo',
    camposNoEditor: true,
    listaNoEditor: true,
  },
};

export const ORDEM_SECOES: Secao[] = ['evolucoes', 'laudos', 'encaminhamentos', 'avaliacoes', 'atestados'];

export function ehSecao(valor: string | undefined): valor is Secao {
  return !!valor && valor in SECOES;
}
