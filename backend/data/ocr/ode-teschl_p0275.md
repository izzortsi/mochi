Since the operator on the right is a contraction,

$$\|L^{-1}g(x + h_1(x)) - L^{-1}g(x + h_2(x))\| \leq \frac{2}{1 - \alpha} \|g(x + h_1(x)) - g(x + h_2(x))\| \leq \frac{2\varepsilon}{1 - \alpha} \|h_1 - h_2\|,$$

the contraction principle (Theorem 2.1) guarantees existence of a unique solution.

Now suppose $f$ is invertible. Then there is a map $\vartheta(x) = x + k(x)$ such that $A \circ \vartheta = \vartheta \circ f$. In fact, defining $L$ as before but with $U(k)(x) = k(f(x))$ we see that this last equation is equivalent to $L(k)(x) = -g(x)$ and since the same argument as above shows that that $L$ is invertible, we obtain $k(x) = -L^{-1}(g)(x)$. Hence $A \circ \vartheta \circ \varphi = \vartheta \circ f \circ \varphi = \vartheta \circ \varphi \circ A$ and thus $\vartheta \circ \varphi = \mathbb{I}$ by the uniqueness part of our result (in the case $g \equiv 0$). Similarly, $A^{-1} \circ \varphi \circ \vartheta = \varphi \circ \vartheta \circ A^{-1}$ implies $\varphi \circ \vartheta = \mathbb{I}$ and thus $\varphi$ is a homeomorphism.

To show $\varphi(0) = 0$ evaluate $A\varphi^{-1}(x) = \varphi^{-1}(f(x))$ at $x = 0$ which shows $A\varphi^{-1}(0) = \varphi^{-1}(0)$. But this equation has only the solution $\varphi^{-1}(0) = 0$.

**Corollary 9.8.** Let $A$ be as in the previous lemma and $f$ arbitrary. Suppose there is a homeomorphism $\varphi(x) = x + h(x)$ with $h$ bounded such that

$$\varphi \circ A = f \circ \varphi,$$

then $\varphi$ is unique.

**Proof.** Suppose there are two such maps $\varphi_1$ and $\varphi_2$ and note that the inverses $\varphi_j^{-1}$ are of the same type (Problem 9.14). Then $f = \varphi_1A\varphi_1^{-1} = \varphi_2A\varphi_2^{-1}$ implies $A(\varphi_1^{-1}\varphi_2) = (\varphi_1^{-1}\varphi_2)A$ which shows that $\varphi_1^{-1}\varphi_2 = \mathbb{I}$ by our above lemma in the case $g \equiv 0$.

Now we are able to prove the anticipated result.

**Theorem 9.9** (Hartman–Grobman). Suppose $f$ is a differentiable vector field with 0 as a hyperbolic fixed point. Denote by $\Phi(t,x)$ the corresponding flow and by $A = df_0$ the Jacobian matrix of $f$ at 0. Then there is a homeomorphism $\varphi(x) = x + h(x)$ with $h$ bounded such that

$$\varphi \circ e^{tA} = \Phi_t \circ \varphi$$

in a sufficiently small neighborhood of 0.

**Proof.** Our strategy is to apply Lemma 9.7 to find a $\varphi$ which works for one fixed $t$, say $t = 1$, and then verify that it works in fact for all $t$.