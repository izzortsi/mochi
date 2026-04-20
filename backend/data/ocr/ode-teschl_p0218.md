Problem 6.24 (Korteweg–de Vries equation). The Korteweg–de Vries equation

$$\frac{\partial}{\partial t} u(t,x) + \frac{\partial^3}{\partial x^3} u(t,x) + 6u(t,x) \frac{\partial}{\partial x} u(t,x)$$

is a model for shallow water waves. One of its outstanding features is the existence of so-called solitons, that is, waves which travel in time without changing their shape.

To find the one soliton solution make the traveling wave ansatz $u(x,t) = v(x-ct), c \in \mathbb{R}$, which yields

$$-cv' + v''' + 6vv' = 0.$$

This equation can be integrated once

$$v'' - cv + 3v^2 + a = 0$$

such that one obtains an equation of Newton type with a cubic potential $U(v) = v^3 - \frac{c}{2}v^2 - av$. Physicists are interested in solutions which satisfy $\lim_{x \to \pm\infty} v(x) = 0$. How does this limit the admissible parameters $a, c$? Find the corresponding shape $v(x)$.

Note that if we eliminate the $-cv'$ term via the transformation $v(x) = -2w(x) + \frac{c}{6}$, we obtain the differential equation

$$w''' = 12w'w$$

for the Weierstraß elliptic function $\wp(x)$. The function $v(x) = -2\wp(x) + \frac{c}{6}$ corresponds to a periodic solution of the Newton equation.

Problem 6.25. Show that all solutions are periodic if $\lim_{|x| \to \infty} U(x) = +\infty$.

Problem 6.26. The mathematical pendulum with friction is described by

$$\ddot{x} = -\eta \dot{x} - \sin(x), \quad \eta > 0.$$

Is the energy still conserved in this case? Show that the energy can be used as a Liapunov function and prove that the fixed point $(\dot{x}, x) = (0, 0)$ is (asymptotically) stable. How does the phase portrait change?

Problem 6.27. Consider a more general system with friction

$$\ddot{x} = -\eta(x)\dot{x} - U'(x), \quad \eta(x) > 0.$$

(i) Use the energy to show that there are no regular periodic solutions (compare Problem 7.11).

(ii) Show that minima of $U(x)$ are asymptotically stable.