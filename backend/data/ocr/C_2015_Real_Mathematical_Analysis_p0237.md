15 Lemma If $(f_k)$ is a subsequence of $(g_n)$ then for each $k$ we have $f_k = g_r$ for some $r \geq k$.

Proof By definition of what a subsequence is, $f_k = g_{n_k}$ for some $n_k$ such that $1 \leq n_1 < n_2 < \cdots < n_k$. Hence $r = n_k \geq k$.

Proof of the Arzelà-Ascoli Theorem $[a,b]$ has a countable dense subset $D = \{d_1, d_2, \ldots\}$. For instance we could take $D = \mathbb{Q} \cap [a,b]$. Boundedness of $(f_n)$ means that for some constant $M$, all $x \in [a,b]$, and all $n \in \mathbb{N}$ we have $|f_n(x)| \leq M$. Thus $(f_n(d_1))$ is a bounded sequence of real numbers. Bolzano-Weierstrass implies that some subsequence of it converges to a limit in $\mathbb{R}$, say

$$f_{1,k}(d_1) \to y_1 \text{ as } k \to \infty.$$

The subsequence $(f_{1,k})$ evaluated at the point $d_2$ is also a bounded sequence in $\mathbb{R}$, and there exists a sub-subsequence $(f_{2,k})$ such that $f_{2,k}(d_2)$ converges to a limit in $\mathbb{R}$, say $f_{2,k}(d_2) \to y_2$ as $k \to \infty$. The sub-subsequence evaluated at $d_1$ still converges to $y_1$. Continuing in this way gives a nested family of subsequences $(f_{m,k})$ such that

$$(f_{m,k}) \text{ is a subsequence of } (f_{m-1,k})$$
$$j \leq m \Rightarrow f_{m,k}(d_j) \to y_j \text{ as } k \to \infty.$$

Now consider the diagonal subsequence $(g_m) = (f_{m,m})$. We claim that it converges uniformly to a limit, which will complete the proof. First we show it converges pointwise on $D$. Fix any $j \in \mathbb{N}$ and look at $m \gg j$. Lemma 15 implies that $f_{m,m} = f_{m-1,r_1}$ for some $r_1 \geq m$. Applying the lemma again, we see that $f_{m-1,r_1} = f_{m-2,r_2}$ for some $r_2 \geq r_1 \geq m$. Repetition gives

$$f_{m,m} = f_{m-1,r_1} = f_{m-2,r_2} = \cdots = f_{j,r}$$

for some $r = r_{m-j} \geq \cdots \geq r_2 \geq r_1 \geq m$. Since $r \geq m$ this gives

$$g_m(d_j) = f_{m,m}(d_j) = f_{j,r}(d_j) \to y_j$$

as $m \to \infty$.

We claim that $g_m(x)$ converges also at the other points $x \in [a,b]$ and that the convergence is uniform. It suffices to show that $(g_m)$ is a Cauchy sequence in $C^0$.

Let $\epsilon > 0$ be given. Equicontinuity gives a $\delta > 0$ such that for all $s, t \in [a,b]$ we have

$$|s-t| < \delta \Rightarrow |g_m(s) - g_m(t)| < \frac{\epsilon}{3}.$$