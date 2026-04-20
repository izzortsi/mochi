Lemma 7.17. The interior of every periodic orbit must contain a fixed point.

Proof. By the Jordan curve theorem the interior is simply connected and thus conformally equivalent to the unit disc by the Riemann mapping theorem. As the boundary is a Jordan curve, this mapping extends to a homeomorphism to the closed unit disc by the Carathéodory theorem. Since orbits starting in the interior cannot escape to the exterior without crossing the boundary, that is our periodic orbit, the interior is also invariant. $\square$

Periodic orbits attracting other orbits are also called limit cycles and Hilbert’s 16th problem asks for a bound on the number of limit cycles for a planar system with polynomial coefficients.

Note that we can show that every isolated periodic orbit must attract nearby orbits either as $t \to +\infty$ or $t \to -\infty$.

Lemma 7.18. Let $\gamma(y)$ be an isolated regular periodic orbit (such that there are no other periodic orbits within a neighborhood). Then every orbit $\gamma(x)$ starting sufficiently close to $\gamma(y)$ will have either $\omega_{-}(x) = \gamma(y)$ or $\omega_{+}(x) = \gamma(y)$.

Proof. Choose a neighborhood of $\gamma(y)$ which contains no other periodic orbits and a transversal arc $\Sigma \subset N$ containing $y$. Now consider a point $x_0$ on $\Sigma$ outside of $\gamma(y)$ (the case where it is inside is similar). If this point is sufficiently close to $y$ it will stay inside $N$ and return to $\Sigma$ at a point $x_1 \neq y$. Moreover, we will assume that $x_1$ is closer to $y$ (if it is farther away, just reverse time to reduce it to this case). Hence the picture will look as in Figure 7.7 with $\gamma(y)$ inside $M_1$. Now the semi-orbit $\gamma_{+}(x_1)$ remains in $M_1 \setminus M_3 \subset N$, where $M_3$ is the interior of $\gamma(y)$, and the same must be true for $\omega_{+}(x_0)$. Since this set contains only one periodic orbit $\gamma(y)$ we must have $\omega_{+}(x_0) = \gamma(y)$. $\square$

Example. Consider the system

$$\dot{x} = -y + f(r)x \quad \dot{y} = x + f(r)y, \quad r = \sqrt{x^2 + y^2},$$

which in polar coordinates $x = (r \cos(\theta), r \sin(\theta))$ reads just

$$\dot{r} = rf(r), \quad \dot{\theta} = 1.$$

Clearly every positive zero $r_0$ of $f(r)$ will correspond to a periodic orbit which will attract nearby orbits if $\pm f'(r_0) < 0$ for $t \to \pm\infty$. If we consider a double zero we can obtain an example where solutions on one side are attracted as $t \to +\infty$ and on the other side as $t \to -\infty$. Finally, note that the system will be polynomial if $f$ is a polynomial in $r^2$. $\diamond$