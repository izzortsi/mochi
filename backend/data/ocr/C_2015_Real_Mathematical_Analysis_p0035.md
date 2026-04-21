and any $c \in \mathbb{R}$ we have

$$\langle x, y + cz \rangle = \langle x, y \rangle + c \langle x, z \rangle$$
$$\langle x, y \rangle = \langle y, x \rangle$$
$$\langle x, x \rangle \geq 0 \text{ and } \langle x, x \rangle = 0 \text{ if and only if } x \text{ is the zero vector.}$$

The length or magnitude of a vector $x \in \mathbb{R}^m$ is defined to be

$$|x| = \sqrt{\langle x, x \rangle} = \sqrt{x_1^2 + \ldots + x_m^2}.$$

See Exercise 16 which legalizes taking roots. Expressed in coordinate-free language, the basic fact about the dot product is the

9 Cauchy-Schwarz Inequality For all $x, y \in \mathbb{R}^m$ we have $\langle x, y \rangle \leq |x||y|$.

Proof Tricky! For any vectors $x, y$ consider the new vector $w = x + ty$, where $t \in \mathbb{R}$ is a varying scalar. Then

$$Q(t) = \langle w, w \rangle = \langle x + ty, x + ty \rangle$$

is a real-valued function of $t$. In fact, $Q(t) \geq 0$ since the dot product of any vector with itself is nonnegative. The bilinearity properties of the dot product imply that

$$Q(t) = \langle x, x \rangle + 2t\langle x, y \rangle + t^2\langle y, y \rangle = c + bt + at^2$$

is a quadratic function of $t$. Nonnegative quadratic functions of $t \in \mathbb{R}$ have nonpositive discriminants, $b^2 - 4ac \leq 0$. For if $b^2 - 4ac > 0$ then $Q(t)$ has two real roots, between which $Q(t)$ is negative. See Figure 6.

Figure 6 Quadratic graphs