One immediate consequence of the CCC is that no finite number of terms affects convergence of a series. Rather, it is the **tail** of the series, the terms $a_k$ with $k$ large, that determines convergence or divergence. Likewise, whether the series leads off with a term of index $k = 0$ or $k = 1$, etc. is irrelevant.

A second consequence of the CCC is that if $a_k$ does not converge to zero as $k \to \infty$ then $\sum a_k$ does not converge. For Cauchyness of the partial sum sequence $(A_n)$ implies that $a_n = A_n - A_{n-1}$ becomes small when $n \to \infty$. If $|\lambda| \geq 1$ then the geometric series $\sum \lambda^k$ diverges since its terms do not converge to zero. The **harmonic series**

$$\sum_{k=1}^{\infty} \frac{1}{k} = 1 + \frac{1}{2} + \frac{1}{3} + \ldots$$

gives an example that a series can diverge even though its terms do tend to zero. See below.

Series theory has a large number of convergence tests. All boil down to the following result.

**40 Comparison Test** If a series $\sum b_k$ **dominates** a series $\sum a_k$ in the sense that for all sufficiently large $k$ we have $|a_k| \leq b_k$ then convergence of $\sum b_k$ implies convergence of $\sum a_k$.

**Proof** Given $\epsilon > 0$, convergence of $\sum b_k$ implies there is a large $N$ such that for all $m, n \geq N$ we have $\sum_{k=m}^{n} b_k < \epsilon$. Thus

$$\left| \sum_{k=m}^{n} a_k \right| \leq \sum_{k=m}^{n} |a_k| \leq \sum_{k=m}^{n} b_k < \epsilon$$

and convergence of $\sum a_k$ follows from the CCC.

**Example** The series $\sum \sin(k)/2^k$ converges since it is dominated by the geometric series $\sum 1/2^k$.

A series $\sum a_k$ converges **absolutely** if $\sum |a_k|$ converges. The comparison test shows that absolute convergence implies convergence. A series that converges but not absolutely converges **conditionally**. That is, $\sum a_k$ converges and $\sum |a_k|$ diverges. See below.

Series and integrals are both infinite sums. You can imagine a series as an improper integral in which the integration variable is an integer,

$$\sum_{k=0}^{\infty} a_k = \int_{\mathbb{N}} a_k \, dk.$$