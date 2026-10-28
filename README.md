📖 Sobre o projeto

O NeuroVita é um sistema web para clínicas que atendem pacientes de neurodesenvolvimento (como TEA e TDAH). Ele organiza a agenda, o cadastro de pacientes e profissionais e o prontuário, com um painel diferente para cada tipo de usuário.

Este repositório contém o front-end, desenvolvido em Angular e fiel ao protótipo do Figma da equipe de design. Hoje ele funciona de ponta a ponta com dados de teste em memória, prontos para serem trocados por chamadas à API quando o back-end estiver pronto.

⚠️ Todos os nomes, CPFs, telefones e e-mails do projeto são fictícios.

✨ Funcionalidades por perfil

O sistema tem 4 perfis. As telas são parecidas, mas o menu, os botões e as permissões mudam conforme quem entrou.

Perfil	O que faz
🧠 Psicólogo	Vê a agenda do dia e o calendário. Consulta pacientes e abre o prontuário com evoluções, laudos, encaminhamentos, avaliações psicológicas e atestados. Acompanha a agenda semanal e altera o status das consultas.
🩺 Psiquiatra	Mesmo fluxo do psicólogo, com as seções do prontuário próprias da psiquiatria: evoluções, laudos, medicamentos e prescrições, atestados médicos e solicitação de exames.
🗂️ Secretária	Acompanha os números do dia. Cadastra, edita e exclui pacientes, consulta os profissionais, agenda consultas vendo só os horários livres e, na agenda, confirma, remarca ou cancela consultas.
🛠️ Administrador	Visão geral da clínica. Só consulta pacientes. Cadastra, edita, inativa e exclui profissionais (com dias, horários e tipo de atendimento) e secretárias, e acompanha a agenda.
Destaques
Editor de texto para os documentos do prontuário, com estilos, tamanho, negrito, itálico, sublinhado, cor, alinhamento, links, imagens, listas e tela cheia.
Disponibilidade do profissional valendo de verdade: ao agendar, só aparecem os horários dos dias, faixas e tipo de atendimento (online ou presencial) que o profissional atende, sem choque com outras consultas.
Dados compartilhados entre os perfis: o que a secretária agenda aparece na agenda do psicólogo, e o que o administrador cadastra aparece nas listas dos outros.
Proteção ao excluir: um profissional com consultas marcadas não pode ser excluído, apenas inativado.
Formulários validados: CPF (com dígito verificador), telefone, e-mail, datas e responsável obrigatório para menores de 18 anos, com máscaras de CPF e telefone.
Upload, download e compartilhamento de documentos.
Janelas de confirmação em todas as ações importantes, como no protótipo.
Layout responsivo e rótulos de acessibilidade nos botões, campos e janelas.
🛠️ Tecnologias
Angular 21 com componentes standalone, signals e controle de fluxo nativo (@if, @for)
TypeScript
CSS puro, em um único arquivo (src/styles.css), sem bibliotecas de interface
Fonte Poppins
Ícones em SVG próprios (componente app-icone)
🚀 Como rodar

Requisitos: Node.js (versão LTS atual) e o Angular CLI.

bash
# 1. Clonar o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git

# 2. Entrar na pasta do projeto (a que tem o package.json)
cd NOME-DO-REPOSITORIO

# 3. Instalar as dependências
npm install

# 4. Rodar
npm start

Depois abra http://localhost:4200 no navegador.

Windows / PowerShell: se aparecer o erro de "execução de scripts desabilitada", rode uma vez Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser e abra o terminal de novo.

Comando	Para que serve
npm start	Servidor de desenvolvimento (atualiza sozinho ao salvar)
npm run build	Gera a versão de produção em dist/
npm test	Roda os testes
🔑 Contas de teste

Na tela de login, ao clicar no campo de e-mail aparece a lista com as contas abaixo. A senha de todas é 123456.

Perfil	E-mail	Tela inicial
Psicólogo	psicologo@neurovita.com	/psicologo
Psiquiatra	psiquiatra@neurovita.com	/psiquiatra
Secretária	secretaria@neurovita.com	/secretaria
Administrador	admin@neurovita.com	/admin

O e-mail não diferencia maiúsculas de minúsculas. Em cada tela, o menu com a setinha ao lado do usuário tem o botão Sair.

