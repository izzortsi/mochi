the result is

$$f(J) = \begin{pmatrix}
f(\alpha) & f'(\alpha) & \frac{f''(\alpha)}{2!} & \ldots & \frac{f^{(k-1)}(\alpha)}{(k-1)!} \\
f(\alpha) & f'(\alpha) & \ddots & \vdots \\
f(\alpha) & \ddots & \frac{f''(\alpha)}{2!} \\
\ddots & f'(\alpha) & f(\alpha)
\end{pmatrix}.$$

(3.206)

**Problem 3.46.** A linear projection $P : \mathbb{C}^n \to \mathbb{C}^n$ is a linear map satisfying $P^2 = P$. Show that the kernel and range of $P$ are complementary subspaces: $\text{Ker}(P) \oplus \text{Ran}(P) = \mathbb{C}^n$. Show that $\mathbb{I} - P$ is also a projection with $\text{Ker}(\mathbb{I} - P) = \text{Ran}(P)$ and $\text{Ran}(\mathbb{I} - P) = \text{Ker}(P)$. Show that $P$ has the only possible eigenvalues 0 and 1. Show that given two complementary subspace $U \oplus V = \mathbb{C}^n$ there is a unique projection $P$ with $\text{Ker}(P) = U$ and $\text{Ran}(P) = V$.

**Problem 3.47.** Suppose $A(\lambda)$ is $C^k$ and has no unitary subspace. Then the projectors $P^\pm(A(\lambda))$ onto the contracting, expanding subspace are given by

$$P^- (A(\lambda)) = \frac{1}{2\pi i} \int_{|z|=1} \frac{dz}{z - A(\lambda)}, \quad P^+ (A(\lambda)) = \mathbb{I} - P^- (A(\lambda)).$$

In particular, conclude that they are $C^k$. (Hint: Jordan canonical form and (3.203).)

**Problem 3.48.** Denote by $r(A) = \max_j \{|\alpha_j|\}$ the spectral radius of $A$. Show that for every $\varepsilon > 0$ there is a norm $\|.\|_\varepsilon$ on $\mathbb{C}^n$ such that

$$\|A\|_\varepsilon = \sup_{x: \|x\|_\varepsilon=1} \|Ax\|_\varepsilon \leq r(A) + \varepsilon.$$

(Hint: It suffices to prove the claim for a Jordan block $J = \alpha\mathbb{I} + N$ (why?). Now choose a diagonal matrix $Q = \text{diag}(1, \varepsilon, \ldots, \varepsilon^n)$ and observe $Q^{-1}JQ = \alpha\mathbb{I} + \varepsilon N.$)

**Problem 3.49.** Show that for a symmetric matrix $A$ the norm is equal to the spectral radius $r(A) = \max_j \{|\alpha_j|\}$. Show that for an arbitrary matrix $\|A\|^2 = \|A^*A\| = r(A^*A)$. (Hint: Observe that since $A^*A$ is symmetric we obtain $\|A^*A\| = \max_{|x|=1} x \cdot A^*Ax = \max_{|x|=1} |Ax|^2$, where $x \cdot y = \sum_{j=1}^n x_j^*y_j$ denotes the scalar product in $\mathbb{C}^n.$)