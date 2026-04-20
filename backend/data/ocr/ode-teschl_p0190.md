Conversely, suppose $\Delta(E) = \pm 1$ and $\dot{\Delta}(E) = 0$ but $s(E, \ell) \neq 0$. Then Corollary 5.31 yields a contradiction. Thus $s(E, \ell) = 0$ as well as $c(E, \ell) = p(\ell)s'(\ell) = \Delta$ and the second part of (5.123) shows $p(\ell)c'(E, \ell) = 0$.

For the remaining part we will not display $z = E$ for notational convenience. Differentiating (5.123) and evaluating at point $z = E$ with $M(E) = \pm \mathbb{I}$ shows

$$\ddot{\Delta} = \frac{1}{2} \int_0^\ell \left( p(\ell) \dot{c}'(\ell) s(x)^2 + (\dot{c}(\ell) - p(\ell) \dot{s}'(\ell)) s(x) c(x) - \dot{s}(\ell) c(x)^2 \right) r(x) dx.$$

Furthermore, choosing $u = v = s$ in (5.124) shows

$$W_\ell(\dot{s}, s) = \int_0^\ell s(x)^2 r(x) dx$$

and by $s(\ell) = 0$, $p(\ell)s'(\ell) = \pm 1$ we have

$$\dot{s}(\ell) = \pm \int_0^\ell s(x)^2 r(x) dx.$$

Similarly, we obtain

$$p(\ell) \dot{c}'(\ell) = \mp \int_0^\ell c(x)^2 r(x) dx, \quad \dot{c}(\ell) = -p(\ell) \dot{s}'(\ell) = \pm \int_0^\ell s(x) c(x) r(x) dx.$$

Hence

$$\Delta \ddot{\Delta} = \left( \int_0^\ell s(x) c(x) r(x) dx \right)^2 - \left( \int_0^\ell s(x)^2 r(x) dx \right) \left( \int_0^\ell c(x)^2 r(x) dx \right)$$

and since equality in the Cauchy–Schwarz inequality can only occur if $c(x)$ and $s(x)$ were linearly dependent, the right-hand side is strictly negative. $\square$

In summary, these results establish the following behavior of $\Delta(z)$: By Lemma 5.29, $\Delta(\lambda)$ will first hit $+1$ at some point $E_0$. At this point we must have $\dot{\Delta}(E) < 0$. In fact, $\dot{\Delta}(E) = 0$ would imply $\ddot{\Delta}(E) < 0$ by Lemma 5.32, contradicting the fact that we intersect the line $+1$ from above. By Corollary 5.31, $\Delta(\lambda)$ cannot turn around until it hits $-1$ at some point $E_1 > E_0$. Now it can either cross $(\dot{\Delta}(E_1) < 0)$ or turn around $(\dot{\Delta}(E_1) = 0, \ddot{\Delta}(E_1) > 0)$. In the first case it will hit $-1$ again at some later point $E_2$, in the latter case we can just set $E_2 = E_1$ (in this case $E_1 = E_2$ is a twice degenerate eigenvalue of $L_-$). Since there is an infinite number of periodic (antiperiodic) eigenvalues (Problem 5.33), this process can never stop and we obtain:

**Theorem 5.33.** There is a sequence of real numbers

$$E_0 < E_1 \leq E_2 < E_3 \leq E_4 \cdots$$

(5.127)