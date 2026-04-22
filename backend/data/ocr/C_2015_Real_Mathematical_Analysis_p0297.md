(b) If $f : \mathbb{R}^n \to \mathbb{R}^m$ is constant, $f(x) = c$ for all $x \in \mathbb{R}^n$, and if $O : \mathbb{R}^n \to \mathbb{R}^m$ denotes the zero transformation then the Taylor remainder $R(v) = f(p+v) - f(p) - O(v)$ is identically zero. Hence $D(constant)_p = O$.

$T : \mathbb{R}^n \to \mathbb{R}^m$ is a linear transformation. If $f(x) = T(x)$ for all $x$ then substituting $T$ itself in the Taylor expression gives the Taylor remainder $R(v) = f(p+v) - f(p) - T(v)$, which is identically zero. Hence $(DT)_p = T$.

Note that when $n = m = 1$, a linear function is of the form $f(x) = ax$, and the previous formula just states that $(ax)' = a$.

(c) Tacitly, we assume that the composite $g \circ f(x) = g(f(x))$ makes sense as $x$ varies in a neighborhood of $p \in U$. The notation $Dg \circ Df$ refers to the composite of linear transformations and is written out as

$$D(g \circ f)_p = (Dg)_q \circ (Df)_p$$

where $q = f(p)$. The Chain Rule states that the derivative of a composite is the composite of the derivatives. Such a beautiful and natural formula must be true. See also Appendix A. Here is a proof.

It is convenient to write the remainder $R(v) = f(p+v) - f(p) - T(v)$ in a different form, defining the scalar function $\mathfrak{e}(v)$ by

$$\mathfrak{e}(v) = \begin{cases} \frac{|R(v)|}{|v|} & \text{if } v \neq 0 \\ 0 & \text{if } v = 0. \end{cases}$$

Sublinearity is equivalent to $\lim_{v \to 0} \mathfrak{e}(v) = 0$. Think of $\mathfrak{e}$ as an “error factor.”

The Taylor expressions for $f$ at $p$ and $g$ at $q = f(p)$ are

$$f(p+v) = f(p) + Av + R_f$$
$$g(q+w) = g(q) + Bw + R_g$$

where $A = (Df)_p$ and $B = (Dg)_q$ as matrices. The composite is expressed as

$$g \circ f(p+v) = g(q+Av + R_f(v)) = g(q) + BAv + BR_f(v) + R_g(w)$$

where $w = Av + R_f(v)$. It remains to show that the remainder terms are sublinear with respect to $v$. First

$$|BR_f(v)| \leq \|B\| |R_f(v)|$$