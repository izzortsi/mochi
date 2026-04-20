Lemma 5.12. The eigenvalues of a regular Sturm–Liouville problem are bounded from below and can hence be ordered as follows:

$$E_0 < E_1 < \cdots.$$ (5.75)

Moreover, we have the Rayleigh–Ritz principle

$$E_0 = \min_{f \in \mathfrak{D}(L): \|f\|=1} Q(f) = \min_{f \in \mathfrak{D}(L): \|f\|=1} \langle f, Lf \rangle$$ (5.76)

with equality if and only if $f = u_0$. In particular, for $0 \leq \alpha \leq \frac{\pi}{2}$ and $\frac{\pi}{2} \leq \beta \leq \pi$ we obtain

$$\min_{x \in [a,b]} q(x) \leq E_0.$$ (5.77)

Proof. We first assume $0 \leq \alpha \leq \frac{\pi}{2}$ and $\frac{\pi}{2} \leq \beta \leq \pi$ such that the boundary terms in (5.71) are non-negative. Then we have $Q(f) \geq \min_{x \in [a,b]} q(x) \|f\|^2$ and hence (5.73) implies $Q(u_j) = E_j \geq \min_{x \in [a,b]} q(x)$. In particular, we can order the eigenvalues as indicated. The second claim now follows using $f = \sum_{j=0}^{\infty} \langle u_j, f \rangle u_j$ implying

$$\langle f, Lf \rangle = \sum_{j=0}^{\infty} |\langle u_j, f \rangle|^2 E_j$$

and the equality $Q(f) = \langle f, Lf \rangle$ for $f \in \mathfrak{D}(L)$.

If one of the boundary terms is negative, it can still be controlled in terms of the integral using Problem 5.23. Details are left as an exercise. $\square$

Lemma 5.13. For a regular Sturm–Liouville problem (5.70) converges uniformly provided $f \in \mathfrak{Q}(L)$.

Proof. We first assume $0 \leq \alpha \leq \frac{\pi}{2}$ and $\frac{\pi}{2} \leq \beta \leq \pi$ such that the boundary terms in (5.71) are non-negative.

By replacing $L \rightarrow L - q_0$ for $q_0 > \min_{x \in [a,b]} q(x)$ we can assume $q(x) > 0$ without loss of generality (this will shift the eigenvalues $E_n \rightarrow E_n - q_0$ and leave the eigenvectors unchanged). In particular, we have $Q(f) > 0$ after this change. By (5.73) we also have $E_j = \langle u_j, Lu_j \rangle = Q(u_j) > 0$.

Now let $f \in \mathfrak{Q}(L)$ and consider (5.70). Then, using that $Q(f,g)$ is a symmetric sesquilinear form (after our shift it is even a scalar product) plus