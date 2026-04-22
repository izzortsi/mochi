Proof Assume that $f : (a, b) \to \mathbb{R}$ is smooth and has locally bounded derivative growth rate. Then $x \in (a, b)$ has a neighborhood $N$ on which the derivative growth rate $\alpha$ is finite. Choose $\sigma > 0$ such that $I = [x - \sigma, x + \sigma] \subset N$ and $\alpha \sigma < 1$. We infer from Theorem 26 that the Taylor series for $f$ at $x$ converges uniformly to $f$ on $I$. Hence $f$ is analytic.

Conversely, assume that $f$ is analytic and let $x \in (a, b)$ be given. There is a power series $\sum c_k h^k$ that converges to $f(x+h)$ for all $h$ in some interval $(-R, R)$ with $R > 0$. Choose $\sigma$ with $0 < \sigma < R$. We infer from Theorem 27 that $f$ has bounded derivative growth rate on $I$.

29 Corollary A smooth function is analytic if its derivatives are uniformly bounded.

An example of such a function is $f(x) = \sin x$.

Proof If $|f^{(r)}(\theta)| \leq M$ for all $r$ and $\theta$ then the derivative growth rate of $f$ is bounded. In fact, $\alpha = 0$ and $R = \infty$.

30 Taylor’s Theorem If $f(x) = \sum c_k x^k$ and the power series has radius of convergence $R$ then $f$ is analytic on $(-R, R)$.

Proof The function $f$ is smooth, and by Theorem 27 it has bounded derivative growth rate on each compact interval $I \subset (-R, R)$. Hence it is analytic.

Taylor’s Theorem states that not only can $f$ be expanded as a convergent power series at $x = 0$, but also at any other point $x_0 \in (-R, R)$. Other proofs of Taylor’s theorem rely more heavily on series manipulations and Mertens’ theorem (Exercise 73 in Chapter 3).

The concept of analyticity extends immediately to complex functions. A function $f : D \to \mathbb{C}$ is complex analytic if $D$ is an open subset of $\mathbb{C}$ and for each $z \in D$ there is a power series

$$\sum c_k \zeta^k$$

such that for all $z + \zeta$ near $z$,

$$f(z + \zeta) = \sum_{k=0}^{\infty} c_k \zeta^k.$$

The coefficients $c_k$ are complex and so is the variable $\zeta$. Convergence occurs on a disc of radius $R$. This lets us define $e^z$, $\log z$, $\sin z$, $\cos z$ for the complex number $z$.