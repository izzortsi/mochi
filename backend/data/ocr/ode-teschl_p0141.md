Conclude that a Riemann equation is uniquely determined by its symbol.

Finally, show

$$z^\nu(1-z)^\mu P \begin{cases} 0 & 1 & \infty \\ \alpha_1 & \beta_1 & \gamma_1 \\ \alpha_2 & \beta_2 & \gamma_2 \end{cases} = P \begin{cases} 0 & 1 & \infty \\ \alpha_1 + \nu & \beta_1 + \mu & \gamma_1 - \mu - \nu \\ \alpha_2 + \nu & \beta_2 + \mu & \gamma_2 - \mu - \nu \end{cases}$$

and conclude that any Riemann equation can be transformed into the hypergeometric equation

$$P \begin{cases} 0 & 1 & \infty \\ 0 & 0 & a \\ 1 - c & c - a - b & b \end{cases}.$$

Show that the Legendre equation is a Riemann equation. Find the transformation which maps it to the hypergeometric equation.

4.3. Linear systems with singularities

Now we want to extend the results from the previous section to linear systems

$$w' = A(z)w, \quad w(z_0) = w_0, \quad z, z_0 \in \Omega \subseteq \mathbb{C},$$

where $A(z)$ is a matrix whose coefficients are analytic in $\Omega$.

As in the real case one can show that one can always extend solutions. However, extensions along different paths might give different solutions in general, as we have seen in example (4.11). These problems do not arise if $\Omega$ is simply connected.

Theorem 4.7. Suppose $w' = A(z)w + b(z)$ is linear, where $A : \Omega \to \mathbb{C}^{n \times n}$ and $b : \Omega \to \mathbb{C}^n$ are analytic in a simply connected domain $\Omega \subseteq \mathbb{C}$. Then for every $z_0 \in \Omega$ the corresponding initial value problem has a unique solution defined on all of $\Omega$.

In particular, the power series for every solution will converge in the largest disc centered at $z_0$ and contained in $\Omega$.

Proof. If $\Omega$ is a disc centered at $z_0$ the result follows as in Corollary 2.6. For general $\Omega$, pick $z \in \Omega$ and let $\gamma : [0,1] \to \Omega$ be a path from $z_0$ to $z$. Around each point $\gamma(t)$ we have a solution in a ball with radius independent of the initial condition and of $t \in [0,1]$. So we can define the value of $w(z)$ by analytic continuation along the path $\gamma$. Since $\Omega$ is simply connected, this value is uniquely defined by the monodromy theorem.

This result has the important consequence that a solution of a linear equation can have singularities (poles, essential singularities, or branch points) only at the points where the coefficients have isolated singularities.