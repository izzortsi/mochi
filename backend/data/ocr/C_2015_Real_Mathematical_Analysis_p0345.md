Fix an ascending $k$-tuple $A$ and fix a point $x \in \mathbb{R}^n$. For $r > 0$ consider the inclusion cell,

$$\iota = \iota_{r,x}: u \mapsto x + rL(u)$$

where $L$ is the linear inclusion map that sends $\mathbb{R}^k$ to the $x_A$-plane. $\iota$ sends $I^k$ to a cube in the $x_A$-plane at $x$. As $r \to 0$, the cube shrinks to $x$. If $I$ ascends then the Jacobian of $\iota$ is

$$\frac{\partial \iota_I}{\partial u} = \begin{cases} r^k & \text{if } I = A \\ 0 & \text{if } I \neq A. \end{cases}$$

Thus, if $I \neq A$ then $f_I dx_I(\iota) = 0$ and

$$\omega(\iota) = f_A dx_A(\iota) = r^k \int_{I^k} f_A(\iota(u)) \, du.$$

Continuity of $f_A$ implies that

$$f_A(x) = \lim_{r \to 0} \frac{1}{r^k} \omega(\iota),$$

which is how the value of $\omega$ on small $k$-cells at $x$ determines the coefficient $f_A(x)$. □

38 Corollary If $k > n$ then $\Omega^k(\mathbb{R}^n) = 0.$

Proof There are no ascending $k$-tuples of integers in $\{1, \ldots, n\}$. □

Moral A form may have many names, but it has a unique ascending name. Therefore if definitions or properties of a form are to be discussed in terms of a form’s name then the use of ascending names avoids ambiguity.

Wedge Products

Let $\alpha$ be a $k$-form and $\beta$ be an $\ell$-form. Write them in their ascending presentations, $\alpha = \sum_I a_I dx_I$ and $\beta = \sum_J b_J dx_J$. Their wedge product is the $(k + \ell)$-form

$$\alpha \wedge \beta = \sum_{I,J} a_I b_J dx_{IJ}$$

where $I = (i_1, \ldots, i_k)$, $J = (j_1, \ldots, j_\ell)$, $IJ = (i_1, \ldots, i_k, j_1, \ldots, j_\ell)$, and the sum is taken over all ascending $I, J$. The use of ascending presentations avoids name ambiguity although Theorem 39 makes the ambiguity moot. A particular case of the definition is

$$dx_1 \wedge dx_2 = dx_{(1,2)}.$$