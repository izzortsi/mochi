(a′), (b′), and (c′) are clear enough. To check (d′) we write

$$R = \sum_j R_j e_j = \sum_j \sum_k f_j(t_k) \Delta x_k e_j$$

$$= \sum_k \sum_j f_j(t_k) e_j \Delta x_k = \sum_k f(t_k) \Delta x_k$$

where $e_1, \ldots, e_m$ is the standard vector basis for $\mathbb{R}^m$. Thus,

$$|R| \leq \sum_k |f(t_k)| \Delta x_k \leq \sum_k M \Delta x_k = M(b - a).$$

By (a′), $R$ approximates the integral, which implies (d′). (Note that a weaker inequality with $M$ replaced by $\sqrt{m}M$ follows immediately from (d). This weaker inequality would suffice for most of what we do but it is inelegant.)

Now consider the following integral version of (20),

(21) $$\gamma(t) = p + \int_0^t F(\gamma(s)) \, ds.$$

A solution of (21) is by definition any continuous curve $\gamma : (a,b) \to U$ for which (21) holds identically in $t \in (a,b)$. By (b′) any solution of (21) is automatically differentiable and its derivative is $F(\gamma(t))$. That is, every solution of (21) solves (20). The converse is also clear, so solving (20) is equivalent to solving (21) for a continuous function $\gamma(t)$.

**Proof of Picard’s Theorem** Since $F$ is continuous, there exist a compact neighborhood $N = \overline{N}_r(p) \subset U$ and a constant $M$ such that $|F(x)| \leq M$ for all $x \in N$. Choose $\tau > 0$ such that

(22) $$\tau M \leq r \quad \text{and} \quad \tau L < 1.$$

Consider the set $\mathcal{C}$ of all continuous functions $\gamma, \sigma : [-\tau, \tau] \to N$. With respect to the metric

$$d(\gamma, \sigma) = \sup\{|\gamma(t) - \sigma(t)| : t \in [-\tau, \tau]\}$$

the set $\mathcal{C}$ is a complete metric space. Given $\gamma \in \mathcal{C}$, define a new curve $\Phi(\gamma)$ as

$$\Phi(\gamma)(t) = p + \int_0^t F(\gamma(s)) \, ds.$$

Solving (21) is the same as finding $\gamma$ such that $\Phi(\gamma) = \gamma$. That is, we seek a fixed point of $\Phi$.