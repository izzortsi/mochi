40. Let $0 \leq \epsilon \leq 1$ and $a, b > 0$ be given.
   (a) Prove that
   $$\left(\frac{1}{1 + \epsilon}\right)^2 \leq \frac{a}{b} \leq (1 + \epsilon)^2 \Rightarrow |a - b| \leq 16\epsilon b.$$
   (b) Is the estimate in (a) sharp? (That is, can 16 be replaced by a smaller constant?)

**41.** Suppose that $f$ and $g$ are $r^{\text{th}}$-order differentiable and that the composite $h = g \circ f$ makes sense. A partition divides a set into nonempty disjoint subsets. Prove the Higher Order Chain Rule,
   $$(D^r h)_p = \sum_{k=1}^{r} \sum_{\mu \in P(k,r)} (D^k g)_q \circ (D^\mu f)_p$$
   where $\mu$ partitions $\{1, \ldots, r\}$ into $k$ subsets, and $q = f(p)$. In terms of $r$-linear transformations, this notation means
   $$(D^r h)_p(v_1, \ldots, v_r)
   = \sum_{k=1}^{r} \sum_{\mu} (D^k g)_q ((D^{|\mu_1|} f)_p(v_{\mu_1}), \ldots, (D^{|\mu_k|} f)_p(v_{\mu_k}))$$
   where $|\mu_i| = \#\mu_i$ and $v_{\mu_i}$ is the $|\mu_i|$-tuple of vectors $v_j$ with $j \in \mu_i$. (Symmetry implies that the order of the vectors $v_j$ in the $|\mu_i|$-tuple $v_{\mu_i}$ and the order in which the partition blocks $\mu_1, \ldots, \mu_k$ occur are irrelevant.)

**42.** Suppose that $\beta$ is bilinear and $\beta(f, g)$ makes sense. If $f$ and $g$ are $r^{\text{th}}$-order differentiable at $p$, find the Higher-Order Leibniz Formula for $D^r(\beta(f, g))_p$.
   [Hint: First derive the formula in dimension 1.]

43. Suppose that $T : \mathbb{R}^n \to \mathbb{R}^m$ has rank $k$.
   (a) Show there exists a $\delta > 0$ such that if $S : \mathbb{R}^n \to \mathbb{R}^m$ and $\|S - T\| < \delta$ then $S$ has rank $\geq k$.
   (b) Give a specific example in which the rank of $S$ can be greater than the rank of $T$, no matter how small $\delta$ is.
   (c) Give examples of linear transformations of rank $k$ for each $k$ where $0 \leq k \leq \min\{n, m\}$.

44. Let $S \subset M$ be given.
   (a) Define the characteristic function $\chi_S : M \to \mathbb{R}$.
   (b) If $M$ is a metric space, show that $\chi_S(x)$ is discontinuous at $x$ if and only if $x$ is a boundary point of $S$.

45. On page 315 there is a definition of $Z \subset \mathbb{R}^2$ being a zero set that involves open rectangles.