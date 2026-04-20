3.7. Perturbed linear first order systems

In this section we want to consider stability of perturbed linear systems of the form

$$\dot{x} = (A(t) + B(t))x,$$

(3.149)

where the asymptotic behavior as $t \to \infty$ of the system associated with $A(t)$ is well understood and $B(t)$ is supposed to be some small perturbation. We begin by looking at the one-dimensional case.

Example. The solution of the equation

$$\dot{x} = (-a + b(t))x,$$

$$x(0) = x_0,$$

is given by

$$x(t) = x_0 \exp \left( -at + \int_0^t b(s)ds \right).$$

If we assume $a > 0$, the unperturbed system is asymptotically stable and all solutions tend to 0 exponentially fast, $|x(t)| \leq |x_0|e^{-at}$, as $t \to \infty$. The same is true for the perturbed system if we, for example, assume that eventually $b(t) \leq b_0 < a$. However, note that even if $b(t) \to 0$, the asymptotic form of the solution will in general differ from the unperturbed one. For example, in the case $b(t) = (1+t)^{-1}$ we obtain $x(t) = x_0(1+t)e^{-at}$. In particular, in the case $a = 0$ the unperturbed system is stable and for the above choice of $b(t) = (1+t)^{-1}$ the perturbed system is unstable. If we make the stronger requirement $\int_0^\infty |b(t)|dt < \infty$, then the perturbed system is again stable even if $a = 0$.

Our aim is to transfer the above observations for the one-dimensional case to general first order systems.

Theorem 3.20. Consider the system (3.149) and suppose that the principal matrix solution of the unperturbed system corresponding to $B(t) \equiv 0$ satisfies

$$\|\Pi_A(t,s)\| \leq C e^{-\alpha(t-s)},$$

$$t \geq s \geq t_0,$$

(3.150)

for some constants $C, \alpha > 0$ and a time $t_0 \geq 0$. Suppose that

$$\|B(t)\| \leq b_0,$$

$$t \geq t_0.$$

(3.151)