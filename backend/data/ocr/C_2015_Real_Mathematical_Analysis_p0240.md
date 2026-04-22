Density means that for each $f \in C^0$ and each $\epsilon > 0$ there is a polynomial function $p(x)$ such that for all $x \in [a, b]$,

$$|f(x) - p(x)| < \epsilon.$$

There are several proofs of this theorem, and although they appear quite different from each other, they share a common thread: The approximating function is built from $f$ by sampling the values of $f$ and recombining them in some clever way. It is no loss of generality to assume that the interval $[a, b]$ is $[0, 1]$. We do so.

**Proof #1** For each $n \in \mathbb{N}$, consider the sum

$$p_n(x) = \sum_{k=0}^{n} \binom{n}{k} c_k x^k (1-x)^{n-k},$$

where $c_k = f(k/n)$ and $\binom{n}{k}$ is the binomial coefficient $n!/k!(n-k)!$. Clearly $p_n$ is a polynomial. It is called a Bernstein polynomial. We claim that the $n^{\text{th}}$ Bernstein polynomial converges uniformly to $f$ as $n \to \infty$. The proof relies on two formulas about how the functions

$$r_k(x) = \binom{n}{k} x^k (1-x)^{n-k}$$

whose graphs are shown in Figure 94 behave. They are

(2) $$\sum_{k=0}^{n} r_k(x) = 1$$

(3) $$\sum_{k=0}^{n} (k-nx)^2 r_k(x) = nx(1-x).$$

In terms of the functions $r_k$ we write

$$p_n(x) = \sum_{k=0}^{n} c_k r_k(x) \quad f(x) = \sum_{k=0}^{n} f(x) r_k(x).$$

Then we divide the sum $p_n - f = \sum(c_k - f)r_k$ into the terms where $k/n$ is near $x$, and other terms where $k/n$ is far from $x$. More precisely, given $\epsilon > 0$ we use uniform continuity of $f$ on $[0, 1]$ to find $\delta > 0$ such that $|t-s| < \delta$ implies $|f(t) - f(s)| < \epsilon/2$. Then we set

$$K_1 = \{k \in \{0, \ldots, n\} : \left| \frac{k}{n} - x \right| < \delta\} \text{ and } K_2 = \{0, \ldots, n\} \setminus K_1.$$