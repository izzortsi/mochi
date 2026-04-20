Since $\Delta(z_0, 0) = 0$ we can apply the same analysis as in Section 12.4 to conclude that $\Delta(z_0, \varepsilon)$ has a zero for small $\varepsilon$ if $\frac{\partial \Delta}{\partial \varepsilon}(z_0, 0)$ has a simple zero. Moreover, if the zero of $\frac{\partial \Delta}{\partial \varepsilon}(z_0, 0)$ is simple, this is also equivalent to the fact that the intersection of the stable and unstable manifolds is transversal.

It remains to compute $\frac{\partial \Delta}{\partial \varepsilon}(z_0, 0)$ which can be done using the same ideas as in Section 12.4. Let $z^\pm(t, \varepsilon) = (x^\pm(t, \varepsilon), t)$ be the orbit in $W^\pm(\gamma(p_0(\varepsilon)))$ which satisfies $z^\pm(0, \varepsilon) = z_0^\pm(\varepsilon)$. Then we have

$$\frac{\partial \Delta}{\partial \varepsilon}(z_0, 0) = f(x_0) \wedge (x_\varepsilon^- (0) - x_\varepsilon^+ (0)),$$

(13.14)

where $x_\varepsilon^\pm(t) = \frac{\partial}{\partial \varepsilon} x^\pm(t, \varepsilon)|_{\varepsilon=0}$ are solutions of the corresponding variational equation. However, since we do not know the initial conditions (we know only the asymptotic behavior), it is better to consider

$$y^\pm(t) = f(x_0(t)) \wedge x_\varepsilon^\pm(t), \quad x_0(t) = \Phi(t, x_0).$$

(13.15)

Using the variational equation

$$\dot{x}_\varepsilon^\pm(z_0, t) = A(t)x_\varepsilon^\pm(t) + g(t - t_0, x_0(t), 0), \quad A(t) = df_{x_0(t)},$$

(13.16)

we obtain after a little calculation (Problem 13.1)

$$\dot{y}^±(t) = \text{tr}(A(t))y^±(t) + f(x_0(t)) \wedge g(t - t_0, x_0(t), 0)$$

(13.17)

and hence

$$\dot{y}^±(t) = \dot{y}^±(T_±) + \int_{T_±}^{t} \mathrm{e}^{\int_s^t \text{tr}(A(r))dr} f(x_0(s)) \wedge g(s - t_0, x_0(s), 0) \, ds.$$

(13.18)

Next, we want to get rid of the boundary terms at $T_±$ by taking the limit $T_± \to \pm\infty$. They will vanish provided $x_\varepsilon^\pm(T_±)$ remains bounded since $\lim_{t \to \pm\infty} f(x_0(t)) = f(p_0) = 0$. In fact, this is shown in the next lemma.

**Lemma 13.3.** The stable and unstable manifolds of the perturbed periodic orbit $p_0(\varepsilon)$ are locally given by

$$W^\pm(\gamma(p_0(\varepsilon))) = \{ (\Phi(s, x_0) + h^\pm(\tau, s)\varepsilon + o(\varepsilon), \tau) | (s, \tau) \in S^1 \times \mathbb{R} \},$$

(13.19)

where $x_0 \in W(p_0)$ is fixed and $h^\pm(\tau, s)$ is bounded as $s \to \pm\infty$.

**Proof.** By Theorem 12.10 a point in $W^\pm(\gamma(p_0(\varepsilon)))$ can locally be written as

$$(p_0 + h_0^\pm(\tau, a) + h_1^\pm(\tau, a)\varepsilon + o(\varepsilon), \tau).$$

Moreover, fixing $x_0 \in W(p_0)$ there is a unique $s = s(\tau, a)$ such that

$$p_0 + h_0^\pm(\tau, a, 0) = \Phi(s, x_0)$$

and hence we can choose $h^\pm(\tau, s) = h_1^\pm(\tau, a(\tau, s))$.