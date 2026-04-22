**89.** The $L^1$-norm of the integrable function $f : [a, b] \to \mathbb{R}$ is $\|f\| = \int |f|$. This gives a metric on the set $\mathcal{L}$ of integrable functions $[a, b] \to \mathbb{R}$ as $d_{L^1}(f, g) = \|f - g\|$. We say that $f_n \to g$ $L^1$-converges to $g$ if $\|f_n - g\| \to 0$.

(a) Prove that $\mathcal{L}$ is a complete metric space.

(b) Prove that $\mathcal{R}$ is dense in $\mathcal{L}$ where $\mathcal{R}$ is the set of Riemann integrable functions.

(c) Infer that $\mathcal{L}$ is the completion of $\mathcal{R}$ with respect to the $L^1$-metric. (This constructs Lebesgue integrals with minimal reference to Lebesgue measure.)

(d) What happens if we replace $[a, b]$ with a box in $\mathbb{R}^n$?

**90.** A theory of integration more general than Lebesgue’s is due to Arnaud Denjoy. Rediscovered by Ralph Henstock and Jaroslav Kurzweil, it is described in Robert McLeod’s book, *The Generalized Riemann Integral*. The definition is deceptively simple. Let $f : [a, b] \to \mathbb{R}$ be given. The **Denjoy integral** of $f$, if it exists, is a real number $I$ such that for each $\epsilon > 0$ there is a function $\delta : [a, b] \to (0, \infty)$ and

$$\left| \sum_{k=1}^{n} f(t_k) \Delta x_k - I \right| < \epsilon$$

for all Riemann sums with $\Delta x_k < \delta(t_k)$, $k = 1, \ldots, n$. (McLeod refers to the function $\delta$ as a “gauge” and to the intermediate points $t_k$ as “tags”.)

(a) Verify that if we require the gauge $\delta(t)$ to be continuous then the Denjoy integral reduces to the Riemann integral.

(b) Verify that the function

$$f(x) = \begin{cases} \frac{1}{\sqrt{x}} & \text{if } 0 < x \leq 1 \\ 100 & \text{if } x = 0 \end{cases}$$

has Denjoy integral 2. [Hint: Construct gauges $\delta(t)$ such that $\delta(0) > 0$ but $\lim_{t \to 0^+} \delta(t) = 0$.]

(c) Generalize (b) to include all functions defined on $[a, b]$ for which the improper Riemann integral is finite.

(d) Infer from (c) and Exercise 46 that some functions are Denjoy integrable but not Lebesgue integrable.

(e) Read McLeod’s book to verify that every nonnegative Denjoy integrable function is Lebesgue integrable and the integrals are equal; and every Lebesgue integrable function is Denjoy integrable and the integrals are equal. Infer that the difference between Lebesgue and Denjoy corresponds to the difference between absolutely and conditionally convergent series – if $f$ is Lebesgue integrable, so is $|f|$, but this is not true for Denjoy integrals.