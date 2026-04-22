Figure 149 Slicing the undergraph

See Figure 149. For (5) implies that $m_2((\mathcal{U}f)_x) = m_2(\mathcal{U}f_x) = \int f(x,y) dy$, and then Cavalieri gives

$$\iiint f(x,y) \, dx \, dy = m_3(\mathcal{U}f) = \int [m_2((\mathcal{U}f)_x)] \, dx$$
$$= \int \left[ \int f(x,y) \, dy \right] \, dx.$$

43 Corollary When $f : \mathbb{R}^2 \to [0, \infty)$ is measurable the order of integration in the iterated integrals is irrelevant,

$$\int \left[ \int f(x,y) \, dy \right] \, dx = \iiint f(x,y) \, dx \, dy = \int \left[ \int f(x,y) \, dx \right] \, dy.$$

(In particular if one of the three integrals is finite then so are the other two and all three are equal.)

Proof The difference between “$x$” and “$y$” is only notational. In contrast to the integration of differential forms, the orientation of the plane or 3-space plays no role in Lebesgue integration so the Fubini-Tonelli Theorem applies equally to $x$-slicing and $y$-slicing, which implies that both iterated integrals equal the double integral.