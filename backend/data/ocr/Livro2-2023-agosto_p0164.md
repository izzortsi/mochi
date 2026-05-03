determinante. Logo, se tomarmos $[b_{ij}] = [\tilde{a}_{ij}]$, teremos $M_{ij}$. Isto nos dá

$$det_n(e_i, a_2, \ldots, a_n) = (-1)^{i-1}M_{ij} = (-1)^{i+1}M_{ij},$$

Nossa fórmula está provada, para $j = 1$. Para $j$ qualquer, basta notar que, trazendo para a extrema esquerda a coluna $j$, estaremos efetuando $j - 1$ transposições, de modo que

$$\begin{vmatrix}
a_{11} & \ldots & \ldots & a_{1n} \\
\vdots & \vdots & \vdots & \vdots \\
a_{i1} & \ldots & \ldots & a_{in} \\
\vdots & \vdots & \vdots & \vdots \\
a_{n1} & \ldots & \ldots & a_{nn}
\end{vmatrix} = (-1)^{j-1}\begin{vmatrix}
a_{1j} & a_{11} & \ldots & a_{1n} \\
\vdots & \vdots & \vdots & \vdots \\
a_{ij} & a_{i1} & \ldots & a_{in} \\
\vdots & \vdots & \vdots & \vdots \\
a_{nj} & a_{n1} & \ldots & a_{nn}
\end{vmatrix}$$

Aplicando ao termo da direita a fórmula dos cofatores para a primeira coluna, já demonstrada, obtemos a fórmula geral.

18.8 Orientação

Definição: Diremos que duas bases ordenadas

$$\alpha = (u_1, \ldots, u_n) \quad e$$
$$\beta = (v_1, \ldots, v_n)$$

de $\mathbb{R}^n$ têm a mesma orientação se existem funções $f_1, \ldots, f_n : [0, 1] \longrightarrow \mathbf{V}$ tais que:

(i) $f_i$ é contínua $\forall i = 1 \ldots n$;
(ii) $f_i(0) = u_i$, $f_i(1) = v_i \forall i = 1 \ldots n$;
(iii) $f_1(t), \ldots, f_n(t)$ são linearmente independentes $\forall t \in [0, 1]$.

Observação: O leitor, provavelmente, há de se perguntar o que significa dizer que determinada função $g : I \rightarrow \mathbb{R}^n$ é contínua. Para feitos de consumo imediato, diremos que $g$ é contínua se, escrevendo $g(t) = (g_1(t), \ldots, g_n(t))$, cada uma das $g_j : I \rightarrow \mathbb{R}$ é contínua.

Exercício 18.27 Fixe em $\mathbb{R}^n$ o produto interno canônico,

$$\langle u, v \rangle = \sum_{j=1}^{n} u_j v_j,$$

e defina a norma de $u$ por $|u| = \sqrt{\langle u, u \rangle}$. Mostre que $g : I \rightarrow \mathbb{R}^n$ é contínua em $t_o$ se, e somente se,

$$\lim_{t \rightarrow t_o} |g(t) - g(t_o)| = 0.$$

Exercício 18.28 Mostre que "ter a mesma orientação" é uma relação de equivalência no conjunto das bases de $\mathbb{R}^n$.