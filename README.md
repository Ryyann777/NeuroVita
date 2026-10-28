# 🧠 NeuroVita

Sistema web para gerenciamento de clínicas especializadas em neurodesenvolvimento, com foco no atendimento de pacientes com condições como TEA e TDAH.

O NeuroVita centraliza o gerenciamento de pacientes, profissionais, consultas, agendas e prontuários, oferecendo interfaces e permissões específicas para cada perfil de usuário.

Atualmente, o projeto contempla o **front-end desenvolvido em Angular**, seguindo o protótipo criado pela equipe de design no Figma. O sistema funciona com dados fictícios em memória e está estruturado para futura integração com o back-end.

> ⚠️ **Aviso:** todos os nomes, CPFs, telefones e e-mails utilizados no projeto são fictícios.

---

## 📑 Sumário

- [✨ Funcionalidades](#-funcionalidades)
- [👥 Perfis de usuário](#-perfis-de-usuário)
- [🛠️ Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [🚀 Como executar o projeto](#-como-executar-o-projeto)
- [🔑 Contas para teste](#-contas-para-teste)
- [🧭 Rotas da aplicação](#-rotas-da-aplicação)
- [📁 Estrutura do projeto](#-estrutura-do-projeto)
- [⚙️ Funcionamento interno](#️-funcionamento-interno)
- [🔌 Integração com o back-end](#-integração-com-o-back-end)
- [🗺️ Roadmap](#️-roadmap)
- [👨‍💻 Equipe](#-equipe)
- [📄 Licença](#-licença)

---

## ✨ Funcionalidades

- 📅 Visualização e gerenciamento de agendas e consultas.
- 👤 Cadastro, edição, consulta e exclusão de pacientes, conforme as permissões do perfil.
- 🩺 Gerenciamento de prontuários e documentos clínicos.
- 📝 Editor de texto para criação e edição de documentos.
- 📎 Upload, download e compartilhamento de documentos.
- 🕒 Verificação da disponibilidade dos profissionais durante o agendamento.
- 🔄 Compartilhamento de dados entre os diferentes perfis.
- ✅ Validação de formulários e campos obrigatórios.
- 🔐 Telas de login e recuperação de senha.
- 💬 Janelas de confirmação para ações importantes.
- 📱 Layout responsivo e recursos de acessibilidade.

### Recursos de validação

- CPF com verificação dos dígitos.
- Máscaras para CPF e telefone.
- Validação de e-mail, telefone e datas.
- Obrigatoriedade de responsável para pacientes menores de 18 anos.

### Editor de documentos

O editor de texto oferece recursos de formatação, incluindo:

- Negrito, itálico e sublinhado.
- Alteração de tamanho e cor do texto.
- Alinhamento e estilos de texto.
- Inserção de links, imagens e listas.
- Modo de tela cheia.

### Regras de disponibilidade e exclusão

- O agendamento considera os dias, horários e modalidades de atendimento do profissional.
- Os horários ocupados não devem ser disponibilizados para novas consultas.
- Profissionais com consultas agendadas não podem ser excluídos, apenas inativados.

---

## 👥 Perfis de usuário

O sistema possui quatro perfis, cada um com menus, funcionalidades e permissões específicas.

| Perfil | Funcionalidades principais |
|---|---|
| 🧠 **Psicólogo** | Consulta a agenda diária e semanal, acessa pacientes e gerencia documentos do prontuário, incluindo evoluções, laudos, encaminhamentos, avaliações psicológicas e atestados. |
| 🩺 **Psiquiatra** | Consulta a agenda e os pacientes, além de gerenciar evoluções, laudos, medicamentos, prescrições, atestados médicos e solicitações de exames. |
| 🗂️ **Secretária** | Cadastra, edita e exclui pacientes; consulta profissionais; agenda consultas; confirma, remarca e cancela atendimentos. |
| 🛠️ **Administrador** | Visualiza informações gerais da clínica, consulta pacientes, gerencia profissionais e secretárias e acompanha a agenda. |

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| Angular 21 | Desenvolvimento da aplicação web |
| TypeScript | Lógica e tipagem do sistema |
| Standalone Components | Organização dos componentes |
| Angular Signals | Gerenciamento reativo de estado |
| `@if` e `@for` | Controle de fluxo nos templates |
| CSS puro | Estilização da aplicação |
| Fonte Poppins | Identidade visual |
| SVG | Ícones personalizados por meio do componente `app-icone` |

O projeto utiliza CSS puro, centralizado no arquivo `src/styles.css`, sem bibliotecas externas de interface.

---

## 🚀 Como executar o projeto

### 1. Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) — versão LTS compatível com o projeto.
- [Git](https://git-scm.com/).
- [Angular CLI](https://angular.dev/tools/cli), caso necessário.

### 2. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
```

> Substitua `SEU-USUARIO` e `NOME-DO-REPOSITORIO` pelos dados reais do repositório.

### 3. Entre na pasta do projeto

```bash
cd NOME-DO-REPOSITORIO
```

Entre na pasta que contém o arquivo `package.json`.

### 4. Instale as dependências

```bash
npm install
```

### 5. Inicie a aplicação

```bash
npm start
```

### 6. Acesse no navegador

Abra o endereço:

[http://localhost:4200](http://localhost:4200)

### Comandos disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção na pasta `dist/`. |
| `npm test` | Executa os testes configurados no projeto. |

> **Windows / PowerShell:** se ocorrer um erro informando que a execução de scripts está desabilitada, verifique as políticas de execução do PowerShell. Uma alternativa é executar o comando abaixo no terminal do usuário, se apropriado:
>
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```

---

## 🔑 Contas para teste

Na tela de login, ao selecionar o campo de e-mail, são disponibilizadas contas de demonstração.

**Senha padrão para todas as contas:** `123456`

| Perfil | E-mail | Tela inicial |
|---|---|---|
| Psicólogo | `psicologo@neurovita.com` | `/psicologo` |
| Psiquiatra | `psiquiatra@neurovita.com` | `/psiquiatra` |
| Secretária | `secretaria@neurovita.com` | `/secretaria` |
| Administrador | `admin@neurovita.com` | `/admin` |

**Observações:**
- O e-mail não diferencia letras maiúsculas de minúsculas.
- Para sair do sistema, utilize o menu ao lado do usuário e selecione **Sair**.
- As contas são destinadas exclusivamente a testes e demonstrações.

---

## 🧭 Rotas da aplicação

### Autenticação

| Rota | Descrição |
|---|---|
| `/` | Tela de login |
| `/esqueci-senha` | Solicitação de recuperação de senha |
| `/codigo` | Tela de verificação de código |
| `/redefinir-senha` | Redefinição de senha |

### Pacientes e prontuários

| Rota | Descrição |
|---|---|
| `/psicologo/pacientes` | Lista de pacientes do psicólogo |
| `/psiquiatra/pacientes` | Lista de pacientes do psiquiatra |
| `/{perfil}/pacientes/:id` | Prontuário do paciente |
| `/{perfil}/pacientes/:id/:secao` | Seção do prontuário |
| `/{perfil}/pacientes/:id/:secao/novo` | Criação de documento |
| `/{perfil}/pacientes/:id/:secao/:docId` | Leitura de documento |
| `/{perfil}/pacientes/:id/:secao/:docId/editar` | Edição de documento |

### Agendas

| Rota | Descrição |
|---|---|
| `/psicologo/agenda` | Agenda do psicólogo |
| `/psiquiatra/agenda` | Agenda do psiquiatra |
| `/secretaria/agenda` | Agenda da secretária |
| `/admin/agenda` | Agenda do administrador |

### Gestão de pacientes

| Rota | Descrição |
|---|---|
| `/secretaria/pacientes` | Consulta e gerenciamento de pacientes |
| `/secretaria/pacientes/novo` | Cadastro de paciente |
| `/secretaria/pacientes/:id/editar` | Edição de paciente |
| `/admin/pacientes` | Consulta de pacientes |

### Gestão de profissionais e consultas

| Rota | Descrição |
|---|---|
| `/secretaria/profissionais` | Consulta de profissionais |
| `/secretaria/consultas` | Agendamento e gerenciamento de consultas |
| `/admin/profissionais` | Lista de profissionais |
| `/admin/profissionais/novo` | Cadastro de profissional |
| `/admin/profissionais/:id/editar` | Edição de profissional |
| `/admin/secretarias` | Lista de secretárias |
| `/admin/secretarias/novo` | Cadastro de secretária |
| `/admin/secretarias/:id/editar` | Edição de secretária |

Qualquer rota não reconhecida direciona para a página **Não encontrada**.

### Seções do prontuário

As seções disponíveis variam de acordo com o perfil profissional.

**Psicólogo:**
- `evolucoes`
- `laudos`
- `encaminhamentos`
- `avaliacoes`
- `atestados`

**Psiquiatra:**
- `evolucoes`
- `laudos`
- `medicamentos`
- `atestadosMedicos`
- `exames`

> As rotas acima documentam os caminhos previstos na aplicação. Consulte `src/app/app.routes.ts` para verificar a configuração exata de cada rota.

---

## 📁 Estrutura do projeto

```text
src/
├── styles.css
├── app/
│   ├── app.routes.ts
│   ├── pages/
│   │   ├── login/
│   │   ├── esqueci-senha/
│   │   ├── codigo/
│   │   ├── redefinir-senha/
│   │   ├── nao-encontrada/
│   │   ├── painel-shell/
│   │   ├── painel-inicio/
│   │   ├── pacientes/
│   │   ├── prontuario/
│   │   ├── secao-paciente/
│   │   ├── documento-leitura/
│   │   ├── documento-editor/
│   │   ├── agenda/
│   │   ├── gestao-pacientes/
│   │   ├── paciente-form/
│   │   ├── consulta-form/
│   │   ├── profissionais/
│   │   ├── profissional-form/
│   │   ├── secretarias/
│   │   └── secretaria-form/
│   └── shared/
│       ├── auth.ts
│       ├── perfil.ts
│       ├── clinica/
│       ├── editor-texto/
│       ├── menu-lateral/
│       ├── cabecalho/
│       ├── lista-suspensa/
│       └── dialogo/
└── public/
    └── img/
```

### Principais diretórios e arquivos

| Caminho | Responsabilidade |
|---|---|
| `src/styles.css` | Estilos globais da aplicação |
| `src/app/app.routes.ts` | Configuração das rotas |
| `src/app/pages/` | Páginas e telas do sistema |
| `src/app/shared/auth.ts` | Autenticação de demonstração |
| `src/app/shared/perfil.ts` | Perfis e regras de apresentação |
| `src/app/shared/clinica/` | Dados, modelos e serviços da clínica |
| `src/app/shared/editor-texto/` | Editor de documentos |
| `src/app/shared/menu-lateral/` | Menu de navegação |
| `src/app/shared/cabecalho/` | Cabeçalho das telas |
| `src/app/shared/dialogo/` | Janelas de confirmação |
| `src/app/shared/lista-suspensa/` | Componentes de lista suspensa |
| `public/img/` | Logotipo e imagens |

A estrutura acima representa a organização funcional informada para o projeto. Alguns arquivos auxiliares e subdiretórios podem variar conforme a versão atual do código.

---

## ⚙️ Funcionamento interno

### Reutilização de telas

Páginas como pacientes, prontuário e agenda são compartilhadas entre diferentes perfis. O perfil acessado determina o menu, as seções e os recursos exibidos.

Essa lógica é centralizada em `shared/perfil.ts`.

### Gerenciamento dos dados

O serviço `shared/clinica/clinica.ts` concentra os dados de pacientes, profissionais, secretárias, consultas e documentos.

Os diferentes perfis utilizam essa fonte compartilhada, permitindo que as alterações sejam refletidas nas demais telas durante a execução da aplicação.

**Importante:** atualmente, os dados ficam em memória e são perdidos ao recarregar a página.

### Disponibilidade de horários

Os métodos `Clinica.disponivel` e `Clinica.horarioLivre` verificam a disponibilidade dos profissionais para o agendamento de consultas.

### Editor de texto

O editor está localizado em `shared/editor-texto/`. O conteúdo formatado é armazenado em HTML e passa pela função `limparHtml`, em `shared/util.ts`, antes de ser exibido.

---

## 🔌 Integração com o back-end

O sistema utiliza dados fictícios e ainda precisa de integração com um back-end real. Os pontos de adaptação estão identificados com comentários `TODO` no código.

| Recurso | Situação atual | Próxima etapa |
|---|---|---|
| Login | Autenticação de demonstração | Integrar com a API de autenticação |
| Pacientes | Dados em memória | Persistir e consultar dados via API |
| Profissionais | Dados em memória | Integrar cadastro, edição e inativação |
| Secretárias | Dados em memória | Integrar cadastro e gerenciamento |
| Consultas | Dados em memória | Persistir agendamentos e validar conflitos no servidor |
| Documentos | Dados em memória e endereços temporários | Implementar armazenamento real de arquivos |
| Prontuários | Conteúdo gerenciado no front-end | Persistir documentos com validação e controle de acesso |
| Recuperação de senha | Telas visuais | Implementar fluxo real de recuperação |
| Permissões | Rotas acessíveis diretamente | Implementar proteção de rotas e autorização no servidor |

### Pontos de atenção para a integração

- **Autenticação:** substituir a lógica de `shared/auth.ts` por chamadas à API e remover as contas de demonstração da tela de login.
- **Modelos de dados:** manter compatibilidade com os tipos definidos em `shared/clinica/modelos.ts`, quando apropriado.
- **Dados de demonstração:** revisar `shared/clinica/dados-clinica.ts`, `shared/dados-demo.ts` e `shared/dados-agenda.ts`, incluindo a data fixa de 15/09/2026.
- **Arquivos:** substituir os endereços temporários do navegador pelo envio e armazenamento real dos documentos.
- **Segurança:** validar e limpar o HTML no servidor antes de salvar ou exibir conteúdo formatado.
- **Contas de acesso:** armazenar senhas com mecanismos seguros de hash e implementar o envio de e-mails de boas-vindas.
- **Proteção de rotas:** restringir o acesso às telas conforme o perfil autenticado, com validação também no back-end.

> 🔒 **Nota de segurança:** como o NeuroVita trabalha com informações de saúde, a integração futura deve prever controles rigorosos de acesso, proteção de dados pessoais, registros de auditoria e requisitos aplicáveis da LGPD.

---

## 🗺️ Roadmap

### Funcionalidades desenvolvidas

- [x] Telas de login e recuperação de senha (interface visual).
- [x] Interfaces dos quatro perfis seguindo o protótipo do Figma.
- [x] Prontuário com editor de texto e suporte a arquivos.
- [x] Agenda e agendamento com verificação de horários disponíveis.
- [x] Cadastro e gerenciamento de pacientes, profissionais e secretárias.

### Próximas etapas

- [ ] Integração com o back-end.
- [ ] Autenticação real e recuperação de senha funcional.
- [ ] Persistência de dados em banco de dados.
- [ ] Proteção de rotas e permissões por perfil.
- [ ] Implementação completa do armazenamento de documentos.
- [ ] Configurações, ajuda e notificações.
- [ ] Testes automatizados das principais funcionalidades.

---

## 👨‍💻 Equipe

**Ryan Brandão**

Projeto acadêmico desenvolvido para a Faculdade Brasília.

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais na Faculdade Brasília.

