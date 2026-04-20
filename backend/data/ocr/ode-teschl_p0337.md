corresponding to some section $\Sigma$ (to be specified later). Since we expect the $\varepsilon$ derivative to be of importance, we fix $x_0 \in \Sigma$ and compute

$$\frac{\partial}{\partial \varepsilon} \Phi(\tau(x_0, \varepsilon), x_0, \varepsilon) - x_0 \bigg|_{\varepsilon=0} = \dot{\Phi}(T(x_0), x_0) \frac{\partial \tau}{\partial \varepsilon}(x_0, 0) + \frac{\partial}{\partial \varepsilon} \Phi(T(x_0), x_0, \varepsilon) \bigg|_{\varepsilon=0} = \frac{\partial \tau}{\partial \varepsilon}(x_0, 0) f(x_0) + x_ \varepsilon(T(x_0)),$$

(12.53)

where $x_ \varepsilon(t)$ is the solution of the variational equation

$$\dot{x}_ \varepsilon(t) = A(t)x_ \varepsilon(t) + g(x(t), 0)$$

(12.54)

corresponding to the initial condition $x_ \varepsilon(0) = 0$. Splitting $g$ according to

$$g(x(s), 0) = \frac{f(x(s))g(x(s), 0)}{|f(x(s))|^2} f(x(s)) + \frac{f(x(s)) \wedge g(x(s), 0)}{|f(x(s))|^2} f^\perp(x(s))$$

(12.55)

and invoking (12.45) we obtain after a little calculation

$$x_ \varepsilon(T(x_0)) = \int_0^{T(x_0)} \Pi_{x_0}(T(x_0), s) g(x(s), 0) ds$$

$$= (N(x_0) + \alpha_{x_0}(T(x_0)) M(x_0)) f(x_0) + M(x_0) f^\perp(x_0),$$

(12.56)

where

$$M(x_0) = \int_0^{T(x_0)} \frac{f(x(s)) \wedge g(x(s), 0)}{\beta_{x_0}(s)|f(x(s))|^2} ds$$

(12.57)

and

$$N(x_0) = \int_0^{T(x_0)} \frac{f(x(s))g(x(s), 0)}{|f(x(s))|^2} ds$$

$$- \int_0^{T(x_0)} \alpha_{x_0}(s) \frac{f(x(s)) \wedge g(x(s), 0)}{\beta_{x_0}(s)|f(x(s))|^2} ds.$$

(12.58)

Putting everything together we have

$$\frac{\partial}{\partial \varepsilon} \Phi(\tau(x, \varepsilon), x, \varepsilon) - x \bigg|_{\varepsilon=0} = \left( \frac{\partial \tau}{\partial \varepsilon}(x, 0) + N(x) + \alpha_{x_0}(T(x)) M(x) \right) f(x) + M(x) f^\perp(x)$$

(12.59)

at any point $x \in \Sigma$.

Now let us fix $x_0$ and choose $\Sigma = \{x_0 + f(x_0)^\perp v | v \in \mathbb{R}\}$. Then the displacement function is

$$\Delta(v, \varepsilon) = \left( \Phi(\tau(x, \varepsilon), x, \varepsilon) - x \right) f^\perp(x_0), \quad x = x_0 + f(x_0)^\perp v,$$

(12.60)

and

$$\frac{\partial \Delta}{\partial \varepsilon}(0, 0) = |f^\perp(x_0)|^2 M(x_0).$$

(12.61)