Remark Just as with the 1-form $dx$, the 1-form $df$ measures the net $f$-variation of a path from $p$ to $q$. It is the difference $fq - fp$.

Definition Fix $k \geq 1$. Let $\sum f_I dx_I$ be the ascending presentation of a $k$-form $\omega$. The exterior derivative of $\omega$ is the $(k+1)$-form

$$d\omega = \sum_I df_I \wedge dx_I.$$

The sum is taken over all ascending $k$-tuples $I$. The derivative of $\omega = fdx_I$ amounts to how the coefficient $f$ changes. If $f$ is constant then $d\omega = 0$.

Use of the ascending presentation makes the definition unambiguous although Theorem 42 makes this moot. Since $df_I$ is a 1-form and $dx_I$ is $k$-form, $d\omega$ is indeed a $(k+1)$-form. For example, we get

$$d(fdx + gdy) = (g_x - f_y)dx \wedge dy.$$

42 Theorem Exterior differentiation $d : \Omega^k \to \Omega^{k+1}$ satisfies four natural conditions.

(a) It is linear: $d(\alpha + c\beta) = d\alpha + cd\beta$.

(b) It is insensitive to presentation: If $\sum f_I dx_I$ is a general presentation of $\omega$ then $d\omega = \sum df_I \wedge dx_I$.

(c) It obeys a product rule: If $\alpha$ is a $k$-form and $\beta$ is an $\ell$-form then

$$d(\alpha \wedge \beta) = d\alpha \wedge \beta + (-1)^k \alpha \wedge d\beta.$$

(d) $d^2 = 0$. That is, $d(d\omega) = 0$ for all $\omega \in \Omega^k$.

Proof (a) Linearity is easy and is left for the reader as Exercise 57.

(b) Let $\pi$ make $\pi I$ ascending. Linearity of $d$ and associativity of $\wedge$ give

$$d(f_I dx_I) = \text{sgn}(\pi) d(f_I dx_{\pi I}) = \text{sgn}(\pi) d(f_I) \wedge dx_{\pi I} = d(f_I) \wedge dx_I.$$

Linearity of $d$ promotes the result from simple forms to general ones.

(c) The ordinary Leibniz product rule for differentiating functions of two variables gives

$$d(fg) = \frac{\partial fg}{\partial x} dx + \frac{\partial fg}{\partial y} dy$$

$$= f_x g dx + f_y g dy + fg_x dx + fg_y dy$$