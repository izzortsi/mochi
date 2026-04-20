In addition, to the matrix exponential we will also need its inverse. That is, given a matrix $A$ we want to find a matrix $B$ such that

$$A = \exp(B).$$

(3.200)

In this case we will call $B = \log(A)$ a **matrix logarithm** of $A$. Clearly, by (3.23) this can only work if $\det(A) \neq 0$. Hence suppose that $\det(A) \neq 0$. It is no restriction to assume that $A$ is in Jordan canonical form and to consider the case of only one Jordan block, $A = \alpha \mathbb{I} + N$.

Motivated by the power series for the logarithm,

$$\log(1+x) = \sum_{j=1}^{\infty} \frac{(-1)^{j+1}}{j} x^j, \quad |x| < 1,$$

(3.201)

we set

$$B = \log(\alpha) \mathbb{I} + \sum_{j=1}^{n-1} \frac{(-1)^{j+1}}{j \alpha^j} N^j$$

$$= \begin{pmatrix}
\log(\alpha) & \frac{1}{\alpha} & \frac{-1}{2\alpha^2} & \ldots & \frac{(-1)^n}{(n-1)\alpha^{n-1}} \\
\log(\alpha) & \frac{1}{\alpha} & \ddots & \vdots \\
\log(\alpha) & \ddots & \frac{-1}{2\alpha^2} & \\
\vdots & \ddots & \frac{1}{\alpha} & \log(\alpha)
\end{pmatrix}.$$

(3.202)

By construction we have $\exp(B) = A$. Note that $B$ is not unique since different branches of $\log(\alpha)$ will give different matrices. Moreover, it might be complex even if $A$ is real. In fact, if $A$ has a negative eigenvalue, then $\log(\alpha) = \log(|\alpha|) + i\pi$ implies that $\log(A)$ will be complex. We can avoid this situation by taking the logarithm of $A^2$.

**Lemma 3.34.** A matrix $A$ has a logarithm if and only if $\det(A) \neq 0$. Moreover, if $A$ is real and all real eigenvalues are positive, then there is a real logarithm. In particular, if $A$ is real we can find a real logarithm for $A^2$.

**Proof.** Since the eigenvalues of $A^2$ are the squares of the eigenvalues of $A$ (show this), it remains to show that $B$ is real if all real eigenvalues are positive.

In this case only the Jordan block corresponding to complex eigenvalues could cause problems. We consider the real Jordan canonical form (3.25) and note that for

$$R = \begin{pmatrix}
\operatorname{Re}(\alpha) & \operatorname{Im}(\alpha) \\
-\operatorname{Im}(\alpha) & \operatorname{Re}(\alpha)
\end{pmatrix} = r \begin{pmatrix}
\cos(\varphi) & -\sin(\varphi) \\
\sin(\varphi) & \cos(\varphi)
\end{pmatrix}, \quad \alpha = r \mathrm{e}^{\mathrm{i}\varphi},$$