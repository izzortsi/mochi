Lemma 12.11. The coefficients $\alpha_{x_0}(t)$ and $\beta_{x_0}(t)$ are given by

$$\beta_{x_0}(t) = \frac{|f(x_0)|^2}{|f(x(t))|^2} \mathrm{e}^{\int_0^t \mathrm{div}(f(x(s)))ds}$$

$$\alpha_{x_0}(t) = \int_0^t \frac{\beta_{x_0}(s)}{|f(x(s))|^2} f(x(s))[J, A(s)]f(x(s))ds,$$

(12.46)

where $x(t) = \Phi(t, x_0)$ and $A(t) = df_{x(t)}$.

Proof. Since $\beta(t) = \frac{|f(x_0)|^2}{|f(x(t))|^2} \det(\Pi_{x_0})$ the first equation follows from Liouville’s formula. Next, differentiating (12.45) with respect to $t$ shows

$$\dot{\alpha}(t)f(x(t)) + \dot{\beta}(t)f^{\perp}(x(t)) = \beta(t)(A(t)f^{\perp}(x(t)) - (A(t)f(x(t)))^{\perp}$$

since $\dot{f}(x(t)) = A(t)f(x(t))$. Multiplying both sides with $f(x(t))$ and integrating with respect to $t$ proves the claim since $\alpha(0) = 0$.

Now denote by $\Psi(t, x)$ the flow of the orthogonal vector field $f^{\perp}(x)$ and let us introduce the more suitable coordinates

$$x(u, v) = \Phi(u, \Psi(v, x_0)).$$

(12.47)

Abbreviate $T(v) = T(x(u, v))$ and differentiate $\Phi(T(v), x(u, v)) - x(u, v) = 0$ with respect to $v$ producing

$$\dot{\Phi}(T(v), x(u, v)) \frac{\partial T}{\partial v}(v) + \frac{\partial \Phi}{\partial x}(T(v), x(u, v)) \frac{\partial x}{\partial v}(u, v) = \frac{\partial x}{\partial v}(u, v).$$

(12.48)

Evaluating at $(u, v) = (0, 0)$ gives

$$\Pi_{x_0}(T(x_0), 0)f^{\perp}(x_0) + \frac{\partial T}{\partial v}(0)f(x_0) = f^{\perp}(x_0).$$

(12.49)

Using (12.45) we obtain

$$(\alpha_{x_0}(T(x_0)) - \frac{\partial T}{\partial v}(0))f(x_0) = (1 - \beta_{x_0}(T(x_0)))f^{\perp}(x_0)$$

(12.50)

or equivalently

$$\alpha_{x_0}(T(x_0)) = \frac{\partial T}{\partial v}(0) = \frac{\partial T}{\partial x}(x_0)f^{\perp}(x_0), \quad \beta_{x_0}(T(x_0)) = 1.$$

(12.51)

After these preparations, let us consider the Poincaré map

$$P_{\Sigma}(x, \varepsilon) = \Phi(\tau(x, \varepsilon), x, \varepsilon), \quad x \in \Sigma,$$

(12.52)