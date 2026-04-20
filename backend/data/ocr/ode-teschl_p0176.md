However, even for such simple cases as $r(x) = p(x) = 1$, $q(x) = 0$ on $I = \mathbb{R}$, this generalization is still not good enough! In fact, it is not hard to see that there are no eigenfunctions at all in this case. For the investigation of such problems a sound background in measure theory and functional analysis is necessary and hence this is way beyond our scope. I just remark that a similar result holds if the eigenfunction expansion is replaced by an integral transform with respect to a Borel measure. For example, in the case $r(x) = p(x) = 1$, $q(x) = 0$ on $I = \mathbb{R}$ one is led to the Fourier transform on $\mathbb{R}$.

**Problem 5.15.** Compute the eigenvalues and eigenfunctions of

$$L = -\frac{d^2}{dx^2}, \quad \mathfrak{D}(L) = \{f \in C^2([0,1], \mathbb{C}) | f'(0) = f'(1) = 0\}.$$

**Problem 5.16.** Show directly that $L = -\frac{d^2}{dx^2}$ on $I = (0, \pi)$ with Dirichlet boundary conditions is unbounded. (Hint: Consider $f_n(x) = \sin(nx)$.)

**Problem 5.17.** Show that $\mathfrak{D}(L)$ is a linear subspace invariant under complex conjugation.

**Problem 5.18.** Show that the set of infinitely differentiable functions with compact support $C_c^\infty((a,b), \mathbb{C})$ is dense in $\mathfrak{H}_0$. (Hint: Replace $P(x)$ in the proof of Lemma 5.8 by $\int_0^x \exp((y(y-1))^{-1})dy / \int_0^1 \exp((y(y-1))^{-1})dy$.)

**Problem 5.19.** Show that if $f$ and $g$ both satisfy $BC_a(f) = BC_a(g) = 0$, then $W_a(f,g) = 0$.

**Problem 5.20.** Show (5.63).

**Problem 5.21** (Periodic boundary conditions). Show that $L$ defined on

$$\mathfrak{D}(L) = \{f \in C^2([a,b], \mathbb{C}) | f(a) = f(b), p(a)f'(a) = p(b)f'(b)\} \quad (5.80)$$ is symmetric.

**Problem 5.22.** Consider the Fourier sine

$$f(x) = \sum_{n=1}^{\infty} s_n(f) \sin(n\pi x), \quad s_n(f) = 2 \int_0^1 \sin(n\pi x)f(x)dx,$$

and Fourier cosine series

$$f(x) = \sum_{n=0}^{\infty} c_n(f) \cos(n\pi x), \quad c_n(f) = (2 - \delta_{0,n}) \int_0^1 \cos(n\pi x)f(x)dx,$$

obtained from $L = -\frac{d^2}{dx^2}$ on $[0,1]$ with Dirichlet and Neumann boundary conditions, respectively.