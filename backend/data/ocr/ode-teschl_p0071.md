If we perform the Picard iteration we obtain

$$x_0(t) = x_0$$
$$x_1(t) = x_0 + \int_0^t Ax_0(s)ds = x_0 + Ax_0 \int_0^t ds = x_0 + tAx_0$$
$$x_2(t) = x_0 + \int_0^t Ax_1(s)ds = x_0 + Ax_0 \int_0^t ds + A^2x_0 \int_0^t sds$$
$$= x_0 + tAx_0 + \frac{t^2}{2}A^2x_0$$

and hence by induction

$$x_m(t) = \sum_{j=0}^{m} \frac{t^j}{j!}A^jx_0.$$

The limit as $m \to \infty$ is given by

$$x(t) = \lim_{m \to \infty} x_m(t) = \sum_{j=0}^{\infty} \frac{t^j}{j!}A^jx_0.$$

In the one dimensional case ($n=1$) this series is just the usual exponential and hence we will write

$$x(t) = \exp(tA)x_0,$$

where we define the **matrix exponential** by

$$\exp(A) = \sum_{j=0}^{\infty} \frac{1}{j!}A^j.$$

Hence, in order to understand our original problem, we have to understand the matrix exponential! The Picard iteration ensures convergence of $\exp(A)x_0$ for every vector $x_0$ and choosing the canonical basis vectors of $\mathbb{R}^n$ we see that all matrix elements converge. However, for later use we want to introduce a suitable norm for matrices and give a direct proof for convergence of the above series in this norm.

We will use $\mathbb{C}^n$ rather than $\mathbb{R}^n$ as underlying vector space since $\mathbb{C}$ is algebraically closed (which will be important later on, when we compute the matrix exponential with the help of the Jordan canonical form). So let $A$ be a complex matrix acting on $\mathbb{C}^n$ and introduce the **matrix norm**

$$\|A\| = \sup_{x: |x|=1} |Ax|.$$

It is not hard to see that the vector space of $n$ by $n$ matrices $\mathbb{C}^{n \times n}$ becomes a Banach space with this norm (Problem 3.1). In fact, we have

$$\max_{j,k} |A_{jk}| \leq \|A\| \leq n \max_{j,k} |A_{jk}|$$