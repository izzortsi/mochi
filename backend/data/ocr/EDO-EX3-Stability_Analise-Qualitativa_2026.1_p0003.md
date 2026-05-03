Para encontrar $x(t)$ explicitamente debemos ser capazes de invertir $H$, i.e. resolver a equação $H(x) = z$ para obter $x$ em termos de $z$. Em alguns casos a forma implicita (3) poderia ser a melhor coisa que conseguimos. Pois $H$ é a anti-derivada de $1/f$, podemos escrever isso simbolicamente como

$$\int \frac{1}{f(x)} dx = \int g(t) dt.$$

Se $G$ é uma anti-derivada de $g$ então a equação acima pode se escrever como

$$H(x(t)) = G(t) + c,$$

Usando a condição inicial $x(t_o) = x_o$ obtemos o valor da constante $c$,

$$c = H(x(t_o)) - G(t_o) = H(x_o) - G(t_o)$$

e a solução é

$$H(x(t)) - H(x(t_o)) = G(t) - G(t_o)$$

que é equivalente a

$$\int_{x_o}^{x(t)} \frac{1}{f(x)} dx = \int_{t_o}^{t} g(s) ds.$$

2.2 A abordagem qualitativa

A observação chave é que o Teorema de existência e unicidade nos diz que, desde que $f$ seja ‘legal’, uma solução de

$$\frac{dx}{dt} = f(x)$$

é completamente determinada por seu valor em qualquer instante $t$. A própria equação pode então ser usada para determinar se $x(t)$ está aumentando ou diminuindo, dependendo do sinal de $f$.

A maneira mais fácil de pensar nesse tipo de equação é imaginar que $x(t)$ representa a posição de uma partícula se movendo em uma linha no instante $t$. Podemos então falar sobre a “velocidade da partícula” (em vez da “taxa de variação de x”).

O que quer que a equação realmente represente, podemos usar a ideia da partícula ao resolvê-la e então reinterpretar nossos resultados para a aplicação original quando terminarmos.

Para entender como as soluções se comportam, primeiro encontramos todos os valores de $x$ nos quais a partícula não se move; isso acontece nos pontos $x^*$ onde $f(x^*) = 0$. Como é frequentemente o caso com ideias fundamentais, tais pontos têm muitos nomes, entre