We claim that

$$\left(D^2 f\right)_p(v, w) = \lim_{t \to 0} \frac{\Delta(t, v, w)}{t^2},$$

from which symmetry of $D^2 f$ follows.

Fix $t, v, w$ and write $\Delta = g(1) - g(0)$ where

$$g(s) = f(p + tv + stw) - f(p + stw).$$

Since $f$ is differentiable, so is $g$. By the one-dimensional Mean Value Theorem there exists $\theta \in (0, 1)$ with $\Delta = g'(\theta)$. By the Chain Rule $g'(\theta)$ can be written in terms of $Df$ and we get

$$\Delta = g'(\theta) = \left(Df\right)_{p+tv+\theta tw}(tw) - \left(Df\right)_{p+\theta tw}(tw).$$

Taylor’s estimate applied to the differentiable function $u \mapsto \left(Df\right)_u$ at $u = p$ gives

$$\left(Df\right)_{p+x} = \left(Df\right)_p + \left(D^2 f\right)_p(x,.) + R(x,.)$$

where $R(x,.) \in \mathcal{L}(\mathbb{R}^n, \mathbb{R}^m)$ is sublinear with respect to $x$. Writing out this estimate for $\left(Df\right)_{p+x}$ first with $x = tv + \theta tw$ and then with $x = \theta tw$ gives

$$\frac{\Delta}{t^2} = \frac{1}{t} \left\{ \left[ \left(Df\right)_p(w) + \left(D^2 f\right)_p(tv + \theta tw, w) + R(tv + \theta tw, w) \right] \right.$$

$$- \left[ \left(Df\right)_p(w) + \left(D^2 f\right)_p(\theta tw, w) + R(\theta tw, w) \right] \right\}$$

$$= \left(D^2 f\right)_p(v, w) + \frac{R(tv + \theta tw, w)}{t} - \frac{R(\theta tw, w)}{t}$$