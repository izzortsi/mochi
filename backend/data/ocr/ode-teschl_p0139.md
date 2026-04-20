Problem 4.13. Many differential equations occur in practice that are not of the standard form (4.59). Show that the differential equation

$$w'' + \frac{1 - 2a}{z} w' + \left( bcz^{c-1} \right)^2 + \frac{a^2 - \nu^2 c^2}{z^2} w = 0.$$

can be transformed to the Bessel equation via $w(z) = z^a u(bz^c)$.

Find the solution of

- $w' + w^2 = z,$
- $w' = w^2 - z^2$

in terms of Bessel functions. (Hint: Problem 3.38.)

Problem 4.14 (Legendre polynomials). The Legendre equation is given by

$$(1 - z^2)w'' - 2zw' + n(n+1)w = 0.$$

Make a power series ansatz at $z = 0$ and show that there is a polynomial solution $p_n(z)$ if $n \in \mathbb{N}_0$. What is the order of $p_n(z)$?

Problem 4.15 (Hypergeometric equation). The hypergeometric equation is given by

$$z(1 - z)w'' + (c - (1 + a + b)z)w' - abw = 0.$$

Classify all singular points (including $\infty$). Use the Frobenius method to show that

$$F(a, b, c; z) = \sum_{j=0}^{\infty} \frac{(a)_j(b)_j}{(c)_j j!} z^j, \quad -c \notin \mathbb{N}_0,$$

is a solution. This is the hypergeometric function. Show that $z^{1-c}w(z)$ is again a solution of the hypergeometric equation but with different coefficients. Use this to prove that $z^{1-c}F(a - c + 1, b - c + 1, 2 - c; z)$ is a second solution for $c - 2 \notin \mathbb{N}_0$. This gives two linearly independent solutions if $c \notin \mathbb{Z}$.

Problem 4.16 (Confluent hypergeometric equation). The confluent hypergeometric equation is given by

$$zw'' + (c - z)w' - aw = 0.$$

Classify all singular points (including $\infty$). Use the Frobenius method to show that

$$K(a, c; z) = \sum_{j=0}^{\infty} \frac{(a)_j}{(c)_j j!} z^j, \quad -c \notin \mathbb{N}_0,$$

is a solution. This is the confluent hypergeometric or Kummer function.

Show that $z^{1-c}w(z)$ is again a solution of the confluent hypergeometric equation but with different coefficients. Use this prove that $z^{1-c}K(a - c +