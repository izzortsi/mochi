where $n = \dim \mathbb{R}^n$. Since the series $\sum m(V_k)$ converges this is possible. By (7) and the scaling law $m(tE) = t^n mE$ for $n$-dimensional measure we have

$$m^*(A \setminus U_{N-1}) \leq \sum_{k=N}^{\infty} m(5V_k) = 5^n \sum_{k=N}^{\infty} m(V_k) < \delta.$$

Since $\delta$ is arbitrary, $A \setminus U = \bigcap_k (A \setminus U_k)$ is a zero set.

**Remark** A similar strategy of covering reduction appears in the proof in Chapter 2 that sequential compactness implies covering compactness. Formally, the proof is expressed in terms of the Lebesgue number of the covering but the intuition is this: Given an open covering $U$ of a sequentially compact set $K$, you choose a subcovering by first taking a $U_1 \in U$ that covers about as much of $K$ as possible, then taking $U_2 \in U$ that covers about as much of the remainder of $K$ as possible, and so on. If finitely many of these sets $U_n$ fail to cover $K$ then you take a sequence $x_n \in K \setminus (U_1 \cup \cdots \cup U_{n-1})$ and prove that it has no subsequence which converges in $K$. (The contradiction shows that in fact finitely many of the $U_n$ you chose actually did cover $K$.) In short, when reducing a covering it is a good idea to choose the biggest sets first. This is exactly the Vitali outlook.

Removing the assumption that $A$ is bounded presents no problem. Express $\mathbb{R}^n$ as $\bigsqcup D_i \cup Z$, where the $D_i$ are the open unit cubes defined by the integer lattice and $Z$ is the zero set of hyperplanes having at least one integer coordinate. If $A \subset \mathbb{R}^n$ is unbounded then $A = \bigsqcup A_i \cup (A \cap Z)$, where $A_i = A \cap D_i$. Given a Vitali covering $V$ of $A$ by closed balls, we set

$$V_i = \{V \in V : V \subset D_i\}.$$

It is a Vitali covering of the bounded set $A_i$ and therefore reduces to a disjoint $(\epsilon/2^i)$-efficient covering $\{V_{i,k} : k \in \mathbb{N}\}$ of almost all of $A_i$. Thus $V$ reduces to a disjoint $\epsilon$-efficient covering $\{V_{i,k} : i, k \in \mathbb{N}\}$ of almost all of $A$.

A further generalization involves the shapes of the sets $V \in V$. If $|_*|$ is any norm on $\mathbb{R}^n$ then its closed ball of radius $r$ at $p$ is

$$B_*(r,p) = \{x \in \mathbb{R}^n : |x|_* \leq r\}.$$

The preceding proof of the Vitali Covering Lemma goes through word for word when we substitute balls with respect to the norm $|_*$ for Euclidean balls. Even the factor 5 remains the same. If $|_*|$ is the taxicab norm then this gives the following result. See also Exercise 61.