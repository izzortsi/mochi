is sublinear. Second,

$$|w| = |Av + R_f(v)| \leq \|A\| |v| + \mathbf{e}_f(v)|v|.$$

Therefore,

$$|R_g(w)| \leq \mathbf{e}_g(w) |w| \leq \mathbf{e}_g(w)(\|A\| + \mathbf{e}_f(v)) |v|.$$

Since $\mathbf{e}_g(w) \to 0$ as $w \to 0$ and since $v \to 0$ implies that $w$ does tend to 0, we see that $R_g(w)$ is sublinear with respect to $v$. It follows that $(D(g \circ f))_p = BA$ as claimed.

(d) To prove the Leibniz Product Rule, we must explain the notation $v \bullet w$. In $\mathbb{R}$ there is only one product, the usual multiplication of real numbers. In higher-dimensional vector spaces, however, there are many products and the general way to discuss products is in terms of bilinear maps.

A map $\beta : V \times W \to Z$ is **bilinear** if $V, W, Z$ are vector spaces and for each fixed $v \in V$ the map $\beta(v, .) : W \to Z$ is linear, while for each fixed $w \in W$ the map $\beta(., w) : V \to Z$ is linear. Examples are

(i) Ordinary real multiplication $(x, y) \mapsto xy$ is a bilinear map $\mathbb{R} \times \mathbb{R} \to \mathbb{R}$.

(ii) The dot product is a bilinear map $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$.

(iii) The matrix product is a bilinear map $\mathcal{M}(m \times k) \times \mathcal{M}(k \times n) \to \mathcal{M}(m \times n)$.

The precise statement of (d) is that if $\beta : \mathbb{R}^k \times \mathbb{R}^{\ell} \to \mathbb{R}^m$ is bilinear while $f : U \to \mathbb{R}^k$ and $g : U \to \mathbb{R}^{\ell}$ are differentiable at $p$ then the map $x \mapsto \beta(f(x), g(x))$ is differentiable at $p$ and

$$(D\beta(f, g))_p(v) = \beta((Df)_p(v), g(p)) + \beta(f(p), (Dg)_p(v)).$$

Just as a linear transformation between finite-dimensional vector spaces has a finite operator norm, the same is true for bilinear maps:

$$\|\beta\| = \sup \left\{ \frac{|\beta(v, w)|}{|v| |w|} : v, w \neq 0 \right\} < \infty.$$

To check this we view $\beta$ as a linear map $T_\beta : \mathbb{R}^k \to \mathcal{L}(\mathbb{R}^{\ell}, \mathbb{R}^m)$. According to Theorems 2 and 3, a linear transformation from one finite dimensional normed space to another is continuous and has finite operator norm. Thus the operator norm $T_\beta$ is finite. That is,

$$\|T_\beta\| = \max \left\{ \frac{\|T_\beta(v)\|}{|v|} : v \neq 0 \right\} < \infty.$$

But $\|T_\beta(v)\| = \max \left\{ |\beta(v, w)| / |w| : w \neq 0 \right\}$, which implies that $\|\beta\| < \infty$.