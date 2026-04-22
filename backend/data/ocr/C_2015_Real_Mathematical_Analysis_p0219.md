57. Construct a function $f: [-1, 1] \to \mathbb{R}$ such that

$$\lim_{r \to 0} \left( \int_{-1}^{-r} f(x) \, dx + \int_{r}^{1} f(x) \, dx \right)$$

exists (and is a finite real number) but the improper integral $\int_{-1}^{1} f(x) \, dx$ does not exist. Do the same for a function $g: \mathbb{R} \to \mathbb{R}$ such that

$$\lim_{R \to \infty} \int_{-R}^{R} f(x) \, dx$$

exists but the improper integral $\int_{-\infty}^{\infty} g(x) \, dx$ fails to exist. [Hint: The functions are not symmetric across 0.]

58. Let $f: [0, \infty) \to [0, \infty)$ and $\sum a_k$ be given. Assume that for all sufficiently large $k$ and all $x \in [k, k+1)$ we have $f(x) \leq a_k$. Prove that divergence of the improper integral $\int_{0}^{\infty} f(x) \, dx$ implies divergence of $\sum a_k$.

59. Prove that if $a_n \geq 0$ and $\sum a_n$ converges then $\sum (\sqrt{a_n})/n$ converges.

60. (a) If $\sum a_n$ converges and $(b_n)$ is monotonic and bounded, prove that $\sum a_n b_n$ converges.

(b) If the monotonicity condition is dropped, or replaced by the assumption that $\lim_{n \to \infty} b_n = 0$, find a counterexample to convergence of $\sum a_n b_n$.

61. Find an example of a series of positive terms that converges despite the fact that $\limsup_{n \to \infty} |a_{n+1}/a_n| = \infty$. Infer that $\rho$ cannot replace $\lambda$ in the divergence half of the ratio test.

62. Prove that if the terms of a sequence decrease monotonically, $a_1 \geq a_2 \geq \ldots$, and converge to 0 then the series $\sum a_k$ converges if and only if the associated dyadic series

$$a_1 + 2a_2 + 4a_4 + 8a_8 + \cdots = \sum 2^k a_{2^k}$$

converges. (I call this the **block test** because it groups the terms of the series in blocks of length $2^{k-1}$.)

63. Prove that $\sum 1/k(\log(k))^p$ converges when $p > 1$ and diverges when $p \leq 1$. Here $k = 2, 3, \ldots$. [Hint: Integral test or block test.]

64. Concoct a series $\sum a_k$ such that $(-1)^k a_k > 0$, $a_k \to 0$, but the series diverges.

65. Compare the root and ratio tests.

(a) Show that if a series has exponential growth rate $\rho$ then it has ratio lim sup $\rho$. Infer that the ratio test is subordinate to the root test.

(b) Concoct a series such that the root test is conclusive but the ratio test is not. Infer that the root test has strictly wider scope than the ratio test.

66. Show that there is no simple comparison test for conditionally convergent series:

(a) Find two series $\sum a_k$ and $\sum b_k$ such that $\sum b_k$ converges conditionally, $a_k/b_k \to 1$ as $k \to \infty$, and $\sum a_k$ diverges.