import { Component, computed, input } from '@angular/core';

import { AgendaDoDia } from '../../shared/agenda-do-dia/agenda-do-dia';
import { Banner } from '../../shared/banner/banner';
import { Cabecalho } from '../../shared/cabecalho/cabecalho';
import { Calendario } from '../../shared/calendario/calendario';
import { CardsResumo } from '../../shared/cards-resumo/cards-resumo';
import { Icone } from '../../shared/icone/icone';
import { ProximasConsultas } from '../../shared/proximas-consultas/proximas-consultas';
import {
  AGENDA_DO_DIA,
  CARDS_RESUMO,
  DATA_AGENDA,
  MES_CALENDARIO,
  PROXIMAS_CONSULTAS,
  SEMANAS_CALENDARIO,
} from '../../shared/dados-demo';
import { CONFIG_PERFIS, Perfil, rotaDoMenu } from '../../shared/perfil';

/**
 * Tela inicial dos 4 perfis (psicólogo, psiquiatra, secretária e administrador).
 * É a mesma tela: o que muda (menu, cards, botões, banner...) vem de CONFIG_PERFIS.
 * O perfil chega pela rota (o `data` do pai, ver app.routes.ts) e o menu lateral vem do PainelShell.
 */
@Component({
  selector: 'app-painel-inicio',
  imports: [AgendaDoDia, Banner, Cabecalho, Calendario, CardsResumo, Icone, ProximasConsultas],
  templateUrl: './painel-inicio.html',
})
export class PainelInicio {
  readonly perfil = input.required<Perfil>();

  protected readonly config = computed(() => CONFIG_PERFIS[this.perfil()]);
  protected readonly rotaAgenda = computed(() => rotaDoMenu(this.perfil(), 'agenda'));

  // TODO (back-end): trocar por dados vindos da API.
  protected readonly agenda = AGENDA_DO_DIA;
  protected readonly dataAgenda = DATA_AGENDA;
  protected readonly proximas = PROXIMAS_CONSULTAS;
  protected readonly cards = CARDS_RESUMO;
  protected readonly mesCalendario = MES_CALENDARIO;
  protected readonly semanas = SEMANAS_CALENDARIO;
}
