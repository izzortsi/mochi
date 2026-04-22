Figure 132 The paired $4 \times 4$ minors of $A$ and $B$ are determined by the 4-tuple $J = (j_1, j_2, j_3, j_4)$.

Proof Note that special cases of the Cauchy-Binet Formula occur when $k = 1$ or $k = n$. When $k = 1$, $C$ is the $1 \times 1$ matrix that is the dot product of an $A$-row vector of length $n$ times a $B$-column vector of height $n$. The 1-tuples $J$ in $\{1, \ldots, n\}$ are just single integers, $J = (1), \ldots, J = (n)$, and the product formula is immediate. In the second case, $k = n$, we have the usual product determinant formula because there is only one ascending $k$-tuple in $\{1, \ldots, k\}$, namely $J = (1, \ldots, k)$.

To handle the general case, define the sum

$$S(A, B) = \sum_J \det A^J \det B_J$$

as above. Consider an elementary $n \times n$ matrix $E$. We claim that

$$S(A, B) = S(AE, E^{-1}B).$$

Since there are only two types of elementary matrices, this is not too hard a calculation, and is left to the reader. Then we perform a sequence of elementary column operations on $A$ to put it in lower triangular form

$$A' = AE_1 \ldots E_r = \begin{bmatrix}
\alpha_{11} & 0 & \cdots & \cdots & 0 & \cdots & 0 \\
\alpha_{21} & \alpha_{22} & \cdots & \cdots & 0 & \cdots & 0 \\
\vdots & \vdots & \ddots & & \vdots & & \vdots \\
\alpha_{k1} & \alpha_{k2} & \cdots & \alpha_{kk} & 0 & \cdots & 0
\end{bmatrix}.$$

About $B' = E_r^{-1} \ldots E_1^{-1}B$ we observe only that

$$AB = A'B' = A'J_0B'_{J_0}$$