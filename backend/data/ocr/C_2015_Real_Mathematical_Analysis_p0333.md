We isolate two more facts in preparation for the proof of the Change of Variables Formula.

**34 Lemma** Suppose that $\psi : U \to \mathbb{R}^2$ is $C^1$, $0 \in U$, $\psi(0) = 0$, and for all $u \in U$ we have

$$\|(D\psi)_u - Id\| \leq \epsilon.$$

If $U_r(0) \subset U$ then

$$\psi(U_r(0)) \subset U_{(1+\epsilon)r}(0).$$

**Proof** By $U_r(p)$ we denote the $r$-neighborhood of $p$ in $U$. The $C^1$ Mean Value Theorem gives

$$\psi(u) = \psi(u) - \psi(0) = \int_0^1 (D\psi)_{tu} dt(u)$$

$$= \int_0^1 ((D\psi)_{tu} - \text{id}) dt(u) + u.$$

If $|u| \leq r$ this implies that $|\psi(u)| \leq (1+\epsilon)r$; i.e., $\psi(U_r(0)) \subset U_{(1+\epsilon)r}(0).$

Lemma 34 is valid for any choice of norm on $\mathbb{R}^2$, in particular for the maximum coordinate norm. In that case the inclusion refers to squares: the square of radius $r$ is carried by $\psi$ inside the square of radius $(1+\epsilon)r$.

**35 Lemma** The Lipschitz image of a zero set is a zero set.

**Proof** Suppose that $Z$ is a zero set and $h : Z \to \mathbb{R}^2$ satisfies a Lipschitz condition

$$|h(z) - h(z')| \leq L|z - z'|.$$

Given $\epsilon > 0$, there is a countable covering of $Z$ by squares $S_k$ such that

$$\sum_k |S_k| < \epsilon.$$

See Exercise 45. Each set $S_k \cap Z$ has diameter $\leq \text{diam} S_k$ and therefore $h(Z \cap S_k)$ has diameter $\leq L \text{diam} S_k$. As such it is contained in a square $S_k'$ of edge length $L \text{diam} S_k$. The squares $S_k'$ cover $h(Z)$ and

$$\sum_k |S_k'| \leq L^2 \sum_k (\text{diam} S_k)^2 = 2L^2 \sum_k |S_k| \leq 2L^2\epsilon.$$

Therefore $h(Z)$ is a zero set.