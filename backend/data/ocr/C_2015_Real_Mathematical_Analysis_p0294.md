remainder term $R(v)$. Keep in mind what kind of an object the derivative is. It is not a number. It is not a vector. No, if it exists then $(Df)_p$ is a linear transformation from the domain space to the target space.

5 Theorem If $f$ is differentiable at $p$ then it unambiguously determines $(Df)_p$ according to the limit formula, valid for all $u \in \mathbb{R}^n$,

$$
(Df)_p(u) = \lim_{t \to 0} \frac{f(p + tu) - f(p)}{t}.
$$

Proof Let $T$ be a linear transformation that satisfies (2). Fix any $u \in \mathbb{R}^n$ and take $v = tu$. Then

$$
\frac{f(p + tu) - f(p)}{t} = \frac{T(tu) + R(tu)}{t} = T(u) + \frac{R(tu)}{t|u|}|u|.
$$

The last term converges to zero as $t \to 0$, which verifies (3). Limits, when they exist, are unambiguous and therefore if $T'$ is a second linear transformation that satisfies (2) then $T(u) = T'(u)$ so $T = T'$.

6 Theorem Differentiability implies continuity.

Proof Differentiability at $p$ implies that

$$|f(p + v) - f(p)| = |(Df)_p v + R(v)| \leq \|(Df)_p\| |v| + |R(v)| \to 0$$

as $p + v \to p$.