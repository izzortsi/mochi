as $\mathbb{R}$. The range is the set of real numbers $\geq 2$. The graph of $f$ is a paraboloid with lowest point $(0, 0, 2)$. The second part of the figure shows the portion of the graph lying above the annulus. You will find it useful to keep in mind the distinctions among the concepts: function, range, and graph.

11 Theorem The following are equivalent for continuity of $f : M \rightarrow N$.

(i) The $(\epsilon, \delta)$-condition.
(ii) The sequential convergence preservation condition.
(iii) The closed set condition: The preimage of each closed set in $N$ is closed in $M$.
(iv) The open set condition: The preimage of each open set in $N$ is open in $M$.

Proof Totally natural! By Theorem 4, (i) implies (ii).

(ii) implies (iii). If $K \subset N$ is closed in $N$ and $p_n \in f^{\text{pre}}(K)$ converges to $p \in M$ then we claim that $p \in f^{\text{pre}}(K)$. By (ii), $f$ preserves sequential convergence so

$$\lim_{n \to \infty} f(p_n) = fp.$$

Since $K$ is closed in $N$, $fp \in K$, so $p \in f^{\text{pre}}(K)$, and we see that $f^{\text{pre}}(K)$ is closed in $M$. Thus (ii) implies (iii).

(iii) implies (iv). This follows by taking complements: $(f^{\text{pre}}(U))^c = f^{\text{pre}}(U^c)$.

(iv) implies (i). Let $\epsilon > 0$ and $p \in M$ be given. $N_\epsilon(fp)$ is open in $N$, so its preimage $U = f^{\text{pre}}(N_\epsilon(fp))$ is open in $M$. The point $p$ belongs to the preimage so openness of $U$ implies there is a $\delta > 0$ such that $M_\delta(p) \subset U$. Then

$$f(M_\delta(p)) \subset fU \subset N_\epsilon(fp)$$

gives the $\epsilon, \delta$ condition, $d_M(p, x) < \delta \Rightarrow d_N(fp, fx) < \epsilon$. See Figure 36.

I hope you find the closed and open set characterizations of continuity elegant. Note that no explicit mention is made of the metric. The open set condition is purely topological. It would be perfectly valid to take as a definition of continuity that the preimage of each open set is open. In fact this is exactly what’s done in general topology.

12 Corollary A homeomorphism $f : M \rightarrow N$ bijects the collection of open sets in $M$ to the collection of open sets in $N$. It bijects the topologies.