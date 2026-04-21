To prove Theorem 20 it is convenient to refine a partition $P$ by adding more partition points. The partition $P'$ refines $P$ if $P' \supset P$.

Suppose first that $P' = P \cup \{w\}$ where $w \in (x_{i0-1}, x_{i0})$. The lower sums for $P$ and $P'$ are the same except that $m_{i0} \Delta x_{i0}$ in $L(f, P)$ splits into two terms in $L(f, P')$. The sum of the two terms is at least as large as $m_{i0} \Delta x_{i0}$. For the infimum of $f$ over the intervals $[x_{i0-1}, w]$ and $[w, x_{i0}]$ is at least as large as $m_{i0}$. Similarly, $U(f, P') \leq U(f, P)$. See Figure 69.

Repetition continues the pattern and we formalize it as the

**Refinement Principle** Refining a partition causes the lower sum to increase and the upper sum to decrease.

**Figure 69** Refinement increases $L$ and decreases $U$.

The common refinement $P^*$ of two partitions $P, P'$ of $[a, b]$ is

$$P^* = P \cup P'.$$

According to the Refinement Principle we have

$$L(f, P) \leq L(f, P^*) \leq U(f, P^*) \leq U(f, P').$$

We conclude that each lower sum is less than or equal to each upper sum, the lower integral is less than or equal to the upper, and thus

(2) A bounded function $f : [a, b] \to \mathbb{R}$ is Darboux integrable if and only if $\forall \epsilon > 0 \exists P$ such that $U(f, P) - L(f, P) < \epsilon$.