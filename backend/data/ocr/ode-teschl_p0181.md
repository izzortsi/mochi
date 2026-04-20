where $\#(u)$ is the number of zeros of $u$ inside $(a,b)$ and as before $\#(\lambda_0,\lambda_1)(L)$ is the number of eigenvalues of $L$ inside $(\lambda_0,\lambda_1)$. Likewise, suppose $L$ has a Dirichlet boundary condition at $a$. Then we have

$$\#(-\infty,\lambda)(L) = \#(u_b(\lambda)).$$

(5.94)

Proof. In the first case we have $\beta = \pi$ and $\lfloor \theta_a(\lambda,a)/\pi \rfloor = \lfloor \alpha/\pi \rfloor = 0$. Hence the claim follows by combining Lemma 5.16 with Lemma 5.14. For the second claim note $\lceil \theta_b(\lambda,b)/\pi \rceil = \lceil \beta/\pi \rceil = 1$ and $\lfloor -x \rfloor = -\lceil x \rfloor$.

Up to this point we have only looked at one Sturm–Liouville operator $L$. However, our key to success was to look at the behavior of solutions of $(L - \lambda)u = 0$ as we vary $\lambda$. Hence one might also try to vary not only the spectral parameter $\lambda$ but the entire operator. Hence we will consider two operators $L_0$ and $L_1$ associated with coefficients $p_0, q_0, r_0$ and $p_1, q_1, r_1$, respectively. We will consider solutions $u_j$ of $L_ju_j = \lambda_ju_j$ and use the short-hand notation $\rho_j = \rho_{u_j}, \theta_j = \theta_{u_j}$ for the corresponding Prüfer variables.

First of all we establish monotonicity of $\theta$ with respect to the coefficients.

Lemma 5.19. Let $L_j$, $j = 0,1$, be two operators associated with $p_j, q_j, r_j$ and let $u_j$ be solutions of $L_ju_j = \lambda_ju_j$. Suppose $p_1 \leq p_0$ and $\lambda_0r_0 - q_0 \leq \lambda_1r_1 - q_1$.

If $\theta_1(c) \geq \theta_0(c)$ for some $c \in (a,b)$, then $\theta_1(x) \geq \theta_0(x)$ for all $x \in (c,b)$. If the inequality becomes strict at some $x \in [c,b)$ it remains so.

Moreover, if $\theta_1(c) = \theta_0(c)$ for some $c \in (a,b)$ and $\theta_1(d) = \theta_0(d)$ for some $d \in (c,b)$, then $p_1 = p_0$ and $\lambda_0r_0 - q_0 = \lambda_1r_1 - q_1$ on $(c,d)$.

Proof. The first part is immediate from Theorem 1.3. Moreover, by the first part $\theta_1(c) = \theta_0(c)$ and $\theta_1(d) = \theta_0(d)$ can only happen if $\theta_1(x) = \theta_0(x)$ for all $x \in [c,d]$ and the claim follows by subtracting the corresponding differential equations for the Prüfer angles from (5.85).

With the help of this lemma we now come to the famous Sturm’s comparison theorem.

Theorem 5.20 (Sturm). Let $L_j$, $j = 0,1$, be two operators associated with $p_j, q_j, r_j$ and let $u_j$ be solutions of $L_ju_j = \lambda_ju_j$. Suppose $p_1 \leq p_0$ and $\lambda_0r_0 - q_0 \leq \lambda_1r_1 - q_1$.

If at each end of $(c,d) \subseteq (a,b)$ either $W(u_1,u_0) = 0$ or $u_0 = 0$, then $u_1$ must vanish in $(c,d)$ unless $u_1$ and $u_0$ are equal up to a constant. (The latter case can only happen if $p_1 = p_0$ and $\lambda_0r_0 - q_0 = \lambda_1r_1 - q_1$ on $(c,d)$.)

Proof. Without loss (and perhaps after flipping signs of $u_0$ and $u_1$) we can assume $\theta_0(c), \theta_1(c) \in [0,\pi)$. Since by assumption either $\theta_0(c) = 0$ or $\theta_0(c) = \theta_1(c)$ (cf. (5.97) below), we have $\theta_0(c) \leq \theta_1(c)$. Hence Lemma 5.19