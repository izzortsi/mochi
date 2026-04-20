Finally, note that we also could admit nonlinear perturbations,

$$\dot{x} = A(t)x + g(t,x),$$

(3.165)

as long as the nonlinear term satisfies a linear estimate. For example, the same proof as for Theorem 3.20 shows:

**Theorem 3.26.** Consider the system (3.165) and suppose that the principal matrix solution of the unperturbed system corresponding to $g(t,x) \equiv 0$ satisfies

$$\|\Pi_A(t,s)\| \leq C e^{-\alpha(t-s)}, \quad t \geq s \geq 0,$$

(3.166)

for some constants $C, \alpha > 0$. Suppose that

$$|g(t,x)| \leq b_0|x|, \quad |x| < \delta, \quad t \geq 0,$$

(3.167)

for some constant $0 < \delta \leq \infty$. Then, if $b_0C < \alpha$, the solution $x(t)$ starting at $x(0) = x_0$ satisfies

$$\|x(t)\| \leq D e^{-(\alpha-b_0C)t}|x_0|, \quad |x_0| < \frac{\delta}{C}, \quad t \geq 0,$$

(3.168)

for some constant $D > 0$.

As an important consequence we single out a useful criterion for asymptotic stability of a fixed point of an autonomous system.

**Corollary 3.27.** Suppose $f \in C^1$ satisfies $f(0) = 0$ and suppose that all eigenvalues of the Jacobian matrix at 0 have negative real part. Then there is a $\delta > 0$ and an $\alpha > 0$ such that solutions of

$$\dot{x} = f(x), \quad x(0) = x_0,$$

(3.169)

satisfy

$$|x(t)| \leq C e^{-\alpha t}|x_0|, \quad |x_0| \leq \delta.$$

(3.170)

**Proof.** We first write our system in the form (3.165), where $A(t) = A$ is the Jacobian matrix of $f(x)$ at 0 and $g(t,x) = g(x)$ is the remainder. Then, by assumption, $A$ satisfies our requirements and the same is true for $g(x)$ where $b_0$ can be made arbitrarily small by making $\delta$ small (since the Jacobian matrix of $g$ vanishes at 0).

**Example.** (Perron) Consider the nonlinear system

$$A(t) = \begin{pmatrix} -\alpha & 0 \\ 0 & -2\alpha + \sin(\log(t)) + \cos(\log(t)) \end{pmatrix}, \quad g(t,x) = \begin{pmatrix} 0 \\ x_1^2 \end{pmatrix}.$$

The solution of the corresponding unperturbed system is given by

$$\Pi_A(t,t_0) = \begin{pmatrix} e^{-\alpha(t-t_0)} & 0 \\ 0 & e^{-2\alpha(t-t_0) + t \sin(\log(t)) - t_0 \sin(\log(t_0)))} \end{pmatrix}, \quad t,t_0 > 0.$$