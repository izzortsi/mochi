Proof The construction is due to Weierstrass. The letters $k, m, n$ denote integers. Start with a sawtooth function $\sigma_0 : \mathbb{R} \rightarrow \mathbb{R}$ defined as

$$\sigma_0(x) = \begin{cases} 
x - 2n & \text{if } 2n \leq x \leq 2n + 1 \\
2n + 2 - x & \text{if } 2n + 1 \leq x \leq 2n + 2.
\end{cases}$$

$\sigma_0$ is periodic with period 2; if $t = x + 2m$ then $\sigma_0(t) = \sigma_0(x)$. The compressed sawtooth function

$$\sigma_k(x) = \left(\frac{3}{4}\right)^k \sigma_0(4^k x)$$

has period $\pi_k = 2/4^k$. If $t = x + m\pi_k$ then $\sigma_k(t) = \sigma_k(x)$. See Figure 104.

Figure 104 The graphs of the sawtooth function and two compressed sawtooth functions