by our local uniqueness result. Hence the set where they coincide is open. By continuity of $w_j(z)$ it is also closed (in the relative topology) and hence both solutions coincide on the connected component of $U_1 \cap U_2$ containing $z_1$. But this is all we can say in general as the following example shows.

**Example.** Consider

$$w' = \frac{1}{z}, \quad w(1) = 0, \quad z \in \mathbb{C} \setminus \{0\}. \tag{4.11}$$

The solution is given by

$$w(z) = \log(z) = \log|z| + i\arg(z) \tag{4.12}$$

and different choices of the branch cut (i.e., the half-ray along which $\arg(z)$ will jump by $2\pi$) will give different solutions. In particular, note that there is no unique maximal domain of definition.

Finally, let us show how analyticity can be used in the investigation of a simple differential equation.

**Example.** Consider

$$w' + w^2 = z, \quad w(0) = w_0. \tag{4.13}$$

This is a Riccati equation and we already know that it cannot be solved unless we find a particular solution. However, after you have tried for some time, you will agree that it seems not possible to find one and hence we need to try something different. Since we know that the solution is analytic near 0, we can at least write

$$w(z) = \sum_{j=0}^{\infty} w_j z^j, \quad w'(z) = \sum_{j=0}^{\infty} jw_j z^{j-1}, \tag{4.14}$$

and plugging this into our equation yields

$$\sum_{j=0}^{\infty} jw_j z^{j-1} + \left( \sum_{j=0}^{\infty} w_j z^j \right)^2 = z. \tag{4.15}$$

Expanding the product (using the Cauchy product formula) and aligning powers of $z$ gives

$$\sum_{j=0}^{\infty} \left( (j+1)w_{j+1} + \sum_{k=0}^{j} w_k w_{j-k} \right) z^j = z. \tag{4.16}$$

Comparing powers of $z$ we obtain

$$w_1 = -w_0^2, \quad w_2 = w_0^3 + \frac{1}{2}, \quad w_{j+1} = \frac{-1}{j+1} \sum_{k=0}^{j} w_k w_{j-k}. \tag{4.17}$$