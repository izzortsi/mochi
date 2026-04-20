Moreover, by Liouville’s formula we have $\det \Pi_q(t, s) = 1$ and hence

$$\beta(t) = \frac{U'(q)^2}{U'(q(t))^2 + p(t)^2} \det \Pi_q(t, 0) = \frac{U'(q)^2}{U'(q(t))^2 + p(t)^2}. \tag{12.40}$$

Now putting everything together we obtain

$$\Delta_\varepsilon(q, 0) = \frac{1}{U'(q)} \int_0^{T(q)} \left( p(s)f(p(s), q(s)) + U'(q(s))g(p(s), q(s)) \right) ds. \tag{12.41}$$

The integral on the right-hand side is known as the **Melnikov integral** for periodic orbits.

For example, let me show how this applies to the van der Pol equation (7.32). Here we have $(q = x$ and $p = y)$ the harmonic oscillator $U(q) = q^2/2$ as unperturbed system and the unperturbed orbit is given by $(p(t), q(t)) = (q \sin(t), q \cos(t))$. Hence, using $f(p, q) = 0$, $g(p, q) = q - q^3/3$ we have

$$\Delta_\varepsilon(q, 0) = q \int_0^{2\pi} \cos(s)^2 \left( \frac{\cos(s)^2}{3q^2} - 1 \right) ds = \frac{\pi q}{4}(q^2 - 4) \tag{12.42}$$

and $q = 2$ is a simple zero of $\Delta_\varepsilon(q, 0)$.

This result is not specific to the Hamiltonian form of the vector field as we will show next. In fact, consider the system

$$\dot{x} = f(x) + \varepsilon g(x, \varepsilon). \tag{12.43}$$

Suppose that the unperturbed system $\varepsilon = 0$ has a **period annulus**, that is, an annulus of periodic orbits. Denote the period of a point $x$ in this annulus by $T(x)$.

Fix a periodic point $x_0$ in this annulus and let us derive some facts about the unperturbed system first. Let $\Phi(t, x, \varepsilon)$ be the flow of (12.43) and abbreviate $\Phi(t, x) = \Phi(t, x, 0)$. Using the orthogonal vector field

$$f^\perp(x) = Jf(x), \quad J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}. \tag{12.44}$$

we can make the following ansatz for the principal matrix solution of the first variational equation of the unperturbed system

$$\Pi_{x_0}(t, 0)f(x_0) = f(x(t)),$$

$$\Pi_{x_0}(t, 0)f^\perp(x_0) = \alpha_{x_0}(t)f(x(t)) + \beta_{x_0}(t)f^\perp(x(t)), \tag{12.45}$$

where $x(t) = \Phi(t, x_0)$.