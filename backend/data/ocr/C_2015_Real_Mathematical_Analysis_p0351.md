Figure 125 $k$-cells in $\mathbb{R}^n$ get pushed forward to $\mathbb{R}^m$ while $k$-forms on $\mathbb{R}^m$ get pulled back to $\mathbb{R}^n$. The formula is $T^*(\omega)(\varphi) = \omega(T_*(\varphi))$.

functional on $C_k(\mathbb{R}^n)$,

$$T^*(fdy_I) : \varphi \mapsto f dy_I(T \circ \varphi)$$
$$= \int_{I^k} f(T \circ \varphi(u)) \frac{\partial(T \circ \varphi)_I}{\partial u} du$$
$$= \sum_J \int_{I^k} f(T \circ \varphi(u)) \left( \frac{\partial T_I}{\partial x_J} \right)_{x=\varphi(u)} \frac{\partial \varphi_J}{\partial u} du.$$

(The Cauchy-Binet Formula is used to go from the second to third lines.) This implies

$$T^*(fdy_I) = \sum_J (T^*f) \frac{\partial T_I}{\partial x_J} dx_J$$

is a $k$-form. $\Omega^k(\mathbb{R}^n)$ and $\Omega^k(\mathbb{R}^m)$ are vector subspaces of $C^k(\mathbb{R}^n)$ and $C^k(\mathbb{R}^m)$. Linearity of $T^*$ promotes (21) to general forms, which completes the proof that the pullback of a form is a form. Thus $T^* : \Omega^k(\mathbb{R}^m) \to \Omega^k(\mathbb{R}^n)$. It remains to check that $T^*(dy_I) = dT_I$. If $I = (i_1, \ldots, i_k)$ then distributivity of the wedge product and the