Definition The function $f : \mathbb{R} \to [0, \infty)$ is Lebesgue integrable if (it is measurable and) its integral is finite.† The set of integrable functions is denoted by $L^1$, $L^1$, or $L$.

The three basic convergence theorems for Lebesgue integrals are the Monotone Convergence Theorem, the Dominated Convergence Theorem, and Fatou’s Lemma. Their proofs are easy if you look at the right undergraph pictures. We write $f_n \to f$ a.e. to indicate that $\lim_{n \to \infty} f_n(x) = f(x)$ for almost every $x$, i.e., for all $x$ not belonging to some zero set.‡ (See Chapter 3 for previous use of the phrase “almost every” in connection with Riemann integrability.) However, we often abuse the notation by dropping the “a.e.” for clarity. This is rarely a problem since Lebesgue theory systematically neglects zero sets; as Theorem 5 states, zero sets have no effect on measurability or measure, and thus no effect on integrals.§

27 Monotone Convergence Theorem Assume that $(f_n)$ is a sequence of measurable functions $f_n : \mathbb{R} \to [0, \infty)$ and $f_n \uparrow f$ a.e. as $n \to \infty$. Then

$$\int f_n \uparrow \int f.$$

Proof Obvious from Figure 144.

Definition The completed undergraph of $f : \mathbb{R} \to [0, \infty)$ is

$$\hat{U}f = \{(x, y) \in \mathbb{R} \times [0, \infty) : 0 \leq y \leq f(x)\}.$$

It is the undergraph plus the graph.

28 Proposition $\hat{U}f$ is measurable if and only if $\hat{U}f$ is measurable, and if measurable then their measures are equal.

Proof For $n \in \mathbb{N}$ let $T_{\pm n} : \mathbb{R}^2 \to \mathbb{R}^2$ send $(x, y)$ to $(x, (1 \pm 1/n)y)$. The matrix that represents $T_{\pm n}$ is

$$\begin{bmatrix}
1 & 0 \\
0 & 1 \pm 1/n
\end{bmatrix}.$$

†Thus the integral of a measurable nonnegative function exists even if the function is not integrable. To avoid this abuse of language the word “summable” is sometimes used in place of “integrable” to indicate that $\int f < \infty$.

‡You may also come across the abbreviation “p.p.” for the French presque partout.

§As informal notation one might try decorating the standard symbols “→”, “=”, “∀”, etc. with small zeros indicating “up to a zero set.” Thus $f_n \rightarrow f$ would indicate a.e. convergence, $A \doteq B$ would indicate set equality except for a zero set, $\forall$ would indicate for almost every, and so on. But really, would you benefit very much from formulas like $f_n \rightarrow f \leq g$?