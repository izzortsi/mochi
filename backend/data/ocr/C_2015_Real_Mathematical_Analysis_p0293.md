Let a finite-dimensional vector space $V$ be equipped with norms $|_1$ and $|_2$. Since the identity map is an isomorphism $V_1 \to V_2$ it is a homeomorphism. The same applies to the isomorphism $\mathcal{T}$ that assigns to a matrix $A$ the corresponding linear transformation $T_A$.

2 Derivatives

A function of a real variable $y = f(x)$ has a derivative $f'(x)$ at $x$ when

(1) $$\lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = f'(x).$$

If, however, $x$ is a vector variable, (1) makes no sense. For what does it mean to divide by the vector increment $h$? Equivalent to (1) is the condition

$$f(x+h) = f(x) + f'(x)h + R(h) \Rightarrow \lim_{h \to 0} \frac{R(h)}{|h|} = 0,$$

which is easy to recast in vector terms.

Definition Let $f : U \to \mathbb{R}^m$ be given where $U$ is an open subset of $\mathbb{R}^n$. The function $f$ is differentiable at $p \in U$ with derivative $(Df)_p = T$ if $T : \mathbb{R}^n \to \mathbb{R}^m$ is a linear transformation and

(2) $$f(p+v) = f(p) + T(v) + R(v) \Rightarrow \lim_{|v| \to 0} \frac{R(v)}{|v|} = 0.$$

We say that the Taylor remainder $R$ is sublinear because it tends to 0 faster than $|v|$.

When $n = m = 1$, the multidimensional definition reduces to the standard one. This is because a linear transformation $\mathbb{R} \to \mathbb{R}$ is just multiplication by some real number, in this case multiplication by $f'(x)$.

Here is how to visualize $Df$. Take $m = n = 2$. The mapping $f : U \to \mathbb{R}^2$ distorts shapes nonlinearly; its derivative describes the linear part of the distortion. Circles are sent by $f$ to wobbly ovals, but they become ellipses under $(Df)_p$. Lines are sent by $f$ to curves, but they become straight lines under $(Df)_p$. See Figure 107 and also Appendix A.

This way of looking at differentiability is conceptually simple. Near $p, f$ is the sum of three terms: A constant term $q = fp$, a linear term $(Df)_pv$, and a sublinear