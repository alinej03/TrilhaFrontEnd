<h1>
 <img src = "logo.png">
 <h1>
 
 <h1 align = "center"> 
 
    Trilha Angular FrontEnd 
</h1>


A) Qual a responsabilidade do package.json no projeto?
- R: Ele guarda as dependências usadas no projeto, através do npm, quando criamos um novo projeto CLI o próprio angular já criar esse pacote automáticamente com suas dependencias e versões, para executar o projeto.

B) Qual a responsabilidade do angular.json no projeto
- R: fornece padrões de configuração específicos do projeto.

C)Qual a finalidade da tag router-outlet?
- R: Ele serve como um roteador, ele renderiza as rotas declaradas no projeto.

D)Qual a diferença entre as duas declarações de rotas a seguir? Qual delas é 
denominada de eager-load e lazy-load?
- Declaração 1: essa é a eager-lod, carrega os dados no começo da aplicação.
- Declaração 2: Essa é a Lazy-lod, essa carrega dados quando você chama o seu carregamento, quando se faz nescessário.

E)Qual a importância da componentização?
- R: Com a componentização deixamos o projeto mais limpo, enxuto, criando um componente especifico para cada função do projeto, podendo reutilizar nas aplicações.

F)Quais componentes reaproveitáveis foram criados no projeto?
- R: o base-resource-form, base-resource-list, bread-crumb, form-field-error, page-header e o server-error-messages.

G) No arquivo bread-crumb.component.ts qual funcionalidade da linha a seguir:
- R: Ele recebe como parametro um array de itens,que no caso é declarada como uma string, com uma forma dinamica.

H)Com base no exercício anterior para qual finalidade a anotação a seguir é utilizada?
- R: É uma propriedade que permite passar dados do componente filho para o componente pai. 

I)Sobre a arquitetura proposta no curso, descreva os requisitos para se enquadrar em 
cada um dos níveis a seguir: core, pages e shared
- CORE: Dentro dessa pasta colocamos os arquivos que são parte obrigatória para o carregamento do sistema, componentes, model, serviços que são carregados numa unica estância(Singleton) ex: navbar, um token Service.
- PAGES: Na Prática é uma página, onde tem componetes, modulos, essa parte é responsavel pela view das páginas do projeto.
- SHARED: Ele funciona de forma similar ao core com as suas pastas, componentes, model, service. Nessa pasta fica parte do projeto que pode ser utilizada em outro componente princial como compartilhamento, senda elas não necessariamente obrigatórias para o sistema funcionar ex. pipes, diretivas.

J)Qual o papel do arquivo in-memory-database.ts?
- R: Esse arquivo foi criado para simular um "back-end" dentro no projeto.

K) Liste 5 métodos e 5 propriedades de um objeto do tipo FormBuilder e suas 
respectivas funcionalidades. Segue exemplo abaixo de declaração.
- Metodos:
- getError(): informa dados de erros ao controle conforme o caminho.
- clearValidators(): esvazia a lista de validadores síncronos.
- get(): obtém o valor de um controle ou caminho.
- patchValue(): corrige o valor do FormGroup, recebe um objeto e faz o possível para corresponder os valores ao controle correto no Formgrup.
- setValue(): define o valor de um controle do formGroup.

- Propriedades:
- disabled: define o status do controle para desabilitado.
- invalid: define um controle como inválido de acordo com o seu status
- root: recupera o ancestral de nível superior do controle.
- validator: retorna a função usada para determinar se o formulario esta valido de forma síncrona.
- value: exibe os valores dos campos no formulario.


L)Explique o funcionamento da seguinte sentença:
- R: Se a variavel CurreAction for igual a edit, ela busca o lançamento pelo Id e subscreve o valor atual do novo lançamento. Caso ocorra algum tipo de erro, gera um alerta de erro.

M)A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ou
injeção de dependências?
- R: Herança, pois o componente "EntryFormComponent" está estendendo/recebendo o componente "BaseResourceFormComponent"

N)A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ou
injeção de dependências?
- R: Polimorfismo, pois o ngOnInit permite começar e fechar um método durante a aplicação, e nesse caso ele chama dois metodos diferentes.

O)A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ou
injeção de dependências? Existe outra maneira?
- R: Injeção de dependências já que está chamando a classe de serviço do componente Entry.