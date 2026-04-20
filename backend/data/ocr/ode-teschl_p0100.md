gives a $(n-1)$’th order equation for $\dot{c}$: Setting $q_n = 1$ and using Leibniz rule we obtain

$$\sum_{j=0}^{n} q_j x^{(j)} = \sum_{j=0}^{n} q_j \sum_{k=0}^{j} \binom{j}{k} c^{(k)} \phi_1^{(j-k)} = \sum_{j=0}^{n} q_j \sum_{k=1}^{j} \binom{j}{k} c^{(k)} \phi_1^{(j-k)},$$

(3.115)

where we have used $\sum_{j=0}^{n} q_j c\phi_1^{(j)} = 0$ for $k = 0$. Thus $x$ solves (3.102) if and only if $d = \dot{c}$ solves

$$\sum_{k=0}^{n-1} d^{(k)} \sum_{j=k+1}^{n} \binom{j}{k+1} q_j \phi_1^{(j-k-1)} = 0.$$

(3.116)

Hence it remains to solve this $(n-1)$’th order equation for $d$ and perform one additional integration to obtain $c$.

**Example.** Consider the differential equation

$$\ddot{x} - 2t\dot{x} - 2x = 0$$

and observe that $\phi_1(t) = e^{t^2}$ is a solution. Hence we can set $x(t) = e^{t^2}c(t)$ to obtain

$$\left( e^{t^2}\ddot{c}(t) + 4te^{t^2}\dot{c}(t) + (2 + 4t^2)e^{t^2}c(t) \right) - 2\left( e^{t^2}\dot{c}(t) + 2te^{t^2}c(t) \right) - 2e^{t^2}c(t) = e^{t^2}(\ddot{c}(t) + 2t\dot{c}(t)) = 0.$$

The solution of this equation is given by

$$\dot{c}(t) = e^{-t^2}$$

implying

$$c(t) = \int_0^t e^{-s^2} ds = \frac{\sqrt{\pi}}{2} \text{erf}(t),$$

where $\text{erf}(z) = \frac{2}{\sqrt{\pi}} \int_0^z e^{-x^2} dx$ is the Gauss error function. Hence a second solution is given by $\phi_2(t) = e^{t^2} \text{erf}(t)$.

There is also an alternative method based on factorizing the differential equation outlined in Problems 3.35 and 3.36. Moreover, one can choose $q_{n-1}(t) = 0$ without loss of generality by Problem 3.37.

**Problem 3.32.** Use reduction of order to find the general solution of the following equations:

(i) $t\ddot{x} - 2(t+1)\dot{x} + (t+2)x = 0$, $\phi_1(t) = e^t$.

(ii) $t^2\ddot{x} - 3t\dot{x} + 4x = 0$, $\phi_1(t) = t^2$.

**Problem 3.33.** Show that the Wronskian of the two functions $f_1(t) = t^2$ and $f_2(t) = t|t|$ vanishes identically even though the two solutions are not linearly dependent.