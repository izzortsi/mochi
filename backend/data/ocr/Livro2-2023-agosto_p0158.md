Observação 1: Dos lemas 1 e 2 acima, segue que duas formas $p$ lineares alternadas $\omega$ e $\eta$ são iguales se

$$\omega(e_J) = \eta(e_J) \forall J \in \mathcal{J}.$$

Em particular, se $V$ é de dimensão $n$ e $e_1, \ldots, e_n$ formam base de $V$, então a forma $n$ linear alternada $\omega$ é identicamente nula se, e somente se, $\omega(e_1, \ldots, e_n) = 0$.

Lema 3: Seja $\mathbf{V}$ um espaço vetorial, real ou complexo. Se $\omega$ é $p$-linear e $\omega_A$ é definida por

$$\omega_A(v_1, \ldots, v_p) = \sum_{\sigma \in S_p} sgn\sigma \omega(v_{\sigma_1}, \ldots, v_{\sigma_p})$$

então $\omega_A$ é $p$-linear e alternada.

Demonstração: Basta notar que trocar a ordem dos vetores $v_i$ e $v_j$ equivale a aplicar a transposição $\tau$ que troca $i$ com $j$ (note que $sgn\tau = -1$). Ora, dados $v_1, \ldots, v_i, \ldots, v_j, \ldots, v_p$ em $\mathbf{V}$, temos, para cada $\tau$ em $S_p$,

$$\omega(v_{\tau_1}, \ldots, v_{\tau_p}) = \sum_{\sigma \in S_p} sgn\sigma \omega(v_{(\tau\sigma)_1}, \ldots, v_{(\tau\sigma)_p}) =$$

$$= -\sum_{\sigma \in S_p} sgn(\tau\sigma) \omega(v_{(\tau\sigma)_1}, \ldots, v_{(\tau\sigma)_p}) = -\omega(v_{\sigma_1}, \ldots, v_{\sigma_p})$$

(note que, para $\tau$ fixo, quando $\sigma$ percorre $S_p$, o mesmo ocorre com $\tau\sigma$).

Observação 2: Note que, se $\omega$ é $p$-linear alternada, então, dos lemas 2 e 3, segue que $\omega_A = p! \omega$.

Passemos, finalmente, à definição do determinante (numa primeira versão, como uma forma $n$-linear alternada). Fixando uma base de $\mathbf{V}$, cujos elementos designaremos por $e_1, \ldots, e_n$, podemos identificar $\mathbf{V}$ com $K^n$ ($K = \mathbb{R}$ ou $\mathbb{C}$, conforme o caso). Cada elemento $v$ de $\mathbf{V}$ pode, pois, ser identificado com uma $n$-upla $(v_1, \ldots, v_n)$ de $K^n$. Assim, basta-nos definir o determinante em $\mathbb{R}^n$ ou $\mathbb{C}^n$. Comecemos definindo uma forma $n$-linear

$$\delta_n : (K^n)^n \longrightarrow K$$

$$(v_1, \ldots, v_n) \longmapsto v_{11}v_{22}\ldots v_{nn},$$

entendido que

$$v_j = \begin{pmatrix} v_{1j} \\ \vdots \\ v_{nj} \end{pmatrix}.$$

Exercício 18.23 Note que, tomando a matriz $n \times n$ $[v_{ij}]$, a forma $\delta_n$ calcula o produto dos elementos da diagonal principal.

Exercício 18.24 Mostre que, se $J \in \{1, \ldots, n\}^n$, então $\delta_n(e_J) = 1$, se $J = (1, 2, \ldots, n)$ e $\delta_n(e_J) = 0$, se $J \neq (1, 2, \ldots, n)$.

Definição: A forma $n$-linear alternada $det_n$, definida em $\mathbb{R}^n$ ou $\mathbb{C}^n$, seguindo o lema 3, por