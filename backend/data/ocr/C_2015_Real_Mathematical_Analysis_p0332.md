Let $\epsilon > 0$ be given. Choose a grid $G$ on $R \supset S$ with mesh so small that the rectangles $R$ of $G$ satisfy

$$|S| - \epsilon \leq \sum_{R \subset S} |R| \leq \sum_{R \cap S \neq \emptyset} |R| \leq |S| + \epsilon.$$

The interiors of the inner rectangles – those with $R \subset S$ – are disjoint, and therefore for each $z \in \mathbb{R}^2$ we have

$$\sum_{R \subset S} \chi_{\text{int } R}(z) \leq \chi_S(z).$$

The same is true after we apply $E$, namely

$$\sum_{R \subset S} \chi_{\text{int } (E(R))}(z) \leq \chi_E(S)(z).$$

Linearity and monotonicity of the integral, and Riemann measurability of the sets $E(R)$ imply that

$$\sum_{R \subset S} |E(R)| = \sum_{R \subset S} \int \chi_{\text{int } (E(R))} = \sum_{R \subset S} \int \chi_{\text{int } (E(R))} \leq \int \chi_E(S).$$

Similarly,

$$\chi_E(S)(z) \leq \sum_{R \cap S \neq \emptyset} \chi_E(R)(z)$$

which implies that

$$\int \chi_E(S) \leq \sum_{R \cap S \neq \emptyset} \int \chi_E(R) = \sum_{R \cap S \neq \emptyset} \int \chi_E(R) = \sum_{R \cap S \neq \emptyset} |E(R)|.$$

By (10) and (12), (13) and (14) become

$$|\det E|(|S| - \epsilon) \leq |\det E| \sum_{R \subset S} |R|$$

$$\leq \int \chi_E(S) \leq \int \chi_E(S) \leq |\det E| \sum_{R \cap S \neq \emptyset} |R|$$

$$\leq |\det E|(|S| + \epsilon).$$

Since these upper and lower integrals do not depend on $\epsilon$ and $\epsilon$ is arbitrarily small, they equal the common value $|\det E||S|$, which completes the proof of (11).

The determinant of a matrix product is the product of the determinants. Since the matrix of $T$ is the product of elementary matrices, $E_1 \cdots E_k$, (11) implies that if $S$ is Riemann measurable then so is $T(S)$ and

$$|T(S)| = |E_1 \cdots E_k(S)|$$

$$= |\det E_1| \cdots |\det E_k||S| = |\det T||S|.$$