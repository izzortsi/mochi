positive constants $c$ and $C$ such that for all nonzero vectors in $V$ we have

$$c \leq \frac{|v|_1}{|v|_2} \leq C.$$

(a) Prove that comparability is an equivalence relation on norms.

(b) Prove that any two norms on a finite-dimensional vector space are comparable. [Hint: Use Theorem 3.]

(c) Consider the norms

$$|f|_{L^1} = \int_0^1 |f(t)| \, dt \quad \text{and} \quad |f|_{C^0} = \max\{|f(t)| : t \in [0,1]\},$$

defined on the infinite-dimensional vector space $C^0$ of continuous functions $f : [0,1] \to \mathbb{R}$. Show that the norms are not comparable by finding functions $f \in C^0$ whose integral norm is small but whose $C^0$ norm is 1.

*8. Let $| | = | |_{C^0}$ be the supremum norm on $C^0$ as in the previous exercise. Define an integral transformation $T : C^0 \to C^0$ by

$$T : f \mapsto \int_0^x f(t) \, dt.$$

(a) Show that $T$ is linear, continuous, and find its norm.

(b) Let $f_n(t) = \cos(nt)$, $n = 1, 2, \ldots$. What is $T(f_n)$?

(c) Is the set of functions $K = \{f_n : n \in \mathbb{N}\}$ closed? Bounded? Compact?

(d) Is $T(K)$ compact? How about its closure?

9. Give an example of two $2 \times 2$ matrices such that the operator norm of the product is less than the product of the operator norms.

10. In the proof of Theorem 3 we used the fact that with respect to the Euclidean norm, the length of a vector is at least as large as the length of any of its components. Show by example that this is false for some norms in $\mathbb{R}^2$. [Hint: Consider the matrix

$$A = \begin{bmatrix} 3 & -2 \\ -2 & 2 \end{bmatrix}.$$

Use $A$ to define an inner product $\langle v, w \rangle_A = \sum v_i a_{ij} w_j$ on $\mathbb{R}^2$, and use the inner product to define a norm

$$|v|_A = \sqrt{\langle v, v \rangle_A}.$$

(What properties must $A$ have for the sum to define an inner product? Does $A$ have these properties?) With respect to this norm, what are the lengths of $e_1, e_2$, and $v = e_1 + e_2$?]