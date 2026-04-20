uniformly continuous on $V$, we can find a sequence $\Delta(h) \to 0$ as $h \to 0$, such that

$$|f(s, y) - f(t, x)| \leq \Delta(h) \quad \text{for} \quad |y - x| \leq Mh, \quad |s - t| \leq h. \tag{2.73}$$

To be able to estimate the difference between left and right-hand side of (2.11) for $x_h(t)$ we choose an $m$ with $t \leq t_m$ and write

$$x_h(t) = x_0 + \sum_{j=0}^{m-1} \int_{t_j}^{t_{j+1}} \chi(s)f(t_j, x_h(t_j))ds, \tag{2.74}$$

where $\chi(s) = 1$ for $s \in [t_0, t]$ and $\chi(s) = 0$ else. Then

$$\left|x_h(t) - x_0 - \int_{t_0}^{t} f(s, x_h(s))ds\right| \leq \sum_{j=0}^{m-1} \int_{t_j}^{t_{j+1}} \chi(s)|f(t_j, x_h(t_j)) - f(s, x_h(s))|ds \leq \Delta(h) \sum_{j=0}^{m-1} \int_{t_j}^{t_{j+1}} \chi(s)ds = |t - t_0| \Delta(h), \tag{2.75}$$

from which it follows that $\phi$ is indeed a solution

$$\phi(t) = \lim_{m \to \infty} \phi_m(t) = x_0 + \lim_{m \to \infty} \int_{t_0}^{t} f(s, \phi_m(s))ds = x_0 + \int_{t_0}^{t} f(s, \phi(s))ds \tag{2.76}$$

since we can interchange limit and integral by uniform convergence.

Hence we have proven Peano’s theorem.

**Theorem 2.19** (Peano). Suppose $f$ is continuous on $V = [t_0, t_0 + T] \times \overline{B_\delta(x_0)} \subset U$ and denote the maximum of $|f|$ by $M$. Then there exists at least one solution of the initial value problem (2.10) for $t \in [t_0, t_0 + T_0]$ which remains in $\overline{B_\delta(x_0)}$, where $T_0 = \min\{T, \frac{\delta}{M}\}$. The analogous result holds for the interval $[t_0 - T_0, t_0]$.

Of course this theorem raises the question if there are also conditions on $f$ which are weaker than the Lipschitz condition but still guarantee uniqueness. One such condition is presented in Problem 2.25.

Finally, let me remark that the Euler algorithm is well suited for the numerical computation of an approximate solution since it only requires the evaluation of $f$ at certain points. On the other hand, it is not clear how to find the converging subsequence, and so let us show that $x_h(t)$ converges uniformly if $f$ is Lipschitz. By (2.29) with $x(t) = x_h(t)$ and $y(t) = K(x_h)(t)$