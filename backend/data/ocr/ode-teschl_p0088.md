sum over all voltage differences in a closed loop must vanish (the voltage corresponds to a potential).

In a simple circuit one has three types of different elements, inductors, capacitors, and resistors. For an inductor we have

$$L \dot{I}_L = V_L,$$

(3.58)

where $L > 0$ is the inductance, $I_L(t)$ is the current through the inductor and $V_L(t)$ is the voltage difference between the connectors. For a capacitor we have

$$C \dot{V}_C = I_C,$$

(3.59)

where $C > 0$ is the capacitance, $I_C(t)$ is the current through the capacitor and $V_C(t)$ is the voltage difference. For a resistor we have (Ohm’s law)

$$V_R = R I_R,$$

(3.60)

where $R > 0$ is the resistance, $I_R(t)$ is the current through the resistor and $V_R(t)$ is the voltage difference.

We will look at the case of one inductor $L$, one capacitor $C$, and one resistor $R$ arranged in a loop together with an external power source $V$ (the classical RLC circuit).

Kirchhoff’s laws yield $I_R = I_L = I_C$ and $V_R + V_L + V_C = V$. Using the properties of our three elements we arrive at the second-order linear differential equation

$$L \ddot{I}(t) + R \dot{I}(t) + \frac{1}{C} I(t) = \dot{V}(t)$$

(3.61)

for the current $I$. Let us try to solve this equation for an external sinusoidal voltage

$$V(t) = V_0 \cos(\omega t).$$

(3.62)

It turns out convenient to use the complex voltage $V(t) = V_0 e^{i\omega t}$:

$$\ddot{I} + \frac{R}{L} \dot{I} + \frac{1}{LC} I = i \frac{\omega V_0}{L} e^{i\omega t}.$$

(3.63)

We get the solutions for $V(t) = V_0 \cos(\omega t)$ and $V(t) = V_0 \sin(\omega t)$ by taking real and imaginary part of the complex solution, respectively.

The eigenvalues are

$$\alpha_{1,2} = -\eta \pm \sqrt{\eta^2 - \omega_0^2},$$

(3.64)