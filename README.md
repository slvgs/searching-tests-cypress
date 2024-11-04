# 3 formas de realizar uma busca! 

Com base nas aulas anteriores, foi desenvolvido um exercício para realizar buscas no site https://duckduckgo.com/ utilizando três abordagens diferentes. A automatização foi implementada com Cypress e as formas de execução da busca foram definidas da seguinte maneira:

1. Utilizando a tecla ENTER.
2. Identificando e clicando no botão "BUSCA" para efetuar a pesquisa.
3. Invocando o comando .submit imediatamente após o comando .type para realizar a busca, reconhecendo previamente o elemento do botão do formulário de pesquisa.

Além disso, foram utilizados os seguintes comandos do Cypress:

- beforeEach()
- .wait com a definição de um alias utilizando .as
- .intercept para interceptar requisições.






![](./image/Captura%20de%20tela%202024-11-04%20190608.png)