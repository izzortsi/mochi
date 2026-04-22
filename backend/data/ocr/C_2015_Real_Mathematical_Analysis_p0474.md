84. Why does Lusin’s Theorem imply that if $f : B \to \mathbb{R}$ is measurable and $B \subset \mathbb{R}^n$ is bounded then $f$ is nearly uniformly continuous? What if $B$ is unbounded but has finite measure?

*85. Show that nearly uniform convergence is transitive in the following sense. Assume that $f_n$ converges nearly uniformly to $f$ as $n \to \infty$, and that for each fixed $n$ there is a sequence $f_{n,k}$ which converges nearly uniformly to $f_n$ as $k \to \infty$. (All the functions are measurable and defined on $[ab]$.)

(a) Show that there is a sequence $k(n) \to \infty$ as $n \to \infty$ such that $f_{n,k(n)}$ converges nearly uniformly to $f$ as $n \to \infty$. In symbols

$$\min_{n \to \infty} \min_{k \to \infty} f_{n,k} = f \Rightarrow \min_{n \to \infty} f_{n,k(n)} = f.$$

(b) Why does (a) remain true when almost everywhere convergence replaces nearly uniform convergence? [Hint: The answer is one word.]

(c) Is (a) true when $\mathbb{R}$ replaces $[a,b]$?

(d) Is (b) true when $\mathbb{R}$ replaces $[a,b]$?

86. Consider the continuous functions

$$f_{n,k}(x) = (\cos(\pi n!x))^k$$

for $k, n \in \mathbb{N}$ and $x \in \mathbb{R}$.

(a) Show that for each $x \in \mathbb{R}$,

$$\lim_{n \to \infty} \lim_{k \to \infty} f_{n,k}(x) = \chi_{\mathbb{Q}}(x),$$

the characteristic function of the rationals.

(b) Infer from Exercise 24 in Chapter 3 that there can not exist a sequence $f_{n,k(n)}$ converging everywhere as $n \to \infty$.

(c) Interpret (b) to say that everywhere convergence can not replace almost everywhere convergence or nearly uniform convergence in Exercise 85.

87. (a) Prove that the measure-theoretic boundary of a measurable set $E$ is contained in its topological boundary, $\partial_m(E) \subset \partial E$.

(b) Construct an example of a continuous function $f : [a,b] \to [0,M]$ such that $\partial(\mathcal{U}f) \neq \partial_m(\mathcal{U}f)$. [Hint: A picture is worth a thousand formulas.]

88. Generalize Theorem 68 to functions of several variables. That is, prove that a bounded nonnegative function defined on a box in $n$-space is Riemann integrable if and only if the topological boundary of its undergraph is a zero set.