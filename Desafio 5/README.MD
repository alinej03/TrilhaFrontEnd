<h1>
 <img src = "logo.png">
<h1>
 
 <h1 align = "center"> 
 
    Trilha Angular FrontEnd 
<h1>

## Desafio Proposto Nº5.1##

A) A diferença pricipal entre eles é que o SPA possibilita o carregamento de uma parte somente da página deixando o restante do conteúdo estatico; e a MPA o carregamento da página é total.

B) Nessa época em suas primeiras versões a Web apresentava site simples em suas estruturas, com cores e imagens até extravagantes sem nada de estilização.

C) WEB E SUA EVOLUÇÃO
- WEB 1.0: é dada a partir do desenvolvimento do WWW,são site que são estaticos, sem nenhuma interação com os leitores, uma pagina que sempre será a mesma coisa, ou seja era uma comunicação de via unica.
- WEB 2.0: cria um conjunto de tecnicas para execução de paginas na web, criando uma comunicação de mão dupla, as pessoas nesse periodo publicavam e compartilhavam informações entr si.
- WEB 3.0: trás consigo novos recursos de interação aos usúarios, trazendo a expansão do mundo virtual onde aumenta a possibilidade de buscas e funcionalidades digitais.

D)ANGULAR
- I) Angular é um framework criado pelos desenvolvedores do google, sua finalidade é dar ferramentas para para criação de SPA.
- II) O Angular ele tem ferramentas onde podemos criar SPA, deixando a aplicação mais simples e otimizada.
- III)Ocarregamento dos recursos (como CSS, JavaScript e HTML das páginas).
- IV) é uma ferramenta de uso de comando que é instalada por meio do gerenciador de pacotes NPM NodeJS Package Manager — do Node.js, é um interpretador de JavaScript.
- V) O arquivo angular.json contém as configurações globais da aplicação, também define o arquivo que vai iniciar a aplicação, fazendo o SPA.
- VI)
- VII) O package.json é um arquivo de configuração utilizado para estipular e configurar dependências de um projeto (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados. Através dele conseguimos deixar claro uma "receita" para executar um projeto.
VIII)Define qual dos ambientes definidos em /src/environments deve ser usado na geração do build.

E)Text Interpolation
- I) A interpolação de texto permite incorporar valores de string dinâmicos em seus modelos HTML, dentro de uma aréa delimitada por {{..}}
- II) O uso de componentes é benéfico de várias maneiras. Os componentes dividem a interface do usuário em visualizações menores e renderizam dados. Um componente não deve envolver tarefas como fazer solicitações HTTP, operações de serviço, roteamento e assim por diante. Essa abordagem mantém o código limpo e separa a visualização de outras partes.
Outro motivo importante é que os componentes dividem o código em partes menores e reutilizáveis. Caso contrário, tivemos que incluir infinitas linhas de código em um único arquivo HTML, o que dificulta a manutenção do código.

III)Criar Uma Interpolação

F)Bindings

- I)Os bindings em angular são as formas de como a View interage com Model/(Compoment).
- II)Templates / View / Model.
- III) um expemplo é o "THIS" que permite acessar o atributo de um objeto.
- IV) Ele é uma associação de eventos, ele é usado para vincular um código da aplicação a um certo evento disparado pelo navegador.
- V) Podemos dar o exemplo do comando button, ele quando pressionado pode fazer vários comandos.
- VI)A associação de dados bidirecional em Angular é usada para exibir informações ao usuário final e permite que o usuário final faça alterações nos dados subjacentes usando a interface do usuário. Isso faz uma conexão bidirecional entre a visualização (o modelo) e a classe do componente.
- VII) A sintaxe de ligação bidirecional do Angular é uma combinação de colchetes e parênteses, [()]. A [()]sintaxe combina os colchetes de associação de propriedade, [], com os parênteses de associação de evento.

G)Diretivas
 - I)As diretivas são como marcadores no elemento DOM que comunicam ao Angular para incluir um comportamento específico.
- II)Diretivas de atributos, Diretivas estruturais e Componentes.
- III)As Principais diretivas são:
- ng-app(Declara um elemento como o elemento raiz da aplicação, ocasionando a mudança do comportamento padrão da tag.)
- ng-controller	(Especifica um controller JavaScript para aquele HTML em questão.)
- ng-bind (Muda o texto de um elemento HTML automaticamente, de acordo com o seu resultado, vindo das regras de negócio.)
- ng-model(É similar ao ng-bind, mas permite ligação direta bidirecional (two-way data binding ) entre a view e o escopo do aplicativo.)
- ng-repeat	(Instancia um elemento por item de um array.)
- ng-click(Permite instanciar o evento de click, semelhante ao onclick.)

H) Reactive forms:
- I)Template-Driven Forms funcionam de forma assíncrona
Para usar o Template-Driven Forms é necessário importar o módulo FormsModule
No caso dos Reactive Forms a lógica fica, geralmente, no componente e as suas validações são feitas programaticamente com TypeScript.
- II)Os formulários reativos fornecem acesso síncrono ao modelo de dados, imutabilidade com operadores observáveis ​​e rastreamento de alterações por meio de fluxos observáveis.
- III)Há três etapas para usar controles de formulário:

1 - Registre o módulo de formulários reativos em seu aplicativo. Este módulo declara as diretivas de formulário reativo que você precisa para usar formulários reativos.
2 -Gere uma nova FormControlinstância e salve-a no componente.
3 -Registre o FormControlno modelo.

IV)AbstractControl	
A classe base abstrata para as classes de controle de formulário concreto FormControl, FormGroupe FormArray. Ele fornece seus comportamentos e propriedades comuns.

FormControl	
Gerencia o valor e o status de validade de um controle de formulário individual. Corresponde a um controle de formulário HTML como imput ou select.

FormGroup	
Gerencia o valor e o estado de validade de um grupo de AbstractControlinstâncias. As propriedades do grupo incluem seus controles filho. O formulário de nível superior em seu componente é FormGroup.

FormArray	
Gerencia o valor e o estado de validade de uma matriz de AbstractControlinstâncias indexada numericamente.

FormBuilder	
Um serviço injetável que fornece métodos de fábrica para criar instâncias de controle.

V)
VI)Para usar formulários reativos no Angular é preciso importar o pacote ReactiveFormsModule em seu arquivo app.module.ts.

VII)através do //localhost.

VIII)Autenticar uma aplicação significa proteger nossas rotas, impedindo assim, que qualquer pessoa acesse o painel do nosso sistema sem credenciais. 
