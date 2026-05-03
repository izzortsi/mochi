Capítulo 4

O que é uma base?

A base canônica, $\{\vec{e}_1, \vec{e}_2, \vec{e}_3\}$ nos permite estabelecer uma bijeção entre o conjunto dos vetores do espaço e o conjunto $\mathbb{R}^3$ dos ternos ordenados de números reais. Como no caso do plano, essa bijeção preserva as operações: se os vetores $\vec{u}$ e $\vec{v}$ são representados, respectivamente, pelos ternos $(x_1, x_2, x_3)$ e $(y_1, y_2, y_3)$, então o vetor $\vec{u} + \vec{v}$ é representado por $(x_1 + y_1, x_2 + y_2, x_3 + y_3)$; se $t$ é um escalar, $t\vec{u}$ é representado por $(tx_1, tx_2, tx_3)$.

Cabem, naturalmente, as perguntas: sob que condições outros três vetores (mesmo que não formem uma base canônica), $\vec{v}_1, \vec{v}_2$ e $\vec{v}_3$, podem desempenhar o mesmo papel? o número 3 é mandatório, ou poderíamos conseguir a mesma coisa com 2, ou quem sabe 4 vetores? poderíamos, assim, estabelecer outras bijeções, entre o conjunto dos vetores do espaço e $\mathbb{R}^2$, ou $\mathbb{R}^4$, preservando as operações?

Como de hábito, vamos designar o conjunto dos vetores do espaço por $V$. Mas tentemos tratar a questão de forma abstrata, *esquecendo* a natureza de $V$ (e o número cabalístico 3, mesmo que, depois, voltemos a ele). Mais precisamente, pensemos $V$ apenas como um conjunto (de vetores), no qual estão definidas duas operações: dados dois vetores $\vec{u}$ e $\vec{v}$ de $V$, está definida sua **soma**, $\vec{u} + \vec{v}$, que é um vetor de $V$; da mesma forma, dados um vetor $\vec{v}$ de $V$ e um número real $t$, está definido o **produto** de $t$ por $\vec{v}$, $t\vec{v}$, que é um vetor de $V$. As operações assim definidas satisfazem as propriedades:

(1) $\vec{u} + (\vec{v} + \vec{w}) = (\vec{u} + \vec{v}) + \vec{w}$
(2) $\vec{u} + \vec{v} = \vec{v} + \vec{u}$
(3) $\vec{u} + \vec{0} = \vec{u}$
(4) $\vec{u} + (-\vec{u}) = \vec{0}$
(5) $t(\vec{u} + \vec{v}) = t\vec{u} + t\vec{v}$
(6) $(s + t)\vec{u} = s\vec{u} + t\vec{u}$
(7) $s(t\vec{u}) = (st)\vec{u}$
(8) $1\vec{u} = \vec{u}$

(isto é: as propriedades (1) a (8) valem para quaisquer vetores $\vec{u}, \vec{v}$ e $\vec{w}$, e para quaisquer números $s$ e $t$).

**Exercício 4.1** Observe que existem outros possíveis espaços, com as oito propriedades acima, além do que temos considerado: por exemplo, os elementos de $\mathbb{R}^n$, se somados e multiplicados por