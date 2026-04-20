The stable set $W^+(p)$ is the set of all $x \in M$ for which (10.16) holds. Clearly, if $p_1, p_2$ are distinct periodic points, their stable sets are disjoint. In fact, if $x \in W^+(p_1) \cap W^+(p_2)$ we would have $\lim_{k \to \infty} f^{n_1 n_2 k}(x) = p_1 = p_2$, a contradiction. We call $p$ attracting if there is an open neighborhood $U$ of $p$ such that $U \subseteq W^+(p)$. The set $W^+(\gamma(p)) = \bigcup_{q \in \gamma(p)} W^+(q)$ is clearly positively invariant (it is even invariant $f(W^+(\gamma(p))) = W^+(\gamma(p))$ if $f$ is invertible).

Similarly, a point $x \in M$ is called backward asymptotic to a periodic point $p$ of period $n$ if there is a past history $x_k$ of $x$ such that $\lim_{k \to \infty} x_{-nk}(x) = p$. The unstable set $W^-(p)$ is the set of all $x \in M$ for which this condition holds. Again unstable sets of distinct periodic points are disjoint. We call $p$ repelling if there is an open neighborhood $U$ of $p$ such that $U \subseteq W^-(p)$.

Note that if $p$ is repelling, every $x \in U$ will eventually leave $U$ under iterations. Nevertheless, $x$ can still return to $U$ (Problem 10.5).

Furthermore, note that if one point in the orbit $\gamma_+(p)$ of a periodic point $p$ is attracting (repelling), so are all the others (show this).

Now let us look at the logistic map $L_\mu(x) = \mu x(1-x)$ with $M = [0,1]$. We have already seen that if $\mu = 0$, then the only fixed point is 0 with $W^+(0) = [0,1]$ and all points in $(0,1]$ are eventually periodic.

So let us next turn to the case $0 < \mu < 1$. Then we have $L_\mu(x) \leq \mu x$ and hence $L_\mu^n(x) \leq \mu^n x$ shows that every point converges exponentially to 0. In particular, we have $W^+(0) = [0,1]$.

Note that locally this follows since $L'_\mu(0) = \mu < 1$. Hence $L_\mu$ is contracting in a neighborhood of the fixed point and so all points in this neighborhood converge to the fixed point.

This result can be easily generalized to differentiable maps $f \in C^1(U,U)$, where $U \subseteq \mathbb{R}^n$.

Theorem 10.1. Suppose $f \in C^1(U,U)$, $U \subseteq \mathbb{R}^n$. Then a periodic point $p$ with period $n$ is attracting if all eigenvalues of $d(f^n)_p$ are inside the unit circle and repelling if all eigenvalues are outside.

Proof. In the first case there is a suitable norm such that $\|d(f^n)_p\| < \theta < 1$ for any fixed $\theta$ which is larger than the modulus of all eigenvalues (Problem 3.48). Moreover, since the norm is continuous, there is an open ball $B$ around $p$ such that we have $\|d(f^n)_x\| \leq \theta$ for all $x \in B$. Hence by the mean value theorem (cf. Problem 2.5) we have $|f^n(x)-p| = |f^n(x)-f^n(p)| \leq \theta|x-p|$ and the first claim follows.

The second case can now be reduced to the first by considering the local inverse of $f$ near $p$.