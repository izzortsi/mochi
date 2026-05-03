3 Exercícios

1) Para cada um das seguinte equações diferenciais, esboce o diagrama de fase e define os pontos fixos como estáveis ou instáveis.

$$\begin{align*}
i) & \frac{dx}{dt} = -x + 1, \\
ii) & \frac{dx}{dt} = x(2 - x), \\
iii) & \frac{dx}{dt} = (1 + x)(2 - x)sen x, \\
iv) & \frac{dx}{dt} = -x(1 - x)(2 - x), \\
v) & \frac{dx}{dt} = x^2 - x^4,
\end{align*}$$

2) Modelo SIS
Um simples modelo de espalhamento de uma infeção em uma população é

$$\begin{align*}
\frac{dS}{dt} & = -\beta \frac{I}{N}S + \gamma I, \\
\frac{dI}{dt} & = \beta \frac{I}{N}S - \gamma I,
\end{align*}$$

onde $S(t)$ é o número de pessoas saudáveis, $I(t)$ o número de pessoas infectadas, $\beta$ a taxa de infeção e $\gamma$ a taxa de recuperação.

Observe que

$$\frac{d}{dt}(S(t) + I(t)) = \frac{dS}{dt}(t) + \frac{dI}{dt}(t) = 0.$$

Segue que o tamanho da população é constante, i.e.

$$N = S(t) + I(t) = S(0) + I(0) \quad \forall t.$$

Portanto substituindo $S = N - I$ na segunda equação obtemos uma única equação para o número dos infectados, i.e.

$$\begin{align*}
\frac{dI}{dt} & = \frac{\beta}{N}I(N - I) - \gamma I, \\
& = \frac{\beta}{N}I\left[N\left(1 - \frac{\gamma}{\beta}\right) - I\right]
\end{align*}$$