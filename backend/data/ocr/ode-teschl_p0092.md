and, if $\det(A(t)) \neq 0$,

$$\frac{d}{dt}A(t)^{-1} = -A(t)^{-1}\dot{A}(t)A(t)^{-1}$$

(Problem 3.25). Note that the order is important!

Given vectors $a_1, \ldots, a_n$ we will write $A = (a_1, \ldots, a_n)$ for the matrix which has these vectors as rows. Observe that $BA$ is the matrix whose rows are $Ba_1, \ldots, Ba_n$, that is, $BA = (Ba_1, \ldots, Ba_n)$. Again note that the order is important here.

We now turn to the general linear first-order system

$$\dot{x}(t) = A(t)x(t),$$

where $A \in C(I, \mathbb{R}^{n \times n})$. Clearly our theory from Section 2.2 applies:

**Theorem 3.9.** The linear first-order system (3.79) has a unique solution satisfying the initial condition $x(t_0) = x_0$. Moreover, this solution is defined for all $t \in I$.

**Proof.** This follows directly from Theorem 2.17 (or alternatively from Corollary 2.6) since we can choose $L(T) = \max_{[0,T]} \|A(t)\|$ for every $T \in I$. $\square$

It seems tempting to suspect that the solution is given by the formula $x(t) = \exp(\int_{t_0}^{t} A(s)ds)x_0$. However, as soon as you try to verify this guess, noncommutativity of matrices will get into your way. In fact, this formula only solves our initial value problem if $[A(t), A(s)] = 0$ for all $t, s \in \mathbb{R}$. Hence it is of little use. So we still need to find the right generalization of $\exp((t - t_0)A)$.

We start by observing that linear combinations of solutions are again solutions. Hence the set of all solutions forms a vector space. This is often referred to as **superposition principle**. In particular, the solution corresponding to the initial condition $x(t_0) = x_0$ can be written as

$$\phi(t, t_0, x_0) = \sum_{j=1}^{n} \phi(t, t_0, \delta_j)x_{0,j},$$

where $\delta_j$ are the canonical basis vectors, (i.e., $\delta_{j,k} = 1$ if $j = k$ and $\delta_{j,k} = 0$ if $j \neq k$) and $x_{0,j}$ are the components of $x_0$ (i.e., $x_0 = \sum_{j=1}^{n} \delta_j x_{0,j}$). Using the solutions $\phi(t, t_0, \delta_j)$ as columns of a matrix

$$\Pi(t, t_0) = (\phi(t, t_0, \delta_1), \ldots, \phi(t, t_0, \delta_n)),$$

we see that there is a linear mapping $x_0 \mapsto \phi(t, t_0, x_0)$ given by

$$\phi(t, t_0, x_0) = \Pi(t, t_0)x_0.$$

(3.82)