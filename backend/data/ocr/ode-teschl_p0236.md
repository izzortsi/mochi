particular, its $\omega_+((x_0, y_0))$ limit set consists of three fixed points plus the orbits joining them.

To prove this consider $H(x, y) = x^2(1 + y) + \frac{y^2}{2}$ and observe that its change along trajectories

$$\dot{H} = 2\alpha(1 - y - 2x^2)x^2(1 + y)$$

is nonnegative inside our region (its boundary is given by $H(x, y) = \frac{1}{2}$). Hence it is straightforward to show that every orbit other than the fixed point $(0, 0)$ converges to the boundary.

Note that while Lemma 7.15 allows only one orbit in $\omega_\sigma(x)$ to connect different fixed points in $\omega_\sigma(x)$. There could be more than one (even infinitely many) connecting to the same fixed point as the following example shows.

**Example.** Consider the vector field

$$f(x, y) = \begin{pmatrix} y \\ -\eta E(x, y)^2 x - U'(x) \end{pmatrix},$$

where

$$E(x, y) = \left(\frac{y^2}{2} + U(x)\right), \quad U(x) = x^2(x^2 - 1).$$

In the case $\eta = 0$ this is a Newton equation with potential $U(x)$ (cf. Section 6.7). There are two stable fixed points $(\pm \frac{1}{\sqrt{2}}, 0)$ and an unstable one $(0, 0)$ plus there are two separatrices

$$\begin{pmatrix} x(t) \\ y(t) \end{pmatrix} = \pm \frac{1}{\cosh(\sqrt{2}t)} \begin{pmatrix} 1 \\ -\sqrt{2} \tanh(\sqrt{2}t) \end{pmatrix},$$

satisfying $E(x(t), y(t)) = 0$. If we consider $\eta > 0$ then the energy $E(x, y)$ will decrease as $t$ increases since $\frac{d}{dt}E = -\eta E^2y^2$ for all orbits except the two separatrices. In particular, all orbits in the region $E > 0$ will have the set consisting of the two separatrices and the fixed point $(0, 0)$ as $\omega_+((x_0, y_0))$.

Let me also remark, that since the domain surrounded by a periodic orbit is invariant, Lemma 6.8 implies