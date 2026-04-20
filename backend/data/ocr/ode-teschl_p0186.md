Problem 5.30. Show that the derivative of the Wronskian of two solutions $u_j$ of $L_j u_j = \lambda_j u_j$ is given by

$$W'(u_0, u_1) = \left(q_1 - \lambda_1 - q_0 + \lambda_0\right) u_0 u_1 + \left(\frac{1}{p_0} - \frac{1}{p_1}\right) p_0 u_0' p_1 u_1'. \tag{5.111}$$

Problem 5.31. Show that solutions of the Bessel equation (4.59) have the asymptotics

$$u(x) = a \left(\frac{\sin(x + b)}{x^{1/2}} - \frac{(1/4 - \nu^2) \cos(x + b)}{2x^{3/2}} + O(x^{-5/2})\right),$$

$$u'(x) = a \left(\frac{\cos(x + b)}{x^{1/2}} + \frac{(1/4 - \nu^2) \sin(x + b)}{2x^{3/2}} + O(x^{-5/2})\right).$$

(Hint: Show that after the transformation $v(x) = \sqrt{x} u(x)$ the Bessel equation reads (cf. Problem 4.13)

$$-v''(x) + q(x) v(x) = 0, \quad q(x) = -1 - \frac{1/4 - \nu^2}{x^2}.$$

Now use a modified Prüfer transform with $h(x) = \sqrt{-q(x)}$ (set $p(x) = 1$, $r(x) = 0$) and verify

$$\tilde{\theta}'(x) = 1 + \frac{1/4 - \nu^2}{2x^2} + O(x^{-3}), \quad \frac{\tilde{\rho}'(x)}{\tilde{\rho}_v(x)} = O(x^{-3}),$$

as $x \to \infty$.

Problem 5.32. Solve the initial value problem

$$y' = \cos(y)^2 + \frac{1}{3x^2} \sin(y)^2, \quad y(1) = 0,$$

numerically and make a guess what the limit $\lim_{x \to \infty} y(x)$ will be.

Observe that the above equation is the differential equation for the Prüfer angle of a Sturm–Liouville operator which can be explicitly solved. Show that $\lim_{x \to \infty} y(x) = \infty$.

How does your numerical analysis compare to the analytic result?

5.6. Periodic Sturm–Liouville equations

In Section 3.6 we have investigated periodic differential equations and discussed Hill’s equation as a particular example. Of course Hill’s equation is a special case of a Sturm–Liouville equation for which $r(x) = p(x) = 1$. Moreover, it will not come as a surprise that our analysis can be generalized to arbitrary Sturm–Liouville equations in a straightforward manner. In fact, using the results of the previous sections we will be able to say much more about the spectrum of Hill’s equation.