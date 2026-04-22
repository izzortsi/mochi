8 Term by Term Integration Theorem

A uniformly convergent series of integrable functions $\sum f_k$ can be integrated term-by-term in the sense that

$$\int_a^b \sum_{k=0}^{\infty} f_k(x) \, dx = \sum_{k=0}^{\infty} \int_a^b f_k(x) \, dx.$$

Proof

The sequence of partial sums $F_n$ converges uniformly to $\sum f_k$. Each $F_n$ belongs to $\mathbb{R}$ since it is the finite sum of members of $\mathbb{R}$. According to Theorem 6,

$$\sum_{k=0}^{n} \int_a^b f_k(x) \, dx = \int_a^b F_n(x) \, dx \rightarrow \int_a^b \sum_{k=0}^{\infty} f_k(x) \, dx.$$

This shows that the series $\sum \int_a^b f_k(x) \, dx$ converges to $\int_a^b \sum f_k(x) \, dx.$

9 Theorem

The uniform limit of a sequence of differentiable functions is differentiable provided that the sequence of derivatives also converges uniformly.

Proof

We suppose that $f_n : [a, b] \rightarrow \mathbb{R}$ is differentiable for each $n$ and that $f_n \rightrightarrow f$ as $n \rightarrow \infty$. Also we assume that $f'_n \rightrightarrow g$ for some function $g$. Then we show that $f$ is differentiable and in fact $f' = g$.

We first prove the theorem with a major loss of generality – we assume that each $f'_n$ is continuous. Then $f'_n, g \in \mathbb{R}$ and we can apply the Fundamental Theorem of Calculus and Corollary 7 to write

$$f_n(x) = f_n(a) + \int_a^x f'_n(t) \, dt \rightrightarrow f(a) + \int_a^x g(t) \, dt.$$

Since $f_n \rightrightarrow f$ we see that $f(x) = f(a) + \int_a^x g(t) \, dt$ and, again by the Fundamental Theorem of Calculus, $f' = g$.

In the general case the proof is harder. Fix some $x \in [a, b]$ and define

$$\phi_n(t) = \begin{cases} 
\frac{f_n(t) - f_n(x)}{t - x} & \text{if } t \neq x \\
f'_n(x) & \text{if } t = x 
\end{cases}$$

$$\phi(t) = \begin{cases} 
\frac{f(t) - f(x)}{t - x} & \text{if } t \neq x \\
g(x) & \text{if } t = x 
\end{cases}$$