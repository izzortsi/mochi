You will certainly ask how all these considerations should help us with our investigation of differential equations? Well, you will see in the next section that it will allow us to give an easy and transparent proof of our basic existence and uniqueness theorem based on the following result.

A fixed point of a mapping $K : C \subseteq X \to C$ is an element $x \in C$ such that $K(x) = x$. Moreover, $K$ is called a contraction if there is a contraction constant $\theta \in [0, 1)$ such that

$$\|K(x) - K(y)\| \leq \theta \|x - y\|, \quad x, y \in C.$$  

(2.7)

We also recall the notation $K^n(x) = K(K^{n-1}(x)), K^0(x) = x$.

**Theorem 2.1** (Contraction principle). Let $C$ be a (nonempty) closed subset of a Banach space $X$ and let $K : C \to C$ be a contraction, then $K$ has a unique fixed point $\bar{x} \in C$ such that

$$\|K^n(x) - \bar{x}\| \leq \frac{\theta^n}{1 - \theta} \|K(x) - x\|, \quad x \in C.$$  

(2.8)

**Proof.** If $\bar{x} = K(\bar{x})$ and $\tilde{x} = K(\tilde{x})$, then $\|\bar{x} - \tilde{x}\| = \|K(\bar{x}) - K(\tilde{x})\| \leq \theta \|\bar{x} - \tilde{x}\|$ shows that there can be at most one fixed point.

Concerning existence, fix $x_0 \in C$ and consider the sequence $x_n = K^n(x_0)$. We have

$$\|x_{n+1} - x_n\| \leq \theta \|x_n - x_{n-1}\| \leq \cdots \leq \theta^n \|x_1 - x_0\|$$

and hence by the triangle inequality (for $n > m$)

$$\|x_n - x_m\| \leq \sum_{j=m+1}^{n} \|x_j - x_{j-1}\| \leq \theta^m \sum_{j=0}^{n-m-1} \theta^j \|x_1 - x_0\|$$

$$= \theta^m \frac{1 - \theta^{n-m}}{1 - \theta} \|x_1 - x_0\| \leq \frac{\theta^m}{1 - \theta} \|x_1 - x_0\|.$$  

(2.9)

Thus $x_n$ is Cauchy and tends to a limit $\bar{x}$. Moreover,

$$\|K(\bar{x}) - \bar{x}\| = \lim_{n \to \infty} \|x_{n+1} - x_n\| = 0$$

shows that $\bar{x}$ is a fixed point and the estimate (2.8) follows after taking the limit $n \to \infty$ in (2.9).

Question: Why is closedness of $C$ important?

**Problem 2.1.** Show that $\|f\| - \|g\| \leq \|f - g\|$.

**Problem 2.2.** Let $X$ be a Banach space. Show that the norm, vector addition, and multiplication by scalars are continuous. That is, if $f_n \to f$, $g_n \to g$, and $\alpha_n \to \alpha$, then $\|f_n\| \to \|f\|$, $f_n + g_n \to f + g$, and $\alpha_n f_n \to \alpha f$.