Terminology A functional on a set $X$ is a function from $X$ to $\mathbb{R}$.

Figure 121 suggests why $\int_C y \, dx$ is positive and $\int_{C'}' y \, dx$ is negative: The weight factor is positive on $C$ and negative on $C'$. On the other hand, if the weight factor is the constant $c$ then both integrals are $c(q - p)$.

Figure 121 $C$ and $C'$ are paths from $p$ to $q$ where $p$ and $q$ lie on the $x$-axis. The integrals $\int_C y \, dx$ and $\int_{C'}' y \, dx$ express the net $y$-weighted $x$-variation along $C$ and $C'$.

Differential 1-forms are functionals on the set of paths. Some functionals on the set of paths are differential forms but others are not. For instance, assigning to each path its arclength is a functional that is not a form. For if $C$ is a path parameterized by $(x(t), y(t))$ then $(x^*(t), y^*(t)) = (x(a + b - t), y(a + b - t))$ parameterizes $C$ in the reverse direction. Arclength is unaffected but the value of every 1-form on the path changes sign. Hence, arclength is not a 1-form. A more trivial example is the functional that assigns to each path the number 1. It too fails to have the right symmetry property under parameter reversal and is not a 1-form.

Definition A $k$-cell in $\mathbb{R}^n$ is a smooth map $\varphi : I^k \to \mathbb{R}^n$ where $I^k$ is the unit $k$-cube. If $k = 1$ then $\varphi$ is a path. The set of $k$-cells is $C_k(\mathbb{R}^n)$.

A $k$-cell $\varphi$ need not be a diffeomorphism to its image. $\varphi$ can be noninjective and its derivative can have zero determinant at many points. For this reason cells are often called “singular cells.” Singularities are permitted. For example, if $\epsilon$ is the smooth function that is $e^{-1/t}$ for $t > 0$ and identically zero for $t \leq 0$ then $t \mapsto (\epsilon(|t - 1/2|)^2, \epsilon(|t - 1/2|))$ is a smooth 1-cell in the plane, despite the fact that its image has a cusp at the origin. See Figure 122.