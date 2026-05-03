$$\langle Tu, Tv \rangle = \langle u, v \rangle \forall u, v \in V_1.$$

Então $T$ é injectiva.

Demonstração: Basta provar que $u \neq 0 \Rightarrow Tu \neq 0$, o que equivale a $|Tu| \neq 0$. Mas isso é claramente verdade, já que $u \neq 0 \Rightarrow 0 \neq \langle u, u \rangle = \langle Tu, Tu \rangle \Rightarrow |Tu| \neq 0$.

Observemos que preservar produto interno implica em preservar distâncias e ângulos. Na demonstração da proposição anterior, porém, utilizamos apenas a preservação das distâncias.

**Proposição:** Sejam $V_1$ e $V_2$ espaços vetoriais com produto interno $e: V_1 \rightarrow V_2$ uma transformação linear tal que $|Tu| = |u|$ para todo $u$ em $V_1$ (ou seja: $T$ preserva a norma). Então $T$ preserva o produto interno, isto é:

$$\langle Tu, Tv \rangle = \langle u, v \rangle \forall u, v \in V_1.$$

Demonstração: Da hipótese, temos, para quaisquer $u$ e $v$ em $V_1$, $|T(u + v)| = |u + v|$. Daí vem

$$|u|^2 + |v|^2 + 2\langle u, v \rangle = |u + v|^2 = |Tu + Tv|^2 = |Tu|^2 + |Tv|^2 + 2\langle Tu, Tv \rangle.$$

Como $|u|^2 = |Tu|^2$ e $|v|^2 = |Tv|^2$, segue $\langle u, v \rangle = \langle Tu, Tv \rangle$.

Tentemos ir um pouco além: vamos manter a hipótese de preservação das distâncias mas retirar a linearidade.

**Exercício 12.28** Note que, sem a hipótese de linearidade, a preservação das distâncias não é garantida se supusermos apenas a preservação da norma.

**Exercício 12.29** Sejam $V_1$ e $V_2$ espaços vetoriais com produto interno $e: V_1 \rightarrow V_2$ uma transformação preservando distâncias, isto é: $|f(u) - f(v)| = |u - v| \forall u, v \in V_1$. Mostre, com um exemplo (tipo $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$), que não necessariamente tems $f$ linear.

**Exercício 12.30** Seja $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ preservando distâncias e tal que $f(\vec{0}) = \vec{0}$. Use argumentos geométricos para provar que $f$ é linear. Mostre que o mesmo vale para $f: \mathbb{R}^2 \rightarrow \mathbb{R}^3$.

**Exercício 12.31** Refaça a demonstração do exercício anterior usando apenas argumentos algébricos, isto é: $\mathbb{R}^2$ é um espaço vetorial real, com produto interno, de dimensão 2, o mesmo valendo para $\mathbb{R}^3$, com dimensão 3).

Os exercícios acima nos dão motivos de sobra para acreditar na veracidade da proposição a seguir. Se você não resolveu os exercícios, a proposição pode ser vista como uma solução elegante para o último, sem a limitação a $R^2$ ou $R^3$.

**Proposição:** Sejam $V_1$ e $V_2$ espaços vetoriais reais com produto interno $e: V_1 \rightarrow V_2$ uma função preservando distâncias (isto é: $|f(u) - f(v)| = |u - v| \forall u, v \in V_1$). Suponhamos que, além disso, $f(0) = 0$. Então $f$ é uma preservação linear.

Demonstração: Sejam $u, v$ em $V_1$ e $t$ em $\mathbb{R}$. Provemos que $f(u + tv) = f(u) + tf(v)$.