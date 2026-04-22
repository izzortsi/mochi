by setting

$$N(\beta) = \sum_J \left( \int_0^1 g_J(x,t) dt \right) dx_J.$$

The operator $N$ only looks at terms of the form in which $dt$ appears. It ignores the others. We claim that for all $\beta \in \Omega^k(\mathbb{R}^{n+1})$ we have

$$\left( dN + Nd \right)(\beta) = \sum_I \left( f_I(x,1) - f_I(x,0) \right) dx_I$$

where the coefficients $f_I$ take their meaning from (22). By Theorem 14 it is legal to differentiate past the integral sign. From (23) and the definition of $N$ we get

$$N(d\beta) = \sum_I \left( \int_0^1 \frac{\partial f_I}{\partial t} dt \right) dx_I - \sum_{J,\ell} \left( \int_0^1 \frac{\partial g_J}{\partial x_\ell} dt \right) dx_\ell \wedge dx_J$$

$$dN(\beta) = \sum_{J,\ell} \left( \int_0^1 \frac{\partial g_J}{\partial x_\ell} dt \right) dx_\ell \wedge dx_J.$$

For the coefficients in $N(\beta)$ are independent of $t$. Therefore

$$\left( dN + Nd \right)(\beta) = \sum_I \left( \int_0^1 \frac{\partial f_I}{\partial t} dt \right) dx_I = \sum_I \left( f_I(x,1) - f_I(x,0) \right) dx_I,$$

as claimed in (24).

Then we define a **cone map** $\rho : \mathbb{R}^{n+1} \to \mathbb{R}^n$ by

$$\rho(x,t) = tx,$$

and set $L = N \circ \rho^*$. See Figure 128. Commutativity of pullback and $d$ gives

$$Ld + dL = N\rho^*d + dN\rho^* = (Nd + dN)\rho^*,$$

so it behooves us to work out $\rho^*(\omega)$. First suppose that $\omega$ is simple, say $\omega = h \, dx_I \in \Omega^k(\mathbb{R}^n)$. Since $\rho(x,t) = (tx_1, \ldots, tx_n)$ we have

$$\rho^*(h \, dx_I) = (\rho^*h)(\rho^*(dx_I)) = h(tx)d\rho_I$$

$$= h(tx)(d(tx_{i_1}) \wedge \cdots \wedge d(tx_{i_k}))$$

$$= h(tx)((t \, dx_{i_1} + x_{i_1} \, dt) \wedge \cdots \wedge (t \, dx_{i_k} + x_{i_k} \, dt))$$

$$= h(tx)(t^k dx_I) + \text{terms that include } dt$$

where $I = \{i_1, \ldots, i_k\}$. From (24) we conclude that

$$\left( Nd + dN \right) \circ \rho^*(hdx_I) = \left( h(1x)1^k - h(0x)0^k \right)dx_I = hdx_I,$$