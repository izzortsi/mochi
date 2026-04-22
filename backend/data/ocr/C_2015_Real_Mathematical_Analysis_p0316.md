If $(x', y') \in X' \times \mathbb{R}^{m-k}$ then we define

$$\psi(x', y') = (\sigma^{-1}(x'), y' - h(x')).$$

Since $\psi$ is the composite of $C^r$ diffeomorphisms,

$$(x', y') \mapsto (x', y' - h(x')) \mapsto (\sigma^{-1}(x'), y' - h(x'))),$$

it too is a $C^r$ diffeomorphism. (Alternatively, you could compute the derivative of $\psi$ at the origin and apply the Inverse Function Theorem.) We observe that $g = \psi \circ f \approx_r f$ satisfies

$$g(x, 0) = \psi \circ (f_X(x, 0), f_Y(x, 0))$$

$$= (\sigma^{-1} \circ f_X(x, 0), f_Y(x, 0) - h(f_X(x, 0))) = (x, 0).$$

Thus it is no loss of generality to assume in the first place that $f(x, 0) = (x, 0)$. We do so. (This means that $f$ sends the $k$-plane $\mathbb{R}^k \times 0 \subset \mathbb{R}^n$ into the $k$-plane $\mathbb{R}^k \times 0 \subset \mathbb{R}^m$.)

**Step 4.** Finally, we find a local diffeomorphism $\varphi$ in the neighborhood of 0 in $\mathbb{R}^n$ so that $f \circ \varphi$ is the projection map $P(x, y) = (x, 0)$.

Define $F(\xi, x, y) = f_X(\xi, y) - x$. It is a map from $\mathbb{R}^k \times \mathbb{R}^k \times \mathbb{R}^{n-k}$ into $\mathbb{R}^k$. The equation

$$F(\xi, x, y) = 0$$

defines $\xi = \xi(x, y)$ implicitly in a neighborhood of the origin. For at the origin the derivative of $F$ with respect to $\xi$ is the invertible matrix $I_{k \times k}$. Thus $\xi$ is a $C^r$ map from $\mathbb{R}^n$ into $\mathbb{R}^k$ and $\xi(0, 0) = 0$. We claim that

$$\varphi(x, y) = (\xi(x, y), y)$$

is a local diffeomorphism of $\mathbb{R}^n$ and $G = f \circ \varphi$ is $P$.

The derivative of $\xi(x, y)$ with respect to $x$ at the origin can be calculated from the Chain Rule (this was done in general for implicit functions) and since $F(\xi, x, y) \equiv 0$ we have

$$0 = \frac{dF(\xi(x, y), x, y)}{dx} = \frac{\partial F}{\partial \xi} \frac{\partial \xi}{\partial x} + \frac{\partial F}{\partial x} = I_{k \times k} \frac{\partial \xi}{\partial x} - I_{k \times k}.$$

That is, at the origin $\partial \xi/\partial x$ is the identity matrix. Thus,

$$(D\varphi)_0 = \begin{bmatrix} I_{k \times k} & * \\ 0 & I_{(n-k) \times (n-k)} \end{bmatrix}$$