Complete Proof

Given $\epsilon > 0$ we must find $\delta > 0$ such that if $|x - b| < \delta$ then $|f(x)/g(x) - L| < \epsilon$. Since $f'(x)/g'(x)$ tends to $L$ as $x$ tends to $b$ there does exist $\delta > 0$ such that if $x \in (b - \delta, b)$ then

$$\left| \frac{f'(x)}{g'(x)} - L \right| < \frac{\epsilon}{2}.$$

For each $x \in (b - \delta, b)$ determine a point $t \in (b - \delta, b)$ which is so near to $b$ that

$$|f(t)| + |g(t)| < \frac{g(x)^2 \epsilon}{4(|f(x)| + |g(x)|)}$$

$$|g(t)| < \frac{|g(x)|}{2}.$$

Since $f(t)$ and $g(t)$ tend to 0 as $t$ tends to $b$, and since $g(x) \neq 0$ such a $t$ exists. It depends on $x$, of course. By this choice of $t$ and the Ratio Mean Value Theorem we have

$$\left| \frac{f(x)}{g(x)} - L \right| = \left| \frac{f(x)}{g(x)} - \frac{f(x) - f(t)}{g(x) - g(t)} + \frac{f(x) - f(t)}{g(x) - g(t)} - L \right|$$

$$\leq \left| \frac{g(x)f(t) - f(x)g(t)}{g(x)(g(x) - g(t))} \right| + \left| \frac{f'(\theta)}{g'(\theta)} - L \right| < \epsilon,$$

which completes the proof that $f(x)/g(x) \to L$ as $x \to b$.

It is clear that L’Hôpital’s Rule holds equally well as $x$ tends to $b$ or to $a$. It is also true that it holds when $x$ tends to $\pm\infty$ or when $f$ and $g$ tend to $\pm\infty$. See Exercises 6 and 7.

From now on feel free to use L’Hôpital’s Rule!

8 Theorem

If $f$ is differentiable on $(a, b)$ then its derivative function $f'(x)$ has the intermediate value property.

Differentiability of $f$ implies continuity of $f$, and so the Intermediate Value Theorem from Chapter 2 applies to $f$ and states that $f$ takes on all intermediate values, but this is not what Theorem 8 is about. Not at all. Theorem 8 concerns $f'$ not $f$. The function $f'$ can well be discontinuous, but nevertheless it too takes on all intermediate values. In a clear abuse of language, functions like $f'$ possessing the intermediate value property are called Darboux continuous, even when they are discontinuous! Darboux was the first to realize how badly discontinuous a derivative