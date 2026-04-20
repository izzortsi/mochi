Estimating the integrand shows

$$|f(s, x(s)) - g(s, y(s))|$$
$$\leq |f(s, x(s)) - f(s, y(s))| + |f(s, y(s)) - g(s, y(s))|$$
$$\leq L|x(s) - y(s)| + M.$$

Hence the claim follows from (2.38).

In particular, denote the solution of the IVP (2.10) by

$$\phi(t, t_0, x_0)$$

(2.42)

to emphasize the dependence on the initial condition. Then our theorem, in the special case $f = g$,

$$|\phi(t, t_0, x_0) - \phi(t, t_0, y_0)| \leq |x_0 - y_0| e^{L|t - t_0|},$$

(2.43)

shows that $\phi$ depends continuously on the initial value. Of course this bound blows up exponentially as $t$ increases, but the linear equation $\dot{x} = x$ in one dimension shows that we cannot do better in general.

Moreover, we even have

**Theorem 2.9.** Suppose $f \in C(U, \mathbb{R}^n)$ is locally Lipschitz continuous in the second argument, uniformly with respect to the first. Around each point $(t_0, x_0) \in U$ we can find a compact set $I \times B \subset U$ such that $\phi(t, s, x) \in C(I \times I \times B, \mathbb{R}^n)$. Moreover, $\phi(t, t_0, x_0)$ is Lipschitz continuous,

$$|\phi(t, t_0, x_0) - \phi(s, s_0, y_0)| \leq |x_0 - y_0| e^{L|t - t_0|} + (|t - s| + |t_0 - s_0| e^{L|t - s_0|})M,$$

(2.44)

where

$$L = \sup_{(t, x) \neq (t, y) \in V} \frac{|f(t, x) - f(t, y)|}{|x - y|},$$

$$M = \max_{(t, x) \in V} |f(t, x)|,$$

(2.45)

with $V \subset U$ some compact set containing $I \times \phi(I \times I \times B)$.

**Proof.** Using the same notation as in the proof of Theorem 2.2 we can find a compact set $V = [t_0 - \varepsilon, t_0 + \varepsilon] \times \overline{B_{\delta}(x_0)}$ such that $\phi(t, t_0, x_0)$ exists for $|t - t_0| \leq \varepsilon$. But then it is straightforward to check that $V_1 = [t_1 - \varepsilon/2, t_1 + \varepsilon/2] \times \overline{B_{\delta/2}(x_1)}$ works to show that $\phi(t, t_1, x_1)$ exists for $|t - t_1| \leq \varepsilon/2$ whenever $|t_1 - t_0| \leq \varepsilon/2$ and $|x_1 - x_0| \leq \delta/2$. Hence we can choose $I = [t_0 - \varepsilon/2, t_0 + \varepsilon/2]$ and $B = \overline{B_{\delta/2}(x_0)}$.