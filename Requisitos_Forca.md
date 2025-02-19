# Git e Requisitos do software para um jogo de forca online

# 1. Elicitação (Quais são os Requisitos?)
- Requisitos do software para um jogo de forca online.
- O Jogo de Forca Online é um multiplayer onde um jogador define a palavra secreta e os demais tentam adivinhá-la, sugerindo letras em rodadas alternadas. O sistema exibe a palavra parcialmente revelada, letras usadas e tentativas restantes. A partida termina quando a palavra é descoberta, os jogadores desistem ou o tempo se esgota. O jogo é acessível, escalável e suporta múltiplos dispositivos, com pontuação baseada no desempenho.

# 2. Arte Conceitual (Concept Art)


<div align="center">
<sub>Figura 1 - Arte Conceitual/Concept Art</sub><br>
<img src="documentos\img\ConceptArt.png" width="80%"><br>
<sup>Fonte: Material produzido pelos autores (2025) </sup>
</div>

# 3. Especificação (dos Requisitos)
&emsp;A seção de especificação de requisitos tem como objetivo detalhar os Requisitos Funcionais e os Requisitos Não Funcionais necessários para o desenvolvimento de um jogo de forca online. Os Requisitos Funcionais descrevem as funcionalidades específicas que o sistema deve oferecer, como a interação do usuário, a lógica do jogo e as regras de funcionamento. Já os Requisitos Não Funcionais definem aspectos relacionados ao desempenho, usabilidade, segurança e outras características que garantem a qualidade e a eficiência do jogo. Esta seção busca fornecer uma visão clara e estruturada das necessidades do projeto, servindo como guia para a equipe de desenvolvimento.

## 3.1 Requisitos Funcionais

<div align="center">
<sub>Tabela 1 - Requisitos Funcionais</sub><br>

| **Código** | **Requisito** | **Descrição (5W2H)** |
|------------|---------------|----------------------|
| **RF001** | Cadastro e Autenticação de Jogadores | **What:** O sistema deve permitir que jogadores criem contas e façam login. **Why:** Para garantir uma identidade única e personalização da experiência. **Who:** Todos os jogadores. **Where:** Na página inicial do jogo. **When:** Antes de iniciar ou entrar em uma partida. **How:** Através de um formulário de registro e login. **How Much:** O processo deve ser concluído em menos de 1 minuto. |
| **RF002** | Criação de Partidas | **What:** O sistema deve permitir que um jogador crie uma nova partida. **Why:** Para iniciar um jogo de forca. **Who:** Jogadores autenticados. **Where:** Na interface de criação de partidas. **When:** Após o login. **How:** Através de um botão "Criar Partida" e um formulário de configuração. **How Much:** A criação deve ser instantânea. |
| **RF003** | Escolha de Palavra pelo Criador da Partida | **What:** O jogador que criar a partida deve escolher uma palavra. **Why:** Para definir o desafio do jogo. **Who:** Criador da partida. **Where:** Na tela de configuração da partida. **When:** Antes de iniciar a partida. **How:** Através de um campo de texto. **How Much:** A palavra deve ter entre 3 e 15 caracteres. |
| **RF004** | Rodadas Alternadas de Tentativas | **What:** Cada jogador deve ter uma rodada para tentar adivinhar uma letra. **Why:** Para garantir justiça e ordem no jogo. **Who:** Todos os jogadores, exceto o criador da partida. **Where:** Na interface do jogo. **When:** Durante a partida. **How:** Através de um campo de entrada de texto e validação automática. **How Much:** Cada rodada deve durar no máximo 30 segundos. |
| **RF005** | Exibição do Estado Atual do Jogo | **What:** O sistema deve exibir a palavra parcialmente revelada, letras erradas e tentativas restantes. **Why:** Para informar o progresso do jogo. **Who:** Todos os jogadores na partida. **Where:** Na interface do jogo. **When:** Continuamente durante a partida. **How:** Atualizando a interface em tempo real. **How Much:** A atualização deve ocorrer em menos de 500ms. |
| **RF006** | Encerramento da Partida | **What:** O sistema deve encerrar a partida quando a palavra for adivinhada, os jogadores desistirem ou o tempo limite for atingido. **Why:** Para finalizar o jogo corretamente. **Who:** Sistema automático. **Where:** Na interface do jogo. **When:** Quando as condições de término forem atendidas. **How:** Através de uma notificação e bloqueio de novas tentativas. **How Much:** O encerramento deve ser instantâneo. |
| **RF007** | Chat Durante a Partida | **What:** O sistema deve permitir que os jogadores se comuniquem por meio de um chat. **Why:** Para facilitar a interação entre jogadores. **Who:** Todos os jogadores na partida. **Where:** Na interface do jogo. **When:** Durante a partida. **How:** Através de um campo de texto e botão de envio. **How Much:** As mensagens devem ser entregues em menos de 1 segundo. |
| **RF008** | Sistema de Pontuação | **What:** O sistema deve registrar pontos para jogadores com base no desempenho. **Why:** Para incentivar a competição e o engajamento. **Who:** Todos os jogadores na partida. **Where:** Na interface do jogo e no perfil do jogador. **When:** Após o encerramento da partida. **How:** Através de um algoritmo de pontuação baseado em acertos e tempo. **How Much:** A pontuação deve ser calculada e exibida em menos de 2 segundos. |

