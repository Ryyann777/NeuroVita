import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';

import { Avatar } from '../../shared/avatar/avatar';
import {
  AGORA_DEMO, ATENDIMENTOS, Atendimento, HOJE_DEMO, HORARIOS, SEGUNDA_BASE, StatusAgenda,
} from '../../shared/dados-agenda';
import { Icone } from '../../shared/icone/icone';
import { TituloPagina } from '../../shared/titulo-pagina/titulo-pagina';
import { deISO, normalizar, paraISO } from '../../shared/util';

const DIA_MS = 24 * 60 * 60 * 1000;
const NOMES_DIAS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export const ROTULO_STATUS: Record<StatusAgenda, string> = {
  confirmado: 'Confirmado',
  'a-confirmar': 'A confirmar',
  remarcado: 'Remarcado',
  cancelado: 'Cancelado',
};

const dm = (d: Date) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
const dmy = (d: Date) => `${dm(d)}/${d.getFullYear()}`;
const minutos = (hora: string) => Number(hora.slice(0, 2)) * 60 + Number(hora.slice(3));
const somar = (iso: string, dias: number) => paraISO(new Date(deISO(iso).getTime() + dias * DIA_MS));
const mesmoDia = (a: Date, b: Date) => paraISO(a) === paraISO(b);

interface Selecao {
  id: string;
  iso: string;
}

/** Agenda semanal: grade de horários, resumo do dia, próximo atendimento e paciente selecionado. */
@Component({
  selector: 'app-agenda',
  imports: [Avatar, Icone, TituloPagina],
  templateUrl: './agenda.html',
  host: { '(document:click)': 'fecharMenu($event)' },
})
export class Agenda {
  protected readonly horarios = HORARIOS;
  protected readonly linhas = Array.from({ length: HORARIOS.length }, (_, i) => i);
  protected readonly colunas = [0, 1, 2, 3, 4, 5];
  protected readonly statusLista = Object.keys(ROTULO_STATUS) as StatusAgenda[];
  protected readonly rotulo = ROTULO_STATUS;

  protected readonly semana = signal(0);
  protected readonly busca = signal('');
  protected readonly selecao = signal<Selecao>({ id: 'a1', iso: SEGUNDA_BASE });
  protected readonly trocas = signal<Record<string, StatusAgenda>>({});
  protected readonly menuStatus = signal(false);

  private readonly seletorData = viewChild<ElementRef<HTMLInputElement>>('seletorData');
  private readonly menuRaiz = viewChild<ElementRef<HTMLElement>>('menuStatusRaiz');

  /** Os 6 dias (seg a sáb) da semana mostrada. */
  protected readonly dias = computed(() => {
    const segunda = somar(SEGUNDA_BASE, this.semana() * 7);
    return NOMES_DIAS.map((nome, i) => {
      const iso = somar(segunda, i);
      const data = deISO(iso);
      return { nome, iso, texto: dm(data), hoje: iso === HOJE_DEMO, dataCompleta: dmy(data) };
    });
  });

  protected readonly faixa = computed(() => {
    const d = this.dias();
    return `${d[0].dataCompleta} - ${d[5].dataCompleta}`;
  });

  private statusDe(a: Atendimento, iso: string): StatusAgenda {
    return this.trocas()[`${a.id}|${iso}`] ?? a.status;
  }

  /** Atendimentos da semana mostrada, já com posição na grade. */
  protected readonly eventos = computed(() => {
    const termo = normalizar(this.busca());
    const deslocamento = this.semana();
    const dias = this.dias();
    return ATENDIMENTOS
      // Só a semana inicial tem todos os atendimentos; nas outras, uma parte (dados fictícios).
      .filter((_, i) => deslocamento === 0 || (((i + deslocamento) % 4) + 4) % 4 !== 0)
      .map((a) => {
        const iso = dias[a.dia].iso;
        return {
          ...a, iso, status: this.statusDe(a, iso),
          linha: (minutos(a.inicio) - 8 * 60) / 30 + 2,
          trechos: Math.max(1, a.duracao / 30),
          destaque: !termo || normalizar(a.paciente.nome).includes(termo),
          selecionado: this.selecao().id === a.id && this.selecao().iso === iso,
        };
      });
  });

  /** Atendimentos do "hoje" da demonstração (independente da semana mostrada). */
  private readonly atendimentosHoje = computed(() => {
    const dia = ((deISO(HOJE_DEMO).getDay() + 6) % 7);
    return ATENDIMENTOS.filter((a) => a.dia === dia).map((a) => ({ ...a, status: this.statusDe(a, HOJE_DEMO) }));
  });

  protected readonly dataHoje = dmy(deISO(HOJE_DEMO));

  protected readonly resumo = computed(() => {
    const lista = this.atendimentosHoje();
    const conta = (s: StatusAgenda) => lista.filter((a) => a.status === s).length;
    const ocupados = lista.filter((a) => a.status !== 'cancelado').reduce((t, a) => t + a.duracao / 30, 0);
    return [
      { classe: 'confirmado', rotulo: 'Confirmados', valor: conta('confirmado') },
      { classe: 'a-confirmar', rotulo: 'A confirmar', valor: conta('a-confirmar') },
      { classe: 'vago', rotulo: 'Horário vago', valor: HORARIOS.length - ocupados },
      { classe: 'remarcado', rotulo: 'Remarcado', valor: conta('remarcado') },
      { classe: 'cancelado', rotulo: 'Cancelado', valor: conta('cancelado') },
    ];
  });

  protected readonly proximo = computed(() =>
    this.atendimentosHoje()
      .filter((a) => a.status !== 'cancelado' && minutos(a.inicio) > minutos(AGORA_DEMO))
      .sort((x, y) => minutos(x.inicio) - minutos(y.inicio))[0],
  );

  protected readonly escolhido = computed(() => {
    const { id, iso } = this.selecao();
    const base = ATENDIMENTOS.find((a) => a.id === id);
    if (!base) return undefined;
    return { ...base, status: this.statusDe(base, iso), iso, dataBR: dmy(deISO(iso)) };
  });

  protected selecionar(id: string, iso: string): void {
    this.selecao.set({ id, iso });
    this.menuStatus.set(false);
  }

  protected irPara(delta: number): void {
    this.semana.update((s) => s + delta);
  }

  protected irParaHoje(): void {
    this.semana.set(0);
  }

  protected abrirCalendario(): void {
    const campo = this.seletorData()?.nativeElement;
    if (!campo) return;
    try {
      campo.showPicker();
    } catch {
      campo.focus();
    }
  }

  protected escolherData(evento: Event): void {
    const valor = (evento.target as HTMLInputElement).value;
    if (!valor) return;
    const alvo = deISO(valor);
    const diaSemana = (alvo.getDay() + 6) % 7;
    const segundaAlvo = new Date(alvo.getTime() - diaSemana * DIA_MS);
    const diferenca = Math.round((segundaAlvo.getTime() - deISO(SEGUNDA_BASE).getTime()) / DIA_MS);
    this.semana.set(Math.round(diferenca / 7));
  }

  protected trocarStatus(status: StatusAgenda): void {
    const { id, iso } = this.selecao();
    this.trocas.update((t) => ({ ...t, [`${id}|${iso}`]: status }));
    this.menuStatus.set(false);
  }

  protected fecharMenu(evento: Event): void {
    if (this.menuStatus() && !this.menuRaiz()?.nativeElement.contains(evento.target as Node)) this.menuStatus.set(false);
  }

  protected readonly mesmoDia = mesmoDia;
}
