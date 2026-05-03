funções de um intervalo $[a,b]$ em $\mathbb{R}$, do primeiro **produto escalar** da história:² se $f$ e $g$ são funções, definidas no intervalo $[a,b]$ e a valores em $\mathbb{R}$, podemos definir $<f,g>$ por

$$<f,g> = \int_a^b f(x)g(x)dx.$$

**Exemplo 5:** O problema clássico da **braquistócrona** foi proposto em 1696 por João Bernoulli e chamou a atenção dos maiores matemáticos da época (Newton, Leibniz, Tiago Bernoulli, entre outros). Trata-se do seguinte: dados dois pontos, $A$ e $B$, do espaço, encontrar uma curva $\gamma$ ligando $A$ a $B$ (supostamente num plano vertical passando por $A$ e $B$), tal que uma partícula que sobre ela deslize sem atrito e apenas sob a ação da gravidade, percorra $\gamma$ no menor tempo possível. Supondo que a altura de $A$ é superior à de $B$, podemos representar, em $\mathbb{R}^2$, $A$ por $(0,0)$ e $B$ por $(a,-b)$, $b > 0$. Dando como óbvio que a curva em questão pode ser representada pelo gráfico de uma função $f : [0,a] \to \mathbb{R}$, pelo menos com derivada primeira contínua, podemos dizer que o que buscamos está no espaço $V$ das funções $f : [0,a] \to \mathbb{R}$, tais que $f$ tem derivada primeira contínua, com $f(0) = 0$ e $f(a) = -b$.

**Exercício 5.8** Mostre que, nos exemplos 3 e 4, a soma de duas funções do espaço $V$ está em $V$; mas não no exemplo 5. Mesma coisa para funções do tipo $cf$, com c real fixo e f em $V$ (isto é: se $f$ é uma função em $V$ e $c$ é um número real fixo, então a função $cf$, definida por $(cf)(x) = c(f(x))$, está em $V$, nos exemplos 3 e 4, mas não no exemplo 5).

**Exercício 5.9** Mostre que toda função $f$ de $V$, no exemplo 5, pode ser escrita como $f = f_0 + h$, com $f_0$ sendo uma função qualquer de $V$, fixa, e $h : [0,a] \to \mathbb{R}$, com derivada primeira contínua e $h(0) = 0 = h(a)$ ($f_0$ pode ser, por exemplo, o segmento de reta ligando $A$ a $B$).

**Exercício 5.10** Seja $V_0$ o espaço das funções $h : [0,a] \to \mathbb{R}$, com derivada primeira contínua e tais que $h(0) = 0 = h(a)$. Mostre que a soma de duas funções de $V_0$ está em $V_0$; o mesmo para ch, se $c$ é um número real fixo e $h$ é uma função de $V_0$.

**Exercício 5.11** Seja $X$ um conjunto qualquer. Seja $V$ o espaço das funções $u$ de $X$ em $\mathbb{R}$. Defina, em $V$, as operações de **adição** e de **multiplicação por escalar** da seguinte forma: se $u$ e $v$ são duas funções de $X$ em $\mathbb{R}$, a função $u + v$, de $X$ em $\mathbb{R}$ é definida por $(u + v)(x) = u(x) + v(x)$; se $c$ é um número real fixo e $u$ é uma função de $X$ em $\mathbb{R}$, a função $cu$, de $X$ em $\mathbb{R}$, é definida por $(cu)(x) = cu(x)$. Mostre que valem as seguinte e famosas propriedades:

1. $u + (v + w) = (u + v) + w$
2. $u + v = v + u$
3. $\exists 0 \in V | u + 0 = u$
4. $u + (-u) = 0$
5. $t(u + v) = tu + tv$
6. $(s + t)u = su + tu$
7. $s(tu) = (st)u$
8. $1u = u$

²Seria um pouco exagerado dizer que Fourier inventou o produto escalar, antes de Hamilton; mas é fato que, no trabalho de Fourier está a semente da ideia de ortogonalidade, em um contexto nada geométrico, que vai inspirar a construção do conceito abstrato que é hoje conhecido como **produto escalar** (ou **produto interno**)