Lembramos que a transformação linear $T$ é um **isomorfismo** se é bijetiva, o que equivale a dizer que a imagem por $T$ de qualquer base de $V$.

**Proposição:** Suponhamos que a transformação linear $T : V \rightarrow V$ seja um isomorfismo e que as bases $(\vec{u}_1, \vec{v}_1, \vec{w}_1)$ e $(\vec{u}_2, \vec{v}_2, \vec{w}_2)$ tenham a mesma orientação (isto é, $det(\vec{u}_1, \vec{v}_1, \vec{w}_1)$ e $det(\vec{u}_2, \vec{v}_2, \vec{w}_2)$ tenham o mesmo sinal). Então $(T\vec{u}_1, T\vec{v}_1, T\vec{w}_1)$ e $(T\vec{u}_2, T\vec{v}_2, T\vec{w}_2)$ têm a mesma orientação (ou seja, o sinal de $det(T\vec{u}_1, T\vec{v}_1, T\vec{w}_1)$ e $det(T\vec{u}_2, T\vec{v}_2, T\vec{w}_2)$ é o mesmo).

Demonstração: Se $(\vec{u}_1, \vec{v}_1, \vec{w}_1)$ $(\vec{u}_2, \vec{v}_2, \vec{w}_2)$ têm a mesma orientação, podemos fazer uma deformação $(\vec{\epsilon}_1(t), \vec{\epsilon}_2(t), \vec{\epsilon}_3(t))$, $t \in [a,b]$, começando em $(\vec{u}_1, \vec{v}_1, \vec{w}_1)$ e terminando em $(\vec{u}_2, \vec{v}_2, \vec{w}_2)$, de forma que, para todo $t$ em $[a,b]$, $(\vec{\epsilon}_1(t), \vec{\epsilon}_2(t), \vec{\epsilon}_3(t))$ é uma base. Mas, então, $(T\vec{\epsilon}_1(t), T\vec{\epsilon}_2(t), T\vec{\epsilon}_3(t))$, $t \in [a,b]$ é uma deformação começando em $(T\vec{u}_1, T\vec{v}_1, T\vec{w}_1)$ e terminando em $(T\vec{u}_2, T\vec{v}_2, T\vec{w}_2)$ (note que, como cada $\vec{\epsilon}_i(t)$ é contínua, as correspondentes $T\vec{\epsilon}_i(t)$ também são continuas; além disso, como acabamos de observar, o fato de ser $T$ um isomorfismo garante que $(T\vec{\epsilon}_1(t), T\vec{\epsilon}_2(t), T\vec{\epsilon}_3(t))$ é uma base, para todo $t$ em $[a,b]$).

Agora já estamos suficientemente motivados para definir o **determinante de uma transformação linear**.

**Definição:** Se $T : V \rightarrow V$ é uma transformação linear e $(\vec{u}, \vec{v}, \vec{w})$ é uma base qualquer de $V$, o **determinante** de $T$ é a razão entre $det(T\vec{u}, T\vec{v}, T\vec{w})$ e $det(\vec{u}, \vec{v}, \vec{w})$. Notação: $det(T)$.

**Observação:** Note que, pela Proposição 2 da página 80, $det(\vec{u}, \vec{v}, \vec{w})$ é não nulo sempre que $\vec{u}, \vec{v}, \vec{w}$ são linearmente independentes.

**Proposição:** Se $S$ e $T$ são transformações lineares de $V$ em $V$, então $det(ST) = det(S)det(T)$.

Demonstração: Suponhamos, primeiro, que $T$ seja um isomorfismo. Neste caso, se $(\vec{u}, \vec{v}, \vec{w})$ é uma base qualquer de $V$, $(T\vec{u}, T\vec{v}, T\vec{w})$ será, também, base de $V$. Logo,

$$\frac{det(ST\vec{u}, ST\vec{v}, ST\vec{w})}{det(\vec{u}, \vec{v}, \vec{w})} = \frac{det(S(T\vec{u}), S(T\vec{v}), S(T\vec{w}))}{det(T\vec{u}, T\vec{v}, T\vec{w})} \frac{det(T\vec{u}, T\vec{v}, T\vec{w})}{det(\vec{u}, \vec{v}, \vec{w})},$$

e o resultado vale. Caso $T$ não seja isomorfismo, teremos $det(T) = 0$ e, como $ST$ também não será isomorfismo, $det(ST) = 0$. Logo, independente de como seja $S$, teremos $det(ST) = det(S)det(T)$.

Deixamos como exercícios um conjunto de propriedades importantes do determinante.

**Exercício 18.2** Mostre que $det(T) = 0$ se, e somente se, $T$ não é isomorfismo.

**Exercício 18.3** Mostre que, se $T$ é isomorfismo, então $det(T^{-1}) = (det(T))^{-1}$.

**Exercício 18.4** Seja $(T)_\beta$ a matriz da transformação $T$ na base canônica. Mostre que $det(T) = det(T)_\beta$.

**Exercício 18.5** Sejam $A$ e $B$ duas matrizes $3 \times 3$. Mostre que $det(A) = det(B)$.