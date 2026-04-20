finishing the proof.

Unfortunately this theorem does not tell us anything about the existence of eigenvalues. In fact, a general symmetric operators might have no eigenvalues at all. Hence we need to impose some further requirements.

The linear operator $A$ defined on $\mathfrak{D}(A) = \mathfrak{H}_0$ is called **bounded** if

$$\|A\| = \sup_{f:\|f\|=1} \|Af\|$$

(5.39)

is finite. It is not hard to see that this is indeed a norm (Problem 5.8) on the space of bounded linear operators. By construction, a bounded operator is Lipschitz continuous

$$\|Af\| \leq \|A\|\|f\|$$

(5.40)

and hence continuous.

Moreover, a linear operator $A$ defined on $\mathfrak{D}(A) = \mathfrak{H}_0$ is called **compact** if every sequence $Af_n$ has a convergent subsequence whenever $f_n$ is bounded. Every compact linear operator is bounded and the product of a bounded and a compact operator is again compact (Problem 5.9).

In combination with symmetry compactness will turn out to guarantee the existence of an orthonormal basis of eigenfunctions. The crucial step is to prove existence of one eigenvalue.

**Theorem 5.5.** A compact symmetric operator has an eigenvalue $\alpha_0$ which satisfies $|\alpha_0| = \|A\|$.

**Proof.** We set $\alpha = \|A\|$ and assume $\alpha \neq 0$ (i.e., $A \neq 0$) without loss of generality. Since

$$\|A\|^2 = \sup_{f:\|f\|=1} \|Af\|^2 = \sup_{f:\|f\|=1} \langle Af, Af \rangle = \sup_{f:\|f\|=1} \langle f, A^2f \rangle$$

there exists a normalized sequence $u_n$ such that

$$\lim_{n \to \infty} \langle u_n, A^2u_n \rangle = \alpha^2.$$

Since $A$ is compact, it is no restriction to assume that $A^2u_n$ converges, say $\lim_{n \to \infty} A^2u_n = \alpha^2u$. Now

$$\|(A^2 - \alpha^2)u_n\|^2 = \|A^2u_n\|^2 - 2\alpha^2\langle u_n, A^2u_n \rangle + \alpha^4$$

$$\leq 2\alpha^2(\alpha^2 - \langle u_n, A^2u_n \rangle)$$

(where we have used $\|A^2u_n\| \leq \|A\|\|Au_n\| \leq \|A\|^2\|u_n\| = \alpha^2$) implies $\lim_{n \to \infty}(A^2u_n - \alpha^2u_n) = 0$ and hence $\lim_{n \to \infty} u_n = u$. In addition, $u$ is a normalized eigenvector of $A^2$ since $(A^2 - \alpha^2)u = 0$. Factorizing this last equation according to $(A - \alpha)u = v$ and $(A + \alpha)v = (A + \alpha)(A - \alpha)u = (A^2 - \alpha^2)u = 0$ shows that either $v \neq 0$ is an eigenvector corresponding to $-\alpha$ or $v = 0$ and hence $u \neq 0$ is an eigenvector corresponding to $\alpha$.