Theorem 11.22. The Hausdorff dimension of the repellor $\Lambda$ of the logistic map satisfies

$$d(\mu) \leq \dim_H(\Lambda) \leq \begin{cases} 1, & \mu \leq 2 + \sqrt{8}, \\ d(\sqrt{\mu(4 - \mu)}), & \mu > 2 + \sqrt{8}, \end{cases} \quad d(x) = \frac{\log(2)}{\log(x)}.$$

In particular, it is strange if $\mu > 2 + \sqrt{8} = 4.828$.

Proof. The proof is analogous to the one of Theorem 11.20. The only difference is that we have to use different estimates for $L'_\mu$ from above and below,

$$\sqrt{\mu(4 - \mu)} = \alpha \leq |L'_\mu(x)| \leq \beta = \mu, \quad x \in I_0 \cup I_1.$$

Using the $\delta$-cover $I_{s_0, \ldots, s_{n-1}}$ we see $h^{d(\alpha)}(\Lambda) \leq (a/\alpha)^{d(\alpha)}$ where $a = |I_0| = |I_1| = G_\mu(1)$.

Similarly, using that the distance of two intervals in $\Lambda_k$ is at least $\frac{b}{\beta^{k-1}}$, where $b = d(I_0, I_1) = 1 - 2G_\mu(1)$, we obtain

$$b^{d(\beta)} \leq h^{d(\beta)}(\Lambda)$$

which finishes the proof.

Well, if you look at the proof for a moment, you will see that only a few properties of the logistic map have been used in the proof. And it is easy to see that the same proof applies to the following more general situation.

Theorem 11.23. Let $f : M \to M$ be a continuously differentiable interval map. Suppose there are two disjoint compact intervals $I_0, I_1$ such that $I_0 \cup I_1 \subseteq f(I_0), I_0 \cup I_1 \subseteq f(I_1)$, and $1 < \alpha \leq |f'(x)| \leq \beta$ for all $x \in I_0 \cup I_1$. Set

$$\Lambda = \{x \in I_0 \cup I_1 | f^n(x) \in I_0 \cup I_1 \text{ for all } n \in \mathbb{N}\}$$

and define the itinerary map as

$$\varphi : \Lambda \to \Sigma_2 \\
x \mapsto x_n = j \text{ if } f^n(x) \in I_j.$$

Then the set $\Lambda$ is a Cantor set and the dynamical system $(\Lambda, f)$ is topologically equivalent to the shift on two symbols $(\Sigma_2, \sigma)$. The Hausdorff dimension of $\Lambda$ satisfies

$$d(\beta) \leq \dim_H(\Lambda) \leq d(\alpha), \quad d(x) = \frac{\log(2)}{\log(x)},$$

and it is strange if $\alpha > 2$.

Proof. By assumption, the restricted maps $f : I_0 \to f(I_0)$ and $f : I_1 \to f(I_1)$ are invertible. Denote by $g_0 : f(I_0) \to I_0$ and $g_1 : f(I_1) \to I_1$ the respective inverses. Now proceeding as usual, we see that there is a sequence of nesting sets $\Lambda_n$ consisting of $2^n$ subintervals $I_{s_0, \ldots, s_{n-1}}, s_j \in \{0, 1\}$, defined