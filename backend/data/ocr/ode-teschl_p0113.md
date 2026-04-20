However, while solutions decay exponentially for $\alpha > \frac{1}{2}$ it is not clear for what $\alpha$ the stronger estimates (3.166) holds. Since the derivative of $t \sin(\log(t))$ does not exceed $\sqrt{2}$, we have $|t \sin(\log(t)) - s \sin(\log(s))| \leq \sqrt{2}|t - s|$, and we get asymptotic stability from Theorem 3.26 at least for $\alpha > \frac{1}{\sqrt{2}}$.

The general solution of the nonlinear system is given by

$$x(t) = \begin{pmatrix} c_1 e^{-\alpha t} \\ e^{-2\alpha t + t \sin(\log(t))} \end{pmatrix} \left( c_2 + c_1^2 \int_0^t e^{-s \sin(\log(s))} ds \right).$$

Now for the sequence $t_n = e^{(2n+11/6)\pi}$, $n \in \mathbb{N}$, we see that by

$$\int_0^{t_n} e^{-s \sin(\log(s))} ds > \int_0^{t_n} e^{-s \sin(\log(s))} ds$$

$$> t_n (1 - \exp(-2\pi/3)) e^{t_n \exp(-2\pi/3)/2}$$

the solutions with $c_1 \neq 0$ are unbounded as $t \to \infty$ for $\frac{1}{2} < \alpha < \frac{1}{2} + \frac{1}{4} e^{-\pi}$. This shows that the condition (3.166) cannot be replaced by exponential decay of solutions.

Of course we can also obtain a nonlinear version of Theorem 3.23 by making the obvious changes in its proof.

**Theorem 3.28.** Consider the system (3.165) and suppose that the principal matrix solution of the unperturbed system corresponding to $g(t, x) \equiv 0$ satisfies

$$\|\Pi_A(t, s)\| \leq C, \quad t \geq s \geq 0,$$

(3.171)

for some constant $C > 0$. Suppose that

$$|g(t, x)| \leq b(t)|x|, \quad |x| < \delta, \quad t \geq 0,$$

(3.172)

for some constant $0 < \delta \leq \infty$ and some function $b(t)$ with $B = \int_0^\infty b(t) < 0$. Then the solution $x(t)$ starting at $x(0) = x_0$ satisfies

$$|x(t)| \leq C \exp(CB)|x_0|, \quad |x_0| \leq \frac{\delta}{C \exp(CB)}, \quad t \geq 0.$$

**Problem 3.44** (Long-time asymptotics). Suppose

$$\int_0^\infty \|A(t)\| dt < \infty.$$

Show that every solution $x(t)$ of (3.79) converges to some limit:

$$\lim_{t \to \infty} x(t) = x_\infty.$$

(Hint: First show that all solutions are bounded and then use the corresponding integral equation.)