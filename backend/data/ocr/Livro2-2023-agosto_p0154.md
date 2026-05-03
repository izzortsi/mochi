Exercício 18.10 Suponha que $\omega : \mathbf{V}^n \to \mathbb{R}$ ou $\mathbb{C}$ é linear em cada coordenada. Mostre que as condições (ii) (da definição), (iii) e (iv) (dos exercícios acima) são equivalentes.

De maneira geral, se $\omega : \mathbf{V}^p \to \mathbb{R}$ ou $\mathbb{C}$ é linear em cada coordenada e satisfaz $\omega(v_1, \ldots, v_i, \ldots, v_j, \ldots, v_p) = -\omega(v_1, \ldots, v_j, \ldots, v_i, \ldots, v_p)$ para quaisquer vetores $v_1, \ldots, v_p$ em $\mathbf{V}$, $\omega$ é dita uma forma $p$-linear alternada. Usaremos, para formas de medir volumes, o nome forma $n$-linear alternada, que é mais usual. O espaço das formas $p$-lineares alternadas em $\mathbf{V}$, qualquer que seja $p$ em $\mathbb{N}$, é denotado por $\mathcal{A}_p(\mathbf{V})$.

Exercício 18.11 Mostre que $\mathcal{A}_p(\mathbf{V})$, com as operações $(\omega_1 + \omega_2)(v_1, \ldots, v_p) = \omega_1(v_1, \ldots, v_p) + \omega_2(v_1, \ldots, v_p)$ & $(t\omega)(v_1, \ldots, v_p) = t(\omega(v_1, \ldots, v_p))$, é um espaço vetorial.

Exercício 18.12 Mostre que, se $\omega$ é forma $p$-linear alternada e $p > n$, então $\omega(v_1, \ldots, v_p) = 0$, quaiquer que sejam $v_1, \ldots, v_p$.

Exercício 18.13 Parece razoável que, se dim$\mathbf{V} = n$, então o espaço das formas $n$-lineares alternadas de $\mathbf{V}$ tem dimensão 1?

Exercício 18.14 Sejam $\mathbf{V}$ um espaço vetorial de dimensão $n$ e $\omega$ uma forma $n$-linear alternada em $\mathbf{V}$. Mostre que são equivalentes:
a) $\omega$ é identicamente nula;
b) existe base $v_1, \ldots, v_n$ de $\mathbf{V}$ tal que $\omega(v_1, \ldots, v_n) = 0$;
c) para toda base $v_1, \ldots, v_n$ de $\mathbf{V}$ se tem $\omega(v_1, \ldots, v_n) = 0$.

O exercício acima nos coloca diante de uma questão aparentemente simples mas que merece alguma reflexão: se $\omega$ é uma forma $n$-linear alternada e conhecemos $\omega(v_1, \ldots, v_n)$, então, para qualquer permutação $\sigma$ dos índices $i$, está perfeitamente determinado o valor de $\omega(v_{\sigma_1}, \ldots, v_{\sigma_n})$ (dado, é claro por $\pm \omega(v_1, \ldots, v_n))? A ideia é que podemos, a partir de $v_1, \ldots, v_n$, ir trocando de posição dois vetores de cada vez, até chegarmos à configuração $v_{\sigma_1}, \ldots, v_{\sigma_n}$; a cada troca, muda o sinal de $\omega$. A questão é: existem infinitas maneiras de partir da configuração inicial e chegar à final; será que todas nos darão o mesmo resultado (isto é, o mesmo sinal)?

É hora de darmos uma arrumada na casa...

18.4 Permutações

Definição: Uma permutação do conjunto $X$ é uma bijeção de $X$ em $X$. O conjunto das permutações de $X$ é notado $S(X)$. Se $X = \{1, 2, \ldots, n\}$ $S(X)$ é trocado por $S_n$ (se $\sigma$ pertence a $S_n$, $\sigma(k)$ é notado $\sigma_k$). Usamos chamar de produto a composta de duas permutações.

Entre os elementos de $S_n$, destacaremos as transposições, que são as que mantêm fixos todos os elementos de $\{1, 2, \ldots, n\}$, exceto dois (a mesma definição, a rigor, vale em qualquer $S(X)$). A transposição que troca $i$ e $j$ é designada por $(ij)$. Mais geralmente, dizemos que $\sigma$ em $S(X)$ é um ciclo de ordem $k$, $\infty > k \geq 2$, se existe um subconjunto $A$ de $X$, com exatamente $k$ elementos, tal que:
1. $\sigma(x) = x \lor x \notin A;$