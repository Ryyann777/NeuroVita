/**
 * DADOS FICTÍCIOS dos pacientes e documentos (baseados no protótipo do Figma).
 * TODO (back-end): trocar por chamadas à API. O serviço Clinica (clinica.ts) é o único
 * lugar que usa estes dados, então basta trocar lá.
 */
import { Consulta, Documento, Paciente } from './modelos';

const PROFISSIONAL = 'Dra. Maria - Psicóloga';
const RESUMO = 'Reavaliação do quadro, ajuste no plano terapêutico';

function historico(...datas: string[]): Consulta[] {
  return datas.map((data) => ({ data, profissional: PROFISSIONAL, resumo: RESUMO }));
}

export const PACIENTES_INICIAIS: Paciente[] = [
  {
    id: 'lucas-martins', codigo: '00123', nome: 'Lucas Martins', nascimento: '2009-01-23',
    telefone: '(61) 99524-4456', email: 'lucas.martins@email.com', endereco: 'Rua da Maria, Qd 256 - DF',
    status: 'acompanhamento', situacao: 'Em andamento', ultimaConsulta: '2026-08-02',
    responsavel: { nome: 'Ana Martins', relacao: 'Mãe', telefone: '(61) 99524-4456', endereco: 'Rua da Maria, Qd 256 - DF' },
    diagnostico: { principal: 'Transtorno de Ansiedade (F41.1)', cid: 'F41.1', inicioTratamento: '2026-03-12' },
    consultas: historico('2026-08-02', '2026-07-19', '2026-07-05', '2026-06-21', '2026-05-26'),
  },
  {
    id: 'lucas-henrique-alves', codigo: '00124', nome: 'Lucas Henrique Alves', nascimento: '2012-03-10',
    telefone: '(61) 98811-2030', email: 'lucas.alves@email.com', endereco: 'Quadra 12, Casa 8 - Valparaíso de Goiás',
    status: 'aguardando', situacao: 'Aguardando retorno', ultimaConsulta: '2026-08-08',
    responsavel: { nome: 'Carla Alves', relacao: 'Mãe', telefone: '(61) 98811-2030', endereco: 'Quadra 12, Casa 8 - Valparaíso de Goiás' },
    diagnostico: { principal: 'TDAH (F90.0)', cid: 'F90.0', inicioTratamento: '2026-02-20' },
    consultas: historico('2026-08-08', '2026-07-11', '2026-06-13'),
  },
  {
    id: 'gabriel-santos-oliveira', codigo: '00125', nome: 'Gabriel Santos Oliveira', nascimento: '2013-05-14',
    telefone: '(61) 99777-1010', email: 'gabriel.oliveira@email.com', endereco: 'Rua 5, Lote 20 - Cidade Ocidental',
    status: 'acompanhamento', situacao: 'Em andamento', ultimaConsulta: '2026-08-13',
    responsavel: { nome: 'Paulo Oliveira', relacao: 'Pai', telefone: '(61) 99777-1010', endereco: 'Rua 5, Lote 20 - Cidade Ocidental' },
    diagnostico: { principal: 'Transtorno do Espectro Autista (F84.0)', cid: 'F84.0', inicioTratamento: '2026-01-15' },
    consultas: historico('2026-08-13', '2026-07-16'),
  },
  {
    id: 'mariana-vitoria-costa', codigo: '00126', nome: 'Mariana Vitória Costa', nascimento: '2011-02-08',
    telefone: '(61) 99633-4521', email: 'mariana.costa@email.com', endereco: 'Av. Central, 450 - Luziânia',
    status: 'acompanhamento', situacao: 'Em andamento', ultimaConsulta: '2026-08-15',
    responsavel: { nome: 'Renata Costa', relacao: 'Mãe', telefone: '(61) 99633-4521', endereco: 'Av. Central, 450 - Luziânia' },
    diagnostico: { principal: 'Transtorno de Ansiedade Generalizada (F41.1)', cid: 'F41.1', inicioTratamento: '2026-04-02' },
    consultas: historico('2026-08-15', '2026-07-18'),
  },
  {
    id: 'pedro-miguel-rodrigues', codigo: '00127', nome: 'Pedro Miguel Rodrigues', nascimento: '2009-04-30',
    telefone: '(61) 99455-7788', email: 'pedro.rodrigues@email.com', endereco: 'Rua das Flores, 98 - Brasília',
    status: 'aguardando', situacao: 'Aguardando retorno', ultimaConsulta: '2026-08-19',
    responsavel: { nome: 'Marcos Rodrigues', relacao: 'Pai', telefone: '(61) 99455-7788', endereco: 'Rua das Flores, 98 - Brasília' },
    diagnostico: { principal: 'Episódio Depressivo (F32.1)', cid: 'F32.1', inicioTratamento: '2026-05-10' },
    consultas: historico('2026-08-19', '2026-07-22'),
  },
  {
    id: 'beatriz-fernandes-lima', codigo: '00128', nome: 'Beatriz Fernandes Lima', nascimento: '2010-06-17',
    telefone: '(61) 99312-6644', email: 'beatriz.lima@email.com', endereco: 'Q 3 Conj. B, Casa 14 - Santo Antônio do Descoberto',
    status: 'acompanhamento', situacao: 'Em andamento', ultimaConsulta: '2026-08-25',
    responsavel: { nome: 'Sandra Lima', relacao: 'Mãe', telefone: '(61) 99312-6644', endereco: 'Q 3 Conj. B, Casa 14 - Santo Antônio do Descoberto' },
    diagnostico: { principal: 'TDAH (F90.0)', cid: 'F90.0', inicioTratamento: '2026-03-30' },
    consultas: historico('2026-08-25', '2026-07-28'),
  },
  {
    id: 'joao-vitor-martins', codigo: '00129', nome: 'João Vitor Martins', nascimento: '2009-03-05',
    telefone: '(61) 99208-3377', email: 'joao.martins@email.com', endereco: 'Rua 10, Casa 3 - Novo Gama',
    status: 'inativo', situacao: 'Inativo', ultimaConsulta: '2026-08-29',
    responsavel: { nome: 'Helena Martins', relacao: 'Mãe', telefone: '(61) 99208-3377', endereco: 'Rua 10, Casa 3 - Novo Gama' },
    diagnostico: { principal: 'Transtorno de Ansiedade (F41.1)', cid: 'F41.1', inicioTratamento: '2025-11-18' },
    consultas: historico('2026-08-29', '2026-06-27'),
  },
];

