30 Proposition $\mathcal{U}(\overline{f}_n) = \bigcup_{k \geq n} \mathcal{U}(f_k)$ and $\hat{\mathcal{U}}(\underline{f}_n) = \bigcap_{k \geq n} \hat{\mathcal{U}}(f_k)$.

Proof We have

$$(x, y) \in \mathcal{U}(\overline{f}_n) \iff y < \sup\{f_k(x) : k \geq n\}$$
$$\iff \exists \ell \geq n \text{ such that } y < f_\ell(x)$
$$\iff \exists \ell \geq n \text{ such that } (x, y) \in \mathcal{U}(f_\ell)$
$$\iff (x, y) \in \bigcup_{k \geq n} \mathcal{U}(f_k).$$

The other equality is checked the same way.

31 Dominated Convergence Theorem If $f_n : \mathbb{R} \to [0, \infty)$ is a sequence of measurable functions such that $f_n \to f$ a.e. and if there exists a function $g : \mathbb{R} \to [0, \infty)$ whose integral is finite and which is an upper bound for all the functions $f_n$ then $f$ is integrable and $\int f_n \to \int f$ as $n \to \infty$.

Proof Obvious from Figure 145.

Figure 145 Dominated convergence. Proposition 30 implies the envelope functions are measurable. Due to the dominator $g$ they are integrable. The Monotone Convergence Theorem and Corollary 29 imply their integrals converge to $\int f$. Since $\mathcal{U}(\underline{f}_n) \subset \mathcal{U}(f_n) \subset \hat{\mathcal{U}}(\overline{f}_n)$ the integral of $f_n$ also converges to $\int f$.