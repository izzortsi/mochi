in $\mathfrak{H}_0$. Since there are functions in $\mathfrak{H}_0$ which are not differentiable, we cannot apply it to arbitrary function in $\mathfrak{H}_0$. Thus we need a suitable domain

$$\mathfrak{D}(L) = \{f \in C^2([a, b], \mathbb{C}) | BC_a(f) = BC_b(f) = 0\},$$

(5.54)

where

$$BC_a(f) = \cos(\alpha)f(a) - \sin(\alpha)p(a)f'(a),$$

$$BC_b(f) = \cos(\beta)f(b) - \sin(\beta)p(b)f'(b).$$

(5.55)

In other words, we allow linear combinations of the boundary values $f(a)$ and $f'(a)$ (resp. $f(b)$ and $f'(b)$) as boundary conditions. This choice ensures that $\mathfrak{D}(L)$ is a linear subspace of $\mathfrak{H}_0$ and one can even show that it is dense:

**Lemma 5.8.** The set of twice differentiable functions with compact support $C_c^2((a, b), \mathbb{C})$ is dense in $\mathfrak{H}_0$.

**Proof.** Let $P(x) = 30 \int_0^x y^2(y - 1)^2 dy = x^3(6x^2 - 15x + 10)$. Note that by construction $P(x)$ is monotone increasing from 0 to 1 (in particular $0 \leq P(x) \leq 1$ for $0 \leq x \leq 1$) and both $P'(x)$ as well as $P''(x)$ vanish at $x = 0, 1$. We set $P(x) = 0$ for $x \leq 0$ and $P(x) = 1$ for $x \geq 1$ such that $P(x) \in C^2(\mathbb{R})$.

Next pick $f \in C([a, b], \mathbb{C})$. Since $f$ is uniformly continuous we can find a $\delta > 0$ for every $\varepsilon > 0$ such that $|f(x) - f(y)| \leq \varepsilon$ whenever $|x - y| \leq \delta$. By decreasing $\delta$ we can assume $b - a = n\delta$ for some integer $n$ and $\delta \leq \varepsilon$. Now set $x_j = a + j\delta$, $0 \leq j \leq n$, and define

$$f_\varepsilon(x) = f(x_1)P\left(\frac{x - a - \delta/2}{\delta/2}\right) + \sum_{j=1}^{n-1}(f(x_{j+1}) - f(x_j))P\left(\frac{x - x_j}{\delta}\right)$$

$$- f(x_{n-1})P\left(\frac{x - b + \delta}{\delta/2}\right).$$

Then $f_\varepsilon \in C_c^2((a, b), \mathbb{C})$ and $\max_{x \in [x_1, x_{n-1}]} |f(x) - f_\varepsilon(x)| \leq \varepsilon$. Hence

$$\|f - f_\varepsilon\|^2 \leq 8M^2R^2\delta + \varepsilon^2R^2(b - a) \leq \varepsilon(8M^2 + \varepsilon(b - a))R^2,$$

where $M = \max_{x \in [a, b]} |f(x)|$, $R = \max_{x \in [a, b]} |r(x)|$, and the claim follows.

It is not hard to show that the same is true for $C_c^\infty((a, b), \mathbb{C})$ (Problem 5.18).

The two most important cases are $\alpha = 0$ (i.e., $u(a) = 0$) and $\alpha = \pi/2$ (i.e., $u'(a) = 0$). The condition $u(a) = 0$ is called a **Dirichlet boundary condition** at $a$ and the condition $u'(a) = 0$ is called a **Neumann boundary condition** at $a$. The general case is also known as **Robin boundary condition**. Note that without loss of generality one can assume $\alpha \in [0, \pi)$.

Clearly we want $L$ to be symmetric. In order to get $L$ from one side in the scalar product to the other we use integration by parts (twice) to obtain