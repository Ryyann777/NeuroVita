import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Aviso } from '../../shared/aviso/aviso';
import { Clinica } from '../../shared/clinica/clinica';
import { ORDEM_SECOES, SECOES } from '../../shared/clinica/secoes';
import { Dialogo } from '../../shared/dialogo/dialogo';
import { FaixaPaciente } from '../../shared/faixa-paciente/faixa-paciente';
import { Icone } from '../../shared/icone/icone';
import { TituloPagina } from '../../shared/titulo-pagina/titulo-pagina';
import { formatarData, paraISO } from '../../shared/util';

/** Prontuário do paciente: dados pessoais, responsável, atalhos e histórico de consultas. */
@Component({
  selector: 'app-prontuario',
  imports: [Dialogo, FaixaPaciente, Icone, RouterLink, TituloPagina],
  templateUrl: './prontuario.html',
})
export class Prontuario {
  private readonly clinica = inject(Clinica);
  private readonly aviso = inject(Aviso);

  /** Vem da rota: /psicologo/pacientes/:id */
  readonly id = input.required<string>();

  protected readonly paciente = computed(() => this.clinica.paciente(this.id()));
  protected readonly nascimento = computed(() => formatarData(this.paciente()?.nascimento));
  protected readonly secoes = ORDEM_SECOES.map((id) => SECOES[id]);
  protected readonly consultas = computed(() =>
    (this.paciente()?.consultas ?? []).map((c) => ({ ...c, dataBR: formatarData(c.data) })),
  );

  protected readonly anotacaoAberta = signal(false);
  protected readonly anotacao = signal('');
  protected readonly erro = signal('');

  protected abrirAnotacao(): void {
    this.anotacao.set('');
    this.erro.set('');
    this.anotacaoAberta.set(true);
  }

  protected salvarAnotacao(): void {
    const texto = this.anotacao().trim();
    if (!texto) {
      this.erro.set('Escreva a anotação antes de salvar.');
      return;
    }
    // TODO (back-end): o profissional deve vir do usuário logado.
    this.clinica.adicionarConsulta(this.id(), { data: paraISO(new Date()), profissional: 'Dra. Maria - Psicóloga', resumo: texto });
    this.anotacaoAberta.set(false);
    this.aviso.mostrar('Anotação adicionada ao histórico.');
  }
}
