Now we are ready to apply these results to integral equations. However, the proofs require some results from integration theory which I state first. We will consider functions $f : U \subseteq \mathbb{R}^m \to \mathbb{R}^n$ and by an integrable function we will mean a Riemann (or Lebesgue) integrable function for which $\int |f(x)| dx$ is finite.

**Theorem 9.13** (Dominated convergence). Suppose $f_n(x)$ is a sequence of integrable functions converging pointwise to an integrable function $f(x)$. If there is a dominating function $g(x)$, that is, $g(x)$ is integrable and satisfies

$$|f_n(x)| \leq g(x),$$

(9.44)

then

$$\lim_{n \to \infty} \int f_n(x) dx = \int f(x) dx.$$

(9.45)

For a proof see any book on real analysis or measure theory.

This result has two immediate consequences which we will need below.

**Corollary 9.14.** Suppose $f_n(x) \to f(x)$ pointwise and $df_n(x) \to g(x)$ pointwise. If there is (locally) a dominating function for $df_n(x)$, then $f(x)$ is differentiable and $df(x) = g(x)$.

**Proof.** It suffices to prove the case where $f$ is one dimensional. Using

$$f_n(x) = f_n(x_0) + \int_{x_0}^{x} f_n'(t) dt$$

the result follows after taking the limit on both sides. $\square$

**Corollary 9.15.** Suppose $f(x, \lambda)$ is integrable with respect to $x$ for any $\lambda$ and continuously differentiable with respect to $\lambda$ for any $x$. If there is a dominating function $g(x)$ such that

$$|\frac{\partial f}{\partial \lambda}(x, \lambda)| \leq g(x),$$

(9.46)

then the function

$$F(\lambda) = \int f(x, \lambda) dx$$

is continuously differentiable with derivative given by

$$\frac{\partial F}{\partial \lambda}(\lambda) = \int \frac{\partial f}{\partial \lambda}(x, \lambda) dx.$$

(9.48)

**Proof.** Again it suffices to consider one dimension. Since

$$f(x, \lambda + \varepsilon) - f(x, \lambda) = \varepsilon \int_0^1 \frac{\partial f}{\partial \lambda}(x, \lambda + \varepsilon t) dt$$