Problem 9.11. Classify the fixed points of the Lorenz equation

$$f(x) = (x_2 - x_1, rx_1 - x_2 - x_1x_3, x_1x_2 - x_3), \quad r > 0,$$
according to stability. At which value of $r$ does the number of fixed points change?

Problem 9.12. Suppose $A(\lambda)$ is a matrix which is $C^k$ with respect to $\lambda$ in some compact set. Suppose there is an $0 < \alpha_0 < \min\{|\text{Re}(\alpha)| |\alpha \in \sigma(A(\lambda))\}$. Then

$$\left\| \left( \frac{d}{d\lambda} \right)^n e^{tA(\lambda)} P(\lambda, t) \right\| \leq C_n (1 + |t|^n) e^{-\alpha_0 |t|}, \quad n \leq k.$$

(Hint: Start with the case where $A(\lambda)$ is a scalar. In the general case use the power series for the exponential to find the derivative. The problem is that $A(\lambda)$ and its derivatives might not commute. However, once you take the norm ...)

9.3. The Hartman–Grobman theorem

The result of the previous section only tells us something about the orbits in the stable and unstable manifold. In this section we want to prove a stronger result, which shows that the orbits near a hyperbolic fixed point are locally just continuously deformed versions of their linear counterparts. This is illustrated in Figure 9.3.

If we assume that $A$ has no eigenvalues on the unit circle, we can use $\mathbb{R}^n = E^{-}(A) \oplus E^{+}(A)$ to split it into a contracting and expanding part $A = A_- \oplus A_+$, where $A_\pm = A|_{E^{\pm}(A)}$. By construction, all eigenvalues of $A_+$ are inside the unit circle and all eigenvalues of $A_-$ are outside the unit circle. Hence, by Problem 3.48 we can find a norm such that $\|A_+\| < 1$.

We begin with a lemma for maps.

Lemma 9.7. Suppose $A$ is an invertible matrix with no eigenvalues on the unit circle and choose a norm such that $\alpha = \max(\|A_-\|, \|A_+\|) < 1$ (set