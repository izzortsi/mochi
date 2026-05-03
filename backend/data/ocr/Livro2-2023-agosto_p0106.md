Por enquanto, $V$ é o nosso velho e bom espaço dos vetores flechinhas, que, eventualmente, identificamos a $R^3$.

**Definição:** Uma aplicação $T : V \rightarrow V$ tal que, para quaisquer vetores $\vec{u}$ e $\vec{v}$, e para qualquer escalar $t$, vale $T(\vec{u} + t\vec{v}) = T\vec{u} + tT\vec{v}$ é dita uma transformação linear.

**Exercício 12.1** Mostre que $T : V \rightarrow V$ é uma transformação linear se, e somente se, valem as duas propriedades:

$$(i) \quad T(t\vec{u}) = tT\vec{u} \vee \vec{u} \in V, \ t \in \mathbb{R}$$
$$(ii) \quad T(\vec{u} + \vec{v}) = T\vec{u} + T\vec{v} \vee \vec{u}, \vec{v} \in V.$$

Prove primeiro que $T(\vec{u} + \vec{v}) = T\vec{u} + T\vec{v}$, fazendo $t = 1$, depois prove que $T\vec{0} = \vec{0}$ (veja abaixo); em seguida, para $T(t\vec{u}) = T(\vec{0} + t\vec{u}) = T\vec{0} + tT\vec{u}$

**Exercício 12.2** Mostre que, se $T : V \rightarrow V$ é uma transformação linear, então $T\vec{0} = \vec{0}$ e $T(-\vec{v}) = -T\vec{v} \vee \vec{v} \in V$.

$T\vec{0} = T(\vec{0} + \vec{v}) = T\vec{0} + T\vec{0}$

**Exercício 12.3** Mostre que, se $T : V \rightarrow V$ é uma transformação linear, $\vec{u}$ e $\vec{v}$ são dois vetores fixos, $r$ é a reta dada por $r = \{ \vec{u} + t\vec{v}, t \in \mathbb{R} \}$ e $T\vec{v} \neq \vec{0}$, então $T(r)$ é uma reta.

**Exemplo 1:** Considere o sistema linear

$$\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = y_1 \\
a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = y_2 \\
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = y_3
\end{cases}$$

No lugar de pensar em resolver o sistema, pense nele como uma transformação que, a cada terno ordenado $(x_1, x_2, x_3)$, associa o terno ordenado $(y_1, y_2, y_3)$, definido por $y_1 = a_{11}x_1 + a_{12}x_2 + a_{13}x_3$, $y_2 = a_{21}x_1 + a_{22}x_2 + a_{23}x_3$, $y_3 = a_{31}x_1 + a_{32}x_2 + a_{33}x_3$. Fixe, agora, em $V$, uma base (a canônica, por exemplo). Considere, então que nossa transformação, $T$, leva o vetor $\vec{v}$ no vetor $\vec{w} = T\vec{w}$, da seguinte forma: se $\vec{v} = x_1\vec{e}_1 + x_2\vec{e}_2 + x_3\vec{e}_3$, então $\vec{w} = y_1\vec{e}_1 + y_2\vec{e}_2 + y_3\vec{e}_3$, com $(y_1, y_2, y_3)$ definido como acima.

**Exercício 12.4** Mostre que a transformação que acabamos de definir é linear.

**Exercício 12.5** Mostre que a ideia é boa: se o sistema tiver só duas equações, poderíamos definir uma transformação linear que a cada vetor do espaço associasse um vetor do plano. Da mesma forma, se tivésemos só duas variáveis $(x_1 e x_2)$ e três equações, poderíamos definir uma transformação linear que a cada vetor do plano associasse um do espaço. mais geral mente, podemos considerar que, por trás de cada sistema linear com $m$ equações e $n$ incógnitas, está uma transformação linear do espaço $\mathbb{R}^n$ no espaço $\mathbb{R}^m$.

**Exemplo 2:** Como sabemos, cada vetor $\vec{v}$ de $V$ se escreve, de maneira única, como $\vec{v} = x\vec{e}_1 + y\vec{e}_2 + z\vec{e}_3$. Escolha, arbitrariamente, três vetores, $\vec{e}_1$, $\vec{e}_2$ e $\vec{e}_3$ em $V$. Defina, então, $T : V \rightarrow V$ por

$$x\vec{e}_1 + y\vec{e}_2 + z\vec{e}_3 = \vec{v} \longmapsto T\vec{v} = x\vec{e}_1 + y\vec{e}_2 + z\vec{e}_3.$$