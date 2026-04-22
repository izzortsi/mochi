which is $g df + f dg$, and verifies (c) for 0-forms in $\mathbb{R}^2$. The higher-dimensional case is similar. Next we consider simple forms $\alpha = f dx_I$ and $\beta = g dx_J$. Then

$$d(\alpha \wedge \beta) = d(fg dx_{IJ}) = (g df + f dg) \wedge dx_{IJ}$$
$$= (df \wedge dx_I) \wedge (g dx_J) + (-1)^k(f dx_I) \wedge (dg \wedge dx_J)$$
$$= d\alpha \wedge \beta + (-1)^k\alpha \wedge d\beta.$$

Distributivity completes the proof for general $\alpha$ and $\beta$.

The proof of (d) is fun. We check it first for the special 0-form $x$. By Proposition 41 the exterior derivative $x$ is $dx$ and in turn the exterior derivative of $dx$ is zero. For $dx = 1dx$, $d1 = 0$, and by definition, $d(1dx) = d(1) \wedge dx = 0$. For the same reason, $d(dx_I) = 0$.

Next we consider a smooth function $f : \mathbb{R}^2 \to \mathbb{R}$ and prove that $d^2f = 0$. Since $d^2x = d^2y = 0$ we have

$$d^2f = d(f_x dx + f_y dy) = d(f_x) \wedge dx + d(f_y) \wedge dy$$
$$= (f_{xx} dx + f_{xy} dy) \wedge dx + (f_{yx} dx + f_{yy} dy) \wedge dy$$
$$= f_{xx} dx \wedge dx + (f_{yx} - f_{xy})dx \wedge dy + f_{yy} dy \wedge dy = 0$$

since $dx \wedge dx = dy \wedge dy = 0$ and smoothness of $f$ implies $f_{xy} = f_{yx}$.

The fact that $d^2 = 0$ for functions easily gives the same result for forms. The higher-dimensional case is similar.

**Pushforward and Pullback**

According to Theorem 36 forms behave naturally under composition on the right. What about composition on the left? Let $T : \mathbb{R}^n \to \mathbb{R}^m$ be a smooth transformation. It induces a natural transformation on $k$-cells, $T_* : C_k(\mathbb{R}^n) \to C_k(\mathbb{R}^m)$, called the **pushforward** of $T$. It is defined as

$$T_* : \varphi \mapsto T \circ \varphi.$$

A $k$-cell $\varphi$ in $\mathbb{R}^n$ gets pushed forward to become a $k$-cell in $\mathbb{R}^m$. Dual to the pushforward is the **pullback** $T^* : C^k(\mathbb{R}^m) \to C^k(\mathbb{R}^n)$. It is defined as

$$T^* : Y \mapsto Y \circ T.$$

A functional $Y$ that sends $k$-cells in $\mathbb{R}^m$ to $\mathbb{R}$ gets pulled back to become a functional on $k$-cells in $\mathbb{R}^n$,

$$T^*Y : \varphi \mapsto Y(\varphi \circ T).$$