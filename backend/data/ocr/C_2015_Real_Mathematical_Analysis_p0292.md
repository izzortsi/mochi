Figure 106 The minimum distance from $T(S^{n-1})$ to the origin is $\geq c$.

Geometrically speaking, the inequality $|Tv| \geq c|v|$ means that $T$ shrinks each vector in $\mathbb{R}^n$ by a factor no smaller than $c$, so it follows that $T^{-1}$ expands each vector in $W$ by a factor no greater than $1/c$. The largest $c$ with the property $|Tv| \geq c|v|$ for all $v$ is the **conorm** of $T$. See Figure 106 and Exercise 4.

4 Corollary In the world of finite-dimensional normed spaces, all linear transformations are continuous and all isomorphisms are homeomorphisms. In particular, if a finite-dimensional vector space is equipped with two different norms then the identity map is a homeomorphism between the two normed spaces. In particular $\mathscr{T} : \mathbb{M} \to \mathbb{L}$ is a homeomorphism.

Proof Let $V$ be an $n$-dimensional normed space and let $T : V \to W$ be a linear transformation. As you know from linear algebra, there is an isomorphism $H : \mathbb{R}^n \to V$. Theorem 3 implies that $H$ is a homeomorphism. Therefore $H^{-1}$ is a homeomorphism. Since $T \circ H$ is a linear transformation from $\mathbb{R}^n$ to $W$ it is continuous. Thus

$$T = (T \circ H) \circ H^{-1}$$

is the composition of continuous maps so it is continuous.

Suppose that $T : V \to W$ is an isomorphism and $V$ is finite-dimensional. Then $W$ is finite-dimensional and $T^{-1} : W \to V$ is a linear transformation. Since every linear transformation from a finite-dimensional normed space to a normed space is continuous, $T$ and $T^{-1}$ are both continuous, so $T$ is a homeomorphism.