<sup>Fonte: Material produzido pelos autores (2025) </sup>
</div>

## 3.2 Testes Associados aos Requisitos Funcionais

<div align="center">
<sub>Tabela 2 - Testes Associados aos Requisitos Funcionais</sub><br>

| **Caso de Teste** | **RF#** | **Descrição do Teste** | **Pré-condição** | **Caso de Aceite** | **Caso de Recusa** |
|-------------------|---------|------------------------|------------------|--------------------|--------------------|
| **CT001** | RF001 | Verificar se o jogador pode se cadastrar e fazer login. | Nenhum usuário logado. | O jogador consegue criar uma conta e fazer login. | O jogador não consegue se cadastrar ou logar. |
| **CT002** | RF002 | Verificar se um jogador pode criar uma partida. | Jogador autenticado. | A partida é criada com sucesso. | A partida não é criada. |
| **CT003** | RF003 | Verificar se o criador da partida pode escolher uma palavra. | Partida criada. | A palavra é escolhida e armazenada. | A palavra não é aceita. |
| **CT004** | RF004 | Verificar se as rodadas alternadas funcionam corretamente. | Partida em andamento. | Cada jogador tem sua vez de tentar adivinhar uma letra. | A rodada não alterna corretamente. |
| **CT005** | RF005 | Verificar se o estado do jogo é exibido corretamente. | Partida em andamento. | A palavra parcial, letras erradas e tentativas restantes são exibidas. | O estado do jogo não é atualizado. |
| **CT006** | RF006 | Verificar se a partida é encerrada corretamente. | Condições de término atendidas. | A partida é encerrada e os jogadores são notificados. | A partida não é encerrada. |
| **CT007** | RF007 | Verificar se o chat funciona durante a partida. | Partida em andamento. | As mensagens são enviadas e recebidas corretamente. | O chat não funciona. |
| **CT008** | RF008 | Verificar se a pontuação é calculada e exibida corretamente. | Partida encerrada. | A pontuação é exibida no perfil do jogador. | A pontuação não é calculada ou exibida. |

<sup>Fonte: Material produzido pelos autores (2025) </sup>
</div>

## 3.3 Requisitos Não Funcionais

<div align="center">
<sub>Tabela 3 - Requisitos Não Funcionais</sub><br>

