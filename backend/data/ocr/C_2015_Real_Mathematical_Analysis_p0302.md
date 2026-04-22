3 Higher Derivatives

In this section we define higher-order multivariable derivatives. We do so in the same spirit as in the previous section – the second derivative will be the derivative of the first derivative, viewed naturally. Assume that $f : U \to \mathbb{R}^m$ is differentiable on $U$. The derivative $(Df)_x$ exists at each $x \in U$ and the map $x \mapsto (Df)_x$ defines a function

$$Df : U \to \mathcal{L}(\mathbb{R}^n, \mathbb{R}^m).$$

The derivative $Df$ is the same sort of thing that $f$ is, namely a function from an open subset of a vector space into another vector space. In the case of $Df$ the target vector space is not $\mathbb{R}^m$ but rather the $mn$-dimensional space $\mathcal{L}$. If $Df$ is differentiable at $p \in U$ then by definition

$$(D(Df))_p = (D^2f)_p = \text{the second derivative of } f \text{ at } p$$

and $f$ is second-differentiable at $p$. The second derivative at $p$ is a linear map from $\mathbb{R}^n$ into $\mathcal{L}$. For each $v \in \mathbb{R}^n$, $(D^2f)_p(v)$ belongs to $\mathcal{L}$ and therefore is a linear transformation $\mathbb{R}^n \to \mathbb{R}^m$ so $(D^2f)_p(v)(w)$ is bilinear and we write it as

$$(D^2f)_p(v, w).$$

(Recall that bilinearity is linearity in each variable separately.)

Third and higher derivatives are defined in the same way. If $f$ is second-differentiable on $U$ then $x \mapsto (D^2f)_x$ defines a map

$$D^2f : U \to \mathcal{L}^2$$

where $\mathcal{L}^2$ is the vector space of bilinear maps $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}^m$. If $D^2f$ is differentiable at $p$ then $f$ is third-differentiable there, and its third derivative is the trilinear map $(D^3f)_p = (D(D^2f))_p$. And so on.

Just as for first derivatives, the relation between the second derivative and the second partial derivatives calls for thought. Express $f : U \to \mathbb{R}^m$ in component form as $f(x) = (f_1(x), \ldots, f_m(x))$ where $x$ varies in $U$.

15 Theorem If $(D^2f)_p$ exists then $(D^2f_k)_p$ exists, the second partials at $p$ exist, and

$$(D^2f_k)_p(e_i, e_j) = \frac{\partial^2 f_k(p)}{\partial x_i \partial x_j}.$$

Conversely, existence of the second partials implies existence of $(D^2f)_p$, provided that the second partials exist at all points $x \in U$ near $p$ and are continuous at $p$.