does not vanish at that point, $\frac{\partial F}{\partial y_k}(t, y) \neq 0$. This is the type of differential equations we will consider from now on.

We have seen in the previous section that the case of real-valued functions is not enough and we should admit the case $x : \mathbb{R} \rightarrow \mathbb{R}^n$. This leads us to systems of ordinary differential equations

$$x_1^{(k)} = f_1(t, x, x^{(1)}, \ldots, x^{(k-1)}),$$

$$\vdots$$

$$x_n^{(k)} = f_n(t, x, x^{(1)}, \ldots, x^{(k-1)}).$$

(1.16)

Such a system is said to be linear, if it is of the form

$$x_i^{(k)} = g_i(t) + \sum_{l=1}^{n} \sum_{j=0}^{k-1} f_{i,j,l}(t) x_l^{(j)}.$$

(1.17)

It is called homogeneous, if $g_i(t) \equiv 0$.

Moreover, any system can always be reduced to a first-order system by changing to the new set of dependent variables $y = (x, x^{(1)}, \ldots, x^{(k-1)})$. This yields the new first-order system

$$\dot{y}_1 = y_2,$$

$$\vdots$$

$$\dot{y}_{k-1} = y_k,$$

$$\dot{y}_k = f(t, y).$$

(1.18)

We can even add $t$ to the dependent variables $z = (t, y)$, making the right-hand side independent of $t$

$$\dot{z}_1 = 1,$$

$$\dot{z}_2 = z_3,$$

$$\vdots$$

$$\dot{z}_k = z_{k+1},$$

$$\dot{z}_{k+1} = f(z).$$

(1.19)

Such a system, where $f$ does not depend on $t$, is called autonomous. In particular, it suffices to consider the case of autonomous first-order systems which we will frequently do.

Of course, we could also look at the case $t \in \mathbb{R}^m$ implying that we have to deal with partial derivatives. We then enter the realm of partial differential equations (PDE). However, we will not pursue this case here.