7.1: Distâncias e ângulos

Daí decorre, portanto, a igualdade em CSB, o que mostra que $\mathbf{u}$ e $\mathbf{v}$ são linearmente dependentes. Como $\mathbf{v}$ é não nulo, devemos ter $\mathbf{u} = t\mathbf{v}$ para algum $t$. Como $\langle \mathbf{u}, \mathbf{v} \rangle = |\mathbf{u}| |\mathbf{v}| > 0$, $t$ deve ser real positivo.

**Observação**: A desigualdade triangular exprime o fato de que o menor caminho entre dois pontos é o segmento de reta que os une.

**Exercício 7.13** Sejam $(x_1, \ldots, x_n)$ e $(y_1, \ldots, y_n)$ em $\mathbb{R}^n$. Mostre que

$$\sum_{j=1}^{n} |x_j y_j| \leq \sqrt{\left( \sum_{j=1}^{n} x_j^2 \right) \left( \sum_{j=1}^{n} y_j^2 \right)}$$

**Exercício 7.14** Sejam $(x_n)_{n \in \mathbb{N}}$ e $(y_n)_{n \in \mathbb{N}}$ tais que

$$\sum_{n=1}^{\infty} x_n^2 < \infty, \sum_{n=1}^{\infty} y_n^2 < \infty.$$

Passando ao limite a desigualdade do exercício anterior, mostre que

$$\sum_{j=1}^{\infty} |x_j y_j| \leq \sqrt{\left( \sum_{j=1}^{\infty} x_j^2 \right) \left( \sum_{j=1}^{\infty} y_j^2 \right)}$$

Conclua que $l^2(\mathbb{R})$ é, de fato, um espaço vetorial.

**Exercício 7.15** Sejam $f$ e $g$ funções contínuas definidas no intervalo $[a, b]$ e a valores em $\mathbb{R}$. Mostre que

$$\int_a^b |f(x)g(x)| dx \leq \sqrt{\int_a^b f(x)^2 dx \int_a^b g(x)^2 dx}.$$