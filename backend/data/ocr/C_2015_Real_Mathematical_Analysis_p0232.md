Figure 91 The uniform limit of differentiable functions need not be differentiable.

being constant multiples of powers of $x$. As explained in Section 3 of Chapter 3, its radius of convergence is

$$R = \frac{1}{\limsup_{k \to \infty} \sqrt[k]{|c_k|}}.$$

Its interval of convergence is $(-R, R)$. If $x \in (-R, R)$, the series converges and defines a function $f(x) = \sum c_k x^k$, while if $x \notin [-R, R]$ the series diverges. More is true on compact subintervals of $(-R, R)$.

11 Theorem If $r < R$ then the power series converges uniformly and absolutely on the interval $[-r, r]$.

Proof Choose $\beta$ with $r < \beta < R$. For all large $k$, $\sqrt[k]{|c_k|} < 1/\beta$ since $\beta < R$. Thus, if $|x| \leq r$ then

$$|c_k x^k| \leq \left(\frac{r}{\beta}\right)^k.$$

These are terms in a convergent geometric series and according to the $M$-test $\sum c_k x^k$ converges uniformly when $x \in [-r, r]$.

12 Theorem A power series can be integrated and differentiated term-by-term on its interval of convergence.