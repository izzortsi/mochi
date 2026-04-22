Proof If $T$ is an orientation-preserving diffeomorphism of $I^k$ to itself then the Jacobian $\partial T/\partial u$ is positive. The product determinant formula and the change of variables formula for multiple integrals applied to $\omega = fdx_I$ give

$$\int_{\varphi \circ T} \omega = \int_{I^k} f(\varphi \circ T(u)) \frac{\partial(\varphi \circ T)_I}{\partial u} du$$
$$= \int_{I^k} f(\varphi \circ T(u)) \left( \frac{\partial \varphi_I}{\partial v} \right)_{v=T(u)} \frac{\partial T}{\partial u} du$$
$$= \int_{I^k} f(\varphi(v)) \frac{\partial \varphi_I}{\partial v} dv = \int_{\varphi} \omega.$$

Taking sums shows that the equation $\int_{\varphi \circ T} \omega = \int_{\varphi} \omega$ continues to hold for all $\omega \in \Omega^k$. If $T$ reverses orientation, its Jacobian is negative. In the change of variables formula appears the absolute value of the Jacobian, which causes $\int_{\varphi \circ T} \omega$ to change sign. $\square$

A particular case of the previous theorem concerns line integrals in the plane. The integral of a 1-form over a curve $C$ does not depend on how $C$ is parameterized. If we first parameterize $C$ using a parameter $t \in [0,1]$ and then reparameterize it by arclength $s \in [0,L]$ where $L$ is the length of $C$ and the orientation of $C$ remains the same then integrals of 1-forms are unaffected,

$$\int_0^1 f(x(t),y(t)) \frac{dx(t)}{dt} dt = \int_0^L f(x(s),y(s)) \frac{dx(s)}{ds} ds$$
$$\int_0^1 g(x(t),y(t)) \frac{dy(t)}{dt} dt = \int_0^L g(x(s),y(s)) \frac{dy(s)}{ds} ds.$$

Form Names

A $k$-tuple $I = (i_1, \ldots, i_k)$ ascends if $i_1 < \cdots < i_k$.

37 Proposition Each $k$-form $\omega$ has a unique expression as a sum of simple $k$-forms with ascending $k$-tuple indices,

$$\omega = \sum f_A dx_A.$$

Moreover, the coefficient $f_A(x)$ in this “ascending presentation” of $\omega$ is determined by the value of $\omega$ on small $k$-cells at $x$.

Proof Every $k$-tuple of distinct indices has a unique ascending rearrangement. The other $k$-tuples correspond to the zero $k$-form. Using the signed commutativity property of forms, we regroup and combine a sum of simple forms into terms in which the indices ascend. This gives the existence of an ascending presentation $\omega = \sum f_A dx_A$.