(c) By (b), to check associativity we need not use ascending presentations. Thus if $\alpha = \sum a_I dx_I$, $\beta = \sum b_J dx_J$, and $\gamma = \sum c_K dx_K$ then

$$\alpha \wedge (\beta \wedge \gamma) = \left( \sum_I a_I dx_I \right) \wedge \left( \sum_{J,K} b_J c_K dx_{JK} \right) = \sum_{I,J,K} a_I b_J c_K dx_{IJK},$$

which equals $(\alpha \wedge \beta) \wedge \gamma$.

(d) Associativity implies that it makes sense to write $dx_I$ and $dx_J$ as products $dx_{i_1} \wedge \cdots \wedge dx_{i_k}$ and $dx_{j_1} \wedge \cdots \wedge dx_{j_\ell}$. Thus,

$$dx_I \wedge dx_J = dx_{i_1} \wedge \cdots \wedge dx_{i_k} \wedge dx_{j_1} \wedge \cdots \wedge dx_{j_\ell}.$$

It takes $k\ell$ pair-transpositions to push each $dx_i$ past each $dx_j$, which implies

$$dx_J \wedge dx_I = (-1)^{k\ell} dx_I \wedge dx_J.$$

Distributivity completes the proof of signed commutativity for general $\alpha$ and $\beta$. $\square$

The Exterior Derivative

Differentiating a form is subtle. The idea, as with all derivatives, is to imagine how the form changes under small variations of the point at which it is evaluated.

A 0-form is a smooth function $f(x)$. Its exterior derivative is by definition the functional on paths $\varphi : [0,1] \to \mathbb{R}^n$,

$$df : \varphi \mapsto f(\varphi(1)) - f(\varphi(0)).$$

41 Proposition

$df$ is a 1-form; when $n = 2$ it is expressed as

$$df = \frac{\partial f}{\partial x} dx + \frac{\partial f}{\partial y} dy.$$

In particular, $d(x) = dx$.

Proof

When no abuse of notation occurs we use calculus shorthand and write $f_x = \partial f / \partial x$, $f_y = \partial f / \partial y$. Applied to $\varphi$, the form $\omega = f_x dx + f_y dy$ produces the number

$$\omega(\varphi) = \int_0^1 \left( f_x(\varphi(t)) \frac{dx(t)}{dt} + f_y(\varphi(t)) \frac{dy(t)}{dt} \right) dt.$$

By the Chain Rule the integrand is the derivative of $f \circ \varphi(t)$, so the Fundamental Theorem of Calculus implies that $\omega(\varphi) = f(\varphi(1)) - f(\varphi(0))$. Therefore $df = \omega$ as claimed. $\square$