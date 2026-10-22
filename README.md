# NeuroVita

Front-end do **NeuroVita**, um sistema web para clínicas de psicologia e psiquiatria, com foco em agendamento de consultas e acompanhamento de pacientes. Projeto da faculdade, feito em **Angular**.

> **Status:** em desenvolvimento. O front-end está funcionando com dados de teste. A ligação com o back-end ainda não foi feita.

## Perfis de usuário

O sistema tem 4 perfis. As telas são parecidas, mas o menu, os botões e as funções mudam de acordo com quem entrou.

| Perfil | O que tem hoje |
| --- | --- |
| **Psicólogo** | Início, Pacientes, Prontuário (evoluções, laudos, encaminhamentos, avaliações e atestados) e Agenda |
| **Psiquiatra** | Tela inicial |
| **Secretária** | Tela inicial |
| **Administrador** | Tela inicial |

As telas dos outros perfis (Pacientes, Profissionais, Secretária, Agenda etc.) ainda serão feitas.

## Tecnologias

- [Angular](https://angular.dev) 21 (componentes standalone e signals)
- TypeScript
- CSS puro (arquivo único `src/styles.css`)
- Fonte [Poppins](https://fonts.google.com/specimen/Poppins)

O visual segue o protótipo do Figma da equipe de design.

## Como rodar

**Requisitos:** [Node.js](https://nodejs.org) (recomendado a versão LTS atual) e o Angular CLI (`npm install -g @angular/cli`).

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git

# 2. Entrar na pasta do projeto (a que tem o package.json)
cd NOME-DO-REPOSITORIO

# 3. Instalar as dependências
npm install

# 4. Rodar
npm start
```

Depois abra **http://localhost:4200** no navegador.

> **Windows / PowerShell:** se aparecer o erro de "execução de scripts desabilitada", rode uma vez
> `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` e abra o terminal de novo.

### Outros comandos

| Comando | Para que serve |
| --- | --- |
| `npm start` | Servidor de desenvolvimento (atualiza sozinho ao salvar) |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm test` | Roda os testes |

## Login de teste (sem back-end)

Na tela de login, ao clicar no campo de e-mail aparece a lista de contas de teste. A senha de todas é **`123456`**.

| E-mail | Vai para |
| --- | --- |
| `psicologo@neurovita.com` | `/psicologo` |
| `psiquiatra@neurovita.com` | `/psiquiatra` |
| `secretaria@neurovita.com` | `/secretaria` |
| `admin@neurovita.com` | `/admin` |

O e-mail não diferencia maiúsculas de minúsculas. Também dá para abrir cada tela direto pelo endereço.

## Rotas

| Endereço | Tela |
| --- | --- |
| `/` | Login |
| `/esqueci-senha`, `/codigo`, `/redefinir-senha` | Recuperação de senha |
| `/psicologo`, `/psiquiatra`, `/secretaria`, `/admin` | Tela inicial de cada perfil |
| `/psicologo/pacientes` | Lista de pacientes |
| `/psicologo/pacientes/:id` | Prontuário do paciente |
| `/psicologo/pacientes/:id/:secao` | Evoluções, laudos, encaminhamentos, avaliações ou atestados |
| `/psicologo/pacientes/:id/:secao/novo` | Novo documento |
| `/psicologo/pacientes/:id/:secao/:docId` | Ler um documento |
| `/psicologo/pacientes/:id/:secao/:docId/editar` | Editar um documento |
| `/psicologo/agenda` | Agenda semanal |
| qualquer outro | Página não encontrada |

`:secao` pode ser `evolucoes`, `laudos`, `encaminhamentos`, `avaliacoes` ou `atestados`.

## Estrutura do projeto

```
src/
  styles.css                 -> todo o visual do projeto
  app/
    app.routes.ts            -> rotas
    pages/                   -> uma pasta por tela
      login/  esqueci-senha/  codigo/  redefinir-senha/  nao-encontrada/
      painel-shell/          -> moldura com o menu lateral
      painel-inicio/         -> tela inicial dos 4 perfis
      pacientes/  prontuario/  secao-paciente/
      documento-leitura/  documento-editor/  agenda/
    shared/                  -> o que é usado em mais de uma tela
      auth.ts                -> login de teste
      perfil.ts              -> os 4 perfis e o que muda em cada um
      dados-demo.ts          -> dados fictícios das telas iniciais
      dados-agenda.ts        -> dados fictícios da agenda
      clinica/               -> pacientes e documentos (em memória) e dados fictícios
      editor-texto/  menu-lateral/  cabecalho/  agenda-do-dia/  calendario/ ...
public/
  img/                       -> logo e imagens
```

## Ligando ao back-end

Hoje tudo é fictício. Os pontos que precisam ser trocados estão marcados com `TODO` no código.

- **Login:** `shared/auth.ts`. Trocar por uma chamada à API. O servidor deve devolver o perfil do usuário (`psicologo`, `psiquiatra`, `secretaria` ou `admin`). Depois, remover a lista de e-mails de teste em `pages/login`.
- **Pacientes e documentos:** `shared/clinica/clinica.ts` guarda tudo **em memória** (some ao recarregar a página). Trocar os métodos por chamadas HTTP, mantendo os mesmos tipos (`shared/clinica/modelos.ts`).
- **Dados das telas iniciais e da agenda:** `shared/dados-demo.ts` e `shared/dados-agenda.ts`.
- **Arquivos enviados:** hoje usam endereços temporários do navegador. No back-end, enviar o arquivo de verdade.
- **Texto formatado:** o editor guarda HTML. A limpeza feita no front (`limparHtml`, em `shared/util.ts`) deve ser repetida no servidor antes de gravar.
- **Rotas protegidas:** hoje qualquer pessoa abre as telas pelo endereço. Quando o login for real, proteger com um guard.

## Equipe

- _Ryan_ — front-end
- _Yuri_ — front-end


## Licença

Projeto acadêmico, Faculdade Brasília.
