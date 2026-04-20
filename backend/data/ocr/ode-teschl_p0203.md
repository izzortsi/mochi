Here the right-hand side is to be understood as the definition of $\exp(tX)x$. (Hint: The Taylor coefficients are the derivatives which can be obtained by differentiating the differential equation.)

Problem 6.6. Show that $T_+(x)$ is lower semi-continuous: $\liminf_{x \to x_0} T(x) \geq T(x_0)$. Similarly, $T_-(x)$ is upper semi-continuous: $\limsup_{x \to x_0} T(x) \leq T(x_0)$.

6.3. Orbits and invariant sets

The orbit of $x$ is defined as

$$\gamma(x) = \Phi(I_x \times \{x\}) \subseteq M.$$ (6.15)

Note that $y \in \gamma(x)$ implies $y = \Phi(t,x)$ and hence $\gamma(x) = \gamma(y)$ by (6.11). In particular, different orbits are disjoint (i.e., we have the following equivalence relation on $M$: $x \simeq y$ if $\gamma(x) = \gamma(y)$). If $\gamma(x) = \{x\}$, then $x$ is called a fixed point (also singular, stationary, or equilibrium point) of $\Phi$. Otherwise $x$ is called regular and $\Phi(.,x) : I_x \hookrightarrow M$ is injective.

Similarly we introduce the forward and backward orbits

$$\gamma_{\pm}(x) = \Phi((0,T_{\pm}(x)),x).$$ (6.16)

Clearly $\gamma(x) = \gamma_-(x) \cup \{x\} \cup \gamma_+(x)$. One says that $x \in M$ is a periodic point of $\Phi$ if there is some $T > 0$ such that $\Phi(T,x) = x$. The lower bound of such $T$ is called the period, $T(x)$ of $x$, that is, $T(x) = \inf\{T > 0 | \Phi(T,x) = x\}$. By continuity of $\Phi$ we have $\Phi(T(x),x) = x$ and by the flow property $\Phi(t + T(x),x) = \Phi(t,x)$. In particular, an orbit is called a periodic orbit if one (and hence all) point of the orbit is periodic.

It is not hard to see (Problem 6.9) that $x$ is periodic if and only if $\gamma_+(x) \cap \gamma_-(x) \neq \emptyset$ and hence periodic orbits are also called closed orbits.

Hence we may classify the orbits of $f$ as follows:

(i) fixed orbits (corresponding to a periodic point with period zero)

(ii) regular periodic orbits (corresponding to a periodic point with positive period)

(iii) non-closed orbits (not corresponding to a periodic point)

The quantity $T_+(x) = \sup I_x$ (resp. $T_-(x) = \inf I_x$) defined in the previous section is called the positive (resp. negative) lifetime of $x$. A point $x \in M$ is called $\sigma$ complete, $\sigma \in \{\pm\}$, if $T_\sigma(x) = \sigma\infty$ and complete if it is both $+$ and $-$ complete (i.e., if $I_x = \mathbb{R}$).

Corollary 2.15 gives us a useful criterion when a point $x \in M$ is $\sigma$ complete.