| **Código** | **Requisito** | **Descrição (5W2H)** | **Adequação à ISO 25010** | **Priorização** |
|------------|---------------|----------------------|---------------------------|-----------------|
| **RNF001** | Tempo de Resposta | **What:** O sistema deve responder a cada interação em menos de 2 segundos. **Why:** Para garantir uma experiência fluida. **Who:** Todos os usuários. **Where:** Em todas as interações do sistema. **When:** Durante todo o uso do sistema. **How:** Otimizando o código e a infraestrutura. **How Much:** O tempo de resposta deve ser consistentemente abaixo de 2 segundos. | **Desempenho:** O sistema deve ser eficiente em termos de tempo de resposta. **Usabilidade:** A experiência do usuário deve ser fluida e sem atrasos perceptíveis. | **Alta** |
| **RNF002** | Suporte a Diferentes Dispositivos | **What:** O sistema deve ser acessível por navegadores web e dispositivos móveis. **Why:** Para garantir a acessibilidade. **Who:** Todos os usuários. **Where:** Em qualquer dispositivo com navegador web. **When:** Durante todo o uso do sistema. **How:** Utilizando design responsivo e tecnologias web compatíveis. **How Much:** O sistema deve funcionar em 99% dos dispositivos testados. | **Usabilidade:** O sistema deve ser compatível com diferentes dispositivos para garantir acessibilidade. **Portabilidade:** Deve funcionar em múltiplos ambientes e plataformas. | **Média** |
| **RNF003** | Segurança dos Dados | **What:** O sistema deve armazenar dados de forma segura. **Why:** Para evitar acessos não autorizados. **Who:** Todos os usuários. **Where:** No banco de dados e durante a transmissão de dados. **When:** Durante todo o uso do sistema. **How:** Utilizando criptografia e práticas de segurança recomendadas. **How Much:** O sistema deve passar em auditorias de segurança sem falhas críticas. | **Segurança:** O sistema deve proteger os dados contra acessos não autorizados e garantir a confidencialidade e integridade das informações. **Confiabilidade:** Deve ser resistente a falhas e ataques. | **Alta** |
| **RNF004** | Escalabilidade | **What:** O sistema deve suportar um grande número de jogadores simultaneamente. **Why:** Para garantir a disponibilidade. **Who:** Todos os usuários. **Where:** Em toda a infraestrutura do sistema. **When:** Durante picos de uso. **How:** Utilizando arquitetura escalável e balanceamento de carga. **How Much:** O sistema deve suportar até 10.000 usuários simultâneos. | **Desempenho:** O sistema deve manter o desempenho mesmo sob alta carga. **Escalabilidade:** Deve ser capaz de crescer para atender a demandas crescentes. **Confiabilidade:** Deve funcionar de forma estável em diferentes cenários de uso. | **Média** |

<sup>Fonte: Material produzido pelos autores (2025) </sup>
</div>

## 3.4 Testes Associados aos Requisitos Não Funcionais

<div align="center">
<sub>Tabela 4 - Testes Associados aos Requisitos Não Funcionais</sub><br>

| **Caso de Teste** | **RNF#** | **Descrição do Teste** | **Pré-condição** | **Caso de Aceite** | **Caso de Recusa** |
|-------------------|----------|------------------------|------------------|--------------------|--------------------|
| **CT009** | RNF001 | Verificar o tempo de resposta do sistema. | Sistema em funcionamento. | Todas as interações respondem em menos de 2 segundos. | O tempo de resposta excede 2 segundos. |
| **CT010** | RNF002 | Verificar a compatibilidade com diferentes dispositivos. | Dispositivos variados. | O sistema funciona corretamente em todos os dispositivos testados. | O sistema não funciona em algum dispositivo. |
| **CT011** | RNF003 | Verificar a segurança dos dados. | Dados armazenados e transmitidos. | Os dados estão protegidos contra acessos não autorizados. | Falhas de segurança são detectadas. |
| **CT012** | RNF004 | Verificar a escalabilidade do sistema. | Sistema sob carga. | O sistema suporta 10.000 usuários simultâneos. | O sistema falha sob carga. |

<sup>Fonte: Material produzido pelos autores (2025) </sup>
</div>
