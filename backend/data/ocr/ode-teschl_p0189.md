Lemma 5.30. We have

$$\dot{\Delta}(z) = -\frac{s(z,\ell)}{2} \int_{0}^{\ell} u_{+}(z,x) u_{-}(z,x) r(x) dx$$

$$= \frac{1}{2} \int_{0}^{\ell} \left( p(\ell) c'(z,\ell) s(z,x)^{2} + \left( c(z,\ell) - p(\ell) s'(z,\ell) \right) s(z,x) c(z,x) \right) - s(z,\ell) c(z,x)^{2} r(x) dx,$$

(5.123)

where the dot denotes a derivative with respect to $z$.

Proof. Let $u(z,x), v(z,x)$ be two solutions of $Lu = zu$, which are smooth. Then integrating

$$W'_{x}(u(z_{0}), v(z)) = (z_{0} - z) r(x) u(z_{0}, x) v(z, x)$$

from 0 to $\ell$, dividing by $z_{0} - z$ and taking $z_{0} \rightarrow z$ gives

$$W_{\ell}(\dot{u}(z), v(z)) - W_{0}(\dot{u}(z), v(z)) = \int_{0}^{\ell} u(z,t) v(z,t) r(t) dt.$$

(5.124)

(Use constancy of the Wronskian $W_{\ell}(u(z), v(z)) - W_{0}(u(z), v(z)) = 0$ to see that the left-hand side is in fact a differential quotient). Now choose $u(z) = u_{+}(z)$ and $v(z) = u_{-}(z)$ in (5.124) and evaluate the Wronskians

$$W_{\ell}(\dot{u}_{+}(z), u_{-}(z)) - W_{0}(\dot{u}_{+}(z), u_{-}(z)) = \dot{\rho}_{+}(z) \rho_{-}(z) W(u_{+}(z), u_{-}(z))$$

$$= -\frac{\dot{\Delta}(z)}{\sqrt{\Delta(z)^{2}-1}} W(u_{-}(z), u_{+}(z))$$

to obtain the first formula. The second follows using (5.115) plus constancy of the Wronskian $c(z,\ell) p(\ell) s'(z,\ell) - p(\ell) c'(z,\ell) s(z,\ell) = 1$.

Corollary 5.31. For $\lambda \in \Sigma$ with $s(\lambda,\ell) \neq 0$ we have

$$\dot{\Delta}(\lambda) = -\frac{s(\lambda,\ell)}{2} \int_{0}^{\ell} |u_{\pm}(\lambda,x)|^{2} r(x) dx.$$

(5.125)

In particular, $\dot{\Delta}(\lambda)$ is nonzero in the interior of $\Sigma$.

Proof. For $\lambda \in \Sigma$ we have $\rho_{-}(\lambda) = \overline{\rho_{+}(\lambda)}$ and consequently also $u_{-}(\lambda,x) = \overline{u_{+}(\lambda,x)}$.

Lemma 5.32. At a point $E \in \mathbb{R}$ with $\Delta(E) = \pm 1$ we have $\dot{\Delta}(E) = 0$ if and only if $s(E,\ell) = p(\ell) c'(E,\ell) = 0$, that is, if and only if $M(E) = \pm I$. Moreover, in this case we have $\Delta(E) \ddot{\Delta}(E) < 0$.

Proof. Suppose $\Delta(E) = \pm 1$. First of all $s(E,\ell) = p(\ell) c'(E,\ell) = 0$ is clearly equivalent to $M(E) = \pm I$. Moreover, in this case the second part of (5.123) shows $\dot{\Delta}(E) = 0$ (note that we cannot use the first part since $u_{\pm}(E,x)$ are not well-defined if $s(E,\ell) = 0$).