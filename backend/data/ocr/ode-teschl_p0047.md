Problem 2.3. Show that the space $C(I, \mathbb{R}^n)$ together with the sup norm (2.3) is a Banach space if $I$ is a compact interval. Show that the same is true for $I = [0, \infty)$ and $I = \mathbb{R}$ if one considers the vector space of bounded continuous functions $C_b(I, \mathbb{R}^n)$.

Problem 2.4. Derive Newton’s method for finding the zeros of a twice continuously differentiable function $f(x)$,

$$x_{n+1} = K(x_n), \quad K(x) = x - \frac{f(x)}{f'(x)},$$

from the contraction principle by showing that if $\bar{x}$ is a zero with $f'(\bar{x}) \neq 0$, then there is a corresponding closed interval $C$ around $\bar{x}$ such that the assumptions of Theorem 2.1 are satisfied.

2.2. The basic existence and uniqueness result

Now we want to use the preparations from the previous section to show existence and uniqueness of solutions for the following initial value problem (IVP)

$$\dot{x} = f(t, x), \quad x(t_0) = x_0.$$ (2.10)

We suppose $f \in C(U, \mathbb{R}^n)$, where $U$ is an open subset of $\mathbb{R}^{n+1}$ and $(t_0, x_0) \in U$.

First of all note that integrating both sides with respect to $t$ shows that (2.10) is equivalent to the following integral equation

$$x(t) = x_0 + \int_{t_0}^{t} f(s, x(s)) \, ds.$$ (2.11)

At first sight this does not seem to help much. However, note that $x_0(t) = x_0$ is an approximating solution at least for small $t$. Plugging $x_0(t)$ into our integral equation we get another approximating solution

$$x_1(t) = x_0 + \int_{t_0}^{t} f(s, x_0(s)) \, ds.$$ (2.12)

Iterating this procedure we get a sequence of approximating solutions

$$x_m(t) = K^m(x_0)(t), \quad K(x)(t) = x_0 + \int_{t_0}^{t} f(s, x(s)) \, ds.$$ (2.13)

Now this observation begs us to apply the contraction principle from the previous section to the fixed point equation $x = K(x)$, which is precisely our integral equation (2.11).

We will set $t_0 = 0$ for notational simplicity and consider only the case $t \geq 0$ to avoid excessive numbers of absolute values in the following estimates.

First of all we will need a Banach space. The obvious choice is $X = C([0, T], \mathbb{R}^n)$ for some suitable $T > 0$. Furthermore, we need a closed subset