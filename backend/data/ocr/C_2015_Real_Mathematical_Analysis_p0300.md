Proof Fix any unit vector $u \in \mathbb{R}^n$. The function

$$g(t) = \langle u, f(p + t(q - p)) \rangle$$

is differentiable and we can calculate its derivative. By the one-dimensional Mean Value Theorem this gives some $\theta \in (0, 1)$ such that $g(1) - g(0) = g'(\theta)$. That is,

$$\langle u, f(q) - f(p) \rangle = g'(\theta) = \langle u, (Df)_{p + \theta(q - p)}(q - p) \rangle \leq M|q - p|.$$

A vector whose dot product with every unit vector is no larger than $M|q - p|$ has norm $\leq M|q - p|$.

Remark The one-dimensional Mean Value Theorem is an equality

$$f(q) - f(p) = f'(\theta)(q - p)$$

and you might expect the same to be true for a vector-valued function if we replace $f'(\theta)$ by $(Df)_\theta$. Not so. See Exercise 17. The closest we can come to an equality form of the multidimensional Mean Value Theorem is the following.

12 $C^1$ Mean Value Theorem If $f : U \to \mathbb{R}^m$ is of class $C^1$ (its derivative exists and is continuous) and if the segment $[p, q]$ is contained in $U$ then

(4) $$f(q) - f(p) = T(q - p)$$

where $T$ is the average derivative of $f$ on the segment,

$$T = \int_0^1 (Df)_{p + t(q - p)} dt.$$

Conversely, if there is a continuous family of linear maps $T_{pq} \in \mathcal{L}$ for which (4) holds then $f$ is of class $C^1$ and $(Df)_{p} = T_{pp}$.

Proof The integrand takes values in the normed space $\mathcal{L}(\mathbb{R}^n, \mathbb{R}^m)$ and is a continuous function of $t$. The integral is the limit of Riemann sums

$$\sum_k (Df)_{p + t_k(q - p)} \Delta t_k,$$

which lie in $\mathcal{L}$. Since the integral is an element of $\mathcal{L}$ it has a right to act on the vector $q - p$. Alternatively, if you integrate each entry of the matrix that represents $Df$ along the segment then the resulting matrix represents $T$. Fix an index $i$ and apply the Fundamental Theorem of Calculus to the $C^1$ real-valued function of one variable

$$g(t) = f_i \circ \sigma(t)$$