/* ---------- Textos de exemplo dos documentos ---------- */

const bold = (t: string) => `<b>${t}</b>`;

function textoEvolucao(dataBR: string, sessao: number, modalidade: string): string {
  return (
    `<p>${bold('EVOLUÇÃO DO ATENDIMENTO PSICOLÓGICO')}<br>Data: ${dataBR}<br>Sessão: ${sessao}ª sessão<br>` +
    `Modalidade: ${modalidade}<br>Duração: 50 minutos</p><p><br></p>` +
    `<p>Objetivo da sessão: Realizar o acolhimento inicial, compreender a demanda apresentada e iniciar o levantamento do histórico e do contexto atual do paciente.<br>` +
    `Relato e conteúdos abordados: O paciente relatou preocupação frequente com questões profissionais e dificuldade para relaxar após a jornada de trabalho. Referiu que essas preocupações têm interferido em sua rotina de descanso. Foram explorados os contextos em que as dificuldades ocorrem e as estratégias utilizadas para lidar com elas.<br>` +
    `Observações clínicas pertinentes: O paciente apresentou comunicação verbal compreensível e participou das questões exploratórias propostas. As observações se restringem aos aspectos identificados durante o encontro.<br>` +
    `Intervenções realizadas: Foi realizada escuta clínica e acolhimento da demanda. Foram utilizadas perguntas abertas para explorar a percepção do paciente sobre suas dificuldades, os fatores associados e os impactos relatados em sua rotina.<br>` +
    `Resposta às intervenções: O paciente conseguiu apresentar exemplos de situações relacionadas à demanda e demonstrou disponibilidade para continuar explorando o tema.<br>` +
    `Avaliação da evolução: Por se tratar da sessão inicial, as informações são insuficientes para avaliar mudanças no quadro ou estabelecer conclusões clínicas. Recomenda-se aprofundar a compreensão da demanda e do contexto psicossocial nos próximos encontros.<br>` +
    `Planejamento para a próxima sessão: Dar continuidade ao levantamento da demanda, explorar o histórico das dificuldades, seus impactos no cotidiano e os recursos de enfrentamento disponíveis.<br>` +
    `Psicóloga: Dra. Maria<br>CRP: [Número do registro profissional]</p>`
  );
}

