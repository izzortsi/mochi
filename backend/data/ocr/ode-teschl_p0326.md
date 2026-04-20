12.1. Stability of periodic solutions

In Section 6.5 we have defined stability for a fixed point. In this section we want to extend this notation to periodic solutions.

An orbit $\gamma(x_0)$ is called **stable** if for any given neighborhood $U(\gamma(x_0))$ there exists another neighborhood $V(\gamma(x_0)) \subseteq U(\gamma(x_0))$ such that any solution starting in $V(\gamma(x_0))$ remains in $U(\gamma(x_0))$ for all $t \geq 0$.

Similarly, an orbit $\gamma(x_0)$ is called **asymptotically stable** if it is stable and if there is a neighborhood $U(\gamma(x_0))$ such that

$$\lim_{t \to \infty} d(\Phi(t,x),\gamma(x_0)) = 0 \quad \text{for all } x \in U(x_0).$$

Here $d(x,A) = \inf\{|x - y| |y \in A\}$ denotes the distance between $x$ and $A \subseteq \mathbb{R}^n$ (cf. Problem 6.11).

Note that this definition ignores the time parametrization of the orbit. In particular, if $x$ is close to $x_1 \in \gamma(x_0)$, we do not require that $\Phi(t,x)$ stays close to $\Phi(t,x_1)$ (we only require that it stays close to $\gamma(x_0))$. To see that this definition is the right one, consider the mathematical pendulum (6.48). There all orbits are periodic, but the period is not the same. Hence, if we fix a point $x_0$, any point $x \neq x_0$ starting close will have a slightly larger respectively smaller period and thus $\Phi(t,x)$ does not stay close to $\Phi(t,x_0)$. Nevertheless, it will still stay close to the orbit of $x_0$.

But now let us turn to the investigation of the stability of periodic solutions. Suppose the differential equation

$$\dot{x} = f(x)$$

has a periodic solution $\Phi(t,x_0)$ of period $T = T(x_0)$.