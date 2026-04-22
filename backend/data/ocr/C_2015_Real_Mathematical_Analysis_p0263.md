by setting

$$e^z = \sum_{k=0}^{\infty} \frac{z^k}{k!} \quad \log(1+z) = \sum_{k=1}^{\infty} \frac{(-1)^{k+1} z^k}{k} \text{ when } |z| < 1$$

$$\sin z = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k+1}}{(2k+1)!} \quad \cos z = \sum_{k=0}^{\infty} \frac{(-1)^k z^{2k}}{(2k)!}.$$

It is enlightening and reassuring to derive formulas such as

$$e^{i\theta} = \cos \theta + i \sin \theta$$

directly from these definitions. (Just plug in $z = i\theta$ and use the equations $i^2 = -1, i^3 = -i, i^4 = 1$, etc.) A key formula to check is $e^{z+w} = e^z e^w$. One proof involves a manipulation of product series; a second merely uses analyticity. Another formula is $\log(e^z) = z$.

There are many natural results about real analytic functions that can be proved by direct power series means; e.g., the sum, product, reciprocal, composite, and inverse function of analytic functions are analytic. Direct proofs, like those for the Analyticity Theorem above, involve major series manipulations. The use of complex variables leads to greatly simplified proofs of these real variable theorems, thanks to the following fact.

Real analyticity propagates to complex analyticity and complex analyticity is equivalent to complex differentiability.$^\dagger$

For it is relatively easy to check that the composition, etc., of complex differentiable functions is complex differentiable.

The analyticity concept extends even beyond $\mathbb{C}$. You may already have seen such an extension when you studied the vector linear ODE

$$x' = Ax$$

in calculus. $A$ is a given $m \times m$ matrix and the unknown solution $x = x(t)$ is a vector function of $t$, on which an initial condition $x(0) = x_0$ is usually imposed. A

$^\dagger$A function $f : D \to \mathbb{C}$ is complex differentiable or holomorphic if $D$ is an open subset of $\mathbb{C}$ and for each $z \in D$, the limit of

$$\frac{\Delta f}{\Delta z} = \frac{f(z + \Delta z) - f(z)}{\Delta z}$$

exists as $\Delta z \to 0$ in $\mathbb{C}$. The limit, if it exists, is a complex number.