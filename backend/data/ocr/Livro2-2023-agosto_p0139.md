Capítulo 16

Outro exemplo: Polinômios

Nosso propósito, neste capítulo, é apresentar um exemplo, simples, em que diferentes problemas conduzem, naturalmente, à utilização de diferentes bases. Nosso espaço é o dos polinômios de grau inferior a $n$, que chamaremos de $\mathcal{P}_n$. Vamos trabalhar com polinômios a coeficientes reais, mas não hesitaremos em estender os resultados ao caso complexo.

Começamos observando que $\mathcal{P}_n$ tem uma base natural: $\{1, x, x^2, \ldots, x^{n-1}\}$

16.1 Questão 1: achar polinômio dados seus valores em $n$ pontos

Suponhamos fixados $n$ números distintos, $x_1, \ldots, x_n$; suponhamos, ainda, dados outros $n$ números, que não precisam ser diferentes, $y_1, \ldots, y_n$. Queremos encontrar um polinômio $p$, de grau inferior a $n$, tal que $p(x_i) = y_i$, $i = 1, \ldots, n$. Você pode supor que os números dados são reais, mas não faz diferença: o caso complexo, ou mesmo se trabalharmos em outro corpo qualquer, é análogo.

Uma abordagem simples é escrever

$$p(x) = a_{n-1}x^{n-1} + \ldots + a_1x + a_0,$$

considerar $a_{n-1}, \ldots, a_0$ como incógnitas e, substituindo cada $x_i$, obter $n$ equações. Matricialmente$^1$, temos o sistema

$$\begin{bmatrix}
1 & x_1 & x_1^2 & \cdots & x_{n-1}^2 \\
1 & x_2 & x_2^2 & \cdots & x_{n-1}^2 \\
\ldots & \ldots & \ldots & \ldots & \ldots \\
1 & x_n & x_n^2 & \cdots & x_{n-1}^2
\end{bmatrix} \begin{bmatrix}
a_0 \\
a_1 \\
\vdots \\
a_{n-1}
\end{bmatrix} = \begin{bmatrix}
y_1 \\
y_2 \\
\vdots \\
y_n
\end{bmatrix}.$$

Uma outra abordagem, mais esperta, parte da observação seguinte: se multiplicarmos todos os monômios $(x - x_i)$, exceto $(x - x_j)$, teremos um polinômio, de grau $n - 1$,

$^1$esta matriz é conhecida como matriz de Vandermonde