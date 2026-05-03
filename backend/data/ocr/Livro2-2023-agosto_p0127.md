14.3 Convergência

O leitor, caso se sinta mais confortável, pode supor que estamos lidando apenas com o caso em que $n = 3$, de forma que tudo vai se passar em um plano e pode ser desenhado. Mas a demonstração, no caso geral, muda apenas pelo raio da maior bola contida em $T$.

Para facilitar a vida na hora da demonstração, comecemos com uma definição e dois exercícios.

Definição: Se $A$ e $B$ são subconjuntos de $\mathbb{R}^n$, $x_0$ está em $\mathbb{R}^n$ e $t$ é um número real, então o produto de $A$ por $t$, $tA$, a soma de $x_0$ e $A$, $x_0 + A$ e a soma de $A$ e $B$, $A + B$ são definidos por

$$tA = \{x \in \mathbb{R}^n \mid \exists(t, a) \in \mathbb{R} \times A, x = ta\}$$

$$x_0 + A = \{x \in \mathbb{R}^n \mid \exists a \in A, x = x_0 + a\}$$

$$A + B = \{x \in \mathbb{R}^n \mid \exists(a, b) \in A \times B, x = a + b\}$$

Exercício 14.7 Suponha que $P : \mathbb{R}^n \rightarrow \mathbb{R}^n$ é linear, que $A$ e $B$ são subconjuntos de $\mathbb{R}^n$, que $x_0$ está em $\mathbb{R}^n$ e que $t$ é um número real. Mostre que $P(A + B) = P(A) + P(B)$, que $P(x_0 + A) = Px_0 + P(A)$ e que $P(tA) = tP(A)$.

Exercício 14.8 Sejam $x$ em $\mathbb{R}^n$, $t$ e $\varepsilon$ reais positivos. Mostre que, se, de maneira, geral, designamos a bola de centro $y$ e raio $r$ por $B_ry)$,

$$B_r(y) = \{z \in \mathbb{R}^n \mid |z - y| < r\},$$

então $B_{t\varepsilon}(x) = x + tB_{\varepsilon}(0)$.

Lema do Encolhimento: Sejam $P : \mathbb{R}^n \rightarrow \mathbb{R}^n$ uma matriz com entrada não negativas,

$$[P] = \begin{bmatrix}
p_{11} & p_{12} & \cdots & p_{1n} \\
p_{21} & p_{22} & \cdots & p_{2n} \\
\vdots & \vdots & & \vdots \\
p_{n1} & p_{n2} & \cdots & p_{nn}
\end{bmatrix},$$

tal que

$$p_{1j} + p_{2j} + \cdots + p_{nj} = 1, \forall j = 1, \ldots, n.$$

Seja

$$T = \{p_1\mathbf{e}_1 + p_2\mathbf{e}_2 + \cdots + p_n\mathbf{e}_n \mid p_1 + p_2 + \cdots + p_n = 1, p_1, p_2, \ldots, p_n \geq 0\},$$

ou seja, $T$ é composto pelos vetores