The set $\mathcal{L} = \mathcal{L}(\mathbb{R}^n, \mathbb{R}^m)$ of linear transformations $T : \mathbb{R}^n \to \mathbb{R}^m$ is also a vector space. You combine linear transformations as functions, $U = T + S$ being defined by $U(v) = T(v) + S(v)$, and $\lambda T$ being defined by $(\lambda T)(v) = \lambda T(v)$. The vectors in $\mathcal{L}$ are linear transformations. The mapping $A \mapsto T_A$ is an isomorphism $\mathcal{T} : \mathcal{M} \to \mathcal{L}$. The matrix $A$ is said to represent the linear transformation $T_A : \mathbb{R}^n \to \mathbb{R}^m$. As a rule of thumb, think with linear transformations and compute with matrices.

Corresponding to composition of linear transformations is the product of matrices. If $A$ is an $m \times k$ matrix and $B$ is a $k \times n$ matrix then the product matrix $P = AB$ is the $m \times n$ matrix whose $(ij)^{\text{th}}$ entry is

$$p_{ij} = a_{i1}b_{1j} + \cdots + a_{ik}b_{kj} = \sum_{r=1}^{k} a_{ir}b_{rj}.$$

1 Theorem $T_A \circ T_B = T_{AB}$.

Proof For each pair of basis vectors $e_r \in \mathbb{R}^k$ and $e_j \in \mathbb{R}^n$ we have

$$T_A(e_r) = \sum_{i=1}^{m} a_{ir}e_i \quad T_B(e_j) = \sum_{r=1}^{k} b_{rj}e_r.$$

Thus for each basis vector $e_j$ we have

$$(T_A \circ T_B)(e_j) = T_A \left( \sum_{r=1}^{k} b_{rj}e_r \right) = \sum_{r=1}^{k} b_{rj} T_A(e_r) = \sum_{r=1}^{k} b_{rj} \sum_{i=1}^{m} a_{ir}e_i$$

$$= \sum_{r=1}^{k} \sum_{i=1}^{m} b_{rj} a_{ir}e_i = \sum_{i=1}^{m} \sum_{r=1}^{k} a_{ir}b_{rj}e_i$$

$$= \sum_{i=1}^{m} p_{ij}e_i = T_{AB}(e_j).$$

Two linear transformations that are equal on a basis are equal.

Theorem 1 expresses the pleasing fact that matrix multiplication corresponds naturally to composition of linear transformations. See also Exercise 6.

As explained in Chapter 1, a norm on a vector space $V$ is a function $| : V \to \mathbb{R}$ that satisfies three properties:

(a) For all $v \in V$ we have $|v| \geq 0$; and $|v| = 0$ if and only if $v = 0$.

(b) $|\lambda v| = |\lambda| |v|$.