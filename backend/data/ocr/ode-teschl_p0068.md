this yields

$$\|x_h - K^m(x_h)\| \leq \sum_{j=0}^{m-1} \|K^j(x_h) - K^{j+1}(x_h)\|$$

$$\leq \|x_h - K(x_h)\| \sum_{j=0}^{m-1} \frac{(LT_0)^j}{j!},$$

(2.77)

using the same notation as in the proof of Theorem 2.2. Taking $n \to \infty$ we finally obtain

$$\|x_h - \phi\| \leq T_0 e^{LT_0} \Delta(h), \quad t \in [t_0, t_0 + T_0],$$

(2.78)

since our above estimate (2.75) for $t = t_0 + T_0$ reads

$$\|x_h - K(x_h)\| \leq T_0 \Delta(h).$$

(2.79)

Note that if we can find some Lipschitz constant $L_0$ such that $|f(t, x) - f(s, x)| \leq L_0 |t - s|$, then we can choose $\Delta(h) = (L_0 + LM)h$.

Thus we have a simple numerical method for computing solutions plus an error estimate. However, in practical computations one usually uses some heuristic error estimates, e.g., by performing each step using two step sizes $h$ and $\frac{h}{2}$. If the difference between the two results becomes too big, the step size is reduced and the last step is repeated.

Of course the Euler algorithm is not the most effective one available today. Usually one takes more terms in the Taylor expansion and approximates all differentials by their difference quotients. The resulting algorithm will converge faster, but it will also involve more calculations in each step. A good compromise is usually a method, where one approximates $\phi(t_0 + h)$ up to the fourth order in $h$. Setting $t_m = t_0 + hm$ and $x_m = x_h(t_m)$ the resulting algorithm

$$x_{m+1} = x_m + \frac{h}{6} (k_{1,m} + 2k_{2,m} + 2k_{3,m} + k_{4,m}),$$

(2.80)

where

$$k_{1,m} = f(t_m, x_m), \quad k_{2,m} = f(t_m + \frac{h}{2}, x_m + \frac{h}{2}k_{1,m}),$$

$$k_{3,m} = f(t_m + \frac{h}{2}, x_m + \frac{h}{2}k_{2,m}), \quad k_{4,m} = f(t_{m+1}, x_m + hk_{3,m}),$$

(2.81)

is called **Runge–Kutta algorithm**. For even better methods see the literature on numerical methods for ordinary differential equations.

**Problem 2.23. Heun’s method (or improved Euler) is given by**

$$x_{m+1} = x_m + \frac{h}{2} \left( f(t_m, x_m) + f(t_{m+1}, y_m) \right), \quad y_m = x_m + f(t_m, x_m)h.$$