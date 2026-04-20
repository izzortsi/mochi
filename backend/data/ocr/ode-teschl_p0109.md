Then, if $b_0C < \alpha$, we have

$$\|\Pi_{A+B}(t,s)\| \leq D e^{-(\alpha-b_0C)(t-s)}, \quad t \geq s \geq 0,$$

(3.152)

for some constant $D > 0$.

Proof. The key ingredient is the variation of constants formula (3.97), where we rewrite (3.149) as

$$\dot{x} - A(t)x = B(t)x$$

and regard the right-hand side as an inhomogeneous term $g(t) = B(t)x(t)$. Then

$$x(t) = \Pi_A(t,s)x(s) + \int_s^t \Pi_A(t,r)B(r)x(r)dr.$$

By our assumptions we obtain

$$|x(t)| \leq C e^{-\alpha(t-s)}|x(s)| + \int_s^t C e^{-\alpha(t-r)}b_0|x(r)|dr$$

for $t \geq s \geq t_0$. Introducing $y(t) = |x(t)|e^{\alpha(t-s)}$ we get

$$y(t) \leq C|x(s)| + \int_s^t Cb_0y(r)dr$$

and Gronwall’s inequality implies $y(t) \leq C|x(s)|e^{Cb_0(t-s)}$ and hence

$$|x(t)| \leq C|x(s)|e^{-(\alpha-Cb_0)(t-s)}, \quad t \geq s \geq t_0.$$

Finally, to obtain the general case use (3.88) to reduce it to the case where all times are either $\geq t_0$ or $\leq t_0$ and (3.87) to estimate the latter case. This shows that the claim holds with $D = e^{(\beta+(\alpha-Cb_0))t_0}C$, where $\beta = \max_{0 \leq t \leq t_0} \|A(t) + B(t)\|$.

In order to apply this result note that estimates for $\Pi_A(t,s)$ of the required type are provided in Problem 3.31.

As a first consequence we conclude that asymptotic stability is preserved for perturbed linear systems of the form

$$\dot{x} = (A + B(t))x,$$

(3.153)

where $B(t)$ is continuous and satisfies $\|B(t)\| \to 0$ as $t \to \infty$. To this end recall that by Corollary 3.6 the unperturbed system corresponding to $B(t) = 0$ is asymptotically stable if and only if all eigenvalues of $A$ have negative real part. Moreover, in this case (3.44) shows that the assumptions of our theorem are satisfied.

Corollary 3.21. Suppose all eigenvalues $\alpha_j$ of $A$ have negative real part and $B(t)$ satisfies

$$\lim_{t \to \infty} \|B(t)\| = 0.$$

(3.154)