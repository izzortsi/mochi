Teorema 2: (Existência e Unicidade, caso geral)

Considere o Problema de Valor Inicial (PVI)

$$\frac{dy}{dt} = f(t,y),$$
$$y(t_o) = y_o.$$

Hipóteses:
Suponha que $D$ seja uma região no plano $ty$ tal que:

1) $f(t,y)$ e $\frac{\partial f}{\partial y}(t,y)$ são ambas contínuas, e
2) o dado inicial $(t_o,y_o) \in D$,

então
$\implies$ Tese : existe uma única solução $y = \phi(t)$ do PVI, isto é

$$\frac{d\phi(t)}{dt} = f(t,\phi(t)),$$
$$\phi(t_o) = y_o$$

e existe $h > 0$ tal que $\phi(t)$ está definida $\forall t \in (t_o - h, t_o + h)$.

Observações:

1) As condições do Teorema 2 são suficientes, mas não necessárias.

Quando $f$ e $\frac{\partial f}{\partial y}$ são contínuas em um intervalo, deve-se sempre concluir que há uma única solução. Mas o contrario não é verdade. Ou seja se as hipóteses do teorema não são verificadas, não se pode concluir que uma única solução nao pode existir.

Como exemplo disso considere

$$\frac{dy}{dt} = |y - 1|, \quad y(0) = 1$$

As hipóteses do Teorema 1 não são satisfeitas pois $f$ é contínua $\forall t \in \mathbb{R}$ mas $\frac{\partial f}{\partial y}$ está definida em $D = (-\infty,1) \cup (1,+\infty)$ e portanto a condição inicial

$$(t_o,y_o) = (0,1) \notin D.$$

Não obstante, se pode provar que $y = \phi(t) = 1$, $\forall t \in \mathbb{R}$ é a única solução do PVI

2) O Teorema 2 se generaliza ao caso de mais de uma variavel desconhecida, i.e. para $Y \in \mathbb{R}^n$. Nesse caso $Y' = F(t,Y)$ onde $F : \mathbb{R} \times \mathbb{R}^n \longrightarrow \mathbb{R}^n$.

3) No caso autônomo, o Teorema torna-se

$$\frac{dy}{dt} = f(y), \quad y(t_o) = y_o.$$