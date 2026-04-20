By (iii) this part cannot tend to 0.

Finally,

$$\Delta_3(y_0) = -\int_{t_2}^{T} x(t)f(x(t))dt = \int_0^{\beta} \frac{-xf(x)}{f(x) - y(x)}dx$$

(7.31)

also decreases, with a similar argument as for $\Delta_1$.

Moreover, I claim that $\Delta(y_0)$ eventually becomes negative. If $y(t_2) \to -\infty$ then $\Delta_3(y_0) \to 0$ as in the case of $\Delta_1$ and the claim holds. Otherwise, if $y(t_2) \to y_2 < 0$, then every orbit passing through $(\beta, y)$ with $y \leq y_2$ must stay below $f$ for all negative times by Lemma 7.7. Consequently we must have $f(x) \to \infty$ (since it must stay above any such solution). But then $\Delta_2(y_0) \to -\infty$ (show this) and the claim again holds.

If in addition (iv) holds, it is no restriction to assume $\alpha = \beta$ and we have that $\Delta(y_0)$ is monotone decreasing for $y_0 > r$. Since we must also have $\alpha > r$, there is precisely one zero in this case. This proves

**Theorem 7.8.** Suppose $f$ satisfies the requirements (i)–(iii). Then Liénard’s equation (7.26) has at least one periodic orbit encircling $(0, 0)$.

If in addition (iv) holds, this periodic orbit is unique and every trajectory (except $(0, 0)$) converges to this orbit as $t \to \infty$.

**Proof.** It remains to show that all orbits except $(0, 0)$ converge to the unique periodic orbit determined by $\bar{y} = -P(\bar{y})$. Since any initial condition reaches $L_+$ by Lemma 7.7, we can restrict our attention to orbits starting on $L_+$. By symmetry a solution starting at $(0, -y) \in L_-$ will hit $L_+$ at $-P(y)$ and we thus set $P(y) = -P(-y)$ for $y < 0$. Fix $y_0 > 0$ and consider the sequence of points $y_n = P^n(y_0)$ (i.e., $(0, y_{2m+1})$ is the sequence of intersections with $L_-$ and $(0, y_{2m})$ is the sequence of intersections with $L_+$). Since $\Delta(y)$ is positive for $y < \bar{y}$ and negative for $\bar{y} < y$ the sequence $(-1)^n y_n$ is strictly decreasing for $y_0 > \bar{y}$ and strictly increasing for $y_0 < \bar{y}$ and hence converges to the only fixed point $\bar{y}$. By continuity of the flow the points on the orbit between $y_n$ and $y_{n+1}$ must also converge to $\gamma(\bar{y})$.

The classical application is **van der Pol’s equation**

$$\ddot{x} - \mu(1 - x^2)\dot{x} + x = 0, \quad \mu > 0,$$

(7.32)

which models a triode circuit. By Problem 7.7 it is equivalent to Liénard’s equation with $f(x) = \mu\left(\frac{x^3}{3} - x\right)$. All requirements of Theorem 7.8 are satisfied and hence van der Pol’s equation has a unique periodic orbit and all trajectories converge to this orbit as $t \to \infty$.

The phase portrait for $\mu = 1$ is shown in Figure 7.6.

It is also interesting to consider the family of Liénard’s equations with $f_\mu(x) = x^3 - \mu x$. For $\mu \leq 0$ it has a stable fixed point at $(0, 0)$ which is