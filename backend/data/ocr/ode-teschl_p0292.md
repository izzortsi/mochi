we see that all initial conditions in $(0,1)$ eventually converge to 0 which is one solution of the fixed point equation $x = L_{\mu}(x)$. If $\mu$ increases beyond 1, it turns out that all initial conditions converge to the second solution $1 - \frac{1}{\mu}$ of the fixed point equation.

$$\text{In}[3] := \text{ShowWeb}[2\#(1 - \#)\&, 0.2, 20]$$

At $\mu = 3$ the behavior changes again and all initial conditions eventually jump back and forth between the two solutions of the equation $L_{\mu}^2(x) = x$ which are not solutions of $L_{\mu}(x) = x$.

$$\text{In}[4] := \text{ShowWeb}[3.1\#(1 - \#)\&, 0.4, 20]$$

Clearly this method of investigating the system gets quite cumbersome. We will return to this problem in Section 11.1.

**Problem 10.1.** If the iteration converges, will the limit always be a fixed point?

**Problem 10.2.** Consider an $m$’th order difference equation

$$x_{n+m} = F(n, x_n, \ldots, x_{n+m-1}).$$

(10.9)

Show that it can be reduced to the iteration of a single map.