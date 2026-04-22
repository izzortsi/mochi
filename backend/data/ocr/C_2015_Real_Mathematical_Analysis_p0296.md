Continuity of the partials implies that the terms inside the curly brackets tend to 0 as $|v| \to 0$. Thus $R$ is sublinear and $f$ is differentiable at $p$.

Next we state and prove the basic rules of multivariable differentiation.

9 Theorem Let $f$ and $g$ be differentiable. Then

(a) $D(f + cg) = Df + cDg$.
(b) $D(\text{constant}) = 0$ and $D(T(x)) = T$.
(c) $D(g \circ f) = Dg \circ Df$. (Chain Rule)
(d) $D(f \bullet g) = Df \bullet g + f \bullet Dg$. (Leibniz Rule)

There is a fifth rule that concerns the derivative of the nonlinear inversion operator $\text{Inv} : T \mapsto T^{-1}$. It is a glorified version of the formula

$$\frac{dx^{-1}}{dx} = -x^{-2},$$

and is discussed in Exercises 32 - 36.

Proof (a) Write the Taylor estimates for $f$ and $g$ and combine them to get the Taylor estimate for $f + cg$.

$$f(p + v) = f(p) + (Df)_p(v) + R_f$$
$$g(p + v) = g(p) + (Dg)_p(v) + R_g$$
$$(f + cg)(p + v) = (f + cg)(p) + ((Df)_p + c(Dg)_p)(v) + R_f + cR_g.$$

Since $R_f + cR_g$ is sublinear, $(Df)_p + c(Dg)_p$ is the derivative of $f + cg$ at $p$.