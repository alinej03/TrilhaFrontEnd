<h1>
 <img src = "logo.png">
<h1>
 
 <h1 align = "center"> 
 
    Trilha Angular FrontEnd 
<h1>

## Desafio Proposto Nº5.2 ##


## ITEM 1 - REUTILIZAÇÃO DE COMPONENTES ##

I)Os componentes são os blocos principais de uma aplicação, eles interagem entre si para criação de um projeto.

II)O componente é composto pela seguinte estrutura:
- Um modelo HTML
- Uma classe Typescript
- um seletor CSS

III)Com o comando Ng New conseguimos criar um novo componente, gerando uma nova pasta que contem a estrutura e arquivos para criação de um novo projeto.

IV)Com a reutilização de componentes, podemos reduzir o tempo do desenvolvimento, sem precisar reescrever a função do código, apenas chama-lo.

V)Esse selector indica o uso do compotente do projeto.

VI)Os templates são bloco de estrutura do HTML
- Templateurl: é o nome do documento HTML que será a parte visual do componente. Nele podemos ter código em HTML juntamente com todos os bindings e diretivas necessários para a exibição do componente no navegador;

- Template:também usado para descrever a parte visual do componente, porém nesse caso podemos fornecer código HTML "hard coded", como texto.

VII)os Styles são personalização de stilos dentro do CSS
- StylesUrl nos permite chamar recursos de um arquivo separado, ou seja ele chama arquivo de outro compotente da aplicação
- Style ppodemos fazer mudanças nele próprio, escrevendo na propria linha do código sua alteração de estilo.

HAND OS ( Exercicio proposto apresentado em VS Code)

## ITENS 2 - Rotas ##
I)Com o comando ng new criamos uma nova aplicação e com ela já vem o arquivo modulo e rotas em que utilizaremos.Para isso é preciso aceitar com o Yes uma das opções de criação do comando.

II) O comando é "ng g module nome_module --routing"

III) A classe router fornece o método navigate, que é usado para fazer a navegação entre rotas utilizando o mesmo.

IV) Esse Método retorna a url que está aberta.

V) Ele é um arquivo principal de rotas, onde colocamos os componentes criados para novas rotas.

VI) Com essa Tag o Angular identifica as rotas declaradas nos componentes.

VII) Podemos utilizar o router navigate que é um recurso de rota do angular.

VIII) Podemos utilizar o routerLink que é um recurso do angular no HTML.


IX) O Lazy Load consiste em carregar um determinado conteúdo apenas quando ele for solicitado pelo usuário. No contexto da programação web essa técnica pode ser utilizada, por exemplo, na otimização do tempo de carregamento da página, melhorando assim a experiência do usuário.

XX) O Eager Load consiste em carregar todo conteúdo da página, mesmo ele não sendo solicitado, o Eager pode ser feito de 2 formas: através de anotação na classe ou através do HQL, um exemplo pode ser uma listagem onde contém muitos dados, com o eager todos esses dados são carregados podendo causar lentidão na página.

## ITENS 3 - PIPES ##

I)Os Pipes são como formatadores dentro angular, com eles podemos tornar o front end mais elegante, fazendo transformações em qualquer parte do nosso template.

II)Pipes iniciais do angular são:
DatePipe; UpperCasePipe; LowerCasePipe; CurrencyPipe;
DecimalPipe; PercentPipe.

III)EXEMPLOS DE USO DO PIPE 
- DatePipe para datas;
- UpperCasePipe para tornar letras maiúsculas;
- LowerCasePipe para tornar letras minúsculas;
- CurrencyPipe para moedas.
- DecimalPipe Formata um valor de acordo com as opções de dígitos e as regras de localidade
- PercentPipe Transforma um número em uma string de porcentagem.

IV) São uma utiliação de máscaras para campo de entrada ou para exibição de dados, tornnado ele mais especifico ou personalizado.

