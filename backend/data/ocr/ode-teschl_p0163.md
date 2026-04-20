and observe

$$f_n = \sum_{j=0}^{n} \langle u_j, Ag \rangle u_j = \sum_{j=0}^{n} \langle Au_j, g \rangle u_j = \sum_{j=0}^{n} \alpha_j \langle u_j, g \rangle u_j = Ag_n.$$

Thus

$$\|f - f_n\| = \|A(g - g_n)\| = \|A_{n+1}(g - g_n)\| \leq |\alpha_{n+1}| \|g - g_n\| \leq |\alpha_{n+1}| \|g\|$$

since $g - g_n \in \mathfrak{H}_0^{(n+1)}$. Letting $n \to \infty$ shows $f_n \to f$ proving (5.42) in the case $f \in \text{Ran}(A)$.

Next, let $f \in \mathfrak{H}_0$ be arbitrary and suppose $\text{Ran}(A)$ is dense. For fixed $\varepsilon > 0$, there is an $\tilde{f}_\varepsilon \in \text{Ran}(A)$ such that $\|f - \tilde{f}_\varepsilon\| < \frac{\varepsilon}{2}$. Moreover, by the previous part, there is an $\hat{f}_\varepsilon$ in the span of $\{u_j\}_{j=0}^n$ for some sufficiently large $n$, such that $\|\tilde{f}_\varepsilon - \hat{f}_\varepsilon\| < \frac{\varepsilon}{2}$. That is, $\|f - \hat{f}_\varepsilon\| < \varepsilon$ and since, by Lemma 5.3, $f_n$ is the best approximation within the span of $\{u_j\}_{j=0}^n$ we even have $\|f - f_n\| \leq \|f - \hat{f}_\varepsilon\| < \varepsilon$ for $n$ sufficiently large.

This is all we need and it remains to apply these results to Sturm–Liouville operators.

**Problem 5.6. Prove the parallelogram law**

$$\|f + g\|^2 + \|f - g\|^2 = 2\|f\|^2 + 2\|g\|^2$$

for $f, g \in \mathfrak{H}_0$.

**Problem 5.7. Let $\{u_j\}_{j=0}^{\infty} \subset \mathfrak{H}_0$ be a countable orthonormal set and $f \in \mathfrak{H}_0$. Show that**

$$f_n = \sum_{j=0}^{n} \langle u_j, f \rangle u_j$$

is a Cauchy sequence.

**Problem 5.8. Show that (5.39) is indeed a norm. Show that the product of two bounded operators is again bounded with $\|AB\| \leq \|A\| \|B\|$.**

**Problem 5.9. Show that every compact linear operator is bounded and that the product of a bounded and a compact operator is compact (compact operators form an ideal).**

**Problem 5.10. Show that if $A$ is bounded, then every eigenvalue $\alpha$ satisfies $|\alpha| \leq \|A\|$.**