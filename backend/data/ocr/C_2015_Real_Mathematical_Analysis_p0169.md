$r^{th}$-order differentiable and we say that $f$ is of class $C^r$. If $f$ is smooth then by the preceding corollary it is of class $C^r$ for all finite $r$ and we say that $f$ is of class $C^\infty$. To round out the notation we say that a continuous function is of class $C^0$.

Thinking of $C^r$ as the set of functions of class $C^r$, we have the regularity hierarchy

$$C^0 \supset C^1 \supset \cdots \supset \bigcap_{r \in \mathbb{N}} C^r = C^\infty.$$

Each inclusion $C^r \supset C^{r+1}$ is proper. There exist continuous functions that are not of class $C^1$, $C^1$ functions that are not of class $C^2$, and so on. For example,

$$f(x) = |x| \quad \text{is of class } C^0 \text{ but not of class } C^1,$$
$$f(x) = x|x| \quad \text{is of class } C^1 \text{ but not of class } C^2,$$
$$f(x) = |x|^3 \quad \text{is of class } C^2 \text{ but not of class } C^3,$$

$\ldots$

Analytic Functions

A function that can be expressed locally as a convergent power series is analytic. More precisely, the function $f : (a, b) \to \mathbb{R}$ is analytic if for each $x \in (a, b)$, there exist a power series

$$\sum a_r h^r$$

and a $\delta > 0$ such that if $|h| < \delta$ then the series converges and

$$f(x + h) = \sum_{r=0}^{\infty} a_r h^r.$$

The concept of series convergence will be discussed further in Section 3 and Chapter 4. Among other things we show in Section 2 of Chapter 4 that analytic functions are smooth, and if $f(x + h) = \sum a_r h^r$ then

$$f^{(r)}(x) = r! a_r.$$

This gives uniqueness of the power series expression of a function: if two power series express the same function $f$ at $x$ then they have identical coefficients, namely $f^{(r)}(x)/r!$. See Exercise 4.38 for a stronger type of uniqueness, namely the identity theorem for analytic functions.

We write $C^\omega$ for the class of analytic functions.