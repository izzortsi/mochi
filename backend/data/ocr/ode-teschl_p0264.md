9.1. Stability of linear systems

Our aim in this chapter is to show that a lot of information on the stability of a flow near a fixed point can be read off by linearizing the system around the fixed point. As a preparation we recall the stability discussion for linear systems

$$\dot{x} = Ax$$

(9.1)

from Section 3.2. Clearly, our definition of stability in Section 6.5 is invariant under a linear change of coordinates. Hence it will be no restriction to assume that the matrix $A$ is in Jordan canonical form.

Moreover, recall that, by virtue of the explicit form (3.42) of $\exp(tJ)$ for a Jordan block $J$, it follows that the long-time behavior of the system is determined by the real part of the eigenvalues. In general it depends on the initial condition and there are two linear manifolds $E^{+}(e^A)$ and $E^{-}(e^A)$, such that if we start in $E^{+}(e^A)$ (resp. $E^{-}(e^A)$), then $x(t) \to 0$ as $t \to \infty$ (resp. $t \to -\infty$).

The linear manifold $E^{+}(e^A)$ (resp. $E^{-}(e^A)$) is called **stable** (resp. **unstable**) manifold and is spanned by the generalized eigenvectors corresponding to eigenvalues with negative (resp. positive) real part,

$$E^{\pm}(e^A) = \bigoplus_{\pm \text{Re}(\alpha_j) < 0} \text{Ker}(A - \alpha_j)^{a_j}.$$

(9.2)

Similarly one can define the **center manifold** $E^{0}(e^A)$ corresponding to the eigenvalues with zero real part. However, since the center manifold is