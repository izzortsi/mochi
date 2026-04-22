Assume (d) and take $\epsilon = 1$. There is a $\delta > 0$ such that if $u \in V$ and $|u| < \delta$ then

$$|Tu| < 1.$$

For any nonzero $v \in V$, set $u = \lambda v$ where $\lambda = \delta/2|v|$. Then $|u| = \delta/2 < \delta$ and

$$\frac{|Tv|}{|v|} = \frac{|Tu|}{|u|} < \frac{1}{|u|} = \frac{2}{\delta}$$

which implies $\|T\| < 2/\delta$ and verifies (a).

**3 Theorem** Every linear transformation $T : \mathbb{R}^n \to W$ is continuous and every isomorphism $T : \mathbb{R}^n \to W$ is a homeomorphism.

**Proof** The norm on $\mathbb{R}^n$ is the Euclidean norm. If $v = (v_1, \ldots, v_n) \in \mathbb{R}^n$ then

$$|v| = \sqrt{v_1^2 + \ldots + v_n^2}.$$

Let $|W|$ denote the norm on $W$ and let $M = \max\{|T(e_1)|_W, \ldots, |T(e_n)|_W\}$. For $v = \sum v_j e_j \in \mathbb{R}^n$ we have $|v_j| \leq |v|$ and

$$|Tv|_W \leq \sum_{j=1}^n |T(v_j e_j)|_W = \sum_{j=1}^n |v_j||T(e_j)|_W \leq n|v|M$$

which implies that $\|T\| \leq nM < \infty$. Theorem 2 implies that $T$ is continuous.

Assume that $T : \mathbb{R}^n \to W$ is an isomorphism. We have just shown that $T$ is continuous, but what about $T^{-1}$? Continuity of $T$ implies that the $T$-image of the unit sphere is compact. Injectivity implies that $O \notin T(S^{n-1})$. Since $O$ and $T(S^{n-1})$ are disjoint compact sets in the metric space $W$, there is a constant $c > 0$ such that for all $u \in S^{n-1}$ we have $d_W(Tu, O) = |Tu| \geq c$. For each nonzero $v \in \mathbb{R}^n$ we write $v = \lambda u$ where $\lambda = |v|$ and $u = v/|v|$ is a unit vector. Linearity of $T$ implies $Tv = \lambda Tu$ which gives $|Tv| \geq c|v|$, i.e.,

$$|v| \leq \frac{|Tv|}{c}.$$

For each $w \in W$ let $v = T^{-1}(w)$. Then $w = Tv$ and

$$|T^{-1}(w)| = |v| \leq \frac{|Tv|}{c} = \frac{1}{c}|w|$$

gives $\|T^{-1}\| \leq 1/c < \infty$, and by Theorem 2 we get continuity of $T^{-1}$. A bicontinuous bijection is a homeomorphism.