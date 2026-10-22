import { Route, Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { EsqueciSenha } from './pages/esqueci-senha/esqueci-senha';
import { Codigo } from './pages/codigo/codigo';
import { RedefinirSenha } from './pages/redefinir-senha/redefinir-senha';
import { NaoEncontrada } from './pages/nao-encontrada/nao-encontrada';
import { Agenda } from './pages/agenda/agenda';
import { DocumentoEditor } from './pages/documento-editor/documento-editor';
import { DocumentoLeitura } from './pages/documento-leitura/documento-leitura';
import { Pacientes } from './pages/pacientes/pacientes';
import { PainelInicio } from './pages/painel-inicio/painel-inicio';
import { PainelShell } from './pages/painel-shell/painel-shell';
import { Prontuario } from './pages/prontuario/prontuario';
import { SecaoPaciente } from './pages/secao-paciente/secao-paciente';
import { CONFIG_PERFIS, Perfil } from './shared/perfil';

/**
 * Cada perfil tem uma "moldura" (menu à esquerda) e as telas dentro dela.
 * O `data: { perfil }` do pai é repassado às telas filhas (ver withRouterConfig em app.config.ts).
 * TODO (back-end): proteger estas rotas (guard) quando o login for real.
 */
function rotasDoPerfil(perfil: Perfil, filhas: Route[] = []): Route {
  return {
    path: perfil,
    component: PainelShell,
    data: { perfil },
    children: [{ path: '', component: PainelInicio, title: CONFIG_PERFIS[perfil].titulo }, ...filhas],
  };
}

const rotasDoPsicologo: Route[] = [
  { path: 'pacientes', component: Pacientes, title: 'Pacientes | NeuroVita' },
  { path: 'pacientes/:id', component: Prontuario, title: 'Prontuário | NeuroVita' },
  { path: 'pacientes/:id/:secao', component: SecaoPaciente, title: 'Prontuário | NeuroVita' },
  { path: 'pacientes/:id/:secao/novo', component: DocumentoEditor, title: 'Novo documento | NeuroVita' },
  { path: 'pacientes/:id/:secao/:docId/editar', component: DocumentoEditor, title: 'Editar documento | NeuroVita' },
  { path: 'pacientes/:id/:secao/:docId', component: DocumentoLeitura, title: 'Documento | NeuroVita' },
  { path: 'agenda', component: Agenda, title: 'Agenda | NeuroVita' },
];

export const routes: Routes = [
  { path: '', component: Login, title: 'Entrar | NeuroVita' },
  { path: 'esqueci-senha', component: EsqueciSenha, title: 'Esqueci minha senha | NeuroVita' },
  { path: 'codigo', component: Codigo, title: 'Digite o código | NeuroVita' },
  { path: 'redefinir-senha', component: RedefinirSenha, title: 'Redefinir senha | NeuroVita' },

  rotasDoPerfil('psicologo', rotasDoPsicologo),
  rotasDoPerfil('psiquiatra'),
  rotasDoPerfil('secretaria'),
  rotasDoPerfil('admin'),

  { path: '**', component: NaoEncontrada, title: 'Página não encontrada | NeuroVita' },
];
