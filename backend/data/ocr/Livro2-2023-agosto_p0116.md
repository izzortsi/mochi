fixo. Assim, ao par ordenado $(x, y)$ corresponderá sempre, na tela, o ponto $P$ cujo vetor posição é $x\vec{e}_1 + y\vec{e}_2$ ($\{\vec{e}_1, \vec{e}_2\}$ é suposta ser a base do sistema de coordenadas da tela). Consideremos agora dois vetores, $\vec{e}_1$ e $\vec{e}_2$, e a transformação $T$ que leva $x\vec{e}_1 + y\vec{e}_2$ em $x\vec{e}_1 + y\vec{e}_2$. Teoricamente está lindo, abstrato, mas nosso problema prático é: dado um ponto $P$, como vamos saber qual é o ponto $P'$ em que $T$ transforma $P$? Digamos assim: se o ponto $P$ é dado por suas coordenadas $(x, y)$, como vamos calcular as coordenadas $(x', y')$ de seu transformado $P'$?

**Exercício 13.1** Note que o que queremos são as coordenadas de $P'$ no sistema de base $\{\vec{e}_1, \vec{e}_2\}$, que é o único que nosso computador conhece.

A primeira coisa a saber é, é claro, quem são os vetores $\vec{e}_1$ e $\vec{e}_2$. Ora, se nosso computador só conhece o sistema de base $\{\vec{e}_1, \vec{e}_2\}$, $\vec{e}_1$ e $\vec{e}_2$ devem ser indicados por suas coordenadas nesse sistema. Digamos que

$$\vec{e}_1 = (3, 2), \quad \vec{e}_2 = (1, 4).$$

**Exercício 13.2** Pegue papel quadriculado e desenhe. Marque os vetores $\vec{e}_1$ e $\vec{e}_2$.

**Exercício 13.3** Marque o ponto $P'$ cujo vetor posição é $2\vec{e}_1 + \vec{e}_2$.

Consideremos o ponto $P$ dado por suas coordenadas, $P = (2, 1)$. Isto significa que o vetor posição de $P$ é $2\vec{e}_1 + \vec{e}_2$. Logo, $P$ será transformado no ponto $P'$ cujo vetor posição é $2\vec{e}_1 + \vec{e}_2$.

E agora *atenção para o pulo do gato*: se temos as coordenadas de $\vec{e}_1$ e as de $\vec{e}_2$ no sistema de base $\{\vec{e}_1, \vec{e}_2\}$ ($\vec{e}_1 = (3, 2), \vec{e}_2 = (1, 4)$), então temos as de $2\vec{e}_1 + \vec{e}_2$:

$$2\vec{e}_1 + \vec{e}_2 = 2(3, 2) + (1, 4) = (6, 4) + (1, 4) = (7, 8).$$

Ora, mas as coordenadas do vetor posição de $P'$ são as coordenadas do ponto $P'$. Logo, $P' = (7, 8)$.

**Exercício 13.4** Certifique-se de que entendeu tudo.

**Exercício 13.5** Veja se as coisas ficaram claras. Continuemos no plano. Pegue duas folhas de papel quadriculado e marque a origem $O$ em cada um dos dois. Desenhe uma figura (não muito grande nem muito complicada) em uma das folhas (pode ser, por exemplo, um dos quadradinhos). Escolha dois vetores $\vec{e}_1$ e $\vec{e}_2$ ($\vec{e}_1 = (2, 1), \vec{e}_2 = (-1, 3)$, por exemplo) e marque-os (com pé na origem) na outra folha. Construa na segunda folha, por cima do quadriculado original, o reticulado de base $\{\vec{e}_1, \vec{e}_2\}$. Desenhe nesta última folha, com auxilio do reticulado, a imagem de sua figura pela transformação $T$ que leva $x\vec{e}_1 + y\vec{e}_2$ em $x\vec{e}_1 + y\vec{e}_2$. Um ponto $P'$ da nova figura foi marcado usando o sistema de coordenadas de base $\{\vec{e}_1, \vec{e}_2\}$. Suponha que suas coordenadas, neste sistema, são $(x, y)$ (note que isto quer dizer que seu vetor posição é $x\vec{e}_1 + y\vec{e}_2$ e que $P'$ é imagem do ponto $P$ da figura original cujo vetor posição é $x\vec{e}_1 + y\vec{e}_2$). Pois bem, o ponto $P'$ tem coordenadas $(x', y')$, referentes ao papel quadriculado, que são, é claro, diferentes das coordenadas $(x, y)$ de $P$ (note que $(x, y)$ são as coordenadas de $P'$, só que no sistema de base $\{\vec{e}_1, \vec{e}_2\}$). O que acabamos de mostrar é que