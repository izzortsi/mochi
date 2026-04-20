n = 1, 2, ... Let $\varepsilon_n$, $n = 1, 2, ...$ be a sequence of positive numbers converging to zero. Then for each $n = 1, 2, ...$, let

$$\ldots, x_{-2,n}, x_{-1,n}, x_{0,n}, x_{1,n}, x_{2,n}, \ldots$$

(4.15)

be an infinite set of distinct points such that

$$\sup_k |x_{k,n} - x_{k-1,n}| = \varepsilon_n,$$

(4.16)

and let $\xi_n$ be a discrete random variable such that

$$\xi_n = x_{k,n} \quad \text{if} \quad x_{k-1,n} < \xi \leqslant x_{k,n}.$$

It follows that

$$|\xi - \xi_n| \leqslant \varepsilon_n,$$

and hence

$$|\xi_m - \xi_n| \leqslant |\xi_m - \xi_n| + |\xi_n - \xi| \leqslant \varepsilon_m + \varepsilon_n \to 0$$

as $m, n \to \infty$. Therefore, by (4.12) and (4.13),

$$|\mathbf{E}\xi_m - \mathbf{E}\xi_n| = |\mathbf{E}(\xi_m - \xi_n)| \leqslant \mathbf{E}|\xi_m - \xi_n| \leqslant \varepsilon_m + \varepsilon_n \to 0$$

as $m, n \to \infty$ (provided $\mathbf{E}\xi_n$ exists for all $n$). But then

$$\lim_{n \to \infty} \mathbf{E}\xi_n$$

exists, by the Cauchy convergence criterion. This limit is called the mathematical expectation or mean value of the continuous random variable $\xi$, again denoted by $\mathbf{E}\xi$. Clearly,

$$\mathbf{E}\xi = \lim_{n \to \infty} \sum_{-\infty}^{\infty} x_{k,n} \mathbf{P}\{x_{k-1,n} < \xi \leqslant x_{k,n}\}.$$

Suppose $\xi$ has the probability density $p_\xi(x)$. Then, choosing the points (4.15) to be continuity points of $p_\xi(x)$, we have

$$\sum_{-\infty}^{\infty} x_{k,n} \mathbf{P}\{x_{k-1,n} < \xi \leqslant x_{k,n}\} = \sum_{-\infty}^{\infty} x_{k,n} \int_{x_{k-1,n}}^{x_{k,n}} p_\xi(x) \, dx$$

$$\sim \sum_{-\infty}^{\infty} x_{k,n} p_\xi(x_{k,n}) (x_{k,n} - x_{k-1,n}),$$

and hence

$$\mathbf{E}\xi = \int_{-\infty}^{\infty} xp_\xi(x) \, dx$$

(4.17)

[compare this with (4.9)]. For continuous random variables of the form

---

*The symbol sup denotes the supremum or least upper bound. Therefore the left-hand side of (4.16) is the least upper bound of all the differences $|x_{k,n} - x_{k-1,n}|$, $k = \ldots, -2, -1, 0, 1, 2, \ldots$. Thus (4.16) means that no two of the points (4.15) are more than $\varepsilon_n$ apart. Note also that any closed interval of length $\varepsilon_n$ contains at least two of the points (4.15).*