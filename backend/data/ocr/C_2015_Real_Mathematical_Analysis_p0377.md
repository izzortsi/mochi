Exercises

1. Let $T : V \to W$ be a linear transformation, and let $p \in V$ be given. Prove that the following are equivalent.
   (a) $T$ is continuous at the origin.
   (b) $T$ is continuous at $p$.
   (c) $T$ is continuous at at least one point of $V$.

2. Let $\mathcal{L}$ be the vector space of continuous linear transformations from a normed space $V$ to a normed space $W$. Show that the operator norm makes $\mathcal{L}$ a normed space.

3. Let $T : V \to W$ be a linear transformation between normed spaces. Show that
   $$\|T\| = \sup\{|Tv| : |v| < 1\}
   = \sup\{|Tv| : |v| \leq 1\}
   = \sup\{|Tv| : |v| = 1\}
   = \inf\{M : v \in V \Rightarrow |Tv| \leq M|v|\}.$$

4. The **conorm** of a linear transformation $T : \mathbb{R}^n \to \mathbb{R}^m$ is
   $$m(T) = \inf \left\{ \frac{|Tv|}{|v|} : v \neq 0 \right\}.$$
   
   It is the **minimum stretch** that $T$ imparts to vectors in $\mathbb{R}^n$. Let $U$ be the unit ball in $\mathbb{R}^n$.
   (a) Show that the norm and conorm of $T$ are the radii of the smallest ball that contains $TU$ and the largest ball contained in $TU$.
   (b) Is the same true in normed spaces?
   (c) If $T$ is an isomorphism, prove that its conorm is positive.
   (d) Is the converse to (c) true?
   (e) If $T : \mathbb{R}^n \to \mathbb{R}^n$ has positive conorm, why is $T$ an isomorphism?
   (f) If the norm and conorm of $T$ are equal, what can you say about $T$?

5. Formulate and prove the fact that function composition is associative. Why can you infer that matrix multiplication is associative?

6. Let $\mathcal{M}_n$ and $\mathcal{L}_n$ be the vector spaces of $n \times n$ matrices and linear transformations $\mathbb{R}^n \to \mathbb{R}^n$.
   (a) Look up the definition of “ring” in your algebra book.
   (b) Show that $\mathcal{M}_n$ and $\mathcal{L}_n$ are rings with respect to matrix multiplication and composition.
   (c) Show that $\mathcal{T} : \mathcal{M}_n \to \mathcal{L}_n$ is a ring isomorphism.

7. Two norms $| \quad |_1$ and $| \quad |_2$ on a vector space are **comparable**† if there are

†From an analyst’s point of view, the choice between comparable norms has little importance. At worst it affects a few constants that turn up in estimates.