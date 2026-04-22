Df is the total derivative or Fréchet derivative. In contrast, the $ij^{\text{th}}$ partial derivative of $f$ at $p$ is the limit, if it exists,

$$\frac{\partial f_i(p)}{\partial x_j} = \lim_{t \to 0} \frac{f_i(p + te_j) - f_i(p)}{t}.$$

7 Corollary If the total derivative exists then the partial derivatives exist and they are the entries of the matrix that represents the total derivative.

Proof Substitute in (3) the vector $u = e_j$ and take the $i^{\text{th}}$ component of both sides of the resulting equation.

As is shown in Exercise 15, the mere existence of partial derivatives does not imply differentiability. The simplest sufficient condition beyond the existence of the partials – and the simplest way to recognize differentiability – is given in the next theorem.

8 Theorem If the partial derivatives of $f : U \to \mathbb{R}^m$ exist and are continuous then $f$ is differentiable.

Proof Let $A$ be the matrix of partials at $p$, $A = [\partial f_i(p)/\partial x_j]$, and let $T : \mathbb{R}^n \to \mathbb{R}^m$ be the linear transformation that $A$ represents. We claim that $(Df)_p = T$. We must show that the Taylor remainder

$$R(v) = f(p + v) - f(p) - Av$$

is sublinear. Draw a path $\sigma = [\sigma_1, \ldots, \sigma_n]$ from $p$ to $q = p + v$ that consists of $n$ segments parallel to the components of $v$. Thus $v = \sum v_j e_j$ and

$$\sigma_j(t) = p_{j-1} + tv_j e_j \quad 0 \leq t \leq 1$$

is a segment from $p_{j-1} = p + \sum_{k<j} v_k e_k$ to $p_j = p_{j-1} + v_j e_j$. See Figure 108.

By the one-dimensional chain rule and mean value theorem applied to the differentiable real-valued function $g(t) = f_i \circ \sigma_j(t)$ of one variable, there exists $t_{ij} \in (0, 1)$ such that

$$f_i(p_j) - f_i(p_{j-1}) = g(1) - g(0) = g'(t_{ij}) = \frac{\partial f_i(p_{ij})}{\partial x_j} v_j,$$

where $p_{ij} = \sigma_j(t_{ij})$. Telescoping $f_i(p + v) - f_i(p)$ along $\sigma$ gives

$$R_i(v) = f_i(p + v) - f_i(p) - (Av)_i$$

$$= \sum_{j=1}^{n} \left( f_i(p_j) - f_i(p_{j-1}) - \frac{\partial f_i(p)}{\partial x_j} v_j \right)$$

$$= \sum_{j=1}^{n} \left\{ \frac{\partial f_i(p_{ij})}{\partial x_j} - \frac{\partial f_i(p)}{\partial x_j} \right\} v_j.$$