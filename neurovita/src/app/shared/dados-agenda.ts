/**
 * DADOS FICTÍCIOS da agenda (baseados no protótipo do Figma).
 * TODO (back-end): trocar por atendimentos reais vindos da API (com data de verdade).
 */

export type StatusAgenda = 'confirmado' | 'a-confirmar' | 'remarcado' | 'cancelado';

export interface PacienteAgenda {
  nome: string;
  idade: number;
  telefone: string;
  email: string;
}

export interface Atendimento {
  id: string;
  /** 0 = segunda ... 5 = sábado */
  dia: number;
  /** 'HH:MM' */
  inicio: string;
  /** minutos (múltiplos de 30) */
  duracao: number;
  paciente: PacienteAgenda;
  tipo: string;
  profissional: string;
  sala: string;
  status: StatusAgenda;
}

/** Segunda-feira da semana mostrada inicialmente. */
export const SEGUNDA_BASE = '2026-09-14';
/** "Hoje" da demonstração (mesmo mês das outras telas do protótipo). */
export const HOJE_DEMO = '2026-09-15';
export const AGORA_DEMO = '09:00';

/** Horários da grade: 08:00 até 18:00, de 30 em 30 minutos. */
export const HORARIOS: string[] = Array.from({ length: 21 }, (_, i) => {
  const minutos = 8 * 60 + i * 30;
  return `${String(Math.floor(minutos / 60)).padStart(2, '0')}:${String(minutos % 60).padStart(2, '0')}`;
});

const P = {
  maria: { nome: 'Maria Oliveira', idade: 15, telefone: '(61) 93484-7124', email: 'antonio.oliveira@email.com' },
  joao: { nome: 'João Silva', idade: 12, telefone: '(61) 99120-3344', email: 'joao.silva@email.com' },
  victor: { nome: 'Victor Antônio', idade: 10, telefone: '(61) 98733-1209', email: 'victor.antonio@email.com' },
  caio: { nome: 'Caio Felipe', idade: 17, telefone: '(61) 99455-0912', email: 'caio.felipe@email.com' },
  marcos: { nome: 'Marcos Santos', idade: 16, telefone: '(61) 99877-4501', email: 'marcos.santos@email.com' },
  carlos: { nome: 'Carlos Antônio', idade: 9, telefone: '(61) 98122-7788', email: 'carlos.antonio@email.com' },
  julia: { nome: 'Júlia César', idade: 14, telefone: '(61) 99311-6620', email: 'julia.cesar@email.com' },
  anthony: { nome: 'Anthony Leite', idade: 11, telefone: '(61) 98866-2301', email: 'anthony.leite@email.com' },
  roberto: { nome: 'Roberto Lima', idade: 13, telefone: '(61) 99644-8812', email: 'roberto.lima@email.com' },
  luiza: { nome: 'Luiza Guedes', idade: 15, telefone: '(61) 99208-5533', email: 'luiza.guedes@email.com' },
  bruno: { nome: 'Bruno Alves', idade: 12, telefone: '(61) 98411-9087', email: 'bruno.alves@email.com' },
  ana: { nome: 'Ana Paula Souza', idade: 16, telefone: '(61) 99532-1470', email: 'ana.souza@email.com' },
} satisfies Record<string, PacienteAgenda>;

const EDU = 'Dr. Eduardo Cabral';
const JUL = 'Dr. Juliana Cabral';
const MAR = 'Dra. Maria';

let n = 0;
function a(
  dia: number, inicio: string, duracao: number, paciente: PacienteAgenda, tipo: string,
  profissional: string, status: StatusAgenda, sala = 'Sala 01',
): Atendimento {
  n += 1;
  return { id: `a${n}`, dia, inicio, duracao, paciente, tipo, profissional, sala, status };
}

export const ATENDIMENTOS: Atendimento[] = [
  // Segunda
  a(0, '08:00', 60, P.maria, 'Avaliação inicial', EDU, 'remarcado'),
  a(0, '09:30', 30, P.joao, 'TDAH', JUL, 'confirmado'),
  a(0, '11:30', 60, P.victor, 'TDAH', JUL, 'confirmado'),
  a(0, '14:00', 60, P.caio, 'TDAH', JUL, 'confirmado'),
  a(0, '15:30', 60, P.marcos, 'Depressão', JUL, 'a-confirmar'),
  a(0, '17:00', 30, P.luiza, 'TDAH', JUL, 'confirmado'),
  // Terça (hoje)
  a(1, '08:00', 30, P.carlos, 'TDAH', JUL, 'confirmado'),
  a(1, '09:30', 60, P.julia, 'Avaliação inicial', MAR, 'confirmado', 'Sala 02'),
  a(1, '11:00', 30, P.anthony, 'TDAH', JUL, 'a-confirmar'),
  a(1, '12:30', 30, P.roberto, 'TDAH', JUL, 'confirmado'),
  a(1, '13:30', 60, P.marcos, 'Depressão', JUL, 'cancelado'),
  a(1, '15:00', 30, P.luiza, 'TDAH', JUL, 'a-confirmar'),
  a(1, '16:30', 30, P.carlos, 'TDAH', JUL, 'confirmado'),
  a(1, '17:30', 30, P.bruno, 'Ansiedade', MAR, 'a-confirmar'),
  // Quarta
  a(2, '08:30', 60, P.carlos, 'TDAH', JUL, 'confirmado'),
  a(2, '10:00', 60, P.marcos, 'Depressão', JUL, 'a-confirmar'),
  a(2, '12:00', 30, P.julia, 'TDAH', JUL, 'confirmado'),
  a(2, '14:30', 60, P.anthony, 'TDAH', JUL, 'confirmado'),
  a(2, '16:00', 30, P.ana, 'Ansiedade', MAR, 'confirmado'),
  // Quinta
  a(3, '09:00', 30, P.roberto, 'TDAH', JUL, 'confirmado'),
  a(3, '10:30', 60, P.marcos, 'Depressão', JUL, 'remarcado'),
  a(3, '13:00', 30, P.bruno, 'Ansiedade', MAR, 'confirmado'),
  a(3, '15:00', 60, P.victor, 'TDAH', JUL, 'a-confirmar'),
  a(3, '17:00', 30, P.joao, 'TDAH', JUL, 'confirmado'),
  // Sexta
  a(4, '08:00', 60, P.carlos, 'TDAH', JUL, 'confirmado'),
  a(4, '10:00', 30, P.luiza, 'TDAH', JUL, 'a-confirmar'),
  a(4, '12:30', 60, P.ana, 'Ansiedade', MAR, 'confirmado'),
  a(4, '14:30', 30, P.caio, 'TDAH', JUL, 'confirmado'),
  // Sábado
  a(5, '08:30', 60, P.marcos, 'Depressão', JUL, 'a-confirmar'),
  a(5, '10:00', 60, P.carlos, 'TDAH', JUL, 'confirmado'),
  a(5, '12:00', 30, P.bruno, 'Ansiedade', MAR, 'confirmado'),
];
