Problem 1.2. Consider again the exact model from the previous problem and write

$$\ddot{r} = -\frac{\gamma M \varepsilon^2}{(1 + \varepsilon r)^2}, \quad \varepsilon = \frac{1}{R}.$$

It can be shown that the solution $r(t) = r(t, \varepsilon)$ to the above initial conditions is $C^\infty$ (with respect to both $t$ and $\varepsilon$). Show that

$$r(t) = h - g(1 - 2\frac{h}{R})\frac{t^2}{2} + O(\frac{1}{R^4}), \quad g = \frac{\gamma M}{R^2}.$$

(Hint: Insert $r(t, \varepsilon) = r_0(t) + r_1(t)\varepsilon + r_2(t)\varepsilon^2 + r_3(t)\varepsilon^3 + O(\varepsilon^4)$ into the differential equation and collect powers of $\varepsilon$. Then solve the corresponding differential equations for $r_0(t), r_1(t), \ldots$ and note that the initial conditions follow from $r(0, \varepsilon) = h$ respectively $\dot{r}(0, \varepsilon) = 0$. A rigorous justification for this procedure will be given in Section 2.5.)

1.2. Classification of differential equations

Let $U \subseteq \mathbb{R}^m$, $V \subseteq \mathbb{R}^n$ and $k \in \mathbb{N}_0$. Then $C^k(U, V)$ denotes the set of functions $U \to V$ having continuous derivatives up to order $k$. In addition, we will abbreviate $C(U, V) = C^0(U, V)$, $C^\infty(U, V) = \bigcap_{k \in \mathbb{N}} C^k(U, V)$, and $C^k(U) = C^k(U, \mathbb{R})$.

A classical ordinary differential equation (ODE) is a functional relation of the form

$$F(t, x, x^{(1)}, \ldots, x^{(k)}) = 0$$

for the unknown function $x \in C^k(J)$, $J \subseteq \mathbb{R}$, and its derivatives

$$x^{(j)}(t) = \frac{d^j x(t)}{dt^j}, \quad j \in \mathbb{N}_0.$$

Here $F \in C(U)$ with $U$ an open subset of $\mathbb{R}^{k+2}$. One frequently calls $t$ the independent and $x$ the dependent variable. The highest derivative appearing in $F$ is called the order of the differential equation. A solution of the ODE (1.12) is a function $\phi \in C^k(I)$, where $I \subseteq J$ is an interval, such that

$$F(t, \phi(t), \phi^{(1)}(t), \ldots, \phi^{(k)}(t)) = 0, \quad \text{for all } t \in I.$$

This implicitly implies $(t, \phi(t), \phi^{(1)}(t), \ldots, \phi^{(k)}(t)) \in U$ for all $t \in I$.

Unfortunately there is not too much one can say about general differential equations in the above form (1.12). Hence we will assume that one can solve $F$ for the highest derivative, resulting in a differential equation of the form

$$x^{(k)} = f(t, x, x^{(1)}, \ldots, x^{(k-1)}).$$

By the implicit function theorem this can be done at least locally near some point $(t, y) \in U$ if the partial derivative with respect to the highest derivative