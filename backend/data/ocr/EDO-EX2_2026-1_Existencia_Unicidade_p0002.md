Domínio versus Intervalo $I$ de definição de uma solução

O domínio de $y = 1/x$, considerada simplesmente como uma função, é o conjunto de todos os números réais $x$ exceto o 0, i.e.

$$\text{Domínio} = \mathbb{R} \setminus \{0\} = (-\infty, 0) \cup (0, +\infty)$$

Entretanto, $y = 1/x$ é também uma solução da equação diferencial linear de primeira ordem

$$x \frac{dy}{dx} + y = 0$$

(verifique!). Mas quando afirmamos que $y = 1/x$ é uma solução dessa ED, queremos dizer que é uma função definida em um intervalo $I$ no qual é diferenciável e satisfaz a equação, portanto $I$ é $(-\infty, 0)$ ou $(0, +\infty)$. Isso é mais claro quando consideramos o Problema de Valor Inicial

$$x \frac{dy}{dx} + y = 0,$$
$$y(x_o) = y_o$$

Se $x_o < 0$, i.e. $x_o \in (-\infty, 0)$ então o intervalo de definição da solução é $I = (-\infty, 0)$.
Se $x_o > 0$, i.e. $x_o \in (0, +\infty)$ então o intervalo de definição da solução é $I = (0, \infty)$.

Solução Implícita de uma ED

Definição : Dizemos que uma relação

$$F(t, y) = 0$$

é uma solução implícita de uma equação diferencial ordinaria, em um intervalo $I$, quando existe pelo menos uma função $\phi(t)$ que satisfaça a relação (i.e. $F(t, \phi(t))$), bem como a equação diferencial em $I$.

Exemplo : A relação $t^2 + y^2 - 1 = 0$ é uma solução implícita da equação diferencial

$$\frac{dy}{dt} = -\frac{t}{y}$$

no intervalo $-1 \leq t \leq 1$. De fato, por diferenciação implícita obtemos

$$\frac{d}{dt} t^2 + \frac{d}{t} y(t)^2 = \frac{d}{dt} 1 \implies 2t + 2y \frac{dy}{dy} = 0 \implies \frac{dy}{dt} = -\frac{t}{y}$$

Além disso, resolvendo para $t^2 + y^2 = 1$ para $y$ em termos de $t$ obtemos

$$y = \pm \sqrt{1 - t^2}$$