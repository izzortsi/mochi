Fix $x_0 \in (a, b]$ and consider $w(x) = \pi - (\pi - \varepsilon) \frac{x-a}{x_0-a}$ for $\varepsilon > 0$ small. Abbreviate $p_0 = \inf_{x \in [a,b]} p(x)$ and $q_0 = \inf_{x \in [a,b]} q(x)$. Then, for $\lambda < q_0 - (p_0^{-1} + \frac{\pi-\varepsilon}{x_0-a}) \sin(\varepsilon)^{-2}$, we have

$$\frac{1}{p} \cos(w)^2 - (q - \lambda) \sin(w)^2 < \frac{1}{p_0} - (q_0 - \lambda) \sin(\varepsilon)^2 < -\frac{\pi-\varepsilon}{x_0-a} = w'$$

for $x \in [a, x_0]$ which shows that $w$ is a super solution. Hence by Lemma 1.2 we infer $0 \leq \theta_a(x_0) \leq \varepsilon$ for any $\varepsilon$.

After these preparations we can now easily establish several beautiful and important results. To this end recall that $u_a(\lambda)$ is an eigenfunction if and only if it satisfies the boundary condition at $b$, that is, if and only if $\theta_a(\lambda,b) = \beta \mod \pi$.

First of all, Lemma 5.15 says that $\theta_a(\lambda,b)$ converges to 0 from above as $\lambda \to -\infty$ and thus will eventually drop below $\beta \in (0,\pi]$ after which it can no longer satisfy the boundary condition at $b$. Hence there is a lowest eigenvalue $E_0$ determined by the condition $\theta_a(E_0,b) = \beta$. Now as $\lambda$ further increases we will hit the second eigenvalue $E_1$ precisely when $\theta_a(\lambda,b) = \beta + \pi$ and continuing like this we obtain

**Lemma 5.16.** We have

$$\#_{(-\infty,\lambda)}(L) = \left\lceil \frac{\theta_a(\lambda,b) - \beta}{\pi} \right\rceil = \left\lfloor \frac{\alpha - \theta_b(\lambda,a)}{\pi} \right\rfloor, \quad (5.91)$$

where $\#_{(\lambda_0,\lambda_1)}(L)$ denotes the number of eigenvalues of $L$ inside $(\lambda_0,\lambda_1)$.

In particular,

$$\theta_a(E_n,b) = \beta + n\pi, \quad \beta \in (0,\pi], \quad \theta_b(E_n,a) = \alpha - (n+1)\pi, \quad \alpha \in [0,\pi), \quad (5.92)$$

where $E_n$ are the eigenvalues ordered in increasing size.

Moreover, in combination with Lemma 5.14 this even shows that the $n$th eigenfunction has precisely $n$ zeros. In summary we have shown:

**Theorem 5.17.** The regular Sturm-Liouville problem has a lowest eigenvalue and the eigenvalues can be ordered according to $E_0 < E_1 < \cdots$. In this case the eigenfunction $u_n$ corresponding to $E_n$ has precisely $n$ zeros in the interval $(a,b)$.

Furthermore,

**Theorem 5.18.** Suppose $L$ has a Dirichlet boundary condition at $b$. Then we have

$$\#_{(-\infty,\lambda)}(L) = \#(u_a(\lambda)), \quad (5.93)$$