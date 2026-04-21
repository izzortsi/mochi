Figure 48 The neighborhood $M_rp$ engulfs the smaller neighborhood $M_{1/n_k}(a_{n_k})$.

If $U_1 \supset A$ then $\mathcal{U}$ reduces to the finite subcovering $\{U_1\}$ consisting of a single set, and the implication $(\text{b}) \Rightarrow (\text{a})$ is proved. On the other hand, as is more likely, if $U_1$ does not contain $A$ then we choose a point $a_2 \in A \setminus U_1$ and $U_2 \in \mathcal{U}$ such that

$$M_\lambda(a_2) \subset U_2.$$

Either $\mathcal{U}$ reduces to the finite subcovering $\{U_1, U_2\}$ (and the proof is finished) or else we can continue, eventually producing a sequence $(a_n)$ in $A$ and a sequence $(U_n)$ in $\mathcal{U}$ such that

$$M_\lambda(a_n) \subset U_n \text{ and } a_{n+1} \in (A \setminus (U_1 \cup \cdots \cup U_n)).$$

We will show that such sequences $(a_n)$, $(U_n)$ lead to a contradiction. By sequential compactness, there is a subsequence $(a_{n_k})$ that converges to some $p \in A$. For a large $k$ we have $d(a_{n_k}, p) < \lambda$ and

$$p \in M_\lambda(a_{n_k}) \subset U_{n_k}.$$

See Figure 49.

All $a_{n_\ell}$ with $\ell > k$ lie outside $U_{n_k}$, which contradicts their convergence to $p$. Thus, at some finite stage the process of choosing points $a_n$ and sets $U_n$ terminates, and $\mathcal{U}$