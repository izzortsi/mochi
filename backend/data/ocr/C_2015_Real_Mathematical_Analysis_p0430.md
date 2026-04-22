Condition (b) is what we mean by $\{V_k\}$ being an “efficient” covering – the extra points covered form an $\epsilon$-set. The sets $U_N = V_1 \sqcup \dots \sqcup V_N$ “nearly” cover $A$ in the sense that given $\epsilon > 0$, if $N$ is large then $U_N$ contains $A$ except for an $\epsilon$-set. After all, $U = \bigcup U_N$ contains $A$ except for a zero set. See also Appendix E.

Boundedness of $A$ is an unnecessary hypothesis. Also, the assumption that the sets $V \in \mathcal{V}$ are closed balls can be weakened somewhat. We discuss these improvements after the proof of the result as stated.

**Proof of the Vitali Covering Lemma** Given $\epsilon > 0$, there is a bounded open set $W \supset A$ such that $mW \leq m^*A + \epsilon$. Define

$$\mathcal{V}_1 = \{V \in \mathcal{V}: V \subset W\} \quad \text{and} \quad d_1 = \sup\{diam V: V \in \mathcal{V}_1\}.$$

$\mathcal{V}_1$ is still a Vitali covering of $A$. Since $W$ bounded $d_1$ is finite. Choose $V_1 \in \mathcal{V}_1$ with diam $V_1 \geq d_1/2$ and define

$$\mathcal{V}_2 = \{V \in \mathcal{V}_1: V \cap V_1 = \emptyset\} \quad \text{and} \quad d_2 = \sup\{diam V: V \in \mathcal{V}_2\}.$$

Choose $V_2 \in \mathcal{V}_2$ with diam $V_2 \geq d_2/2$. In general,

$$\mathcal{V}_k = \{V \in \mathcal{V}_{k-1}: V \cap U_{k-1} = \emptyset\}$$

$$d_k = \sup\{diam V: V \in \mathcal{V}_k\}$$

$$V_k \in \mathcal{V}_k \text{ has diam } V_k \geq \frac{d_k}{2}$$

where $U_{k-1} = V_1 \sqcup \dots \sqcup V_{k-1}$. This means that $V_k$ has roughly maximal diameter among the $V \in \mathcal{V}$ that do not meet $U_{k-1}$. By construction, the balls $V_k$ are disjoint and since they lie in $W$ we have $m(\bigsqcup V_k) \leq mW \leq m^*A + \epsilon$, verifying (a) and (b). It remains to check (c).

If at any stage in the construction $\mathcal{V}_k = \emptyset$ then we have covered $A$ with finitely many sets $V_k$, so (c) becomes trivial. We therefore assume that $V_1, V_2, \dots$ form an infinite sequence. Additivity implies that $m(\bigsqcup V_k) = \sum mV_k$. Since each $V_k$ is contained in $W$ the series converges. This implies that diam $V_k \to 0$ as $k \to \infty$; i.e.,

(6) $$d_k \to 0 \text{ as } k \to \infty.$$

For each $N \in \mathbb{N}$ we claim that

(7) $$\bigcup_{k=N}^{\infty} 5V_k \supset A \setminus U_{N-1}$$

where $5V_k$ denotes the ball $V_k$ dilated from its center by the factor 5. (These dilated balls need not belong to $\mathcal{V}$.)