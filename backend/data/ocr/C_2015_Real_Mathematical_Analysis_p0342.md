The function $f$ “weights” $x_I$-area. The functional $dx_I$ is a **basic k-form** and $f dx_I$ is a **simple k-form**, while a sum of simple $k$-forms is a general $k$-form:

$$\omega = \sum_I f_I dx_I : \varphi \mapsto \sum_I (f_I dx_I)(\varphi).$$

The careful reader will detect some abuse of notation. Here $I$ is used to index a collection of scalar coefficient functions $\{f_I\}$, whereas $I$ is also used to reduce an $m$-vector $(F_1, \ldots, F_m)$ to a $k$-vector $F_I = (F_{i_1}, \ldots, F_{i_k})$. Besides this, $I$ is the unit interval. Please persevere.

To underline the fact that a form is an integral we write

$$\omega(\varphi) = \int_\varphi \omega.$$

**Notation** $C_k(\mathbb{R}^n)$ is the set of all $k$-cells in $\mathbb{R}^n$, $C^k(\mathbb{R}^n)$ is the set of all functionals on $C_k(\mathbb{R}^n)$, and $\Omega^k(\mathbb{R}^n)$ is the set of $k$-forms on $\mathbb{R}^n$.

Because a determinant changes sign under a row transposition, $k$-forms satisfy the **signed commutativity** property: If $\pi$ permutes $I$ to $\pi I$ then

$$dx_{\pi I} = \text{sgn}(\pi)dx_I$$

where $\text{sgn}(\pi)$ is the sign of the permutation $\pi$. In particular, $dx_{(1,2)} = -dx_{(2,1)}$ signifies that $xy$-area is the negative of $yx$-area, that is $dxdy = -dydx$, a formula that is certainly familiar from Sophomore Calculus. Because a determinant is zero if it has a repeated row, $dx_I = 0$ if $I$ has a repeated entry. In particular $dxdx$ is the zero functional on $C_2(\mathbb{R}^2)$.

**Upshot** The integral of the basic 2-form $dxdy$ over a 2-cell $\varphi$ in $\mathbb{R}^3$ is the net area of its shadow on the $xy$-plane. (“Net” means negative area cancels positive area.) The same holds for the other coordinate planes and in higher dimensions – net shadow area equals the integral of the basic form.

**Example** Consider a 2-cell $\varphi : I^2 \to \mathbb{R}^3$. What is its $xy$-area? By definition it is the integral of the Jacobian $\partial(\varphi_1, \varphi_2)/\partial(s,t)$ over the unit square in $(s,t)$-space. Suppose that $\varphi$ is given by the formula

$$\varphi(s,t) = \begin{cases} (s,t(1-ms)), & \text{if } 0 \leq s \leq 1/2 \\ (s,t(1-m+ms)), & \text{if } 1/2 \leq s \leq 1. \end{cases}$$