const TEXTO_LAUDO =
  `<p>${bold('LAUDO PSICOLÓGICO')}</p>` +
  `<p>${bold('1. IDENTIFICAÇÃO DO PACIENTE')}<br>Nome: Lucas Martins<br>Data de nascimento: 23/01/2009<br>Data da avaliação: 21/10/2026<br>Profissional responsável: Dra. Maria<br>Especialidade: Psicologia<br>CRP: 000000 — dado fictício</p>` +
  `<p>${bold('2. FINALIDADE DO LAUDO')}<br>O presente documento tem como finalidade registrar as informações obtidas durante a avaliação psicológica, descrevendo as condições observadas e as necessidades de acompanhamento.</p>` +
  `<p>${bold('3. HISTÓRICO CLÍNICO')}<br>O paciente relata episódios recorrentes de ansiedade, dificuldade de concentração e alterações no padrão de sono, com impactos em sua rotina profissional e pessoal. Refere que os sintomas se intensificam em períodos de maior demanda e estresse.</p>` +
  `<p>${bold('4. AVALIAÇÃO PSICOLÓGICA')}<br>Durante a consulta, o paciente apresentou-se consciente, orientado e colaborativo. Demonstrou discurso organizado, comunicação adequada e capacidade de relatar suas experiências de forma coerente.</p>`;

const TEXTO_LAUDO_ESCOLAR =
  `<p>${bold('LAUDO ESCOLAR')}</p><p>Destinado à instituição de ensino, com o objetivo de orientar adaptações pedagógicas conforme as necessidades do estudante Lucas Martins, em acompanhamento psicológico desde março de 2026.</p>` +
  `<p>Recomenda-se tempo adicional em avaliações, ambiente com poucos estímulos distratores e comunicação frequente entre escola, família e equipe clínica.</p>`;

const TEXTO_ENCAMINHAMENTO =
  `<p>${bold('ENCAMINHAMENTO PARA AVALIAÇÃO DE NEURODESENVOLVIMENTO E COGNIÇÃO')}<br>Paciente: Lucas Martins<br>Data de nascimento: 23/01/2009<br>Profissional solicitante: Dra. Maria<br>Especialidade: Psicologia<br>Data do encaminhamento: 21/10/2026<br>Profissional ou serviço de destino: Neuropsicologia</p>` +
  `<p>${bold('Motivo do encaminhamento')}<br>Encaminho o paciente para avaliação do neurodesenvolvimento e das funções cognitivas, considerando relatos de dificuldades de atenção, concentração, memória e organização de tarefas cotidianas.</p>` +
  `<p>${bold('Objetivo')}<br>Investigar o funcionamento cognitivo do paciente, incluindo atenção, memória, linguagem, raciocínio e funções executivas, a fim de contribuir para a compreensão de suas dificuldades e orientar possíveis intervenções.</p>` +
  `<p>${bold('Conduta solicitada')}<br>Solicito a realização da avaliação e, quando pertinente, o envio de devolutiva ao profissional solicitante, respeitando o sigilo profissional e as autorizações aplicáveis.</p>` +
  `<p>Atenciosamente,<br>Dra. Maria<br>Psicóloga<br>CRP: 000000 — dado fictício</p>`;

