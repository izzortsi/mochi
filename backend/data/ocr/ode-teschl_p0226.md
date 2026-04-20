Problem 7.5 (Competing species). Suppose you have two species $x$ and $y$ such that one inhibits the growth of the other. A simple model describing such a situation would be

$$\begin{align*}
\dot{x} &= (A - By)x \\
\dot{y} &= (C - Dx)y
\end{align*}, \quad A, B, C, D > 0.

Find out as much as possible about this system.

Problem 7.6 (Competing species with limited growth). Consider the same setting as in the previous problem but now with limited growth. The equations read

$$\begin{align*}
\dot{x} &= (1 - y - \lambda x)x \\
\dot{y} &= \alpha (1 - x - \mu y)y
\end{align*}, \quad \alpha, \lambda, \mu > 0.

Again, find out as much as possible about this system.

7.2. Examples from electrical engineering

In this section we want to come back to electrical circuits, which we already considered in Section 3.3. We will again look at the case of one inductor, one capacitor, and one resistor arranged in a loop. However, this time we want to consider a resistor with arbitrary characteristic

$$V_R = R(I_R).$$

(7.21)

Since there is no potential difference if there is no current, we must have $R(0) = 0$. For a classical resistor we have $R(I) = RI$, where the resistance $R$ is a constant (Ohm’s law), but for sophisticated elements like semiconductors the relation is more complicated. For example, the characteristic of a diode is given by

$$V = \frac{kT}{q} \log(1 + \frac{I}{I_L}),$$

(7.22)

where $I_L$ is the leakage current, $q$ the charge of an electron, $k$ the Boltzmann constant and $T$ the absolute temperature.

In the positive direction you need only a very small voltage to get a large current whereas in the other direction you will get almost no current even for fairly large voltages. Hence one says that a diode lets the current pass in only one direction.

Kirchhoff’s laws yield $I_R = I_L = I_C$ and $V_R + V_L + V_C = 0$. Using the properties of our three elements and eliminating, say, $I_C$, $I_R$, $V_L$, $V_R$ we obtain the system

$$\begin{align*}
L \dot{I}_L &= -V_C - R(I_L) \\
C \dot{V}_C &= I_L
\end{align*}, \quad R(0) = 0, \quad L, C > 0.$$

(7.23)