Hence we even have

$$y^{\pm}(t) = \int_{\pm\infty}^{t} e^{\int_{s}^{t} \text{tr}(A(r))dr} f(x_0(s)) \wedge g(s - t_0, x_0(s), 0) \, ds$$

and thus finally

$$\frac{\partial \Delta}{\partial \varepsilon}(z_0, 0) = M_{x_0}(t_0),$$

where $M_{x_0}(t_0)$ is the homoclinic Melnikov integral

$$M_{x_0}(t) = \int_{-\infty}^{\infty} e^{-\int_{0}^{s} \text{div}(f(\Phi(r,x_0)))dr} f(\Phi(s, x_0)) \wedge g(s - t, \Phi(s, x_0), 0) \, ds.$$

Note that the base point $x_0$ on the homoclinic orbit is not essential since we have (Problem 13.2)

$$M_{\Phi(t,x_0)}(t_0) = e^{\int_{0}^{t} \text{div}(f(\Phi(r,x_0)))dr} M_{x_0}(t + t_0).$$

In summary we have proven

**Theorem 13.4** (Melnikov). Suppose the homoclinic Melnikov integral $M_{x_0}(t)$ has a simple zero for some $t \in \mathbb{R}$, then the Poincaré map $P_{\Sigma}$ has a transversal homoclinic orbit for sufficiently small $\varepsilon \neq 0$.

For example, consider the forced Duffing equation (compare Problem 9.5)

$$\dot{q} = p, \quad \dot{p} = q - q^3 - \varepsilon(\delta p + \gamma \cos(\omega\tau)), \quad \dot{\tau} = 1.$$

The homoclinic orbit is given by

$$q_0(t) = \sqrt{2} \text{sech}(t), \quad p_0(t) = -\sqrt{2} \tanh(t) \text{sech}(t)$$

and hence

$$M(t) = \int_{-\infty}^{\infty} q_0(s) \left( \delta p_0(s) + \gamma \cos(\omega(s - t)) \right) \, ds$$

$$= \frac{4\delta}{3} - \sqrt{2}\pi\gamma\omega \text{sech}\left(\frac{\pi\omega}{2}\right) \sin(\omega t)$$

Thus the Duffing equation is chaotic for $\delta$, $\gamma$ sufficiently small provided

$$\left| \frac{\delta}{\gamma} \right| < \frac{3\sqrt{2}\pi|\omega|}{4} \text{sech}\left(\frac{\pi\omega}{2}\right).$$

**Problem 13.1.** Prove the following formula for $x, y \in \mathbb{R}^2$ and $A \in \mathbb{R}^2 \otimes \mathbb{R}^2$,

$$Ax \wedge y + x \wedge Ay = \text{tr}(A)x \wedge y.$$

**Problem 13.2.** Show (13.23).

**Problem 13.3.** Apply the Melnikov method to the forced mathematical pendulum (compare Section 6.7)

$$\dot{q} = p, \quad \dot{q} = -\sin(q) + \varepsilon \sin(t).$$