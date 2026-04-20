Then the idea was to look at the fate of an initial point after one period, that is we start at some initial point $y$ and ask when it hits the plane $\Sigma = \{y|y_1 = 1\}$. This intersection was precisely our Poincaré map

$$P(y) = \Phi(1, y)$$

up to the fact that we dropped the first component $P_1(y) = \Phi_1(1, y) = y_1 + 1$ which carries no useful information and fixed $y_1 = 0$.

Our present goal is to generalize this concept for later use. To this end, recall that a set $\Sigma \subset \mathbb{R}^n$ is called a **submanifold** of codimension one (i.e., its dimension is $n - 1$), if it can be written as

$$\Sigma = \{x \in U | S(x) = 0\},$$

(6.23)

where $U \subset \mathbb{R}^n$ is open, $S \in C^k(U)$, and $\partial S / \partial x \neq 0$ for all $x \in \Sigma$. The submanifold $\Sigma$ is said to be transversal to the vector field $f$ if $(\partial S / \partial x)f(x) \neq 0$ for all $x \in \Sigma$.

**Lemma 6.9.** Suppose $x \in M$ and $T \in I_x$. Let $\Sigma$ be a submanifold of codimension one transversal to $f$ such that $\Phi(T, x) \in \Sigma$. Then there exists a neighborhood $U$ of $x$ and $\tau \in C^k(U)$ such that $\tau(x) = T$ and

$$\Phi(\tau(y), y) \in \Sigma$$

(6.24)

for all $y \in U$.

**Proof.** Consider the equation $S(\Phi(t, y)) = 0$ which holds for $(T, x)$. Since

$$\frac{\partial}{\partial t} S(\Phi(t, y)) = \frac{\partial S}{\partial x} (\Phi(t, y)) f(\Phi(t, y)) \neq 0$$

for $(t, y)$ in a neighborhood $I \times U$ of $(T, x)$ by transversality. So by the implicit function theorem (maybe after restricting $U$), there exists a function $\tau \in C^k(U)$ such that for all $y \in U$ we have $S(\Phi(\tau(y), y)) = 0$, that is,

$$\Phi(\tau(y), y) \in \Sigma.$$

If $x$ is periodic and $T = T(x)$ is its period, then

$$P_{\Sigma}(y) = \Phi(\tau(y), y)$$

(6.25)

is called **Poincaré map**. It maps $\Sigma$ into itself and every fixed point corresponds to a periodic orbit. It will turn out to be an important tool in the investigation of periodic orbits.