Hence once we have the solution of the unperturbed problem $\phi_0(t)$, we can then compute the correction term $\phi_1(t)$ by solving another linear equation.

Note that the procedure can be equivalently described as follows: Plug the Taylor expansion for $\phi(t, \varepsilon)$ into the differential equation, expand the right-hand side with respect to $\varepsilon$, and compare coefficients with respect to powers of $\varepsilon$.

**Example.** Let us look at a simple example. Consider the equation

$$\dot{v} = -\varepsilon v - g, \quad v(0) = 0, \quad \varepsilon \geq 0,$$

which models the velocity of a falling object with air resistance (cf. Problem 1.17). The solution can be easily found

$$\phi(t, \varepsilon) = g \frac{e^{-\varepsilon t} - 1}{\varepsilon}$$

and there is no need for any perturbation techniques. However, we will still apply it to illustrate the method. The unperturbed problem is

$$\dot{\phi}_0 = -g, \quad \phi_0(0) = 0,$$

and the solution is given by $\phi_0(t) = -gt$. Similarly, since $f(t, v, \varepsilon) = -\varepsilon v - g$ it follows that $f_{10}(t, v) = 0$, $f_{11}(t, v) = -v$ and the equation for the first correction term is

$$\dot{\phi}_1 = -\phi_0(t), \quad \phi_1(0) = 0,$$

with solution given by $\phi_1(t) = \frac{g}{2} t^2$. Hence our approximation is

$$v(t) = -g \left( t - \varepsilon \frac{t^2}{2} + o(\varepsilon) \right)$$

which of course coincides with the Taylor expansion of the exact solution. However note, the approximation is only valid for fixed time and will in general get worse as $t$ increases. In fact, observe that for $\varepsilon > 0$ the approximation diverges to $+\infty$ while the exact solution converges to $\frac{g}{\varepsilon}$.

Clearly we can extend this procedure to get further approximations:

**Theorem 2.12.** Let $\Lambda$ be some open interval. Suppose $f \in C^k(U \times \Lambda, \mathbb{R}^n)$, $k \geq 1$ and fix some values $(t_0, x_0, \varepsilon_0) \in U \times \Lambda$. Let $\phi(t, \varepsilon) \in C^k(I \times \Lambda_0, \mathbb{R}^n)$ be the solution of the initial value problem

$$\dot{x} = f(t, x, \varepsilon), \quad x(t_0) = x_0,$$

(2.59)

guaranteed to exist by Theorem 2.11.

Then

$$\phi(t, \varepsilon) = \sum_{j=0}^{k} \frac{\phi_j(t)}{j!} (\varepsilon - \varepsilon_0)^j + o((\varepsilon - \varepsilon_0)^k),$$

(2.60)