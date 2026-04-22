Using (2), (7), and (9) we get

$$\sum_{k=0}^{n} (k - nx)^2 r_k(x)$$
$$= \sum_{k=0}^{n} k^2 r_k(x) - 2nx \sum_{k=0}^{n} kr_k(x) + (nx)^2 \sum_{k=0}^{n} r_k(x)$$
$$= n(n - 1)x^2 + nx - 2(nx)^2 + (nx)^2$$
$$= -nx^2 + nx = nx(1 - x),$$

as claimed in (3).

**Proof #2** Let $f \in C^0([0,1], \mathbb{R})$ be given and let $g(x) = f(x) - (mx + b)$ where

$$m = \frac{f(1) - f(0)}{1} \quad \text{and} \quad b = f(0).$$

Then $g \in C^0$ and $g(0) = 0 = g(1)$. If we can approximate $g$ arbitrarily well by polynomials, then the same is true of $f$ since $mx + b$ is a polynomial. In other words it is no loss of generality to assume that $f(0) = f(1) = 0$ in the first place. We do so. Also, we extend $f$ to all of $\mathbb{R}$ by defining $f(x) = 0$ for all $x \in \mathbb{R} \setminus [0,1]$. Then we consider a function

$$\beta_n(t) = b_n(1 - t^2)^n - 1 \leq t \leq 1,$$

where the constant $b_n$ is chosen so that $\int_{-1}^{1} \beta_n(t) \, dt = 1$. As shown in Figure 95, $\beta_n$ is a kind of polynomial bump function. For $0 \leq x \leq 1$, set

$$P_n(x) = \int_{-1}^{1} f(x + t) \beta_n(t) \, dt.$$

This is a weighted average of the values of $f$ using the weight function $\beta_n$. We claim that $P_n$ is a polynomial and $P_n(x) \Rightarrow f(x)$ as $n \to \infty$.

To check that $P_n$ is a polynomial we use a change of variables, $u = x + t$. Then, for $0 \leq u \leq 1$ we have

$$P_n(x) = \int_{x-1}^{x+1} f(u) \beta_n(u - x) \, du = \int_{0}^{1} f(u) \beta_n(u - x) \, du$$

since $f = 0$ outside $[0,1]$. The function $\beta_n(u - x) = b_n(1 - (u - x)^2)^n$ is a polynomial in $x$ whose coefficients are polynomials in $u$. The powers of $x$ pull out past the integral and we are left with these powers of $x$ multiplied by numbers, namely, the integrals of the polynomials in $u$ times $f(u)$. In other words, by merely inspecting the last formula, it becomes clear that $P_n(x)$ is a polynomial in $x$.