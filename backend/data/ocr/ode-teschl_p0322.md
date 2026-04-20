11.7. Homoclinic orbits as source for chaos

In this section we want to show that similar considerations as for the tent map can be made for other maps as well. We start with the logistic map for $\mu > 4$. As for the tent map, it is not hard to show that that $L^n_\mu(x) \to -\infty$ if $x \in \mathbb{R}[0,1]$. Hence most points will escape to $-\infty$ and we want to find the points which stay in $[0,1]$ for all iterations.

Set $\Lambda_0 = [0,1]$. Then $\Lambda_1 = L^{-1}_\mu(\Lambda_0)$ is given by

$$\Lambda_1 = I_0 \cup I_1 = [0, G_\mu(1)] \cup [1 - G_\mu(1), 1],$$

(11.51)

where

$$G_\mu(x) = \frac{1}{2} - \sqrt{\frac{1}{4} - \frac{x}{\mu}}, \quad L_\mu(G_\mu(x)) = x, \quad 0 \leq x \leq 1.$$

(11.52)

To make our life a little easier we will make the additional assumption that

$$L'_\mu(x) = \mu(1 - 2x) \geq \alpha > 1 \quad \text{for} \quad x \in I_0.$$

(11.53)

Since we have

$$\sqrt{\mu(\mu - 4)} = L'_\mu(G_\mu(1)) \leq |L'_\mu(x)| \leq L'_\mu(0) = \mu, \quad x \in I_0 \cup I_1,$$

(11.54)

this implies $\mu > 2 + \sqrt{5} = 4.236$. The general case $\mu > 4$ can be found in the book by Robinson [33].

Now proceeding as in the case of the tent map, we see that there is a sequence of nesting sets $\Lambda_n$ consisting of $2^n$ subintervals $I_{s_0, \dots, s_{n-1}}, s_j \in \{0,1\}$, defined recursively via $I_{0,s_0, \dots, s_n} = G_\mu(I_{s_0, \dots, s_n})$ and $I_{1,s_0, \dots, s_n} = 1 - G_\mu(I_{s_0, \dots, s_n})$. The only difference is that, since $L_\mu$ is not (piecewise) linear, we do not know the length of the interval $I_{s_0, \dots, s_n}$. However, by our assumption (11.53), we know $G'_\mu(x) \leq \alpha^{-1}$ and thus $|I_{s_0, \dots, s_n}| \leq G_\mu(1)\alpha^{-n}$. But this is all we have used for the tent map and hence the same proof shows

**Theorem 11.21.** Suppose $\mu > 2 + \sqrt{5}$. Then the logistic map $L_\mu$ leaves the set

$$\Lambda = \bigcap_{n \in \mathbb{N}} \Lambda_n \subset [0,1]$$

(11.55)

invariant. All points $x \in \mathbb{R}\backslash \Lambda$ satisfy $\lim_{n \to \infty} L^n_\mu(x) = -\infty$. The set $\Lambda$ is a Cantor set and the dynamical system $(\Lambda, L_\mu)$ is topologically equivalent to the shift on two symbols $(\Sigma_2, \sigma)$ by virtue of the itinerary map

$$\varphi : \Lambda \rightarrow \Sigma_2$$

$$x \mapsto x_n = j \text{ if } L^n_\mu(x) \in I_j.$$

(11.56)

In particular, $(\Lambda, L_\mu)$ is chaotic.

Clearly we also want to know whether the repellor $\Lambda$ of the logistic map is strange.