We start by returning to the construction of $\Lambda_n$. If we set $I = [0, 1]$ we have seen that $\Lambda_1$ consists of two subintervals $I_0 = \frac{1}{\mu} I$ and $I_1 = 1 - \frac{1}{\mu} I$. Proceeding inductively we see that the set $\Lambda_n$ consist of $2^n$ subintervals $I_{s_0, \cdots, s_{n-1}}, s_j \in \{0, 1\}$, defined recursively via $I_{0, s_0, \cdots, s_n} = \frac{1}{\mu} I_{s_0, \cdots, s_n}$ and $I_{1, s_0, \cdots, s_n} = 1 - \frac{1}{\mu} I_{s_0, \cdots, s_n}$. Note that $T_\mu(I_{s_0, \cdots, s_n}) = I_{s_1, \cdots, s_n}$.

By construction we have $x \in I_{s_0, \cdots, s_n}$ if and only if $\varphi(x)_j = s_j$ for $0 \leq j \leq n$. Now pick a sequence $s \in \Sigma_2$ and consider the intersection of nesting intervals

$$I_s = \bigcap_{n \in \mathbb{N}_0} I_{s_0, \cdots, s_n}. \tag{11.26}$$

By the finite intersection property of compact sets it is a nonempty interval, hence $\varphi$ is onto. By $|I_{s_0, \cdots, s_n}| = \mu^{-n-1}$ its length is zero and thus it can contain only one point, that is, $\varphi$ is injective.

If $x$ and $y$ are close so are $T_\mu(x)^n$ and $T_\mu(y)^n$ by continuity of $T_\mu$. Hence, for $y$ sufficiently close to $x$ the first $n$ iterates will stay sufficiently close such that $\varphi(x)_j = \varphi(y)_j$ for $0 \leq j \leq n$. But this implies that $\varphi(x)$ and $\varphi(y)$ are close and hence $\varphi$ is continuous. Similarly, $\varphi(x)$ and $\varphi(y)$ close implies that the first $n$ terms are equal. Hence $x, y \in I_{x_0, \cdots, x_n} = I_{y_0, \cdots, y_n}$ are close, implying that $\varphi^{-1}$ is continuous.

In summary,

**Theorem 11.5.** The two dynamical systems $(\Lambda, T_\mu), \mu > 2$, and $(\Sigma_2, \sigma)$ are topologically equivalent via the homeomorphism $\varphi : \Lambda \to \Sigma_2$.

Hence in order to understand the tent map for $\mu > 2$, all we have to do is to study the shift map $\sigma$ on $\Sigma_2$. In fact, we will show that $(\Sigma_2, \sigma)$, and hence $(\Lambda, T_\mu), \mu > 2$, is chaotic in the next section.

**Problem 11.6.** Show that two different ternary expansions define the same number, $\sum_{n \in \mathbb{N}} x_n 3^{-n} = \sum_{n \in \mathbb{N}} y_n 3^{-n}$, if and only if there is some $n_0 \in \mathbb{N}$ such that $x_n = y_n$ for $n < n_0$, $x_n = y_n \pm 1$ for $n = n_0$, and $x_n = y_n \mp 2$ for $n > n_0$. Show that every $x \in [0, 1]$ has a unique expansions if the expansions which end in 1 or 12 are excluded.

**Problem 11.7.** Show that for $\mu = 3$ we have $\Lambda_n = \{x | x_j \neq 1, 1 \leq j \leq n\}$, where $x_j$ are the digits in the ternary expansion as in the previous problem.

**11.5. Symbolic dynamics**

The considerations of the previous section have shown that the shift map on a sequence space of finitely many symbols is hidden in the tent map. This turns out to be true for other systems as well. Hence it deserves a thorough investigation which will be done now.