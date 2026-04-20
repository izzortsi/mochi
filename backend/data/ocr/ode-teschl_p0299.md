and suppose $|x(m)|$ bounded for $m \geq 0$, we can let $m \to \infty$,

$$x_{-} = -\sum_{j=0}^{\infty} A^{-j} g_{-}(x(j)),$$

(10.36)

where the sum converges since the summand decays exponentially. Plugging this back into our equation and introducing $P(m) = P^{+}$, $m > 0$, respectively $P(m) = -P^{-}$, $m \leq 0$, we arrive at

$$x(m) = K(x)(m), \quad K(x)(m) = A^{m} x_{+} + \sum_{j=0}^{\infty} A^{m-j} P(m-j) g(x(j)).$$

(10.37)

To solve this equation by iteration, suppose $|x(m)| \leq \delta$. Then, since the Jacobian matrix of $g$ at 0 vanishes, we have

$$\sup_{m \geq 0} |g(x(m)) - g(\tilde{x}(m))| \leq \varepsilon \sup_{m \geq 0} |x(m) - \tilde{x}(m)|,$$

(10.38)

where $\varepsilon$ can be made arbitrarily small by choosing $\delta$ sufficiently small. Since we have

$$\|A^{m-j} P(m-j)\| \leq C \alpha^{|m-j|}, \quad \alpha < 1.$$

(10.39)

existence of a solution follows by Theorem 2.1. Proceeding as in the case of differential equations we obtain

**Theorem 10.5** (Stable manifold). Suppose $f \in C^{k}$ has a fixed point $p$ with corresponding invertible Jacobian matrix $A$. Then, there is a neighborhood $U(p)$ and functions $h^{\pm} \in C^{k}(E^{\pm}(A), E^{\mp}(A))$ such that

$$M^{\pm}(p) \cap U(p) = \{p + a + h^{\pm}(a) | a \in E^{\pm} \cap U\}.$$

(10.40)

Both $h^{\pm}$ and their Jacobian matrices vanish at $p$, that is, $M^{\pm}(p)$ are tangent to their respective linear counterpart $E^{\pm}(A)$ at $p$. Moreover,

$$|f^{\pm m}(x) - p| \leq C \alpha^{\pm m}, m \in \mathbb{N}_{0}, x \in M^{\pm}(p)$$

(10.41)

for any $\alpha < \min\{|\alpha| |\alpha \in \sigma(A_{+}) \cup \sigma(A_{-})^{-1}\}$ and some $C > 0$ depending on $\alpha$.

**Proof.** The proof is similar to the case of differential equations. The details are left to the reader.

In the hyperbolic case we can even say a little more.

**Theorem 10.6.** Suppose $f \in C^{k}$ has a hyperbolic fixed point $p$ with invertible Jacobian matrix. Then there is a neighborhood $U(p)$ such that $\gamma_{\pm}(x) \subset U(p)$ if and only if $x \in M^{\pm}(p)$. In particular,

$$W^{\pm}(p) = M^{\pm}(p).$$

(10.42)

**Proof.** The proof again follows as in the case of differential equations.