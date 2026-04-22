Proof of the Average Value Theorem

Since $f$ is locally integrable, $\mathbb{R}^n$ is covered by open sets on which $f$ is integrable. It follows that $f$ is integrable on each compact cube in $\mathbb{R}^n$. Since $\mathbb{R}^n$ is the monotone union of cubes of integer radius, it is no loss of generality to assume $f$ is integrable on some large cube $X$ and identically zero outside $X$.

Fix $\alpha > 0$. Theorem 49 implies that almost every point $p$ in every horizontal slice of $\mathcal{U}f$ is a density point of the slice. As $Q \downarrow p$ the concentration of $\{x : fx \geq fp - \alpha\}$ in $Q$ converges to 1, which implies $\liminf_{Q \downarrow p} \int_Q f \geq fp - \alpha$. Since this is true for each $\alpha = 1, 1/2, 1/3, \ldots$ we have

$$\liminf_{Q \downarrow p} \int_Q f \geq fp$$

almost everywhere.

To handle the limsup we first assume $f$ is bounded, say $f(x) \leq M$ for all $x \in X$. Then $M - f \geq 0$ is integrable on $X$ and $f_Q(M - f) = M - f_Q f$. Thus

$$\liminf_{Q \downarrow p} \int_Q (M - f) \geq M - fp$$

for almost every $p \in \mathbb{R}^n$. The relation between liminf and limsup gives

$$\limsup_{Q \downarrow p} \int_Q f = \limsup_{Q \downarrow p} \int_Q (f - M) + M$$

$$= -\liminf_{Q \downarrow p} \int_Q (M - f) + M \leq fp$$

which gives

$$\liminf_{Q \downarrow p} \int_Q f = fp$$

for almost every $p$ when $f$ is bounded.

For the general integrable $f : X \to [0, \infty)$ we set

$$f_n(x) = \begin{cases} f(x) & \text{if } f(x) \leq n \\ n & \text{if } f(x) \geq n \end{cases}$$

Then $f_n$ is bounded and $f_n \uparrow f$ as $n \to \infty$. Accordingly for each $n$ there is a zero set $Z_n$ such that for all $p \notin Z_n$ we have $\liminf_{Q \downarrow p} f_n = f_n(p)$. Let $Z_\infty$ be the zero set $\cup Z_n$. If $p \notin Z_\infty$ then for all $n \in \mathbb{N}$ we have

$$\liminf_{Q \downarrow p} f_n = f_n(p).$$