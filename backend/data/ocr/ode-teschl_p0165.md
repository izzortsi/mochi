Moreover, by Liouville’s formula (3.91) the modified Wronskian

$$W_x(u,v) = u(x)p(x)v'(x) - p(x)u'(x)v(x)$$

is independent of $x$ if $u(x)$ and $v(x)$ both solve (5.43) with the same $z \in \mathbb{C}$. In particular,

$$\det \Pi(z,x,x_0) = W(c(z,.x_0),s(z,.x_0)) = 1.$$

Moreover, by (3.97) the solution of the inhomogeneous equation

$$- (p(x)y')' + (q(x) - z r(x))y = g(x)r(x)$$

is given by

$$y(x) = y(x_0)c(z,x,x_0) + y'(x_0)s(z,x,x_0) + \int_{x_0}^{x} s(z,x,t)g(t)r(t)dt.$$

Moreover, note that given two linearly independent solutions $u, v$ of (5.43) we have

$$c(z,x,x_0) = \frac{u(x)p(x_0)v'(x_0) - p(x_0)u'(x_0)v(x)}{W(u,v)},$$

$$s(z,x,x_0) = \frac{u(x)v(x_0) - u(x_0)v(x)}{W(u,v)}.$$

(Since both functions are solutions it suffice to check the initial conditions.)

**Problem 5.11.** Given one solution $u(x)$ of (5.43), make a variation of constants ansatz $v(x) = c(x)u(x)$ and show that a second solution is given by

$$v(x) = u(x) \int^x \frac{1}{p(t)u(t)^2} dt.$$

While this formula breaks down at points where $u$ vanishes, Rofe-Beketov’s formula works even at such points:

$$v(x) = u(x) \int^x \frac{(q(t) + p(t)^{-1} - z r(t))(u(t)^2 - (p(t)u'(t))^2}{(u(t)^2 + (p(t)u'(t))^2} dt$$

$$- \frac{p(x)u'(x)}{u(x)^2 + (p(x)u'(x))^2}.$$

**Problem 5.12.** Show that if $u$ is a solution of (5.43), then $w = pu'/u$ satisfies the Riccati equation

$$w' + p(x)^{-1}w^2 = q(x) - z r(x).$$

**Problem 5.13** (Liouville normal form). Show that if $p, r \in C^2[a,b]$, the differential equation (5.43) can be transformed into one with $r = p = 1$ using the diffeomorphism

$$y(x) = \int_a^x \sqrt{\frac{r(t)}{p(t)}} dt,$$