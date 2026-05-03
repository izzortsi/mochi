Nesse caso, escrevemos também

$$\lim_{n \to \infty} x_n = x, \text{ ou, simplesmente, } x_n \to x.$$

**Exercício 9.7** Sejam V um espaço vetorial com produto interno e X um subconjunto de V. Mostre que são equivalentes:

1. X é fechado.
2. Se $(x_n)_{n \in \mathbb{N}}$ é uma sequência de pontos de X e $x_n \to x$, então $x \in X$.

**Definição:** Seja V um espaço vetorial com produto interno. Uma sequência $(x_n)_{n \in \mathbb{N}}$ é dita de Cauchy se

$$\forall \varepsilon > 0 \exists n_\varepsilon \in \mathbb{N} \mid m, n > n_\varepsilon \Rightarrow |x_n - x_m| < \varepsilon.$$

**Exercício 9.8** Mostre que em $\mathbb{R}^n$, com o produto interno canônico $(\langle x, y \rangle = x_1y_1 + \cdots + x_ny_n)$, toda sequência de Cauchy converge.

**Exercício 9.9** Seja V um espaço vetorial de dimensão finite com produto interno. Mostre que, em V, toda sequência de Cauchy converge. Sugestão: use uma base ortonormal para reduzir tudo a coordenadas. Aí use, claro, o fato de que em $\mathbb{R}$ toda sequência de Cauchy converge.

**Definição:** Se $\mathbf{V} = \mathbb{R}^n$ e o subconjunto $K$ de V é convexo e fechado, a **projeção** sobre $K$ do vetor $\mathbf{v}$ é o elemento $p_K(\vec{v})$ de $K$ dado por

$$|\mathbf{v} - p_k(\mathbf{v})| \leq |\mathbf{v} - \mathbf{w}| \forall \mathbf{w} \in K.$$

**Exercício 9.10** Prove: