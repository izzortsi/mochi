In addition, note that the change of energy in each element is given by $IV$. By Kirchhoff’s laws we have

$$I_L V_L + I_C V_C + I_R V_R = 0,$$

(7.24)

which can be rewritten as

$$\frac{d}{dt} \left( \frac{L}{2} I_L^2 + \frac{C}{2} V_C^2 \right) = -I_R R(I_R).$$

(7.25)

That is, the energy dissipated in the resistor has to come from the inductor and the capacitor.

Finally, scaling $V_C$ and $t$ we end up with Liénard’s equation (compare Problem 7.7)

$$\begin{align*}
\dot{x} &= y - f(x) \\
\dot{y} &= -x
\end{align*},$$

$$f(0) = 0.$$

(7.26)

Equation (7.25) now reads

$$\frac{d}{dt} W(x, y) = -x f(x),$$

$$W(x, y) = \frac{x^2 + y^2}{2}.$$

(7.27)

This equation will be our topic for the rest of this section. First of all, the only fixed point is $(0, 0)$. If $xf(x) > 0$ in a neighborhood of $x = 0$, then $W$ is a Liapunov function and hence $(0, 0)$ is stable. Moreover, we even have

**Theorem 7.5.** Suppose $xf(x) \geq 0$ for all $x \in \mathbb{R}$ and $xf(x) > 0$ for $0 < |x| < \varepsilon$. Then every trajectory of Liénard’s equation (7.26) converges to $(0, 0)$.

**Proof.** If $W(x, y)$ is constant on an orbit, say $W(x, y) = R^2/2$, then the orbit must be a circle of radius $R$. Hence we must have $\dot{W} = -xf(x) = 0$ for $0 \leq |x| \leq R$ and the result follows from the Krasovskii–LaSalle principle (Theorem 6.14).

Conversely, note that $(0, 0)$ is unstable if $xf(x) < 0$ for $0 < |x| < \varepsilon$. In fact, the above argument shows that within this region the distance to the fixed point will increase.

We will now show that Liénard’s equation has periodic orbits if $f$ is odd and if $xf(x)$ is negative for $x$ small and positive for $x$ large. More precisely, we will need the following assumptions. Suppose $f$ is differentiable such that

(i) $f$ is odd, that is, $f(-x) = -f(x)$.

(ii) $f(x) < 0$ for $0 < x < \alpha$ ($f(\alpha) = 0$ without restriction).

(iii) $\liminf_{x \to \infty} f(x) > 0$ and in particular $f(x) > 0$ for $x > \beta$ ($f(\beta) = 0$ without restriction).

(iv) $f(x)$ is monotone increasing for $x > \alpha$ (i.e., $\alpha = \beta$).