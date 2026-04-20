Use a variation of constants ansatz for the inhomogeneous equation and show that the solution is given by

$$x(n) = x_h(n) + \begin{cases} 
x_h(n) \sum_{j=0}^{n-1} \frac{g(j)}{x_h(j+1)}, & n > 0, \\
0, & n = 0, \\
-x_h(n) \sum_{j=n}^{-1} \frac{g(j)}{x_h(j+1)}, & n < 0.
\end{cases}$$

**Problem 4.10** (Hankel functions). Prove that the Hankel function is a second linearly independent solution for all $\nu$ as follows:

(i) Use (4.79) to prove that the Hankel function is well defined for all $\nu$ and analytic in both variables $z$ and $\nu$ (for $z \in \mathbb{C} \setminus (-\infty, 0]$ and $\text{Re}(\nu) > 0$).

(ii) Show that the modified Wronskian

$$W(u(z), v(z)) = z(u(z)v'(z) - u'(z)v(z))$$

of two solutions of the Bessel equation is constant (Hint: Liouville’s formula). Prove

$$W(J_\nu(z), J_{-\nu}(z)) = \frac{-2}{\Gamma(\nu)\Gamma(1-\nu)} = -\frac{2}{\pi} \sin(\pi\nu).$$

(Hint: Use constancy of the Wronskian and evaluate it at $z = 0$. You don’t need to prove the second equality which is just Euler’s reflection formula for the Gamma function.)

(iii) Now show

$$W(J_\nu(z), Y_\nu(z)) = \frac{2}{\pi}.$$

Differentiate this formula with respect to $z$ and show that $Y_\nu(z)$ satisfies the Bessel equation.

**Problem 4.11.** Prove the following properties of the Bessel functions.

(i) $(z^{\pm\nu}J_\nu(z))' = \pm z^{\pm\nu}J_{\nu-1}(z).$

(ii) $J_{\nu+1}(z) + J_{\nu-1}(z) = \frac{2\nu}{z}J_\nu(z).$

(iii) $J_{\nu+1}(z) - J_{\nu-1}(z) = 2J_\nu'(z).$

**Problem 4.12.** Show

$$\int_0^a J_\nu(z)^2 z \, dz = \frac{a^2}{2}J_\nu'(a)^2 + \frac{a^2 - \nu^2}{2}J_\nu(a)^2, \quad \nu \geq 0.$$

(Hint: Multiply Bessel’s equation by $u'(z)$ and show that the result is a complete differential up to one term.)