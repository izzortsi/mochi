Proof. Abbreviate $\phi(t) = \exp \left( -\int_{0}^{t} \beta(s) ds \right)$. Then one computes

$$\frac{d}{dt} \phi(t) \int_{0}^{t} \beta(s) \psi(s) ds = \beta(t) \phi(t) \left( \psi(t) - \int_{0}^{t} \beta(s) \psi(s) ds \right) \leq \alpha(t) \beta(t) \phi(t)$$

by our assumption (2.34). Integrating this inequality with respect to $t$ and dividing the resulting equation by $\phi(t)$ shows

$$\int_{0}^{t} \beta(s) \psi(s) ds \leq \int_{0}^{t} \alpha(s) \beta(s) \frac{\phi(s)}{\phi(t)} ds.$$

Adding $\alpha(t)$ on both sides and using again (2.34) finishes the proof of the first claim. The second claim is left as an exercise (Problem 2.11).

We will also frequently use the following simple consequence (Problem 2.12): If

$$\psi(t) \leq \alpha + \int_{0}^{t} (\beta \psi(s) + \gamma) ds, \quad t \in [0, T],$$

for given constants $\alpha \in \mathbb{R}$, $\beta \geq 0$, and $\gamma \in \mathbb{R}$, then

$$\psi(t) \leq \alpha \exp(\beta t) + \frac{\gamma}{\beta} (\exp(\beta t) - 1), \quad t \in [0, T].$$

In the case $\beta = 0$ the right-hand side has to be replaced by its limit $\psi(t) \leq \alpha + \gamma t$. Of course this last inequality does not provide any new insights.

Now we can show that our IVP is well-posed.

Theorem 2.8. Suppose $f, g \in C(U, \mathbb{R}^n)$ and let $f$ be locally Lipschitz continuous in the second argument, uniformly with respect to the first. If $x(t)$ and $y(t)$ are respective solutions of the IVPs

$$\begin{align*}
\dot{x} &= f(t, x) \\
x(t_0) &= x_0
\end{align*}$$

and

$$\dot{y} &= g(t, y) \\
y(t_0) &= y_0,
$$

then

$$|x(t) - y(t)| \leq |x_0 - y_0| e^{L|t-t_0|} + \frac{M}{L} (e^{L|t-t_0|} - 1),$$

where

$$L = \sup_{(t,x) \neq (t,y) \in V} \frac{|f(t,x) - f(t,y)|}{|x-y|}, \quad M = \sup_{(t,x) \in V} |f(t,x) - g(t,x)|,$$

with $V \subset U$ some set containing the graphs of $x(t)$ and $y(t)$.

Proof. Without restriction we set $t_0 = 0$. Then we have

$$|x(t) - y(t)| \leq |x_0 - y_0| + \int_{0}^{t} |f(s,x(s)) - g(s,y(s))| ds.$$