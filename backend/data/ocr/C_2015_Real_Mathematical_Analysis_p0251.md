5 Contractions and ODEs

Fixed-point theorems are of great use in the applications of analysis, including the basic theory of vector calculus such as the general implicit function theorem. If $f : M \to M$ and for some $p \in M$ we have $f(p) = p$ then $p$ is a **fixed-point** of $f$.

When must $f$ have a fixed-point? This question has many answers, and the two most famous are given in the next two theorems.

Let $M$ be a metric space. A **contraction** of $M$ is a mapping $f : M \to M$ such that for some constant $k < 1$ and all $x, y \in M$ we have

$$d(fx, fy) \leq kd(x, y).$$

24 Banach Contraction Principle Suppose that $f : M \to M$ is a contraction and the metric space $M$ is complete. Then $f$ has a unique fixed-point $p$ and for any $x \in M$, the iterate$^\dagger f^n(x) = f \circ f \circ \cdots \circ f(x)$ converges to $p$ as $n \to \infty$.

Brouwer Fixed-Point Theorem Suppose that $f : B^m \to B^m$ is continuous where $B^m$ is the closed unit ball in $\mathbb{R}^m$. Then $f$ has a fixed-point $p \in B^m$.

The proof of the first result is fairly easy, the second not. See Figure 100 to picture a contraction and Section 10 of Chapter 5 for a proof of the Brouwer theorem.

Proof #1 of the Banach Contraction Principle Beautiful, simple, and dynamical! See Figure 100. Choose any $x_0 \in M$ and define $x_n = f^n(x_0)$. We claim that for all $n \in \mathbb{N}$ we have

$$d(x_n, x_{n+1}) \leq k^n d(x_0, x_1).$$

This is easy:

$$d(x_n, x_{n+1}) = d(f(x_{n-1}), f(x_n)) \leq kd(x_{n-1}, x_n) \leq k^2 d(x_{n-2}, x_{n-1})$$

$$\leq \ldots \leq k^n d(x_0, x_1).$$

From this and a geometric series type of estimate, it follows that the sequence $(x_n)$ is Cauchy. For let $\epsilon > 0$ be given. Choose $N$ large enough that

$$\frac{k^N}{1-k} d(x_0, x_1) < \epsilon.$$

$^\dagger$Note the abuse of notation. In the proof of the Stone-Weierstrass Theorem, $f^n(x)$ denotes the $n^{\text{th}}$ power of the real number $f(x)$, while here $f^n$ denotes the composition of $f$ with itself $n$ times. Deal with it!