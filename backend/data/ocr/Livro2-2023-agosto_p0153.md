Proposição: Seja $\omega : V \times V \times V \rightarrow V$ uma forma trilinear alternada e seja $\alpha = \omega(\vec{e}_1, \vec{e}_2, \vec{e}_3)$. Então

$$\omega(\vec{u}, \vec{v}, \vec{w}) = \alpha \det(\vec{u}, \vec{v}, \vec{w}), \forall \vec{u}, \vec{v}, \vec{w} \in V.$$

Corolário: Se $T : V \rightarrow V$ é uma transformação linear, então, qualquer que seja a base $(\vec{u}, \vec{v}, \vec{w})$ de $V$, vale

$$\frac{\det(T\vec{u}, T\vec{v}, T\vec{w})}{\det(\vec{u}, \vec{v}, \vec{w})} = \det(T\vec{e}_1, T\vec{e}_2, T\vec{e}_3).$$

Demonstração: Seja $\omega : V \times V \times V \rightarrow V$ a forma trilinear alternada dada por $\omega(\vec{u}, \vec{v}, \vec{w}) = \det(T\vec{u}, T\vec{v}, T\vec{w})$ (exercício: verifique que $\omega$ é, de fato, trilinear e alternada). Pela Proposição, temos

$$\det(T\vec{u}, T\vec{v}, T\vec{w}) = \det(T\vec{e}_1, T\vec{e}_2, T\vec{e}_3) \det(\vec{u}, \vec{v}, \vec{w}), \forall \vec{u}, \vec{v}, \vec{w} \in V.$$

Se $(\vec{u}, \vec{v}, \vec{w})$ é base de $V$, então $\det(\vec{u}, \vec{v}, \vec{w}) \neq 0$; logo,

$$\frac{\det(T\vec{u}, T\vec{v}, T\vec{w})}{\det(\vec{u}, \vec{v}, \vec{w})} = \det(T\vec{e}_1, T\vec{e}_2, T\vec{e}_3).$$

18.3 Formas de medir volumes

Se queremos levar para dimensões mais altas as mesmas ideias que nos conduziram ao determinante em $\mathbb{R}^3$, devemos começar com

Definição: Seja $V$ um espaço vetorial (real ou complexo), de dimensão $n$. Uma forma de medir volumes ($n$-dimensionais) em $V$ é uma aplicação $\omega : \mathbf{V}^n \rightarrow \mathbb{R}$ ou $\mathbb{C}$ tal que:

(i) $\omega$ é $n$-linear, isto é, é linear em cada coordenada$^3$ e

(ii) $\omega(v_1, v_2, \ldots, v_n) = 0$ sempre que $v_1, v_2, \ldots, v_n$ forem linearmente dependentes.

Exercício 18.8 Mostre que, na presença da condição (i) acima, a condição (ii) é equivalente a $(iii)\omega(v_1, v_2, \ldots, v_n) = 0$ sempre que existam dois índices distintos, i e j, tais que $v_i = v_j$.

Exercício 18.9 Seja $\omega : \mathbf{V}^n \rightarrow \mathbb{R}$ ou $\mathbb{C}$ uma forma de medir volumes. Mostre que $\omega$ é uma forma $n$-linear alternada, isto é:

$(iv)\omega(v_1, \ldots, v_i, \ldots, v_j, \ldots, v_n) = -\omega(v_1, \ldots, v_j, \ldots, v_i, \ldots, v_n)$ para quaisquer vetores $v_1, \ldots, v_n$ em $\mathbf{V}$.

$^3$ou seja: para todos $v_1, \ldots, v_j, u_j, \ldots, v_n$ e para todo $\lambda$, vale

$$\omega(v_1, \ldots, v_j + \lambda u_j, \ldots, v_n) = \omega(v_1, \ldots, v_j, \ldots, v_n) + \lambda \omega(v_1, \ldots, u_j, \ldots, v_n)$$