const TEXTO_AVALIACAO =
  `<p>${bold('AVALIAÇÃO PSICOLÓGICA')}</p>` +
  `<p>${bold('1. Identificação do paciente')}<br>Nome: Lucas Martins<br>Data de nascimento: 23/01/2009<br>Data da avaliação: 21/10/2026<br>Psicóloga responsável: Dra. Maria<br>CRP: 00/00000 — dado fictício</p>` +
  `<p>${bold('2. Objetivo da avaliação')}<br>Investigar aspectos emocionais, comportamentais e cognitivos do paciente, buscando compreender as necessidades psicológicas e identificar possíveis fatores que influenciam seu bem-estar e sua rotina.</p>` +
  `<p>${bold('3. Procedimentos realizados')}<br>A avaliação foi estruturada a partir de entrevista clínica, observação comportamental e levantamento de informações sobre histórico pessoal, familiar e escolar. A aplicação de instrumentos psicológicos foi registrada conforme os procedimentos efetivamente realizados.</p>` +
  `<p>${bold('4. Aspectos observados')}<br>Durante a situação fictícia de avaliação, o paciente apresentou comunicação adequada e demonstrou disponibilidade nas atividades propostas.</p>`;

const TEXTO_ATESTADO =
  `<p>${bold('ATESTADO DE COMPARECIMENTO')}</p><p>Atesto, para os devidos fins, que Lucas Martins compareceu a atendimento psicológico nesta data, no período das 08:00 às 08:50.</p><p>Brasília - DF, 21 de outubro de 2026.<br>Dra. Maria - Psicóloga<br>CRP: 000000 — dado fictício</p>`;

let contador = 0;
function doc(
  secao: Documento['secao'], titulo: string, dataSessao: string, conteudo: string,
  tipoAtendimento: Documento['tipoAtendimento'] = 'Presencial',
): Documento {
  contador += 1;
  return {
    id: `seed-${contador}`, pacienteId: 'lucas-martins', secao, titulo, dataSessao, tipoAtendimento,
    conteudo, atualizadoEm: `${dataSessao}T10:33:00`, anexos: [],
  };
}

export const DOCUMENTOS_INICIAIS: Documento[] = [
  doc('evolucoes', 'Evolução 02/08/2026', '2026-08-02', textoEvolucao('02/08/2026', 6, 'Presencial')),
  doc('evolucoes', 'Evolução 19/07/2026', '2026-07-19', textoEvolucao('19/07/2026', 5, 'Presencial')),
  doc('evolucoes', 'Evolução 05/07/2026', '2026-07-05', textoEvolucao('05/07/2026', 4, 'Online'), 'Online'),
  doc('evolucoes', 'Evolução 21/06/2026', '2026-06-21', textoEvolucao('21/06/2026', 3, 'Presencial')),
  doc('evolucoes', 'Evolução 07/06/2026', '2026-06-07', textoEvolucao('07/06/2026', 2, 'Presencial')),
  doc('evolucoes', 'Evolução 26/05/2026', '2026-05-26', textoEvolucao('26/05/2026', 1, 'Presencial')),
  doc('laudos', 'Laudo do Psicólogo', '2026-08-02', TEXTO_LAUDO),
  doc('laudos', 'Laudo Escolar', '2026-07-19', TEXTO_LAUDO_ESCOLAR),
  doc('encaminhamentos', 'Neurodesenvolvimento e Cognição', '2026-08-02', TEXTO_ENCAMINHAMENTO),
  doc('avaliacoes', 'Avaliação Psicológica', '2026-07-19', TEXTO_AVALIACAO),
  doc('atestados', 'Atestado de comparecimento', '2026-08-02', TEXTO_ATESTADO),
];
