entries. However, in many applications only real solutions are of interest. For such a case there is also a **real Jordan canonical form** which I want to mention briefly.

So suppose the matrix $A$ has only real entries. If an eigenvalue $\alpha$ is real, both real and imaginary parts of a generalized eigenvector are again generalized eigenvectors. In particular, they can be chosen real and there is nothing else to do for such an eigenvalue.

If $\alpha$ is nonreal, there must be a corresponding complex conjugate block $J^* = \alpha^*\mathbb{I} + N$ and the corresponding generalized eigenvectors can be assumed to be the complex conjugates of our original ones. Therefore we can replace the pairs $u_j, u_j^*$ in our basis by $\text{Re}(u_j)$ and $\text{Im}(u_j)$. In this new basis the block

$$\begin{pmatrix} J & 0 \\ 0 & J^* \end{pmatrix}$$

(3.24)

is replaced by

$$\begin{pmatrix} R & \mathbb{I} \\ R & \mathbb{I} \\ R & \ddots \\ R & \ddots & \mathbb{I} \\ R & R \end{pmatrix},$$

(3.25)

where

$$R = \begin{pmatrix} \text{Re}(\alpha) & \text{Im}(\alpha) \\ -\text{Im}(\alpha) & \text{Re}(\alpha) \end{pmatrix} \quad \text{and} \quad \mathbb{I} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$

Since the matrices

$$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \text{and} \quad \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$$

(3.27)

commute, the exponential is given by

$$\begin{pmatrix} \exp(R) & \exp(R) & \exp(R) \frac{1}{2!} & \ldots & \exp(R) \frac{1}{(n-1)!} \\ \exp(R) & \exp(R) & \ddots & \vdots \\ \exp(R) & \ddots & \exp(R) \frac{1}{2!} \\ \ddots & \ddots & \exp(R) \\ \exp(R) & \exp(R) \end{pmatrix},$$

(3.28)

where

$$\exp(R) = \mathrm{e}^{\text{Re}(\alpha)} \begin{pmatrix} \cos(\text{Im}(\alpha)) & \sin(\text{Im}(\alpha)) \\ -\sin(\text{Im}(\alpha)) & \cos(\text{Im}(\alpha)) \end{pmatrix}.$$

**Problem 3.1.** Show that the space of $n$ by $n$ matrices $\mathbb{C}^{n \times n}$ together with the matrix norm is a Banach space. Show (3.9).