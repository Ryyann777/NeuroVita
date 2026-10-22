import { Injectable, signal } from '@angular/core';

import { deISO, paraISO } from '../util';
import { DOCUMENTOS_INICIAIS, PACIENTES_INICIAIS } from './dados-clinica';
import { Consulta, Documento, Paciente, Secao } from './modelos';

export type NovoPaciente = Pick<Paciente, 'nome' | 'nascimento' | 'telefone' | 'email' | 'endereco'>;
export type DadosDocumento = Omit<Documento, 'id' | 'atualizadoEm'> & { id?: string };

/**
 * Guarda os pacientes e documentos EM MEMÓRIA (somem ao recarregar a página).
 * TODO (back-end): trocar o conteúdo dos métodos por chamadas HttpClient. Os componentes
 * não precisam mudar, desde que os métodos devolvam os mesmos tipos.
 */
@Injectable({ providedIn: 'root' })
export class Clinica {
  private readonly _pacientes = signal<Paciente[]>(PACIENTES_INICIAIS);
  private readonly _documentos = signal<Documento[]>(DOCUMENTOS_INICIAIS);

  readonly pacientes = this._pacientes.asReadonly();
  readonly documentos = this._documentos.asReadonly();

  paciente(id: string | undefined): Paciente | undefined {
    return this._pacientes().find((p) => p.id === id);
  }

  /** Documentos de um paciente em uma seção, do mais novo para o mais antigo. */
  documentosDe(pacienteId: string | undefined, secao: Secao | undefined): Documento[] {
    return this._documentos()
      .filter((d) => d.pacienteId === pacienteId && d.secao === secao)
      .sort((a, b) => b.dataSessao.localeCompare(a.dataSessao) || b.atualizadoEm.localeCompare(a.atualizadoEm));
  }

  adicionarPaciente(dados: NovoPaciente): Paciente {
    const lista = this._pacientes();
    const maior = Math.max(0, ...lista.map((p) => Number(p.codigo) || 0));
    const codigo = String(maior + 1).padStart(5, '0');
    const base = dados.nome
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const id = lista.some((p) => p.id === base) ? `${base}-${codigo}` : base;
    const novo: Paciente = {
      ...dados, id, codigo, status: 'acompanhamento', situacao: 'Em andamento', ultimaConsulta: null,
      responsavel: { nome: '—', relacao: '—', telefone: '—', endereco: '—' },
      diagnostico: { principal: '—', cid: '—', inicioTratamento: null },
      consultas: [],
    };
    this._pacientes.update((l) => [...l, novo]);
    return novo;
  }

  adicionarConsulta(pacienteId: string, consulta: Consulta): void {
    this._pacientes.update((l) =>
      l.map((p) => (p.id === pacienteId ? { ...p, consultas: [consulta, ...p.consultas] } : p)),
    );
  }

  salvarDocumento(dados: DadosDocumento): Documento {
    const completo: Documento = {
      ...dados,
      id: dados.id ?? `d${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      atualizadoEm: new Date().toISOString(),
    };
    this._documentos.update((l) =>
      dados.id ? l.map((d) => (d.id === dados.id ? completo : d)) : [...l, completo],
    );
    if (completo.secao === 'evolucoes') this.atualizarUltimaConsulta(completo.pacienteId, completo.dataSessao);
    return completo;
  }

  private atualizarUltimaConsulta(pacienteId: string, data: string): void {
    this._pacientes.update((l) =>
      l.map((p) =>
        p.id === pacienteId && (!p.ultimaConsulta || deISO(data) > deISO(p.ultimaConsulta))
          ? { ...p, ultimaConsulta: data }
          : p,
      ),
    );
  }
}

export const hojeISO = () => paraISO(new Date());
