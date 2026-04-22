Proof Write $\omega$ as

$$\omega = \sum_{i=1}^{n} f_i(x) dx_1 \wedge \cdots \wedge \widehat{dx_i} \wedge \cdots \wedge dx_n,$$

where the hat above the term $dx_i$ is standard notation to indicate that $dx_i$ is deleted. The exterior derivative of $\omega$ is

$$d\omega = \sum_{i=1}^{n} df_i \wedge dx_1 \wedge \cdots \wedge \widehat{dx_i} \wedge \cdots \wedge dx_n$$

$$= \sum_{i=1}^{n} (-1)^{i-1} \frac{\partial f_i}{\partial x_i} dx_1 \wedge \cdots \wedge dx_n$$

$$= \sum_{i=1}^{n} (-1)^{i+1} \frac{\partial f_i}{\partial x_i} dx_1 \wedge \cdots \wedge dx_n$$

which implies that

$$\int_\iota d\omega = \sum_{i=1}^{n} (-1)^{i+1} \int_{I^k} \frac{\partial f_i}{\partial x_i} du.$$

Deleting the $j^{th}$ component of the rear $j^{th}$ face $\nu^{j,0}(u)$ gives the $k$-tuple $(u_1, \ldots, u_k)$, while deleting any other component gives a $k$-tuple with a component that remains constant as $u$ varies. The same is true of the $j^{th}$ front face. Thus the Jacobians are

$$\frac{\partial(\nu^{j,0})_I}{\partial u} = \frac{\partial(\nu^{j,1})_I}{\partial u} = \begin{cases} 1 & \text{if } I = (1, \ldots, \widehat{j}, \ldots, n) \\ 0 & \text{otherwise}, \end{cases}$$

and so the $j^{th}$ dipole integral of $\omega$ is zero except when $i = j$, and in that case

$$\int_{\delta j} \omega = \int_0^1 \cdots \int_0^1 (f_j(u_1, \ldots, u_{j-1}, 1, u_j, \ldots, u_k) - f_j(u_1, \ldots, u_{j-1}, 0, u_j, \ldots, u_k)) du_1 \ldots du_k.$$

By the Fundamental Theorem of Calculus we can substitute the integral of a derivative for the $f_j$ difference; and by Fubini’s Theorem the order of integration in ordinary multiple integration is irrelevant. This gives

$$\int_{\delta j} \omega = \int_0^1 \cdots \int_0^1 \frac{\partial f_j(x)}{\partial x_j} dx_1 \ldots dx_n,$$

so the alternating dipole sum $\sum(-1)^{j+1} \int_{\delta j} \omega$ equals $\int_\iota d\omega$.