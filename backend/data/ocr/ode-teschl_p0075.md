Lemma 3.3. A vector $u$ is an eigenvector of $A$ corresponding to the eigenvalue $\alpha$ if and only if $u$ is an eigenvector of $\exp(A)$ corresponding to the eigenvalue $e^\alpha$.

Moreover, the Jordan structure of $A$ and $\exp(A)$ are the same except for the fact that eigenvalues of $A$ which differ by a multiple of $2\pi i$ (as well as the corresponding Jordan blocks) are mapped to the same eigenvalue of $\exp(A)$. In particular, the geometric and algebraic multiplicity of $e^\alpha$ is the sum of the geometric and algebraic multiplicities of the eigenvalues which differ from $\alpha$ by a multiple of $2\pi i$.

Proof. The first part is straightforward. To see the second it suffices to consider one Jordan block with $\alpha = 0$. We are looking for generalized eigenvectors $u_k$ such that $\exp(N)u_k = u_{k-1}$, that is,

$$\sum_{l=j+1}^{n} \frac{1}{(j-l)!} u_{k,l} = u_{k-1,l}, \quad 2 \leq k \leq n, \quad 1 \leq j \leq n.$$

Setting $u_{k,l} = \frac{(l-1)!}{(k-1)!} s(k-1,l-1)$ with $s(k,k) = 1$ and $s(k,l) = 0$ for $l > k$ this requirement transforms into

$$\sum_{l=j+1}^{k} \binom{l}{j} s(k,l) = k s(k-1,j), \quad 0 \leq j \leq k-1,$$

which is satisfied if we choose $s(k,l)$ to be the Stirling numbers of the first kind (Problem 3.6).

Hence the transformation matrix $U$ we are looking for is $U = \left( \frac{(j-1)!}{(k-1)!} s(k-1,j-1) \right)_{1 \leq j,k \leq n}$ and its inverse is given by $U^{-1} = \left( \frac{(j-1)!}{(k-1)!} S(k-1,j-1) \right)_{1 \leq j,k \leq n}$ where $S(j,k)$ are the Stirling numbers of the second kind defined via

$$\sum_{k=j}^{n} S(l,k)s(k,j) = \delta_{j,k}, \quad 1 \leq j,l \leq n.$$

Then, by construction, $U^{-1} \exp(N)U = N$ and the claim follows.

Clearly Mathematica can also compute the exponential for us:

$$\text{In[5]:= MatrixExp[J] // MatrixForm}$$

$$\text{Out[5]//MatrixForm=} \begin{pmatrix} e & 0 & 0 \\ 0 & e^2 & e^2 \\ 0 & 0 & e^2 \end{pmatrix}$$

To end this section let me emphasize, that both the eigenvalues and generalized eigenvectors can be complex even if the matrix $A$ has only real