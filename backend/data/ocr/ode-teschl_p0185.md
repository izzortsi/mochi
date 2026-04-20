positive (negative). If $q(x) \to 0$ as $x \to \infty$ the following refinement can be applied.

**Theorem 5.26** (Kneser). Consider the differential equation $Lu(x) = -u''(x) + q(x)u(x)$ on $(0, \infty)$. Then

$$\liminf_{x \to \infty} \left(x^2 q(x)\right) > -\frac{1}{4} \text{ implies nonoscillation of } L$$

and

$$\limsup_{x \to \infty} \left(x^2 q(x)\right) < -\frac{1}{4} \text{ implies oscillation of } L.$$

**Proof.** The key idea is that the equation

$$L_\mu u(x) = -u''(x) + \frac{\mu}{x^2} u(x) = 0$$

is of Euler type. Hence it is explicitly solvable with a fundamental system given by

$$u_{\pm}(x) = x^{\frac{1}{2} \pm \sqrt{\mu + \frac{1}{4}}}.$$

There are two cases to distinguish. If $\mu \geq -1/4$, all solutions are nonoscillatory. If $\mu < -1/4$, one has to take real/imaginary parts and all solutions are oscillatory. Hence a straightforward application of Sturm’s comparison theorem between $L_\mu$ and $L$ yields the result.

**Problem 5.24.** Prove equation (5.85).

**Problem 5.25.** Prove Lemma 5.21.

**Problem 5.26.** Consider the equation $-u'' + qu = 0$ with $q > 0$. Show that every nontrivial solution has at most one zero.

**Problem 5.27.** Consider the equation $-u'' + qu = 0$ and suppose $q_0 \leq q(x) \leq q_1 < 0$. Show that for two consecutive zeros $x_k$ and $x_{k+1}$ of $u(x)$ we have

$$\frac{\pi}{\sqrt{-q_0}} \leq x_{k+1} - x_k \leq \frac{\pi}{\sqrt{-q_1}}.$$

**Problem 5.28.** Suppose that $q(x) > 0$ and let $-(pu')' + qu = 0$. Show that at two consecutive zeros $x_k$ and $x_{k+1}$ of $u'(x)$ we have

$$|u(x_k)| \leq |u(x_{k+1})| \quad \text{if} \quad (pq')' \geq 0.$$

**Hint:** Consider

$$u^2 - \frac{1}{pq}(pu')^2.$$

**Problem 5.29.** Consider the ordered eigenvalues $E_n(\alpha)$ of our Sturm–Liouville problem as a function of the boundary parameter $\alpha$. Show that the eigenvalues corresponding to different parameters are interlacing. That is, suppose $0 < \alpha_1 < \alpha_2 \leq \pi$ and show $E_n(\alpha_1) < E_n(\alpha_2) < E_{n+1}(\alpha_1).$