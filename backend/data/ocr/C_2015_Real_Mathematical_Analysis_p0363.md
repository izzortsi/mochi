The quotient vector space

$$H^k(U) = Z^k(U)/B^k(U)$$

is the $k^{\text{th}}$ de Rham cohomology group of $U$. Its members are the “cohomology classes” of $U$. As was discussed above, if $U$ is simply connected then $H^1(U) = 0$. Also, $H^2(U) \neq 0$ when $U$ is the three-dimensional spherical shell. If $U$ is starlike then $H^k(U) = 0$ for all $k > 0$, and $H^0(U) = \mathbb{R}$. Cohomology necessarily reflects the global topology of $U$. For locally, closed forms are exact. The relation between the cohomology of $U$ and its topology is the subject of algebraic topology, the basic idea being that the more complicated the set $U$ (think of Swiss cheese), the more complicated is its cohomology, and vice versa. The book *From Calculus to Cohomology* by Madsen and Tomehave provides a beautiful exposition of the subject.

Differential Forms Viewed Pointwise

The preceding part of this section presents differential forms as “abstract integrands” – things which it makes sense to write after an integral sign. But they are not defined as functions that have values point by point. Rather they are special functionals on the space of cells. This is all well and good since it provides a clean path to the main result about forms, the Stokes Formula.

A different path to Stokes involves multilinear functionals. You have already seen bilinear functionals like the dot product. It is a map $\beta : \mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$ with various properties, the first being that for each $v \in \mathbb{R}^n$ the maps

$$w \mapsto \beta(v, w) \quad \text{and} \quad w \mapsto \beta(w, v)$$

are linear. We say $\beta$ is linear in each vector variable separately. A map $\beta : \mathbb{R}^n \times \cdots \times \mathbb{R}^n \to \mathbb{R}$ which is linear in each vector variable separately is a $k$-multilinear functional. (Its domain is the Cartesian product of $k$ copies $\mathbb{R}^n$.) It is alternating if for each permutation $\pi$ of $\{1, \ldots, k\}$ we have

$$\beta(v_1, \ldots, v_k) = \text{sgn}(\pi)\beta(v_{\pi(1)}, \ldots, v_{\pi(k)}).$$

The set of alternating $k$-linear forms is a vector space $\mathcal{A}^k$, and one can view $\omega \in \Omega^k(\mathbb{R}^n)$ at a point $p$ as a member $\omega_p \in \mathcal{A}^k$. It is a certain type of tensor that we integrate over a cell as $p$ varies in the cell; the vectors on which $\omega_p$ is evaluated are tangent to the cell at $p$. You can read about this approach to differential forms in Michael Spivak’s book *Calculus on Manifolds*.