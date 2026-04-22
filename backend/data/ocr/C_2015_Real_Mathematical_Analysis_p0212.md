19. Recall that the oscillation of an arbitrary function $f : [a, b] \to \mathbb{R}$ at $x$ is

$$\text{osc}_x f = \limsup_{t \to x} f(t) - \liminf_{t \to x} f(t)$$

In the proof of the Riemann-Lebesgue Theorem $D_k$ refers to the set of points with oscillation $\geq 1/k$.

(a) Prove that $D_k$ is closed.

(b) Infer that the discontinuity set of $f$ is a countable union of closed sets. (This is called an $F_\sigma$-set.)

(c) Infer from (b) that the set of continuity points is a countable intersection of open sets. (This is called a $G_\delta$-set.).

*20. Baire’s Theorem (page 256) asserts that if a complete metric space is the countable union of closed subsets then at least one of them has nonempty interior. Use Baire’s Theorem to show that the set of irrational numbers is not the countable union of closed subsets of $\mathbb{R}$.

21. Use Exercises 19 and 20 to show there is no function $f : \mathbb{R} \to \mathbb{R}$ which is discontinuous at every irrational number and continuous at every rational number.

**22. Show that there exists a subset $S$ of the middle-thirds Cantor set which is never the discontinuity set of a function $f : \mathbb{R} \to \mathbb{R}$. Infer that some zero sets are never discontinuity sets of Riemann integrable functions. [Hint: How many subsets of $C$ are there? How many can be countable unions of closed sets?]

**23. Suppose that $f_n : [a, b] \to \mathbb{R}$ is a sequence of continuous functions that converges pointwise to a limit function $f : [a, b] \to \mathbb{R}$. Such an $f$ is said to be of Baire class 1. (Pointwise convergence is discussed in the next chapter. It means what it says: For each $x$, $f_n(x)$ converges to $f(x)$ as $n \to \infty$. Continuous functions are considered to be of Baire class 0, and in general a Baire class $r$ function is the pointwise limit of a sequence of Baire class $r-1$ functions. Strictly speaking, it should not be of Baire class $r-1$ itself, but for simplicity I include continuous functions among Baire class 1 functions. It is an interesting fact that for every $r$ there are Baire class $r$ functions not of Baire class $r-1$. You might consult A Primer of Real Functions by Ralph Boas.)

Prove that the set $D_k$ of discontinuity points with oscillation $\geq 1/k$ is nowhere dense, as follows. To arrive at a contradiction, suppose that $D_k$ is dense in some interval $(\alpha, \beta) \subset [a, b]$. By Exercise 19, $D_k$ is closed, so it contains $(\alpha, \beta)$. Cover $\mathbb{R}$ by countably many intervals $(a_\ell, b_\ell)$ of length $< 1/k$ and set

$$H_\ell = f^{\text{pre}}(a_\ell, b_\ell).$$

(a) Why does $\mathbf{U}_\ell H_\ell = [a, b]$?

(b) Show that no $H_\ell$ contains a subinterval of $(\alpha, \beta)$.