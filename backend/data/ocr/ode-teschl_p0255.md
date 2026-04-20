implies

$$Q = \frac{\partial S_2}{\partial P}, \quad p = \frac{\partial S_2}{\partial q}. \tag{8.66}$$

Again, if we require

$$\det \frac{\partial S_2}{\partial P \partial q} \neq 0, \tag{8.67}$$

we obtain a canonical transformation

$$(P, Q) = (P(p, q), \frac{\partial S_2}{\partial P}(P(p, q), q)). \tag{8.68}$$

The remaining two cases

$$S = qp + S_3(Q, p) \quad \text{and} \quad S = qp - PQ + S_4(P, p) \tag{8.69}$$

are left as an exercise.

Now let us return to our canonical form. We will start with one dimension, that is, $n = 1$ with $H(p, q)$ as in (6.52). Let $q_0$ be a local minimum of $U(q)$ surrounded by periodic orbits $\gamma_E$ which are uniquely determined by the energy $E$ of a point on the orbit. The two intersection points of $\gamma_E$ with the $q$ axis to the left and right of $q_0$ will be denoted by $q_-(E)$ and $q_+(E)$, respectively. In particular, note $U(q_\pm(E)) = E$.

The integral over the momentum along such a periodic orbit

$$I(E) = \frac{1}{2\pi} \int_{\gamma_E} p \, dq = \frac{1}{\pi} \int_{q_-(E)}^{q_+(E)} \sqrt{2(E - U(q))} \, dq \tag{8.70}$$

is called the **action variable**. Next, by (6.47)

$$I'(E) = \frac{1}{\pi} \int_{q_-(E)}^{q_+(E)} \frac{dq}{\sqrt{2(E - U(q))}} = \frac{T(E)}{2\pi} > 0, \tag{8.71}$$

where $T(E)$ is the period of $\gamma_E$ and thus we can express $E$ as a function of $I$, say $E = K(I)$. Hence if we take $I$ as one of our new variables, the new Hamiltonian $K$ will depend on $I$ only. To find a suitable second variable we will look for a generating function $S_2(I, q)$. Since we want $p = \frac{\partial S_2}{\partial q}$ we set

$$S_2(I, q) = \int_{q_-(K(I))}^q p \, dq = \int_{q_-(K(I))}^q \sqrt{2(K(I) - U(q))} \, dq \tag{8.72}$$

and the second variable is

$$\theta = \frac{\partial S_2}{\partial I} = \int_{q_-(E)}^q \frac{I'(E)^{-1} dq}{\sqrt{2(E - U(q))}} = \frac{2\pi}{T(E)} t, \tag{8.73}$$

where $t$ is the time it takes from $q_-(E)$ to $q$ (compare again (6.47) and note $K'(I) = I'(E)^{-1}$). The variable $\theta$ is called the **angle variable** and is only