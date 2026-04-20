Higher dimensional dynamical systems

8.1. Attracting sets

In most applications, the main interest is to understand the long-time behavior of the flow of a differential equation (which we assume $\sigma$ complete from now on for simplicity). In this respect it is important to understand the fate of all points starting in some set $X$. Hence we will extend some of our previous definitions to sets first.

Given a set $X \subseteq M$ we can always obtain a $\sigma$ invariant set by considering

$$\gamma_{\pm}(X) = \bigcup_{\pm t \geq 0} \Phi(t, X) = \bigcup_{x \in X} \gamma_{\pm}(x).$$

Taking the closure $\overline{\gamma_{\sigma}(X)}$ we even obtain a closed $\sigma$ invariant set by Lemma 6.4. Moreover, the $\omega_{\pm}$-limit set of $X$ is the set $\omega_{\pm}(X)$ of all points $y \in M$ for which there exists sequences $t_n \to \pm\infty$ and $x_n \in X$ with $\Phi(t_n, x_n) \to y$.

Note that we have

$$\bigcup_{x \in X} \omega_{+}(x) \subseteq \omega_{+}(X)$$

but equality will not hold in general as the following example shows.

Example. Consider

$$\dot{x} = x(1 - x^2), \quad \dot{y} = -y.$$

The $x$-direction has two stable $x = \pm1$ and one unstable $x = 0$ fixed points. Similarly, the $y$-direction has the only stable fixed point $y = 0$. Hence it is