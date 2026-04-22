Lebesgue’s proof of Theorem 57 used the full power of the machinery he had developed for his new integration theory. In contrast, the proof given below is more direct and geometric. It relies on the Vitali Covering Lemma and the following form of Chebyshev’s inequality from probability theory.

The slope of $f$ over $[a, b]$ is

$$s = \frac{f(b) - f(a)}{b - a}.$$

58 Chebyshev Lemma Assume that $f : [a, b] \to \mathbb{R}$ is nondecreasing and has slope $s$ over $I = [a, b]$. If $I$ contains countably many disjoint subintervals $I_k$ and the slope of $f$ over $I_k$ is $\geq S > s$ then

$$\sum_k |I_k| \leq \frac{s}{S} |I|.$$

Proof Write $I_k = [a_k, b_k]$. Since $f$ is nondecreasing we have

$$f(b) - f(a) \geq \sum_k f(b_k) - f(a_k) \geq \sum_k S(b_k - a_k).$$

Thus $s |I| \geq S \sum |I_k|$ and the lemma follows.

Remark An extreme case of this situation occurs when the slope is concentrated in the three subintervals drawn in Figure 155.

Proof of Lebesgue’s Last Theorem Not only will we show that $f'(x)$ exists almost everywhere, but we will also show that $f'(x)$ is a measurable function of $x$ and

$$\int_a^b f'(x) \, dx \leq f(b) - f(a).$$

To estimate differentiability one introduces upper and lower limits of slopes called derivates. If $h > 0$ then $[x, x + h]$ is a “right interval” at $x$ and $(f(x + h) - f(x))/h$ is a “right slope” at $x$. The limsup of the right slopes as $h \to 0$ is called the right maximum derivate of $f$ at $x$. It is denoted as $D_{\text{right max}} f(x)$. The liminf of the right slopes is the right minimum derivate of $f$ at $x$ and is denoted as $D_{\text{right min}} f(x)$. Similar definitions apply to the left of $x$. Think of $D_{\text{right max}} f(x)$ as the steepest slope at the right of $x$ and $D_{\text{right min}} f(x)$ as the gentlest. See Figure 156.