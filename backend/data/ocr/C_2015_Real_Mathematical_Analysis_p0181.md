every such partition pair $P, T$ differs from the Darboux integral $I$ by less than $\epsilon$. Then, by the $\epsilon$-principle, $f$ is Riemann integrable and its Riemann integral is $I$.

According to the Refinement Principle, the common refinement $P^* = P_1 \cup P$ has

$$L_1 \leq L^* \leq U^* \leq U_1$$

where $L^* = L(f, P^*)$ and $U^* = U(f, P^*)$. Hence $U^* - L^* < \epsilon/3$.

Write $P = \{x_i\}$ and $P^* = \{x_j^*\}$ for $0 \leq i \leq n$ and $0 \leq j \leq n^*$. Since $P^*$ refines $P$ by adjoining $P_1$ to $P$, we have

$$n \leq n^* \leq n + n_1.$$

There are only $n_1 + 1$ points of $P_1$, two of which are the endpoints $a$ and $b$, which leaves only $n_1 - 1$ points of $P_1$ that might “contaminate” $P$-intervals. See Figure 70. Except

$$M_i = M_{j+1}^*$$
$$M_k = M_\ell^*$$
$$M_j^*$$
$$x_{k-1} = x_{\ell-1}^*$$
$$x_k = x_\ell^*$$
$$x_{i-1} = x_{j-1}^*$$
$$x_j^*$$
$$x_i = x_{j+1}^*$$

Figure 70 $[x_{k-1}, x_k]$ is both a $P$- and a $P^*$-interval. The point $x_j^*$ belongs to $P^* \setminus P$ and “contaminates” the $P$-interval $[x_{i-1}, x_i]$, splitting it into $[x_{i-1}, x_j^*]$ and $[x_j^*, x_i]$. Only a few $P$-intervals get contaminated.

for these contaminated $P$-intervals, each of length $\leq \delta$, the sums $U = \sum M_i \Delta x_i$ and $U^* = \sum M_j^* \Delta x_j^*$ are identical. Their difference is the sum over the contaminated $P$-intervals, of which there are fewer than $n_1$. The contaminated differences $M_i - M_j^*$ and $M_i - M_{j+1}^*$ are at worst $2M$ in magnitude. Thus

$$U - U^* < 2Mn_1 \delta = \frac{\epsilon}{3}.$$

Similarly, $L^* - L < \epsilon/3$. Thus

$$U - L = (U - U^*) + (U^* - L^*) + (L^* - L) < \epsilon.$$