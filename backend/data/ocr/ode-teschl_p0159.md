The remaining two requirements are easy.

Next, let us generalize the projection to more than one vector. A set of vectors $\{u_j\}$ is called **orthonormal set** if $\langle u_j, u_k \rangle = 0$ for $j \neq k$ and $\langle u_j, u_j \rangle = 1$.

**Lemma 5.3.** Suppose $\{u_j\}_{j=0}^n$ is an orthonormal set. Then every $f \in \mathfrak{H}_0$ can be written as

$$f = f_\parallel + f_\perp, \quad f_\parallel = \sum_{j=0}^n \langle u_j, f \rangle u_j,$$

(5.28)

where $f_\parallel$ and $f_\perp$ are orthogonal. Moreover, $\langle u_j, f_\perp \rangle = 0$ for all $0 \leq j \leq n$. In particular,

$$\|f\|^2 = \sum_{j=0}^n |\langle u_j, f \rangle|^2 + \|f_\perp\|^2.$$

(5.29)

Moreover, every $\hat{f}$ in the span of $\{u_j\}_{j=0}^n$ satisfies

$$\|f - \hat{f}\| \geq \|f_\perp\|$$

(5.30)

with equality holding if and only if $\hat{f} = f_\parallel$. In other words, $f_\parallel$ is uniquely characterized as the vector in the span of $\{u_j\}_{j=0}^n$ closest to $f$.

**Proof.** A straightforward calculation shows $\langle u_j, f - f_\parallel \rangle = 0$ and hence $f_\parallel$ and $f_\perp = f - f_\parallel$ are orthogonal. The formula for the norm follows by applying (5.22) iteratively.

Now, fix a vector

$$\hat{f} = \sum_{j=0}^n \alpha_j u_j.$$

in the span of $\{u_j\}_{j=0}^n$. Then one computes

$$\|f - \hat{f}\|^2 = \|f_\parallel + f_\perp - \hat{f}\|^2 = \|f_\perp\|^2 + \|f_\parallel - \hat{f}\|^2$$

$$= \|f_\perp\|^2 + \sum_{j=0}^n |\alpha_j - \langle u_j, f \rangle|^2$$

from which the last claim follows.

From (5.29) we obtain **Bessel’s inequality**

$$\sum_{j=0}^n |\langle u_j, f \rangle|^2 \leq \|f\|^2$$

(5.31)

with equality holding if and only if $f$ lies in the span of $\{u_j\}_{j=0}^n$.