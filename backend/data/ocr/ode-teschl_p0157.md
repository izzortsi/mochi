where $m > 0$ is the mass of the particles and $k > 0$ is the spring constant. Here $u(t,n)$ is the displacement of the $n$’th particle from its equilibrium position at time $t$. (This is an infinite system of differential equations to which our theory does not apply!) Look for a solution in terms of Bessel functions $c(t,n) = J_{an}(bt)$. (Hint: Problem 4.11.) Show that $s(t,n) = \int_0^t c(s,n)ds$ is a second solution. Can you give the solution corresponding to the initial data $u(0,n) = u(n)$, $\frac{du}{dt}(0,n) = v(n)$ provided $u(n)$ and $v(n)$ decay sufficiently fast?

5.2. Compact symmetric operators

Suppose $\mathfrak{H}$ is a vector space. A map $\langle.,..\rangle : \mathfrak{H} \times \mathfrak{H} \to \mathbb{C}$ is called a sesquilinear form if it is conjugate linear in the first argument and linear in the second; that is,

$$\langle \alpha_1 f_1 + \alpha_2 f_2, g \rangle = \alpha_1^* \langle f_1, g \rangle + \alpha_2^* \langle f_2, g \rangle, \quad \alpha_1, \alpha_2 \in \mathbb{C},$$

(5.19)

where ‘$*$’ denotes complex conjugation. A sesquilinear form satisfying the requirements

(i) $\langle f,f \rangle > 0$ for $f \neq 0$ (positive definiteness),

(ii) $\langle f,g \rangle = \langle g,f \rangle^*$ (symmetry)

is called an inner product or scalar product. Associated with every scalar product is a norm

$$\|f\| = \sqrt{\langle f,f \rangle}.$$

(5.20)

Only the triangle inequality is nontrivial (cf. Section 2.1). It will follow from the Cauchy–Schwarz inequality below. Until then, just regard (5.20) as a convenient short hand notation.

The pair $(\mathfrak{H}_0, \langle.,..\rangle)$ is called inner product space. If $\mathfrak{H}_0$ is complete with respect to the above norm, it is called a Hilbert space. It is usually no restriction to assume that $\mathfrak{H}_0$ is complete since one can easily replace it by its completion $\mathfrak{H}$. However, for our purpose this is not necessary and hence we will not do so here to avoid technical complications later on.

Example. Clearly $\mathbb{C}^n$ with the usual scalar product

$$\langle a,b \rangle = \sum_{j=1}^n a_j^* b_j$$

(5.21)

is a (finite dimensional) Hilbert space.

A vector $f \in \mathfrak{H}_0$ is called normalized or unit vector if $\|f\| = 1$. Two vectors $f,g \in \mathfrak{H}_0$ are called orthogonal or perpendicular ($f \perp g$) if $\langle f,g \rangle = 0$ and parallel if one is a multiple of the other.