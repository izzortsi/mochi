the Lagrange identity

$$\int_{c}^{d} g(Lf) rdx = W_{c}(g,f) - W_{d}(g,f) + \int_{c}^{d} (Lg)f rdx$$ (5.56)

for $f, g \in C^{2}([a,b], \mathbb{C})$ and $a \leq c < d \leq b$. Specializing to the case $(c,d) = (a,b)$ and replacing $g$ by $g^{*}$,

$$\langle g, Lf \rangle = W_{a}(g^{*}, f) - W_{b}(g^{*}, f) + \langle Lg, f \rangle,$$ (5.57)

this is almost what we want except for the extra boundary terms and here is where the boundary conditions come into play: If $f$ and $g$ satisfy the same boundary conditions the above two Wronskians vanish (Problem 5.19) and hence

$$\langle g, Lf \rangle = \langle Lg, f \rangle, \quad f, g \in \mathfrak{D}(L),$$ (5.58)

which shows that $L$ is symmetric.

Of course we want to apply Theorem 5.6 next and for this we would need to show that $L$ is compact. Unfortunately, it turns out that $L$ is not even bounded (Problem 5.16) and it looks like we are out of luck. However, there is one last chance: the inverse of $L$ might be compact so that we can apply Theorem 5.6 to it.

Since $L$ might not be injective (0 might be an eigenvalue), we will consider $L - z$ for some fixed $z \in \mathbb{C}$. To compute the inverse of $L - z$ we need to solve the inhomogeneous equation $(L - z)f = g$ which can be done by virtue of (5.50). Moreover, in addition to the fact that $f$ is a solution of the differential equation $(L - z)f = g$ it must also be in the domain of $L$, that is, it must satisfy the boundary conditions. Hence we must choose the unknown constants in (5.50) such that the boundary conditions are satisfied. To this end we will choose two solutions $u_{b}$ and $u_{a}$ of the homogeneous equation, which will be adapted to our boundary conditions, and use (5.51). In this case (5.50) can be written as

$$f(x) = \frac{u_{b}(z,x)}{W(z)} \left( c_{1} + \int_{a}^{x} u_{a}(z,t)g(t)r(t)dt \right) + \frac{u_{a}(z,x)}{W(z)} \left( c_{2} + \int_{x}^{b} u_{b}(z,t)g(t)r(t)dt \right),$$ (5.59)

implying

$$f'(x) = \frac{u'_{b}(z,x)}{W(z)} \left( c_{1} + \int_{a}^{x} u_{a}(z,t)g(t)r(t)dt \right) + \frac{u'_{a}(z,x)}{W(z)} \left( c_{2} + \int_{x}^{b} u_{b}(z,t)g(t)r(t)dt \right).$$ (5.60)

Here we have abbreviated

$$W(z) = W(u_{b}(z), u_{a}(z))$$ (5.61)