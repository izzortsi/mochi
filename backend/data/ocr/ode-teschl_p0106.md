If $\Delta^2 < 1$ we have two different complex conjugate eigenvalues and hence two solutions

$$e^{\pm i\gamma t} p_{\pm}(t), \quad p_{\pm}(t + T) = p_{\pm}(t), \quad \gamma > 0,$$

(3.142)

where $\gamma = \text{Im}(\gamma_+)$.

If $\Delta^2 = 1$ we have $\rho_{\pm} = \Delta$ and either two solutions

$$p_{\pm}(t), \quad p_{\pm}(t + T) = \sigma p_{\pm}(t),$$

(3.143)

or two solutions

$$p_+(t), \quad p_-(t) + t p_+(t), \quad p_{\pm}(t + T) = \sigma p_{\pm}(t),$$

(3.144)

where $\sigma = \text{sgn}(\Delta) = \Delta$.

Since a periodic equation is called **stable** if all solutions are bounded, we have shown:

**Theorem 3.19.** Hill’s equation is stable if $|\Delta| < 1$ and unstable if $|\Delta| > 1$.

This result is of practical importance in applications. For example, the potential of a charged particle moving in the electric field of a quadrupole is given by

$$U(x) = e \frac{V}{a^2} \left( x_1^2 - x_2^2 \right).$$

(3.145)

The corresponding equations of motion are Newton’s equation (1.5), where the force is given by

$$F(x) = -\frac{\partial}{\partial x} U(x).$$

(3.146)

If the voltage $V$ varies with respect to time according to $V(t) = V_0 + V_1 \cos(t)$, one gets the following equations of motion (neglecting the induced magnetic field)

$$\ddot{x}_1 = -\frac{2e}{ma^2} \left( V_0 + V_1 \cos(t) \right) x_1,$$

$$\ddot{x}_2 = +\frac{2e}{ma^2} \left( V_0 + V_1 \cos(t) \right) x_2,$$

$$\ddot{x}_3 = 0.$$

(3.147)

The equation for the $x_1$ and $x_2$ coordinates is the **Mathieu equation**

$$\ddot{x} = -\omega^2 \left( 1 + \varepsilon \cos(t) \right) x.$$

(3.148)

A numerically computed stability diagram is depicted in Figure 3.6. The shaded regions are the ones where $\Delta(\omega, \varepsilon)^2 > 1$, that is, where the equation is unstable. Observe that these unstable regions emerge from the points $2\omega \in \mathbb{N}_0$ where $\Delta(\omega, 0) = \cos(2\pi\omega) = \pm 1$.

Varying the voltages $V_0$ and $V_1$ one can achieve that the equation is only stable (in the $x_1$ or $x_2$ direction) if the mass of the particle lies within