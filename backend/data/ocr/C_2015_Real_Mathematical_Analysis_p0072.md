Proof Let $(q_k)$ be a subsequence of $(p_n)$, $q_k = p_{n_k}$, where $n_1 < n_2 < \ldots$. Assume that $(p_n)$ converges to $p$ in $M$. Given $\epsilon > 0$, there is an $N$ such that for all $n \geq N$ we have $d(p_n, p) < \epsilon$. Since $n_1, n_2, \ldots$ are positive integers we have $k \leq n_k$ for all $k$. Thus, if $k \geq N$ then $n_k \geq N$ and $d(q_k, p) < \epsilon$. Hence $(q_k)$ converges to $p$.

A common way to state Theorem 1 is that limits are unaffected when we pass to a subsequence.

2 Continuity

In linear algebra the objects of interest are linear transformations. In real analysis the objects of interest are functions, especially continuous functions. A function $f$ from the metric space $M$ to the metric space $N$ is just that; $f : M \to N$ and $f$ sends points $p \in M$ to points $fp \in N$. The function maps $M$ to $N$. The way you should think of functions – as devices, not formulas – is discussed in Section 4 of Chapter 1. The most common type of function maps $M$ to $\mathbb{R}$. It is a real-valued function of the variable $p \in M$.

Definition A function $f : M \to N$ is continuous if it preserves sequential convergence: $f$ sends convergent sequences in $M$ to convergent sequences in $N$, limits being sent to limits. That is, for each sequence $(p_n)$ in $M$ which converges to a limit $p$ in $M$, the image sequence $(f(p_n))$ converges to $fp$ in $N$.

Here and in what follows, the notation $fp$ is often used as convenient shorthand for $f(p)$. The metrics on $M$ and $N$ are $d_M$ and $d_N$. We will often refer to either metric as just $d$.

2 Theorem The composite of continuous functions is continuous.

Proof Let $f : M \to N$ and $g : N \to P$ be continuous and assume that

$$\lim_{n \to \infty} p_n = p$$

in $M$. Since $f$ is continuous, $\lim_{n \to \infty} f(p_n) = fp$. Since $g$ is continuous, $\lim_{n \to \infty} g(f(p_n)) = g(fp)$ and therefore $g \circ f : M \to P$ is continuous. See Figure 29 on the next page.

Moral The sequence condition is the easy way to tell at a glance whether a function is continuous.