where $I = (i_1, \ldots, i_k)$, $\varphi_I = (\varphi_{i_1}, \ldots, \varphi_{i_k})$, and the integral notation is shorthand for

$$\int_0^1 \ldots \int_0^1 \frac{\partial(\varphi_{i_1}, \ldots, \varphi_{i_k})}{\partial(u_1, \ldots, u_k)} du_1 \ldots du_k.$$

For 1-forms the definition is nothing new. The integral of $dx$ on the path $\varphi(t) = (x(t), y(t))$ is the integral of the $1 \times 1$ Jacobian $dx(t)/dt$, namely

$$\int_0^1 \frac{dx(t)}{dt} dt = x(1) - x(0)$$

which is the net $x$-variation of $\varphi$. In the $x_I$-area terminology it is the $x$-area of $\varphi$.

Just as for paths, $x_I$-area can be positive or negative. It is the **signed area** of the **shadow** of $\varphi$ on the $x_I$-plane, i.e., the signed area of its projection $\pi_I(\varphi(I^k))$. After all, the Jacobian can be negative and it only involves the $I$-components of $\varphi$. No components $\varphi_j$ with $j \notin I$ appear in $\partial\varphi_I/\partial u$. See Figure 123.

**Figure 123** A pseudopod emerging from a rectangle. It is a 2-cell $\varphi$ in $\mathbb{R}^3$ that casts a shadow in the $xy$-plane.

If $f$ is a smooth function on $\mathbb{R}^n$ then $fdx_I$ is the functional

$$f \, dx_I : \varphi \mapsto \int_{I^k} f(\varphi(u)) \frac{\partial\varphi_I}{\partial u} du.$$