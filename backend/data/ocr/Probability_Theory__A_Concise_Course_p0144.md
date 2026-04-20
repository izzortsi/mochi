(see Figure 13). In this case, there is a whole family of integral curves $x_{\tau}(t)$ going through the point $(0, 1)$, where each $x_{\tau}(t)$ is parameterized by the appropriate value of $\tau \geqslant 0$. Among these integral curves, the curve $x_0(t)$ shown in the figure, corresponding to the value $\tau = 0$, has the property of lying below all the other integral curves, i.e.,

$$x_0(t) \leqslant x_{\tau}(t), \quad 0 \leqslant t < \infty.$$

This is explained by the fact that the solution of our differential equation is unique in the region $0 \leqslant x < 1, 0 \leqslant t < \infty$, so that the integral curves do not intersect in this region. It is also easy to see that the integral curve $x_0(t)$ is the limit of the integral curves $x(t, z)$ lying below it and passing through points $(0, z)$ such that $0 \leqslant z < 1$. In other words,$$x_0(t) = \lim_{s \to 1} x(t, z).$$

(17)

The above analysis of the differential equation (9) has some interesting implications for the corresponding branching process $\xi(t)$. In general, there is a positive probability that no particles at all are present at a given time $t$. Naturally, this cannot happen if $\lambda_0 = 0$, since then particles can only be "created" but not "annihilated." Clearly, the probability of all particles having disappeared after time $t$ is

$$p_0(t) = F(t, 0)$$

if there is only one particle originally present at time $t = 0$, and

$$p_{k0}(t) = [F(t, 0)]^k = [p_0(t)]^k$$

if there are $k$ particles at time $t = 0$. The function $p_0(t)$ is the solution of the differential equation (9) corresponding to the parameter $z = 0$:

$$\frac{dp_0(t)}{dt} = f[p_0(t)], \quad p_0(0) = 0.$$

As already shown, this solution asymptotically approaches some value $p_0 = \alpha$ as $t \to \infty$, where $\alpha$ is the smaller root of the equation $f(x) = 0$ [recall (13)]. Thus $p_0 = \alpha$ is the extinction probability of the branching process $\xi(t)$, i.e., the probability that all the particles will eventually disappear. If the function $f(x)$ is positive in the whole interval $0 \leqslant x < 1$, the extinction probability equals 1.

*Note that $x(t, z) = F(t, z)$ for $t \geqslant 0, 0 \leqslant z < 1$.*