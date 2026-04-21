The corollary remains true for analytic functions – the inverse of an analytic function with nonvanishing derivative is analytic. The generalization of the inverse function theorem to higher dimensions is a principal goal of Chapter 5.

2 Riemann Integration

Let $f : [a, b] \to \mathbb{R}$ be given. Intuitively, the integral of $f$ is the area under its graph; i.e., for $f \geq 0$ we have

$$\int_a^b f(x) \, dx = \text{area } U$$

where $U$ is the undergraph of $f$,

$$U = \{(x, y) : a \leq x \leq b \text{ and } 0 \leq y < f(x)\}.$$

The precise definition involves approximation. A partition pair consists of two finite sets of points $P, T \subset [a, b]$ where $P = \{x_0, \ldots, x_n\}$ and $T = \{t_1, \ldots, t_n\}$ are interlaced as

$$a = x_0 \leq t_1 \leq x_1 \leq t_2 \leq x_2 \leq \cdots \leq t_n \leq x_n = b.$$

We assume the points $x_0, \ldots, x_n$ are distinct. The Riemann sum corresponding to $f, P, T$ is

$$R(f, P, T) = \sum_{i=1}^{n} f(t_i) \Delta x_i = f(t_1) \Delta x_1 + f(t_2) \Delta x_2 + \ldots + f(t_n) \Delta x_n$$

where $\Delta x_i = x_i - x_{i-1}$. The Riemann sum $R$ is the area of rectangles which approximate the area under the graph of $f$. See Figure 67. Think of the points $t_i$ as sample points. We sample the value of the function $f$ at $t_i$.

The mesh of the partition $P$ is the length of the largest subinterval $[x_{i-1}, x_i]$. A partition with large mesh is coarse; one with small mesh is fine. In general, the finer the better. A real number $I$ is the Riemann integral of $f$ over $[a, b]$ if it satisfies the following approximation condition:

$$\forall \epsilon > 0 \exists \delta > 0 \text{ such that if } P, T \text{ is any partition pair then}$$

$$\text{mesh } P < \delta \Rightarrow |R - I| < \epsilon$$

where $R = R(f, P, T)$. If such an $I$ exists it is unique, we denote it as

$$\int_a^b f(x) \, dx = I = \lim_{\text{mesh } P \to 0} R(f, P, T),$$

and we say that $f$ is Riemann integrable with Riemann integral $I$.