gets minimal, that is, if $L\omega - \frac{1}{\omega C} = 0$ and hence

$$\omega = \omega_0 = \frac{1}{\sqrt{LC}}.$$  

(3.74)

The frequency $\frac{\omega_0}{2\pi}$ is called the resonance frequency of the circuit.

By changing one of the parameters, say $C$, you can tune the circuit to a specific resonance frequency. This idea is for example used to filter your favorite radio station out of many other available ones. In this case the external power source corresponds to the signal picked up by your antenna and the RLC circuit starts only oscillating if the carrying frequency of your radio station matches its resonance frequency.

Furthermore, our example is not only limited to electrical circuits. Many other systems can be described by the differential equation

$$\ddot{x} + 2\eta \dot{x} + \omega_0^2 x = 0, \quad \eta, \omega_0 > 0,$$  

(3.75)

at least for small amplitudes $x(t)$. Here $\frac{\omega_0}{2\pi}$ is the **resonance frequency** of the system and $\eta$ is the damping factor. If you add a periodic **forcing** term,

$$\ddot{x} + 2\eta \dot{x} + \omega_0^2 x = \cos(\omega t),$$  

(3.76)

you will get a maximal effect if the forcing is resonant, that is, $\omega$ coincides with $\omega_0$. If $\eta = 0$, the solution corresponds to a free (undamped) oscillation $x(t) = k_1 \cos(\omega_0 t) + k_2 \sin(\omega_0 t)$ and a resonant forcing will result in a solution whose amplitude tends to $\infty$ (cf. Problem 3.18).

**Problem 3.17.** Solve the following differential equations:

(i) $\ddot{x} + 3\dot{x} + 2x = \sinh(t)$.

(ii) $\ddot{x} + 2\dot{x} + 2x = \exp(t)$.

(iii) $\ddot{x} + 2\dot{x} + x = t^2$.

**Problem 3.18** (Resonance catastrophe). Solve the equation

$$\ddot{x} + \omega_0^2 x = \cos(\omega t), \quad \omega_0, \omega > 0.$$

Discuss the behavior of solutions as $t \to \infty$. The inhomogeneous term is also known as a forcing term. It is **resonant** if $\omega = \omega_0$. What happens in this case?

**Problem 3.19** (Euler equation). Show that the equation

$$\ddot{x} + \frac{c_1}{t} \dot{x} + \frac{c_0}{t^2} x = 0, \quad t > 0,$$

can be solved by introducing the new dependent variable $\tau = \log(t)$. Discuss the possible solutions for $c_0, c_1 \in \mathbb{R}$.