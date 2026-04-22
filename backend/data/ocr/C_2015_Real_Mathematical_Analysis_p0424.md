36 Corollary If $f : \mathbb{R} \to [0, \infty)$ and $g : \mathbb{R} \to [0, \infty)$ are integrable then

$$\int f + g = \int f + \int g.$$

Proof Since $\mathcal{U}(f + g) = \mathcal{U}f \sqcup T_f(\mathcal{U}g)$ and $T_f$ is a meseometry we see that $f + g$ is measurable and $m(\mathcal{U}(f + g)) = m(\mathcal{U}f) + m(\mathcal{U}g)$. That is, the integral of the sum is the sum of the integrals.

Remark The standard proof of linearity of the Lebesgue integral is outlined in Exercise 47. It is no easier than this undergraph proof, and undergraphs at least give you a picture as guidance.

37 Corollary If $f_k : \mathbb{R} \to [0, \infty)$ is a sequence of integrable functions then

$$\sum_{k=1}^{\infty} \int f_k = \int \sum_{k=1}^{\infty} f_k.$$

Proof Let $F_n(x) = \sum_{k=1}^{n} f_k(x)$ be the $n^{\text{th}}$ partial sum and $F(x) = \sum_{k=1}^{\infty} f_k(x)$. Then $F_n(x) \uparrow F(x)$ as $n \to \infty$. The Monotone Convergence Theorem implies $\int F_n \to \int F$. Corollary 36 implies $\sum_{k=1}^{n} \int f_k = \int \sum_{k=1}^{n} f_k$ and the assertion follows.

Until now we have assumed the integrand $f$ is nonnegative. If $f$ takes both positive and negative values we define

$$f_+(x) = \begin{cases} f(x) & \text{if } f(x) \geq 0 \\ 0 & \text{if } f(x) < 0 \end{cases}$$

$$f_-(x) = \begin{cases} -f(x) & \text{if } f(x) < 0 \\ 0 & \text{if } f(x) \geq 0. \end{cases}$$