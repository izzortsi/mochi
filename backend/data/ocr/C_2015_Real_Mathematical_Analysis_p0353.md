which is merely the Chain Rule expression for $d(f \circ T) = d(T^*f)$,

$$d(f \circ T) = \sum_{j=1}^{n} \left( \frac{\partial f(T(x))}{\partial x_j} \right) dx_j.$$

Thus, $T^*d\omega = dT^*\omega$ for 0-forms.

Next consider a simple $k$-form $\omega = f dy_I$ with $k \geq 1$. Using (a), the degree-zero case, and the wedge differentiation formula, we get

$$d(T^*\omega) = d(T^*f dT_I)$$
$$= d(T^*f) \wedge dT_I + (-1)^0 T^*f \wedge d(T_I)$$
$$= T^*(df) \wedge dT_I$$
$$= T^*(df \wedge dy_I)$$
$$= T^*(d\omega).$$

Linearity promotes this to general $k$-forms and completes the proof of (c).

9 The General Stokes Formula

In this section we establish the general Stokes formula as

$$\int_\varphi d\omega = \int_{\partial\varphi} \omega,$$

where $\omega \in \Omega^k(\mathbb{R}^n)$ and $\varphi \in C_{k+1}(\mathbb{R}^n)$. Then, as special cases, we reel off the standard formulas of vector calculus. Finally, we discuss antidifferentiation of forms and briefly introduce de Rham cohomology.

First we verify Stokes’ formula on a cube, and then get the general case by means of the pullback.

Definition A $k$-chain is a formal linear combination† that of $k$-cells,

$$\Phi = \sum_{j=1}^{N} a_j \varphi_j,$$

where $a_1, \ldots, a_N$ are real constants. The integral of a $k$-form $\omega$ over $\Phi$ is

$$\int_\Phi \omega = \sum_{j=1}^{N} a_j \int_{\varphi_j} \omega.$$

†To be more precise, but no more informative, we form an infinite-dimensional vector space $V$ using an uncountable basis consisting of all all $k$-cells in $\mathbb{R}^n$. Then $\Phi = \sum_{j=1}^{N} a_j \varphi_j$ is a vector in $V$.