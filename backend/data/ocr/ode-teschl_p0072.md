and thus a sequence of matrices converges in the matrix norm if and only if all matrix entries converge. Moreover, using (Problem 3.2)

$$\|A^j\| \leq \|A\|^j$$

(3.10)

convergence of the series (3.7) follows from convergence of $\sum_{j=0}^{\infty} \frac{\|A\|^j}{j!} = \exp(\|A\|)$ (Problem 3.4).

However, note that in general $\exp(A + B) \neq \exp(A) \exp(B)$ unless $A$ and $B$ commute, that is, unless the commutator

$$[A, B] = AB - BA$$

(3.11)

vanishes. In this case you can mimic the proof of the one dimensional case to obtain

**Lemma 3.1.** Suppose $A$ and $B$ commute. Then

$$\exp(A + B) = \exp(A) \exp(B), \quad [A, B] = 0.$$

(3.12)

If we perform a linear change of coordinates,

$$y = U^{-1}x,$$

(3.13)

then the matrix exponential in the new coordinates is given by

$$U^{-1} \exp(A)U = \exp(U^{-1}AU).$$

(3.14)

This follows from (3.7) by using $U^{-1}A^jU = (U^{-1}AU)^j$ together with continuity of the matrix product (Problem 3.3). Hence in order to compute $\exp(A)$ we need a coordinate transform which renders $A$ as simple as possible:

**Theorem 3.2 (Jordan canonical form).** Let $A$ be a complex $n$ by $n$ matrix. Then there exists a linear change of coordinates $U$ such that $A$ transforms into a block matrix,

$$U^{-1}AU = \begin{pmatrix} J_1 & \ddots & J_m \end{pmatrix},$$

(3.15)

with each block of the form

$$J = \alpha \mathbb{I} + N = \begin{pmatrix} \alpha & 1 & \ddots & 1 \\ \alpha & 1 & \ddots & \alpha \\ \vdots & \ddots & 1 & \alpha \end{pmatrix}.$$

(3.16)

Here $N$ is a matrix with ones in the first diagonal above the main diagonal and zeros elsewhere.