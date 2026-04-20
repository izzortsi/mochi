the logarithm is given by

$$\log(R) = \log(r)\mathbb{I} + \begin{pmatrix} 0 & -\varphi \\ \varphi & 0 \end{pmatrix}.$$

Now write the real Jordan block $R\mathbb{I} + N$ as $R(\mathbb{I} + R^{-1}N)$. Then one can check that

$$\log(R\mathbb{I} + N) = \log(R)\mathbb{I} + \sum_{j=1}^{n-1} \frac{(-1)^{j+1}}{j} R^{-j}N^j$$

is the required logarithm. $\square$

Similarly, note that the resolvent $(A - z)^{-1}$ can also be easily computed in Jordan canonical form, since for a Jordan block we have

$$(J - z)^{-1} = \frac{1}{\alpha - z} \sum_{j=0}^{n-1} \frac{1}{(z - \alpha)^j} N^j.$$

(3.203)

In particular, note that the resolvent has a pole at each eigenvalue with the residue being the linear projector (cf. Problem 3.46) onto the corresponding generalized eigenspace.

For later use we also introduce the subspaces

$$E^{\pm}(A) = \bigoplus_{|\alpha_j|^{\pm 1} < 1} \text{Ker}(A - \alpha_j)^{a_j},$$

$$E^0(A) = \bigoplus_{|\alpha_j|=1} \text{Ker}(A - \alpha_j)^{a_j},$$

(3.204)

where $\alpha_j$ are the eigenvalues of $A$ and $a_j$ are the corresponding algebraic multiplicities. The subspaces $E^{+}(A), E^{-}(A), E^0(A)$ are called **contracting**, **expanding**, **unitary subspace** of $A$, respectively. For each of these subspaces we can define the corresponding **projections** $P^{+}(A), P^{0}(A), P^{-}(A)$ as the linear projections whose image is the corresponding subspace and whose kernel is the direct sum of the other two subspaces. The restriction of $A$ to these subspaces is denoted by $A_+, A_-, A_0$, respectively.

**Problem 3.45.** Let $f(z)$ be a function analytic in a disc around 0 of radius $R$:

$$f(z) = \sum_{k=0}^{\infty} \frac{f^{(k)}(0)}{k!} z^k, \quad |z| < R.$$

(3.205)

Show that the corresponding power series for $f(A)$ converges if $r(A) = \max_j \{|\alpha_j|\} < R$. In particular, show that for one Jordan block $J = \alpha\mathbb{I} + N$