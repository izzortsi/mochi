e fazer as contas.

**Escólio 1:** Segue diretamente da demonstração que, se $\omega$ é uma outra forma trilinear alternada em $V$ (isto é, $\omega$ associa um número a cada terno ordenado $(\vec{u}, \vec{v}, \vec{w})$ de vetores de $V$, satisfazendo as propriedades $(i)$ e $(ii)$, mas não necessariamente a propriedade $(iii)$), então, obrigatoriariamente,

$$\omega(\vec{u}, \vec{v}, \vec{w}) = \omega(a_{11}\vec{e}_1 + a_{21}\vec{e}_2 + a_{31}\vec{e}_3, a_{12}\vec{e}_1 + a_{22}\vec{e}_2 + a_{32}\vec{e}_3, a_{13}\vec{e}_1 + a_{23}\vec{e}_2 + a_{33}\vec{e}_3) = (a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} + a_{12}a_{23}a_{31} - a_{12}a_{21}a_{33} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31})\omega(\vec{e}_1, \vec{e}_2, \vec{e}_3).$$

Isto merece ser chamado de Proposição.

**Proposição 1:** Para cada forma trilinear alternada $\omega$ em $V$ existe um número $\alpha$ (que só depende de $\omega$ e é dado por $\alpha = \omega(\vec{e}_1, \vec{e}_2, \vec{e}_3)) tal que

$$\omega(\vec{u}, \vec{v}, \vec{w}) = \alpha \det(\vec{u}, \vec{v}, \vec{w}), \quad \forall(\vec{u}, \vec{v}, \vec{w}) \in V \times V \times V.$$

**Escólio 2:** Podemos inverter o raciocínio. Suponhamos que $\vec{u}, \vec{v}$ e $\vec{w}$ sejam linearmente independentes e, portanto, formem uma base de $V$. Consideremos uma forma trilinear alternada $\omega$. Como acabamos de ver, $\omega$ é determinada por $\omega(\vec{e}_1, \vec{e}_2, \vec{e}_3)$. Por outro lado, podemos,visto que $\vec{u}, \vec{v}$ e $\vec{w}$ formam base para $V$, escrever $\vec{e}_1, \vec{e}_2$ e $\vec{e}_3$ como combinações lineares de $\vec{u}, \vec{v}$ e $\vec{w}$:

$$\vec{e}_1 = b_{11}\vec{u} + b_{21}\vec{v} + b_{31}\vec{w},$$
$$\vec{e}_2 = b_{12}\vec{u} + b_{22}\vec{v} + b_{32}\vec{w},$$
$$\vec{e}_3 = b_{13}\vec{u} + b_{23}\vec{v} + b_{33}\vec{w}.$$

Desenvolvendo $\omega(\vec{e}_1, \vec{e}_2, \vec{e}_3)$, obtemos, exatamente como na Proposição,

$$\omega(\vec{e}_1, \vec{e}_2, \vec{e}_3) = (b_{11}b_{22}b_{33} - b_{11}b_{23}b_{32} + b_{12}b_{23}b_{31} - b_{12}b_{21}b_{33} + b_{13}b_{21}b_{32} - b_{13}b_{22}b_{31})\omega(\vec{u}, \vec{v}, \vec{w}).$$

Assim, se $\omega(\vec{u}, \vec{v}, \vec{w}) = 0$, $\omega$ será identicamente nula. Em particular, fazendo $\omega = det$, podemos concluir que

**Proposição 2:** $\det(\vec{u}, \vec{v}, \vec{w}) \neq 0$ se, e somente se, $\vec{u}, \vec{v}$ e $\vec{w}$ forem linearmente independentes.

O número

$$a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} + a_{12}a_{23}a_{31} - a_{12}a_{21}a_{33} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31}$$

é, usualmente, notado por

$$\begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}$$