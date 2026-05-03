Exercício 5.4 Mas qual seria a mente doentia que, sem o suporte da poderosa analogia geométrica introduzida pelo produto escalar, defenderia a norma acima em detrimento de outras tão mais razoáveis, como $|x| = |x_1| + \ldots + |x_{10}|$ (observe que ao termo norma corresponde a ideia de tamanho do vetor)?

Definição: O espaço vetorial $\mathbb{R}^n$ é definido pelo conjunto

$$\mathbb{R}^n = \{x = (x_1, \ldots, x_n), x_1, \ldots, x_n \in \mathbb{R}\},$$

e as operações de adição e de multiplicação por escalar, dadas, respectivamente, para $x, y \in \mathbb{R}^n$, $t \in \mathbb{R}$, por:

$$\text{(i)} \ x + y = (x_1 + y_1, \ldots, x_n + y_n);$$
$$\text{(ii)} \ tx = (tx_1, \ldots, tx_n).$$

Exercício 5.5 Mostre que as operações acima definidas satisfazem às propriedades:

$$\begin{align*}
(1) & \ u + (v + w) = (u + v) + w \\
(2) & \ u + v = v + u \\
(3) & \ \exists 0 \in V \mid u + 0 = u \\
(4) & \ u + (-u) = 0 \\
(5) & \ t(u + v) = tu + tv \\
(6) & \ (s + t)u = su + tu \\
(7) & \ s(tu) = (st)u \\
(8) & \ 1u = u
\end{align*}$$

(isto é: as propriedades (1) a (8) valem para quaisquer vetores $u, v$ e $w$ em $\mathbb{R}^n$ e para quaisquer números s e t).

Definição: O produto escalar canônico em $\mathbb{R}^n$ é definido por

$$<x, y> = x_1y_1 + \ldots + x_ny_n.$$

A base canônica de $\mathbb{R}^n$ é dada pelos vetores $e_1, \ldots, e_n$,

$$e_1 = (1, 0, \ldots, 0), \ldots, e_n = (0, \ldots, 0, 1).$$

Exercício 5.6 Mostre que o produto escalar $<x, y> = x_1y_1 + \ldots + x_ny_n$ tem as boas propriedades do produto escalar:

$$\begin{align*}
(i) & <u, v> = <v, u> \forall u, v \in V \\
(ii) & <tu, v> = t <u, v> \forall u, v \in V, \forall t \in \mathbb{R} \\
(iii) & <u, v_1 + v_2> = <u, v_1> + <u, v_2> \forall u, v_1, v_2 \in V \\
(iv) & <e_i, e_j> = 0, i \neq j, <e_i, e_j> = 1, i = j,
\end{align*}$$

Exercício 5.7 Suponha que os vetores não nulos $v_1, \ldots, v_k$ de $\mathbb{R}^n$ sejam, dois a dois, ortogonais, esto é: $<v_i, v_j> = 0$, se $i \neq j$ e que

$$v = x_1v_1 + \ldots + x_nv_n.$$

Mostre, sem usar coordenadas, que

$$x_i = \frac{<v, v_i>}{<v_i, v_i>}.$$