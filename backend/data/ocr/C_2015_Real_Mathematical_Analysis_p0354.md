Definition The boundary of a $k$-cell $\varphi$ is the $k$-chain

$$\partial \varphi = \sum_{j=1}^{k+1} (-1)^{j+1} (\varphi \circ \iota^{j,1} - \varphi \circ \iota^{j,0})$$

where

$$\iota^{j,0} : (u_1, \ldots, u_k) \mapsto (u_1, \ldots, u_{j-1}, 0, u_j, \ldots, u_k)$$

$$\iota^{j,1} : (u_1, \ldots, u_k) \mapsto (u_1, \ldots, u_{j-1}, 1, u_j, \ldots, u_k).$$

are the $j$th “rear inclusion” $k$-cell and $j$th “front inclusion” $k$-cell of $I^{k+1}$. See Figure 126. (Note that $\partial \varphi$ is indeed a formal linear combination of $(k-1)$-cells.) As shown in Figure 126, the rear inclusions $\iota^{1,0}$ and $\iota^{2,0}$ are the $x$-rearface and the $y$-rearface. The front inclusion $\iota^{3,1}$ is the $z$-frontface, the top of the cube.

Shorthand we write $\partial \varphi$ as

$$\partial \varphi = \sum_{j=1}^{k+1} (-1)^{j+1} \delta^j$$

where $\delta^j = \varphi \circ \iota^{j,1} - \varphi \circ \iota^{j,0}$ is the $j$th dipole of $\varphi$.

44 Stokes’ Formula for a Cube Assume that $k+1 = n$. If $\omega \in \Omega^k(\mathbb{R}^n)$ and $\iota : I^n \to \mathbb{R}^n$ is the identity-inclusion $n$-cell in $\mathbb{R}^n$ then

$$\int_\iota d\omega = \int_{\partial \iota} \omega.$$