The solution is given by (Problem 8.20)

$$r(\varphi) = \frac{p}{1 - \varepsilon \cos(\varphi - \varphi_0)}, \quad p = \frac{l_0^2}{\gamma \mu}, \quad \varepsilon = \sqrt{1 + \frac{2El_0^2}{\mu \gamma^2}}$$

Thus the orbit is an ellipsis if $\varepsilon < 1$, a parabola if $\varepsilon = 1$, and a hyperbola if $\varepsilon > 1$.

In the case of an ellipsis the motion is periodic and the period $T$ is given by bringing the square root in (8.93) to the left and integrating from the smallest radius $r_-$ to the largest $r_+$:

$$\frac{T}{2} = \frac{l_0}{\mu} \int_{r_-}^{r_+} \left( \left( \frac{1}{r} - \frac{1}{r_+} \right) \left( \frac{1}{r_-} - \frac{1}{r} \right) \right)^{-1/2} dr = \pi \sqrt{\frac{\mu}{\gamma}} \left( \frac{p}{1 - \varepsilon^2} \right)^{3/2},$$

where $r_± = \frac{p}{1 + \varepsilon}$.

Equations (8.96), (8.91), and (8.97) establish Kepler’s first, second, and third law for planetary motion:

(i) The orbit of every planet is an ellipse with the Sun at one focus.

(ii) A line segment joining a planet and the Sun sweeps out equal areas during equal time intervals.

(iii) The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit.

Problem 8.20. Solve (8.95). (Hint: Use the transformation $\rho = r^{-1}$.)

8.6. The KAM theorem

In the last section we were quite successful solving the two body problem. However, if we want to investigate the motion of planets around the sun under the influence of the gravitational force we need to consider the general $N$-body problem where the kinetic energy is given by

$$T(\dot{x}) = \sum_{j=1}^{N} \frac{m_j}{2} \dot{x}_j^2$$

and the potential energy is

$$U(x) = \sum_{1 \leq j < k \leq N} U_{jk}(|x_j - x_k|).$$

In case of the gravitational force one has

$$U_{jk}(|x_j - x_k|) = \frac{m_j m_k}{|x_j - x_k|}.$$

However, whereas we could easily solve this problem for $N = 2$, this is no longer possible for $N \geq 3$. In fact, despite of the efforts of many astronomers and mathematicians, very little is known for this latter case.