Therefore $R_L(z)$ is compact.

If $\lambda \in \mathbb{R}$, we have $G(\lambda,t,x)^* = G(\lambda^*,x,t) = G(\lambda,x,t)$ from which symmetry of $R_L(\lambda)$ follows:

$$\langle g, R_L(\lambda)f \rangle = \int_a^b g(x)^* \left( \int_a^b G(\lambda,x,t)f(t)r(t)dt \right) r(x)dx$$
$$= \int_a^b \left( \int_a^b g(x)^* G(\lambda,x,t)r(x)dx \right) f(t)r(t)dt$$
$$= \int_a^b \left( \int_a^b G(\lambda,t,x)g(x)r(x)dx \right)^* f(t)r(t)dt = \langle R_L(\lambda)g,f \rangle.$$

This finishes the proof.

As a consequence we can apply Theorem 5.6 to obtain

**Theorem 5.11.** The regular Sturm–Liouville problem has a countable number of discrete and simple eigenvalues $E_n$ which accumulate only at $\infty$. The corresponding normalized eigenfunctions $u_n$ can be chosen real-valued and form an orthonormal basis for $\mathfrak{H}_0$, that is, every $f \in \mathfrak{H}_0$ can be written as

$$f(x) = \sum_{n=0}^{\infty} \langle u_n,f \rangle u_n(x). \tag{5.70}$$

Moreover, for $f \in \mathfrak{D}(L)$ this series is uniformly convergent.

**Proof.** Pick a value $\lambda \in \mathbb{R}$ such that $R_L(\lambda)$ exists. By Theorem 5.6 $R_L(\lambda)$ has a countable number of eigenvalues $\alpha_n \to 0$ plus a corresponding orthonormal system of eigenfunctions $u_n$. Moreover, since $\text{Ran}(R_L(\lambda)) = \mathfrak{D}(L)$ is dense, the eigenfunctions form an orthonormal basis.

Moreover, $R_L(\lambda)u_n = \alpha_n u_n$ is equivalent to $Lu_n = (\lambda + \frac{1}{\alpha_n})u_n$, which shows that $E_n = \lambda + \frac{1}{\alpha_n}$ are eigenvalues of $L$ with corresponding eigenfunctions $u_n$.

Hence the first two claims follow except for the fact that the eigenvalues are simple. To show this, observe that if $u_n$ and $v_n$ are two different eigenfunctions corresponding to $E_n$, then $BC_a(u_n) = BC_a(v_n) = 0$ implies $W_a(u_n,v_n) = 0$ and hence $u_n$ and $v_n$ are linearly dependent. In particular, $u_n(x)$ is a multiple of $u_a(E_n,x)$ and hence can be chosen real-valued.

To show that (5.70) converges uniformly if $f \in \mathfrak{D}(L)$ we begin by writing $f = R_L(\lambda)g$, $g \in \mathfrak{H}_0$, implying

$$\sum_{n=0}^{\infty} \langle u_n,f \rangle u_n(x) = \sum_{n=0}^{\infty} \alpha_n \langle u_n,g \rangle u_n(x)$$