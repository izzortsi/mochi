for a Liapunov function. Then a straightforward computation shows

$$\dot{L} = -2\alpha\sigma x^2 + 2(\alpha\sigma + \beta r)xy - 2\beta y^2 - 2\gamma bz^2 + 2(\gamma - \beta)xyz. \tag{8.19}$$

To eliminate the $xyz$ term we choose $\gamma = \beta$. Since no choice of $\alpha, \beta > 0$ will make the $xy$ disappear, we need to absorb it using $2xy = -(x-y)^2 + x^2 + y^2$,

$$\dot{L} = -(\alpha\sigma - \beta r)x^2 - (\alpha\sigma + \beta r)(x-y)^2 - ((2-r)\beta - \alpha\sigma)y^2 - 2\beta bz^2. \tag{8.20}$$

Hence we need to choose $\alpha, \beta > 0$ such that $\alpha\sigma - \beta r \geq 0$ and $(2-r)\beta - \alpha\sigma \geq 0$. For example $\alpha = r$ and $\beta = \sigma$ such that the first term vanishes and the third becomes $2(1-r)\sigma \geq 0$ for $r \leq 1$. In summary, for

$$L(x, y, z) = rx^2 + \sigma y^2 + \sigma z^2 \tag{8.21}$$

we have

$$\dot{L}(x, y, z) = -2\sigma(r(x-y)^2 + (1-r)y^2 + bz^2) \tag{8.22}$$

and the following lemma follows easily from Theorem 6.14 (Problem 8.4).

**Lemma 8.7.** Suppose $r \leq 1$. Then the Lorenz equation has only the origin as fixed point and all solutions converge to the origin as $t \to \infty$.

If $r$ grows above 1, there are two new fixed points

$$(x, y, z) = (\pm \sqrt{b(r-1)}, \pm \sqrt{b(r-1)}, r-1), \tag{8.23}$$

and the linearization is given by

$$\begin{pmatrix}
-\sigma & \sigma & 0 \\
1 & -1 & \mp \sqrt{b(r-1)} \\
\pm \sqrt{b(r-1)} & \pm \sqrt{b(r-1)} & -b
\end{pmatrix}. \tag{8.24}$$

One can again compute the eigenvalues but the result would almost fill one page. Note however that by (8.14) the eigenvalues are the same for both points. From (8.17) we can read off that one eigenvalue is now positive and hence the origin is no longer stable. It can be shown that the two new fixed points are asymptotically stable for $1 < r < 470/19 = 24.74$.

Next, let us try to plot some solutions using Mathematica.

$$\text{In[1]:=} \sigma = 10; r = 28; b = 8/3;$$

$$\text{sol} = \text{NDSolve}[\{x'[t] == -\sigma(x[t] - y[t]),$$

$$y'[t] == -x[t]z[t] + rx[t] - y[t],$$

$$z'[t] == x[t]y[t] - bz[t],$$

$$x[0] == 30, y[0] == 10, z[0] == 40\},$$

$$\{x, y, z\}, \{t, 0, 20\}, \text{MaxSteps} \rightarrow 5000];$$

$$\text{ParametricPlot3D}[\text{Evaluate}[\{x[t], y[t], z[t]\} /. \text{sol}], \{t, 0, 20\},$$

$$\text{PlotPoints} \rightarrow 2000, \text{Axes} \rightarrow \text{False}, \text{PlotRange} \rightarrow \text{All}];$$