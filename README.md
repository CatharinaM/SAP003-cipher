# Cifra de César

## Considerações gerais:
* Quem são os principais usuário do produto? Crianças e pré-adolescentes.
* Quais são os objetivos do usuário em relação com o produto? Brincar com os amiguinhos e amiguinhas, pois a cifra de césar permite a codificação de mensagens, a partir de uma chave, também escohida pelo usuário, para ela se tornar secreta, bem como a decodificação de uma mensagem afim dela tornar-se legível, descoberta, também a partir da colocação da mensagem e chave. 
* Como você acredita que o produto está resolvendo os problemas do usuário? O problema, no caso, é a prática com outras formas de brincar com a comunicação, com as mensagens que eles podem trocar de forma secreta, então, nesse sentido, o produto ajuda sendo um ambiente que proporciona a comunicação dessa forma. 

## Como foi definido meu usuário e o produto final a nível de expriência e interface:
O meu usuário foi definido de acordo com analogia ao nível experencial em que me sinto (ainda no ínicio e descobrindo como fazer os códigos) então foi feito para crianças e pré-adolescentes que estão em busca de fertilizar as formas de comunicação com os amigos, numa fase em que coisas diferentes e em formas secretas atiçam as criatividades de brincadeiras entre eles. O processo para definir o produto final foi pensar no usuário estabelicido e as necessidades que o produto cobriria. A interface foi pensada também a partir desses parâmetros, usuário e necessidade/solução.
 
## O produto: 
**Cat e Dog Deco e Code** traz uma interface voltada para os usuários definidos, crianças e pré-adolescentes, o título faz trocadilho sonórico com as palavras referentes as inicias de *deco*dificar e *cod*ificar com *cat e dog*, assim como a ideia transferida no logo que é a imagem do gato e do cachorro com ação de estarem escrevendo uma mensagem. As cores da página e caixas também são relacionadas com as cores dele, trazendo a ideia de uma uniformidade semântica no produto geral. Este produto serve para esses usuários brincarem de trocarem mesnsagens secretas entre si. 

![Print da tela](/src/img/SiteCateDog.png)

## Resumo do que foi feito no processo:
Foi trabalhado no HTML os títulos, a imagem selecionada, os inputs e as divs, para consrução da estrutura da página. No index.js foi criado duas funções (uma relacionada a mensagem enviada para codificar e outra relacionada a mensagem codificada enviada para ocorrer a decodificação) que armazenam e manipulam as variáveis dos valores dos inpust da HTML. Também foi criado o método *addEventListener()* para anexar e manipular o evento do click para essas funções. No cipher.js foram criadas as funções da lógica dos processos de codificar e decodificar. Nesta parte foi necessário usar a fómula do ASCII (substituindo os valores) e também o método *String.fromCharCode()* para converter o número achado em letra. Também foi preciso usar loops como o *for* e condicionais como o *if*. No style.css foi feita a decoração da página, sendo colocada cor de fundo, fonte, modificado margens, caixas, larguras e alturas de elementos, animações e coisas do tipo.  
