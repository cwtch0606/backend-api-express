# Tópicos importantes

- Qual a linguagem de programação utilizada para o nosso Backend? 
Java Script

- O que é o Node.js?
O ambiente, runtime

Outras runtime: Bun, Deno

- O que é NPM?
Gerenciador de pacotes. Node package manager.

- O que é o Express.js?
Framework para Node.js rápido, minimalista, menos opinativo. E para construir APIs 

- O que é uma API? 
Application Programming Interface (Interface de Programação de Aplicação).

Interface é todo meio de comunicação entre humano e computador. Também pode ser um meio de comunicação entre dois computadores ou entidades. Possui Entrada e Saída. Tudo que é físico = interface de hardware. 

Framework - um conjunto de recursos e ferramentas para resolver um problema baseado em alguma estrutura, mostra COMO resolver, dá um caminho, não só os recursos soltos. Os frameworks podem ser mais opinativo ou menos opinativo. O Express é menos opinativo.

- Como mudar o formato de importação de "require"(padrão commonjs)?
Ir no packagejson, colocar que o "type" é "module"

- O que é HTTP? 
Hypertext Transfer Protocol. Protocolo entre cliente e servidor.

HTTPS - Camada segura entre backend e frontend, protege dados.
Hypertext Transfer Protocol Secure

- Quais os métodos de requisição HTTP e para que serve cada um deles?
Tipos de requisição:
GET: pegar, buscar, resgatar
POST: postar, cadastrar, adicionar
PUT: editar, alterar, atualizar dados (edição completa)
PATCH: similar ao PUT, altera/atualiza parcialmente um campo
DELETE: deletar, excluir, apagar

- Para que serve o --watch ao rodar o servidor?
Observa todos os arquivos que compõe o projeto. Ao salvar uma informação, ele sobe de novo o servidor para aplicar a mudança.

- Para que serve o Router do Express.js?
Para separar um conjunto de rotas em um arquivo separado. Facilita manutenção.



**Notas:**

Model: 
Definir as regras de negócio - 
Validação de dados;
Acesso os dados do Banco de Dados;


Controller: 
Controlar do fluxo de entrada, processamento e saída;







