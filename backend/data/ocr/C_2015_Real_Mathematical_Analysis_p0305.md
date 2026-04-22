Bilinearity was used to combine the two second derivative terms. Sublinearity of $R(x, w)$ with respect to $x$ implies that the last two terms tend to 0 as $t \to 0$, which completes the proof of (6). Since $(D^2 f)_p$ is the limit of a symmetric (although nonlinear) function of $v, w$ it too is symmetric.

**Remark** The fact that $D^2 f$ can be expressed directly as a limit of values of $f$ is itself interesting. It should remind you of its one-dimensional counterpart,

$$f''(x) = \lim_{h \to 0} \frac{f(x + h) + f(x - h) - 2f(x)}{h^2}.$$

**17 Corollary** Corresponding mixed second partials of a second-differentiable function are equal,

$$\frac{\partial^2 f_k(p)}{\partial x_i \partial x_j} = \frac{\partial^2 f_k(p)}{\partial x_j \partial x_i}.$$

**Proof** The equalities

$$\frac{\partial^2 f_k(p)}{\partial x_i \partial x_j} = (D^2 f_k)_p(e_i, e_j) = (D^2 f_k)_p(e_j, e_i) = \frac{\partial^2 f_k(p)}{\partial x_j \partial x_i}$$

follow from Theorem 15 and the symmetry of $D^2 f$.

The mere existence of the second-order partials does not imply second order differentiability, nor does it imply equality of corresponding mixed second partials. See Exercise 24.

**18 Corollary** The $r^{th}$ derivative, if it exists, is symmetric: Permutation of the vectors $v_1, \ldots, v_r$ does not affect the value of $(D^r f)_p(v_1, \ldots, v_r)$. Corresponding mixed higher-order partials are equal.

**Proof** The induction argument is left to you as Exercise 29.

In my opinion Theorem 16 is quite natural even though its proof is tricky. It proceeds from a pointwise hypothesis to a pointwise conclusion – whenever the second derivative exists it is symmetric. No assumption is made about continuity of partials. It is possible that $f$ is second-differentiable at $p$ and nowhere else. See Exercise 25. All the same, it remains standard to prove equality of mixed partials under stronger hypotheses, namely, that $D^2 f$ is continuous. See Exercise 27.

We conclude this section with a brief discussion of the rules of higher-order differentiation. It is simple to check that the $r^{th}$ derivative of $f + cg$ is $D^r f + cD^r g$.