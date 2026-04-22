where $\sigma(t) = p + t(q - p)$ parameterizes $[p, q]$. This gives

$$f_i(q) - f_i(p) = g(1) - g(0) = \int_0^1 g'(t) dt$$

$$= \int_0^1 \sum_{j=1}^n \frac{\partial f_i(\sigma(t))}{\partial x_j}(q_j - p_j) dt$$

$$= \sum_{j=1}^n \int_0^1 \frac{\partial f_i(\sigma(t))}{\partial x_i} dt(q_j - p_j),$$

which is the $i^{\text{th}}$ component of $T(q - p)$.

To check the converse, we assume that (4) holds for a continuous family of linear maps $T_{pq}$. Take $q = p + v$. The first-order Taylor remainder at $p$ is

$$R(v) = f(p + v) - f(p) - T_{pp}(v) = (T_{pq} - T_{pp})(v),$$

which is sublinear with respect to $v$. Therefore $(Df)_p = T_{pp}$. $\square$

**13 Corollary** Assume that $U$ is connected. If $f : U \to \mathbb{R}^m$ is differentiable and for each point $x \in U$ we have $(Df)_x = 0$ then $f$ is constant.

**Proof** The enjoyable open and closed argument is left to you as Exercise 20. $\square$

We conclude this section with another useful rule – differentiation past the integral. See also Exercise 23.

**14 Theorem** Assume that $f : [a, b] \times (c, d) \to \mathbb{R}$ is continuous and that $\partial f(x, y)/\partial y$ exists and is continuous. Then

$$F(y) = \int_a^b f(x, y) dx$$

is of class $C^1$ and

(5) $$\frac{dF}{dy} = \int_a^b \frac{\partial f(x, y)}{\partial y} dx.$$

**Proof** By the $C^1$ Mean Value Theorem, if $h$ is small then

$$\frac{F(y + h) - F(y)}{h} = \frac{1}{h} \int_a^b \left( \int_0^1 \frac{\partial f(x, y + th)}{\partial y} dt \right) h dx.$$

The inner integral is the partial derivative of $f$ with respect to $y$ averaged along the segment from $y$ to $y + h$. Continuity implies that this average converges to $\partial f(x, y)/\partial y$ as $h \to 0$, which verifies (5). Continuity of $dF/dy$ follows from continuity of $\partial f/\partial y$. See Exercise 22. $\square$