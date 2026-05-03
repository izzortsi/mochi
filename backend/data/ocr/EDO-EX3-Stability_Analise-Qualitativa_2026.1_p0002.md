2 Notas

2.1 Justificando o metodo de separação das variáveis

Considere o Problema de Valor Inicial

$$\frac{dx}{dt} = f(x)g(t),$$
$$x(t_o) = x_o.$$

(1)

(2)

Suponha que $f(x)$ seja suficientemente regular para assegurar que Teorema de existência e unicidade possa garantir a existência e unicidade da solução.

Observe que explicitando a dependência temporal, a Eq. (1) se re-escreve como

$$\frac{dx}{dt}(t) = f(x(t))g(t)$$

Segue que se $x(t)$ é uma solução da Eq. (1) com $f(x(s)) = 0$ para algum $s$ então $x(t) = x(s)$ para todos $t \in \mathbb{R}$. Isso é consequência da unicidade da solução. Assumindo que $x(t) = x(s)$ para todos $t$ implica que $f(x(t)) = f(x(s)) = 0$ para todo $t \in \mathbb{R}$, e portanto $\dot{x} = 0$ para todos $t$, mostrando que esta escolha de $x(t)$ resolve a equação. Pois soluções do PVI são únicas, tal $x(t)$ deve ser a única solução com o valor dado $x(s)$.

Portanto ou $f(x(t)) = 0$ para todo $t$, ou $f(x(t)) \neq 0$ para todo $t$.

Agora tratamos o caso $f(x(t)) \neq 0$ para todos $t$. Dividindo os dois lados da Eq. (1) por $f(x)$ obtemos

$$\frac{1}{f(x)} \frac{dx}{dt} = g(t).$$

Agora suponha que $H(x)$ seja a anti-derivada de $1/f(x)$, i.e.

$$H'(x) = \frac{1}{f(x)}.$$

Observe que usando a regra da cadeia

$$\frac{d}{dt} H(x(t)) = \frac{dH(x(t))}{dx} \frac{dx}{dt} = \frac{1}{f(x)} \frac{dx}{dt}$$

e portanto

$$\frac{1}{f(x)} \frac{dx}{dt} = g(t) \implies \frac{d}{dt} H(x(t)) = g(t).$$

Integrando os dois lados obtemos

$$H(x(t)) = \int g(t) \, dt.$$