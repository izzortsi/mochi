recursively via $I_0, s_0, \cdots, s_n = g_0(I_s_0, \cdots, s_n)$ and $I_1, s_0, \cdots, s_n = g_1(I_s_0, \cdots, s_n)$. By assumption we also know at least $|I_s_0, \cdots, s_n| \leq \alpha^{-n}|I_s_0|$ and hence the proof follows as before.

You should try to draw a picture for $f$ as in the above theorem. Moreover, it clearly suffices to assume that $f$ is absolutely continuous on $I_0 \cup I_1$.

Next, let $f$ be as in Theorem 11.23 and note that $I_0 \subseteq f(I_0)$ implies that there is a (unique) fixed point $p \in I_0$. Since $I_0 \subseteq f(I_1)$ there is a point $q \in I_1$ such that $f(q) = p$. Moreover, denoting by $g_0 : f(I_0) \rightarrow I_0$ the inverse of $f : I_0 \rightarrow f(I_0)$, we see that there is a whole sequence $g_0^n(q)$ which converges to $p$ as $n \rightarrow \infty$. In the case of the logistic map we can take $q = G_\mu(1)$.

$$\text{In}[3] := \mu = 5;$$

$$x_0 = \text{Nest} \left[ \left( \frac{1}{2} - \sqrt{\frac{1}{4} - \frac{\#}{\mu}} \right) \&, 1, 5 \right];$$

$$\text{ShowWeb} \left[ \mu \#(1 - \#) \&, x_0, 6 \right]$$

The fact that $x_0$ reaches the fixed point 0 after finitely many iterations (and not only asymptotically) is related to dimension one. Since the fixed point 0 is repelling ($L'_\mu(0) = \mu > 1$) it cannot converge to 0 unless it reaches it after finitely many steps.

In general, let $f : I \rightarrow I$ be continuously differentiable. A fixed point $p$ is called a **hyperbolic repellor** if $|f'(p)| > 1$. Hence there is a closed interval $W$ containing $p$ such that $|f'(x)| \geq \alpha > 1$ for all $x \in W$. Moreover, by the inverse function theorem there is a local inverse $g : f(W) \rightarrow W$ such that $g(f(x)) = x$, $x \in W$. Note that since $f$ is expanding on $W$, we have $W \subseteq f(W)$ and that $g$ is a contraction. A point $q \in W$ is called a **homoclinic point** if there exists an $l \in \mathbb{N}_0$ such that $f^l(q) = p$. The set $\gamma(q) = \{f^j(q)|j \in \mathbb{N}_0\} \cup \{g^j(q)|j \in \mathbb{N}\}$ is called the corresponding **homoclinic orbit**. It is called nondegenerate if $(f^l)'(q) \neq 0$ (which implies $f'(x) \neq 0$ for all $x \in \gamma(q)$). A hyperbolic repellor with a homoclinic orbit is also called a **snap back repellor**.

**Theorem 11.24.** Suppose $f \in C^1(I, I)$ has a repelling hyperbolic fixed point $p$ and a corresponding nondegenerate homoclinic point $q$.