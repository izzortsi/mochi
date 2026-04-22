definition of the exterior derivative of a function imply that

$$dT_I = dT_{i_1} \wedge \cdots \wedge dT_{i_k} = \left( \sum_{s_1=1}^{n} \frac{\partial T_{i_1}}{\partial x_{s_1}} dx_{s_1} \right) \wedge \cdots \wedge \left( \sum_{s_k=1}^{n} \frac{\partial T_{i_k}}{\partial x_{s_k}} dx_{s_k} \right)$$

$$= \sum_{s_1, \ldots, s_k=1}^{n} \frac{\partial T_{i_1}}{\partial x_{s_1}} \cdots \frac{\partial T_{i_k}}{\partial x_{s_k}} dx_{s_1} \wedge \cdots \wedge dx_{s_k}$$

The indices $i_1, \ldots, i_k$ are fixed. All terms with repeated dummy indices $s_1, \ldots, s_k$ are zero, so the sum is really taken as $(s_1, \ldots, s_k)$ varies in the set of $k$-tuples with no repeated entry, and then we know that $(s_1, \ldots, s_k)$ can be expressed uniquely as $(s_1, \ldots, s_k) = \pi J$ for an ascending $J = (j_1, \ldots, j_k)$ and a permutation $\pi$. Also, $dx_{s_1} \wedge \cdots \wedge dx_{s_k} = \text{sgn}(\pi) dx_J$. This gives

$$dT_I = \sum_J \left( \sum_\pi \text{sgn}(\pi) \frac{\partial T_{i_1}}{\partial x_{\pi(j_1)}} \cdots \frac{\partial T_{i_k}}{\partial x_{\pi(j_k)}} \right) dx_J = \sum_J \frac{\partial T_I}{\partial x_J} dx_J$$

and hence $T^*(dy_I) = dT_I$. Here we used the description of the determinant from Appendix E.

(b) For 0-forms it is clear that the pullback of a product is the product of the pullbacks, $T^*(fg) = T^*f T^*g$. Suppose that $\alpha$ is a simple $k$-form and $\beta$ is a simple $\ell$-form. Then $\alpha = f dy_I$, $\beta = g dy_J$, and $\alpha \wedge \beta = fg dy_{IJ}$. By (a) we get

$$T^*(\alpha \wedge \beta) = T^*(fg) dT_{IJ} = T^*f T^*g dT_I \wedge dT_J = T^*\alpha \wedge T^*\beta.$$

Wedge distributivity and pullback linearity complete the proof of (b).

(c) If $\omega$ is a form of degree 0, $\omega = f \in \Omega^0(\mathbb{R}^m)$, then

$$T^*(df)(x) = T^*\left( \sum_{i=1}^{m} \frac{\partial f}{\partial y_i} dy_i \right)$$

$$= \sum_{i=1}^{m} T^*\left( \frac{\partial f}{\partial y_i} \right) T^*(dy_i)$$

$$= \sum_{i=1}^{m} \left( \frac{\partial f(y)}{\partial y_i} \right)_{y=T(x)} dT_i$$

$$= \sum_{i=1}^{m} \sum_{j=1}^{n} \left( \frac{\partial f(y)}{\partial y_i} \right)_{y=T(x)} \left( \frac{\partial T_i}{\partial x_i} \right) dx_j,$$