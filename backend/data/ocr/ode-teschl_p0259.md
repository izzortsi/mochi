In particular, the system decouples and the solution of the first part is given by $q_1(t) = q_1(0) + \dot{q}_1(0)t$. To solve the second, observe that it is invariant under rotations and, invoking again Theorem 8.9, we infer that the angular momentum

$$l = \mu q_2 \wedge \dot{q}_2$$

is another first integral. Hence we have found three first integrals and we suspect that our system is integrable. However, since

$$\{l_1, l_2\} = l_3, \quad \{l_1, l_3\} = -l_2, \quad \{l_2, l_3\} = l_1$$

they are not in involution. But using $\{l, |l|^2\} = 0$ it is not hard to see.

**Theorem 8.12.** The two body problem is completely integrable. A full set of first integrals which are functionally independent and in involution is given by

$$p_{11}, \quad p_{12}, \quad p_{13}, \quad \frac{\mu}{2} p_2^2 + U(q_2), \quad |l|^2, \quad l_3,$$

where $p_1 = M\dot{q}_1$ and $p_2 = \mu\dot{q}_2$.

Our next step would be to compute the action angle variables. But since this is quite cumbersome, we will use a more direct approach to solve the equation of motions. Since the motion is confined to the plane perpendicular to $l$ (once the initial condition has been chosen), it suggests itself to choose polar coordinates $(r, \varphi)$ in this plane. The angular momentum now reads

$$l_0 = |l| = \mu r^2 \dot{\varphi}$$

and conservation of energy implies

$$\frac{\mu}{2} \left( \dot{r}^2 + \frac{l_0^2}{\mu^2 r^2} \right) + U(r) = E.$$

Hence, $r(t)$ follows (implicitly) from

$$\dot{r} = \sqrt{\frac{2(E - U(r))}{\mu}} - \frac{l_0^2}{\mu^2 r^2}$$

via separation of variables. In case of the Kepler problem (gravitational force)

$$U(r) = -\frac{\gamma}{r}$$

it is possible to compute the integral, but not to solve for $r$ as a function of $t$. However, if one is only interested in the shape of the orbit one can look at $r = r(\varphi)$ which satisfies

$$\frac{1}{r^2} \frac{dr}{d\varphi} = \sqrt{\frac{2\mu(E - U(r))}{l_0^2}} - \frac{1}{r^2}.$$