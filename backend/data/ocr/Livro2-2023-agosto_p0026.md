em ter um número exato. Yakecan sugere, então, que se adote a média aritmética: somam-se os três números, $x, y$ e $z$, e divide-se o resultado por três. Zumbi acha que tanto faz, mas tem a curiosidade de saber qual seria a decisão correta, por algum critério razoável. Pensa um pouco e apresenta a ideia a seguir.

Se não houvesse erro, não teríamos três medidas diferentes, $x, y$ e $z$, mas três medidas iguais; $m, m$ e $m$. Se pensarmos a três medidas como um vetor,

$$\vec{v} = (x, y, z),$$

deveríamos ter, idealmente, $\vec{v}$ sobre a reta

$$r = \{(t, t, t), t \in \mathbb{R}\} = \{t(1, 1, 1), t \in \mathbb{R}\}.$$

Não sabemos qual é o ponto certo em $r$, $\vec{m} = (m, m, m)$; tudo que temos é um ponto aproximado, $\vec{v} = (x, y, z)$. A melhor escolha, então, propõe Zumbi, é o ponto $\vec{v}_0 = (\bar{m}, \bar{m}, \bar{m})$ de $r$ mais próximo de $\vec{v}$. Ora, conclui, tal ponto é a projeção de $\vec{v}$ sobre $r$. Para calculá-la, basta, como já vimos na página 10, tomar o vetor $\vec{w} = (1, 1, 1)$, que dá a direção de $r$, e fazer

$$\vec{v}_0 = \frac{\langle \vec{v}, \vec{w} \rangle}{\langle \vec{w}, \vec{w} \rangle} \vec{w} = \frac{x + y + z}{3}(1, 1, 1),$$

de modo que a melhor escolha, na sua opinião, é

$$\bar{m} = \frac{x + y + z}{3}.$$

Eu não disse?, triunfa Yakecan. Xavier, cético, observa: é, mas o seu método não funciona se, em vez de 3 medidas, tivéssemos 4, 5, ou um número $n$, qualquer, maior. Zumbi não diz nada; deita na rede de Yakecan, fecha os olhos...e fica matutando. Depois de um tempo levanta, pega papel e lápis, e se põe a escrever e rabiscar; depois de novo na rede...fica umas horas nesse deita-levanta-pensa-escreve-rabisca. Por fim, chama os amigos e tasca a seguinte história.

Suponhamos que estamos diante de 10 medidas de um mesmo objeto, todas igualmente confiáveis. Podemos representá-las por um ponto $x = (x_1, \ldots, x_{10})$ em $\mathbb{R}^{10}$. No entanto, o resultado esperado, ao se medir 10 vezes o mesmo objeto, seria $\bar{x} = (\bar{x}, \ldots, \bar{x})$, com 10 medidas iguais. Nosso problema é, pois, a partir da $n$-upla $x$, obter uma nova $n$-upla, $\bar{x}$, com todas as coordenadas iguais e que, de alguma forma, esteja o mais próxima possível de $x$. Ora, se fossem apenas 3 medidas, poderíamos pensar $x$ como um ponto do espaço; $\bar{x}$ deveria, então, ser o ponto da reta

$$r = \{(t, t, t), t \in \mathbb{R}\} = \{t(1, 1, 1), t \in \mathbb{R}\}$$

mais próximo de $x$. A solução, geométrica, é projetar $x$ sobre $r$. Como $r$ passa pela origem, isso equivale a pensar $x$ como um vetor e projetá-lo sobre o vetor $\vec{v} = (1, 1, 1)$. A projeção, como já vimos, é dada por