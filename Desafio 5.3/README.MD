<h1>
 <img src = "logo.png">
<h1>
 
 <h1 align = "center"> 
 
    Trilha Angular FrontEnd 
<h1>

## Desafio Proposto Nº5.3 ##

ITEM 1: SERVICES

A) A respeito de Services, responda:
- I) O proposito de uma service é trabalhar a parte de regras de lógica e acessar o backend de uma aplicação.

- II) Quando se cria um componente o principio dele é que ele foque na exibição dele próprio fazendo ele ser mais enxuto possivel, já com a services conseguimos colocar toda parte de lógica e http e fazer esse service conversar com outros componentes e backend.

- III) Atraves da injeção de dependencias, utilizando no Constructor.

- IV) Uma service pode ter as chamadas em htpp (backend), e as regras de lógicas(método) usadas na aplicação inteira.

- V) Falso, porque uma service é algo independende utilizado normalmente para comunicação externa, onde efetuamos a importação dela no constructor.

- VI) Verdadeiro, porque é uma classe com uma unica instância, e que forneçe um ponto global sobre ela.

- VII) Criar Services.

B) A respeito de Services, responda:

- I) É criar uma instância de uma clase e passar a referência dessa instância para outra class, para ser utilizada.

- II) Verdadeiro, porque todas as estâncias são consideradas serviços.

- III) Verdadeiro, o injetor primeiro verifica se já criou uma instância dessa dependência. Caso não, ele cria uma nova, a retorna ao componente e reserva uma cópia para uso posterior, de modo que da próxima vez que a mesma dependência for solicitada, ele retorne a dependência reservada em vez de criar uma nova.

c) HTTP Client:

- I) O protocolo HTTP é um protocolo de comunicação entre sistemas de informação que permite a transferência de dados entre redes de computadores, o usúario faz a solicitação através do browser, o brower faz a soliitação a um servidor, o servidor encontra a página, formata, e envia para o browser, então o browser entra em contato com o html e compila em formato visual para o usúario.

- II) Com GET, geralmente, um arquivo é solicitado do servidor. Para que o servidor reconheça o recurso a ser transmitido, é solicitado por um URI, por exemplo, uma URL. O método de solicitação POST é usado para transferir dados para o servidor.
     
- III) GET, PUT, PATCH, POST, DELETE

- IV) importar o HttpClient No Constructor

- V) Sim, pode ser usado para guardar e manipular dados com map, filter, reduce, every e etc.

- VI)  GET excuta um get como por exemplo uma busca de usuarios,
       PUT altera ou edita um usuario completo,
       PATCH altera somente um campo do usuario,
       POST salva um usuario,
       DELETE deleta um usuario.

- VII) Sim, podemos escolher um tipo Json, HTML, XML e etc.

- VIII) JSON é um formato compacto, de padrão aberto independente, de troca de dados simples e rápida entre sistemas.
        Html é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web

- IX) 200 quando o retorna com sucesso; 
      400 requisição mal sucedida; 
      401 não autorizado;
      404 nao localizado;
      500 erro de servidor. 

- X)VS Code.

- XI) Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP. 
 
- XII) Interceptor é um interceptador que age dependendo da sua configuração, interceptando a requisição, modificando dados, informando erros entre outros.

- XIII) pode consultar ou editar suas informações, redirecionar em caso de erros entre outros.


D) RxJS

- I) O RxJS é uma biblioteca para construção de programas assíncronos ou baseado em eventos, utilizando uma sequência de observables.

- II) Promise sempre são assíncronas, enquanto Observable pode ser tanto síncronas quanto assíncronas. Promise sempre retornam o mesmo valor, enquanto Observable pode retornar um fluxo de valores, de nenhum a vários

- III) de acordo com o evento, é executado uma ação. Por exemplo, se acontecer um erro X, execute função X

-IV)O padrão Observer é utilizado quando se precisa manter os objetos atualizados quando algo importante ocorre.

- V) O padrão Iterator permite o acesso sequencial aos elementos de um conjunto sem expor sua implementação subjacente. O padrão Iterator também é responsável por toda a tarefa de iteração, eliminando assim a responsabilidade adicional, simplificando, assim a sua aplicação e deixando a responsabilidade onde deveria estar.

- VI)É um paradigma em programação, como será a estrutura do código, a programação é feita com expressões ou declarações em vez de instruções.

- VII)Ele fornece um tipo de núcleo, o Observable, tipos de satélite (Observer, Schedulers, Subject) e operadores inspirados por Array # extras (map, filter, reduce, every, etc) para permitir o tratamento de eventos assíncronos como coleções.

- VIII)Os operadores servem para criar observable a partir de um dado ou partir de um conjunto, para deixar o código mais limpo e elegante, eles são métodos, que quando chamados não alteram o observable existente, eles retornan um novo objeto, onde sua lógica é baseada no primeiro observable.Em resumo um operador é uma função pura que cria um novo Observable com base no atual e o anterior permanece inalterado.

- IX)Alguns Operadores de Criação:
- AJAX:Ele cria um observável para uma solicitação Ajax com um objeto de solicitação com url, cabeçalhos, etc. ou uma string para uma URL.
- FromEvent: Cria um Observable de uma API arbitrária para registrar manipuladores de eventos.
- Gerenate: Gera uma sequência observável executando um loop controlado por estado produzindo os elementos da sequência, usando o agendador especificado para enviar mensagens de observador. A sobrecarga aceita objetos de opções que podem conter estado inicial, iteração, condição, seletor de resultado e agendador.
- OF: extrai um tipo de arquivo
- Interval: Emite um objeto contendo o valor atual e o tempo decorrido entre a emissão do valor atual e o valor anterior
- TrowError:Cria um observável que criará uma instância de erro e a enviará para o consumidor como um erro imediatamente após a assinatura.
- Timer: Cria um observável que aguardará um período de tempo especificado, ou data exata, antes de emitir o número 0.


- X)As regras de associatividade de operadores para a avaliação de expressões definem a ordem em que ocorrências adjacentes de
operadores com o mesmo nível de precedência são avaliados.

- XI)Operadores de associação:
- Conct: Emite todos os valores da fonte observável e, uma vez concluído, assina cada fonte observável fornecida, uma de cada vez, emitindo todos os seus valores e não assinando a próxima até que ela seja concluída.
- forkJoin: Aceita um ou um dicionário Arrayde e retorna um que emite uma matriz de valores na mesma ordem exata da matriz passada ou um dicionário de valores na mesma forma que o dicionário passado
- Merge:Cria uma saída Observable que emite simultaneamente todos os valores de cada entrada Observable.

- XII)Operadore de Transformação: bufferTime, concatMap, map, mergeMap,    scan,switchMap


- XIII)Operadores de transformação:
- concatMap: Projeta cada valor de origem para um Observable que é mesclado no Observable de saída, de forma serializada, esperando que cada um seja concluído antes de mesclar o próximo.
- map:Aplica uma determinada projectfunção a cada valor emitido pelo Observable de origem e emite os valores resultantes como um Observable.
- MapTo: Emite o valor constante dado na saída Observable toda vez que a fonte Observable emite um valor.
- mergeMap: Projeta cada valor de origem para um Observable que é mesclado na saída Observable.
-  mergeMapTo:Projeta cada valor de origem para o mesmo Observable que é mesclado várias vezes na saída Observable.
- switchMap: Projeta cada valor de origem para um Observable que é mesclado no Observable de saída, emitindo valores apenas do Observable projetado mais recentemente.
- switchMapTo: Projeta cada valor de origem para o mesmo Observable que é nivelado várias vezes com switchMapo Observable de saída.

