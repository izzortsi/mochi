space is called **complete** if every Cauchy sequence has a limit. A complete normed space is called a **Banach space**.

**Example.** Clearly $\mathbb{R}^n$ (or $\mathbb{C}^n$) is a Banach space with the usual Euclidean norm

$$|x| = \sqrt{\sum_{j=1}^{n}|x_j|^2}.$$  

(2.2)

We will be mainly interested in the following example: Let $I$ be a compact interval and consider the continuous functions $C(I)$ on this interval. They form a vector space if all operations are defined pointwise. Moreover, $C(I)$ becomes a normed space if we define

$$\|x\| = \sup_{t \in I}|x(t)|.$$  

(2.3)

I leave it as an exercise to check the three requirements from above. Now what about convergence in this space? A sequence of functions $x_n(t)$ converges to $x(t)$ if and only if

$$\lim_{n \to \infty} \|x_n - x\| = \lim_{n \to \infty} \sup_{t \in I}|x_n(t) - x(t)| = 0.$$  

(2.4)

That is, in the language of real analysis, $x_n$ converges uniformly to $x$. Now let us look at the case where $x_n$ is only a Cauchy sequence. Then $x_n(t)$ is clearly a Cauchy sequence of real numbers for any fixed $t \in I$. In particular, by completeness of $\mathbb{R}$, there is a limit $x(t)$ for each $t$. Thus we get a limiting function $x(t)$. Moreover, letting $m \to \infty$ in

$$|x_n(t) - x_m(t)| \leq \varepsilon \quad \forall n, m > N_\varepsilon, t \in I$$  

(2.5)

we see

$$|x_n(t) - x(t)| \leq \varepsilon \quad \forall n > N_\varepsilon, t \in I,$$  

(2.6)

that is, $x_n(t)$ converges uniformly to $x(t)$. However, up to this point we do not know whether it is in our vector space $C(I)$ or not, that is, whether it is continuous or not. Fortunately, there is a well-known result from real analysis which tells us that the uniform limit of continuous functions is again continuous: Fix $t \in I$ and $\varepsilon > 0$. To show that $x$ is continuous we need to find a $\delta$ such that $|t - s| < \delta$ implies $|x(t) - x(s)| < \varepsilon$. Pick $n$ so that $\|x_n - x\| < \varepsilon/3$ and $\delta$ so that $|t - s| < \delta$ implies $|x_n(t) - x_n(s)| < \varepsilon/3$. Then $|t - s| < \delta$ implies

$$|x(t) - x(s)| \leq |x(t) - x_n(t)| + |x_n(t) - x_n(s)| + |x_n(s) - x(s)| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon$$

as required. Hence $x(t) \in C(I)$ and thus every Cauchy sequence in $C(I)$ converges. Or, in other words, $C(I)$ is a Banach space.