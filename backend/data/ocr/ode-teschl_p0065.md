Problem 2.19. Consider a first-order autonomous system in $\mathbb{R}^n$ with $f(x)$ Lipschitz. Show that $x(t)$ is a solution if and only if $x(t - t_0)$ is. Use this and uniqueness to show that for two maximal solutions $x_j(t)$, $j = 1, 2$, the images $\gamma_j = \{x_j(t)|t \in I_j\} \subset \mathbb{R}^n$ either coincide or are disjoint.

Problem 2.20. Consider a first-order autonomous equation in $\mathbb{R}^1$ with $f(x)$ Lipschitz. Suppose $f(0) = f(1) = 0$. Show that solutions starting in $[0, 1]$ cannot leave this interval. What is the maximal interval of definition $(T_-, T_+)$ for solutions starting in $[0, 1]$? Does such a solution have a limit as $t \to T_{\pm}$?

Problem 2.21. Consider a first-order equation in $\mathbb{R}^1$ with $f(t, x)$ defined on $\mathbb{R} \times \mathbb{R}$. Suppose $x f(t, x) < 0$ for $|x| > R$. Show that all solutions exist for all $t > 0$.

Problem 2.22. Suppose $U = \mathbb{R} \times \mathbb{R}^n$ and that

$$|f(t, x)| \leq g(|x|)$$

for some positive continuous function $g \in C([0, \infty))$ which satisfies

$$\int_0^\infty \frac{dr}{g(r)} = \infty.$$

Then all solutions of the IVP (2.10) are defined for all $t \geq 0$.

Show that the same conclusion still holds if there is such a function $g_T(r)$ for every $t \in [0, T]$.

(Hint: Look at the differential equation for $r(t)^2 = |x(t)|^2$. Estimate the right-hand side and recall the analysis from Sections 1.3 and 1.5.)

2.7. Euler’s method and the Peano theorem

In this section we want to show that continuity of $f(t, x)$ is sufficient for existence of at least one solution of the initial value problem (2.10).

If $\phi(t)$ is a solution, then by Taylor’s theorem we have

$$\phi(t_0 + h) = x_0 + \dot{\phi}(t_0)h + o(h) = x_0 + f(t_0, x_0)h + o(h).$$

This suggests to define an approximate solution by omitting the error term and applying the procedure iteratively. That is, we set

$$x_h(t_{m+1}) = x_h(t_m) + f(t_m, x_h(t_m))h, \quad t_m = t_0 + mh,$$

and use linear interpolation in between. This procedure is known as Euler method.

We expect that $x_h(t)$ converges to a solution as $h \downarrow 0$. But how should we prove this? Well, the key observation is that, since $f$ is continuous, it is bounded by a constant on each compact interval. Hence the derivative of $x_h(t)$ is bounded by the same constant. Since this constant is independent