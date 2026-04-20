To obtain the estimate observe

$$|\phi(t, t_0, x_0) - \phi(s, s_0, y_0)| \leq |\phi(t, t_0, x_0) - \phi(t, t_0, y_0)|$$
$$+ |\phi(t, t_0, y_0) - \phi(t, s_0, y_0)|$$
$$+ |\phi(t, s_0, y_0) - \phi(s, s_0, y_0)|$$
$$\leq |x_0 - y_0| e^{L|t - t_0|}$$
$$+ |\int_{t_0}^{t} f(r, \phi(r, t_0, y_0)) dr - \int_{s_0}^{t} f(r, \phi(r, s_0, y_0)) dr|$$
$$+ |\int_{s}^{t} f(r, \phi(r, s_0, y_0)) dr|,$$

where we have used (2.43) for the first term. Moreover, the third term can clearly be estimated by $M|t - s|$. To estimate the second term, abbreviate $\Delta(t) = \phi(t, t_0, y_0) - \phi(t, s_0, y_0)$ and use (assume $t_0 \leq s_0 \leq t$ without loss of generality)

$$\Delta(t) \leq \left| \int_{t_0}^{s_0} f(r, \phi(r, t_0, y_0)) dr \right| + \int_{s_0}^{t} |f(r, \phi(r, t_0, y_0)) - f(r, \phi(r, s_0, y_0))| dr$$
$$\leq |t_0 - s_0| M + L \int_{s_0}^{t} \Delta(r) dr.$$

Hence an application of Gronwall’s inequality finishes the proof. $\square$

Note that in the case of an autonomous system we have $\phi(t, t_0, x_0) = \phi(t - t_0, 0, x_0)$ by Problem 1.8 and it suffices to consider $\phi(t, x_0) = \phi(t, 0, x_0)$ in such a situation.

However, in many cases the previous result is not good enough and we need to be able to differentiate with respect to the initial condition. Hence we will assume $f \in C^k(U, \mathbb{R}^n)$ for some $k \geq 1$.

We first suppose that $\phi(t, t_0, x)$ is differentiable with respect to $x$. Then the same is true for $\dot{\phi}(t, t_0, x)$ by (2.10) combined with the chain rule and differentiating (2.10) yields

$$\frac{\partial^2 \phi}{\partial x \partial t}(t, t_0, x) = \frac{\partial f}{\partial x}(t, \phi(t, t_0, x)) \frac{\partial \phi}{\partial x}(t, t_0, x).$$

Hence, if we further assume that we can interchange the partial derivatives on the left-hand side,

$$\frac{\partial^2 \phi}{\partial x \partial t}(t, t_0, x) = \frac{\partial^2 \phi}{\partial t \partial x}(t, t_0, x),$$

we see that

$$\frac{\partial \phi}{\partial x}(t, t_0, x)$$

(2.48)