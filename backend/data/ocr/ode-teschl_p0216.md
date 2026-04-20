and plot the phase portrait

$$\text{In}[4] := \text{PhasePlot}[\{y, -U'[x]\}, \{0, 0.2\}, \{0, 1\}, \{-2\pi, 0.2\}, \{-2\pi, 1\}, \{2\pi, 0.2\}, \{2\pi, 1\}, \{0, 2\}, \{2\pi, -2\}, \{2\pi, 2\}, \{-2\pi, -2\}, \{-2\pi, 2\}, \{0, -2\}, \{0, 2.5\}, \{0, -2.5\}, \{0, 3\}, \{0, -3\}\}, 2\pi, \text{PlotRange} \rightarrow \{\{-2\pi, 2\pi\}, \{-3, 3\}\}, \text{Ticks} \rightarrow \text{False}$$

Now let us start with a rigorous investigation. We restrict our attention to the interval $x \in (-\pi, \pi]$. The fixed points are $x = 0$ and $x = \pi$. Since the potential has a minimum at $x = 0$, it is stable. Next, the level sets of $E(\dot{x}, x) = \text{const}$ are invariant as noted earlier. For $E = 0$ the corresponding level set is the equilibrium position $(\dot{x}, x) = (0, 0)$. For $0 < E < 2$ the level set is homeomorphic to a circle. Since this circle contains no fixed points, it is a regular periodic orbit. Next, for $E = 2$ the level set consists of the fixed point $\pi$ and two non-closed orbits connecting $-\pi$ and $\pi$. It is usually referred to as **separatrix**. For $E > 2$ the level sets are again closed orbits (since we regard everything modulo $2\pi$).

In a neighborhood of the equilibrium position $x = 0$, the system is approximated by its linearization $\sin(x) = x + O(x^2)$ given by

$$\ddot{x} = -x,$$

(6.49)

which is called the **harmonic oscillator**. Since the energy is given by $E = \frac{\dot{x}^2}{2} + \frac{x^2}{2}$, the phase portrait consists of circles centered at 0. More generally, if

$$U'(x_0) = 0, \quad U''(x_0) = \frac{\omega^2}{2} > 0,$$

(6.50)

our system should be approximated by

$$\ddot{y} = -\omega^2 y, \quad y(t) = x(t) - x_0.$$

(6.51)

Clearly this equation can be transformed to (6.49) by scaling time according to $t \rightarrow \frac{t}{\omega}$.