🧭 Rotas
Endereço	Tela
/	Login
/esqueci-senha, /codigo, /redefinir-senha	Recuperação de senha
/psicologo · /psiquiatra · /secretaria · /admin	Tela inicial de cada perfil
/psicologo/pacientes · /psiquiatra/pacientes	Lista de pacientes
/{perfil}/pacientes/:id	Prontuário do paciente
/{perfil}/pacientes/:id/:secao	Seção do prontuário (lista ou texto)
/{perfil}/pacientes/:id/:secao/novo	Novo documento
/{perfil}/pacientes/:id/:secao/:docId	Ler um documento
/{perfil}/pacientes/:id/:secao/:docId/editar	Editar um documento
/psicologo/agenda · /psiquiatra/agenda · /secretaria/agenda · /admin/agenda	Agenda semanal
/secretaria/pacientes · /secretaria/pacientes/novo · /secretaria/pacientes/:id/editar	Pacientes (cadastrar, editar, excluir)
/secretaria/profissionais	Profissionais (consulta)
/secretaria/consultas	Gerenciamento de consultas (agendar)
/admin/pacientes	Pacientes (só consulta)
/admin/profissionais · /admin/profissionais/novo · /admin/profissionais/:id/editar	Profissionais
/admin/secretarias · /admin/secretarias/novo · /admin/secretarias/:id/editar	Secretárias
qualquer outro	Página não encontrada

:secao no psicólogo: evolucoes, laudos, encaminhamentos, avaliacoes ou atestados. No psiquiatra: evolucoes, laudos, medicamentos, atestadosMedicos ou exames.

🗂️ Estrutura do projeto
src/
  styles.css                  → todo o visual do projeto
  app/
    app.routes.ts             → rotas de todos os perfis
    pages/                    → uma pasta por tela
      login/  esqueci-senha/  codigo/  redefinir-senha/  nao-encontrada/
      painel-shell/           → moldura com o menu lateral
      painel-inicio/          → tela inicial dos 4 perfis
      pacientes/  prontuario/  secao-paciente/  documento-leitura/  documento-editor/  agenda/
      gestao-pacientes/  paciente-form/  consulta-form/        → secretária
      profissionais/  profissional-form/  secretarias/  secretaria-form/   → administrador
    shared/                   → o que é usado em mais de uma tela
      auth.ts                 → login de teste
      perfil.ts               → os 4 perfis e o que muda em cada um
      clinica/                → pacientes, profissionais, consultas e documentos (dados + serviço)
      editor-texto/  menu-lateral/  cabecalho/  lista-suspensa/  dialogo/  ...
public/img/                   → logo e imagens
🧩 Como funciona por dentro
Uma tela, vários perfis: páginas como pacientes, prontuário e agenda são as mesmas para vários perfis. O perfil chega pela rota e define o endereço-base, o menu, as seções e o que aparece (shared/perfil.ts).
Uma única fonte de dados: o serviço Clinica (shared/clinica/clinica.ts) guarda pacientes, profissionais, secretárias, consultas e documentos, e todos os perfis leem dele.
Disponibilidade: Clinica.disponivel e Clinica.horarioLivre decidem se um horário pode ser marcado.
Editor de texto: shared/editor-texto. O conteúdo é HTML, limpo por limparHtml (shared/util.ts) antes de ser exibido.
🔌 Ligando ao back-end

Hoje tudo é fictício. Os pontos a trocar estão marcados com TODO no código.

Login: shared/auth.ts. Trocar por uma chamada à API. O servidor deve devolver o perfil do usuário (psicologo, psiquiatra, secretaria ou admin). Depois, remover a lista de e-mails de teste em pages/login.
Pacientes, profissionais, consultas e documentos: shared/clinica/clinica.ts guarda tudo em memória (some ao recarregar a página). Trocar os métodos por chamadas HTTP, mantendo os mesmos tipos (shared/clinica/modelos.ts).
Dados de demonstração: shared/clinica/dados-clinica.ts, shared/dados-demo.ts e shared/dados-agenda.ts (inclui o "hoje" fixo de 15/09/2026).
Arquivos enviados: hoje usam endereços temporários do navegador. No back-end, enviar o arquivo de verdade.
Texto formatado: repetir no servidor a limpeza do HTML antes de gravar.
Contas e senhas: os formulários de profissional e secretária geram uma senha temporária e guardam o e-mail de acesso. O back-end precisa gravar a senha com segurança e enviar o e-mail de boas-vindas.
Rotas protegidas: hoje qualquer pessoa abre as telas pelo endereço. Quando o login for real, proteger com um guard e liberar cada perfil só para as próprias telas.
🗺️ Roadmap
 Login e recuperação de senha (visual)
 Telas dos 4 perfis seguindo o protótipo do Figma
 Prontuário com editor de texto e upload de arquivos
 Agenda, agendamento com horários livres e edição de consultas
 Cadastro, edição e exclusão de pacientes, profissionais e secretárias
 Configurações, Ajuda e notificações (sino)
 Integração com o back-end
 Proteção de rotas por perfil
 Testes automatizados das telas principais
👥 Equipe
Nome  — Ryan Brandão

📄 Licença

Projeto acadêmico, Faculdade Brasília.
