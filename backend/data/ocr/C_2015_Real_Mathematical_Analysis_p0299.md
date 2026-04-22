Returning to the proof of the Leibniz Rule, we write out the Taylor estimates for $f$ and $g$ and plug them into $\beta$. If we use the notation $A = (Df)_p$ and $B = (Dg)_p$, then bilinearity implies

$$\beta(f(p+v), g(p+v)) = \beta(f(p) + Av + R_f, g(p) + Bv + R_g)$$
$$= \beta(f(p), g(p)) + \beta(Av, g(p)) + \beta(f(p), Bv)$$
$$+ \beta(f(p), R_g) + \beta(Av, Bv + R_g) + \beta(R_f, g(p) + Bv + R_g).$$

The last three terms are sublinear. For

$$|\beta(f(p), R_g)| \leq \|\beta\| |f(p)| |R_g|$$
$$|\beta(Av, Bv + R_g)| \leq \|\beta\| \|A\| |v| |Bv + R_g|$$
$$|\beta(R_f, g(p) + Bv + R_g)| \leq \|\beta\| |R_f| |g(p) + Bv + R_g|$$

Therefore $\beta(f,g)$ is differentiable and $D\beta(f,g) = \beta(Df,g) + \beta(f,Dg)$ as claimed. $\square$

Here are some applications of these differentiation rules:

**10 Theorem** A function $f : U \to \mathbb{R}^m$ is differentiable at $p \in U$ if and only if each of its components $f_i$ is differentiable at $p$. Furthermore, the derivative of its $i^{th}$ component is the $i^{th}$ component of the derivative.

**Proof** Assume that $f$ is differentiable at $p$ and express the $i^{th}$ component of $f$ as $f_i = \pi_i f$ where $\pi_i : \mathbb{R}^m \to \mathbb{R}$ is the projection that sends a vector $w = (w_1, \ldots, w_m)$ to $w_i$. Since $\pi_i$ is linear it is differentiable. By the Chain Rule, $f_i$ is differentiable at $p$ and

$$(Df_i)_p = (D\pi_i) \circ (Df)_p = \pi_i \circ (Df)_p.$$

The proof of the converse is equally natural. $\square$

Theorem 10 implies there is little loss of generality in assuming $m = 1$, i.e., that our functions are real-valued. Multidimensionality of the domain, not the target, is what distinguishes multivariable calculus.

**11 Mean Value Theorem** If $f : U \to \mathbb{R}^m$ is differentiable on $U$ and the segment $[p, q]$ is contained in $U$ then

$$|f(q) - f(p)| \leq M |q - p|$$

where $M = \sup\{\|(Df)_x\| : x \in U\}$.