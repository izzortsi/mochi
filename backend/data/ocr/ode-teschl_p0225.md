is positive at such a point (if $\dot{y}(t_1) = 0$ vanishes as well, we already are at a fixed point). An analogous argument rules out $\dot{y}(t_1) = 0$. Similarly for $Q_3$. Finally, if $(\dot{x}, \dot{y}) \in Q_2 \cup Q_4$ it either remains there or enters $Q_1 \cup Q_3$. Hence the sign of $\dot{x}(t)$ as well as $\dot{y}(t)$ can change at most once and thus both components are eventually monotone.

Note that time reversal maps a cooperative system in a competitive one and vice versa.

In particular, if we assume limited growth, that is, $\alpha(x, y)$ becomes eventually negative as $x \to \infty$ and $\beta(x, y)$ becomes eventually negative as $y \to \infty$, then every solution converges to a fixed point.

**Problem 7.1. Prove Lemma 7.2.**

**Problem 7.2 (Volterra principle).** Show that for any orbit of the Volterra–Lotka system (7.3), the time average over one period

$$\frac{1}{T} \int_0^T x(t)dt = 1, \quad \frac{1}{T} \int_0^T y(t)dt = 1$$

is independent of the orbit. (Hint: Integrate $\frac{d}{dt} \log(x(t))$ over one period.)

**Problem 7.3.** Show that the change of coordinates $x = \exp(q)$, $y = \exp(p)$ transforms the Volterra–Lotka system (7.3) into a Hamiltonian system with Hamiltonian $H(p, q) = L(\exp(q), \exp(p))$.

Moreover, use the same change of coordinates to transform (7.7). Then use Bendixson’s criterion (Problem 7.11) to show that there are no periodic orbits.

**Problem 7.4.** Show that (7.7) has no periodic orbits in the case $\lambda < 1$ if $\mu \lambda \geq 1$ as follows:

If there is a periodic orbit it must contain a point $(x_0, y_0)$ on $L_1$ which satisfies

$$\frac{1 + \mu}{1 + \mu \lambda} < x_0 < \frac{1}{\lambda}, \quad y_0 = 1 - \lambda x_0. \tag{7.19}$$

The trajectory enters $Q_1$ and satisfies $x(t) < x_0$ in $Q_1$ since $x(t)$ decreases there. Hence we must have $y(t) < y_1 = \frac{x_0 - 1}{\mu}$ when it hits $L_2$. Now we enter $Q_2$, where $y(t)$ decreases implying $x(t) < x_1 = \frac{1 - y_1}{\lambda}$ when we hit $L_1$. Proceeding like this we finally see $y(t) > y_2 = \frac{x_1 - 1}{\mu}$ when we return to $L_1$. If $y_2 \geq y_0$, that is if

$$(1 + \mu)(1 - \mu \lambda) \geq (1 - (\mu \lambda)^2)x_0, \tag{7.20}$$

the trajectory is spiraling inwards and we get a contradiction to our assumption that it is periodic. This is the case when $\mu \lambda \geq 1$.