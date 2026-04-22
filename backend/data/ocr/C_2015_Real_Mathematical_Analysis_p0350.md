The pushforward $T^*$ goes the same direction as $T$, from $\mathbb{R}^n$ to $\mathbb{R}^m$, while the pullback $T^*$ goes the opposite way. The pushforward/pullback duality is summarized by the formula

$$\left(T^*Y\right)(\varphi) = Y\left(T^*\varphi\right).$$

$C^k(\mathbb{R}^m)$ and $C^k(\mathbb{R}^n)$ are vector spaces according to the addition and scalar multiplication rules

$$\left(Y + \lambda W\right)(\varphi) = Y(\varphi) + \lambda W(\varphi),$$

and the pullback $T^* : C^k(\mathbb{R}^m) \rightarrow C^k(\mathbb{R}^n)$ is linear. For if $Y, W \in C^k(\mathbb{R}^m)$, $\lambda \in \mathbb{R}$, and $\varphi \in C_k(\mathbb{R}^n)$ then

$$\left(T^*\left(Y + \lambda W\right)\right)(\varphi) = \left(Y + \lambda W\right)\left(T \circ \varphi\right) = Y\left(T \circ \varphi\right) + \lambda W\left(T \circ \varphi\right)$$

$$= T^*Y(\varphi) + \lambda T^*W(\varphi).$$

These functionals $Y, W$ need not be forms – linearity of the pullback has nothing to do with forms. The same applies to composition. If $T : \mathbb{R}^n \rightarrow \mathbb{R}^m$ and $S : \mathbb{R}^m \rightarrow \mathbb{R}^p$ are smooth then

$$\left(S \circ T\right)^* = T^* \circ S^* : C^k(\mathbb{R}^p) \rightarrow C^k(\mathbb{R}^n).$$

Although this has nothing to do with forms, Figure 125 is what to remember.

43 Theorem Pullbacks of forms obey the following three natural conditions.

(a) The pullback of a form is a form. In particular, $T^*\left(dy_I\right) = dT_I$ and $T^*\left(f dy_I\right) = T^*f dT_I$, where $dT_I = dT_{i_1} \wedge \cdots \wedge dT_{i_k}$.

(b) The pullback preserves wedge products, $T^*(\alpha \wedge \beta) = T^*\alpha \wedge T^*\beta$.

(c) The pullback commutes with the exterior derivative, $dT^* = T^*d$.

Proof (a) We rely on a nontrivial result in linear algebra, the Cauchy-Binet Formula, which concerns the determinant of a product matrix $AB = C$, where $A$ is $k \times n$ and $B$ is $n \times k$. See Appendix E.

In terms of Jacobians, the Cauchy-Binet Formula asserts that if the maps $\varphi : \mathbb{R}^k \rightarrow \mathbb{R}^n$ and $\psi : \mathbb{R}^n \rightarrow \mathbb{R}^k$ are smooth then the composite $\phi = \psi \circ \varphi : \mathbb{R}^k \rightarrow \mathbb{R}^k$ satisfies

$$\frac{\partial \phi}{\partial u} = \sum_J \frac{\partial \psi}{\partial x_J} \frac{\partial \varphi_J}{\partial u}$$

where the Jacobian $\partial \psi/\partial x_J$ is evaluated at $x = \varphi(u)$ and $J$ ranges through all ascending $k$-tuples in $\{1, \ldots, n\}$. Then the pullback of a simple $k$-form on $\mathbb{R}^m$ is the