The numbers $\alpha$ are the eigenvalues of $A$ and the new basis vectors $u_j$ (the columns of $U$) consist of generalized eigenvectors of $A$. The general procedure of finding the Jordan canonical form is quite cumbersome and hence further details will be deferred to Section 3.8. In particular, since most computer algebra systems can easily do this job for us!

**Example.** Let

$$\text{In}[1] := A = \begin{pmatrix}
-11 & -35 & -24 \\
-1 & -1 & -2 \\
8 & 22 & 17
\end{pmatrix};$$

Then the command

$$\text{In}[2] := \{U, J\} = \text{JordanDecomposition}[A];$$

gives us the transformation matrix $U$ plus the Jordan canonical form $J = U^{-1}AU$.

$$\text{In}[3] := J // \text{MatrixForm}$$

$$\text{Out}[3] // \text{MatrixForm} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 2 & 1 \\
0 & 0 & 2
\end{pmatrix}$$

If you don’t trust me (or Mathematica), you can also check it:

$$\text{In}[4] := A == U.J.\text{Inverse}[U]$$

$$\text{Out}[4] = \text{True}$$

To compute the exponential we observe

$$\exp(U^{-1}AU) = \begin{pmatrix}
\exp(J_1) & \ddots & \exp(J_m)
\end{pmatrix},$$

and hence it remains to compute the exponential of a single Jordan block $J = \alpha\mathbb{I} + N$ as in (3.16). Since $\alpha\mathbb{I}$ commutes with $N$, we infer from Lemma 3.1 that

$$\exp(J) = \exp(\alpha\mathbb{I})\exp(N) = \mathrm{e}^{\alpha \sum_{j=0}^{k-1} \frac{1}{j!} N^j}.$$

Here we have used the fact that the series for $\exp(N)$ terminates after $k$ terms, where $k$ is the size of $N$. In fact, it is not hard to see that $N^j$ is a matrix with ones in the $j$’th diagonal above the main diagonal and vanishes