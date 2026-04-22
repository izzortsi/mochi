into multiplication by $r$, which is just dilation, and multiplication by $e^{i\theta}$, which is rotation of the plane by angle $\theta$. As $a$ matrix the rotation is

$$\begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix}.$$

The polar coordinates of $(x, y)$ are $(r, \theta)$.

Analogously, consider an isomorphism $T : \mathbb{R}^n \to \mathbb{R}^n$. Its **polar form** is

$$T = OP$$

where $O$ and $P$ are isomorphisms $\mathbb{R}^n \to \mathbb{R}^n$ such that

(a) $O$ is like $e^{i\theta}$; it is an orthogonal isomorphism.

(b) $P$ is like $r$; it is positive definite symmetric (PDS) isomorphism.

Orthogonality of $O$ means that for all $v, w \in \mathbb{R}^n$ we have

$$\langle Ov, Ow \rangle = \langle v, w \rangle,$$

while $P$ being PDS means that for all nonzero vectors $v, w \in \mathbb{R}^n$ we have

$$\langle Pv, v \rangle > 0$$ and $$\langle Pv, w \rangle = \langle v, Pw \rangle.$$

The notation $\langle v, w \rangle$ indicates the usual dot product on $\mathbb{R}^n$.

The polar form $T = OP$ reveals everything geometric about $T$. The geometric effect of $O$ is nothing. It is an isometry and changes no distances or shapes. It is rigid. The effect of a PDS operator $P$ is easy to describe. In linear algebra it is shown that there exists a basis $\mathcal{B} = \{u_1, \ldots, u_n\}$ of orthonormal vectors (the vectors are of unit length and are mutually perpendicular) and with respect to this basis we have

$$P = \begin{bmatrix} \lambda_1 & 0 & \ldots \\ 0 & \lambda_2 & 0 & \ldots \\ & \ldots & 0 & \lambda_{n-1} \\ & & \ldots & 0 & \lambda_n \end{bmatrix}$$

The diagonal entries $\lambda_i$ are positive. $P$ stretches each $u_i$ by the factor $\lambda_i$. Thus $P$ stretches the unit sphere to an $n$-dimensional ellipsoid. The $u_i$ are its axes. The norm of $P$ and hence of $T$ is the largest $\lambda_i$, while the conorm is the smallest $\lambda_i$. The ratio of the largest to the smallest, the **condition number**, is the eccentricity of the ellipsoid.