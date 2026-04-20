u_{0,l-1}$. Then $w_l(z)$ as defined in (4.104) with $m_l = 0$ and

$$u_{l,j} = \left(A_0 - \alpha - j\right)^{-1} \left(u_{l-1,j} - \sum_{k=1}^{j} a_k u_{l,j-k}\right),$$

(4.111)

are linearly independent solutions.

For all other eigenvalues $\tilde{\alpha} = \alpha + m_j$, there are two cases. First try to find solutions for $\tilde{\alpha}$ as in the case before until a sufficient number of solutions has been found or until this is no longer possible (i.e., (4.108) has no nontrivial solution). Next, add further terms in the ansatz (4.104) for $\alpha$ until a sufficient number of solutions has been found. This will produce a full set of linearly independent solutions.

This procedure for finding the general solution near a simple singularity is known as Frobenius method. The eigenvalues of $A_0$ are also called characteristic exponents. Observe that our requirement of the singularity to be simple is indeed crucial, since it ensures that the algebraic system of equations for the coefficients can be solved recursively.

Clearly we can also try to apply this procedure to get a power series around infinity. To this end, one makes the change of coordinates $\zeta = \frac{1}{z}$. Then our system transforms to

$$\omega' = -\frac{1}{\zeta^2} A\left(\frac{1}{\zeta}\right) \omega, \quad w(z) = \omega\left(\frac{1}{z}\right).$$

(4.112)

In particular, $\infty$ is a simple singularity if and only if $A(z)$ has (at least) a first-order zero at $\infty$, that is,

$$A\left(\frac{1}{\zeta}\right) = \zeta \sum_{j=0}^{\infty} A_j \zeta^j.$$

(4.113)

A system is called a Fuchs system if it has only finitely many singularities all of which, including infinity, are simple.

**Lemma 4.14.** Every Fuchs system is of the form

$$A(z) = \sum_{j=1}^{k} \frac{A_j}{z - z_j}.$$

(4.114)

**Proof.** Consider,

$$B(z) = A(z) - \sum_{j=1}^{k} \frac{A_j}{z - z_j},$$

where $A_j = \lim_{z \to z_j}(z - z_j)A(z)$. Then $B(z)$ is analytic on all of $\mathbb{C}$ by construction. Moreover, since $A(z)$ vanishes at $\infty$, so does $B(z)$ und thus $B(z)$ vanishes by Liouville’s theorem (every bounded analytic function is constant).