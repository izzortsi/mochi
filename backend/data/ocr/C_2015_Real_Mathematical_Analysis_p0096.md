as $\ell \to \infty$. The limit of a convergent sequence is unchanged by passing to a subsequence, and so $f(p_{n_k(\ell)}) = q_{n_k(\ell)} \to q$ as $\ell \to \infty$. Thus, $f(p^*) = q = f(p)$, contrary to $f$ being a bijection. It follows that $p_n \to p$ and therefore that $f^{-1}$ is continuous. $\square$

If $M$ is not compact then Theorem 40 becomes false. For example, the function $f : [0, 2\pi) \to \mathbb{R}^2$ defined by $f(x) = (\cos x, \sin x)$ is a continuous bijection onto the unit circle in the plane, but it is not a homeomorphism. This useful example was discussed on page 65. Not only does this $f$ fail to be a homeomorphism, but there is no homeomorphism at all from $[0, 2\pi)$ to $S^1$. The circle is compact while $[0, 2\pi)$ is not. Therefore they are not homeomorphic. See also Exercises 49 and 50.

Embedding a Compact

Not only is a compact space $M$ closed in itself, as is every metric space, but it is also a closed subset of each metric space in which it is embedded. More precisely we say that $h : M \to N$ embeds $M$ into $N$ if $h$ is a homeomorphism from $M$ onto $hM$. (The metric on $hM$ is the one it inherits from $N$.) Topologically $M$ and $hM$ are equivalent. A property of $M$ that holds also for every embedded copy of $M$ is an absolute or intrinsic property of $M$.

41 Theorem A compact is absolutely closed and absolutely bounded.

Proof Obvious from Theorems 26 and 36. $\square$

For example, no matter how the circle is embedded in $\mathbb{R}^3$, its image is always closed and bounded. See also Exercises 48 and 120.

Uniform Continuity and Compactness

In Chapter 1 we defined the concept of uniform continuity for real-valued functions of a real variable. The definition in metric spaces is analogous. A function $f : M \to N$ is uniformly continuous if for each $\epsilon > 0$ there exists a $\delta > 0$ such that

$$p, q \in M \text{ and } d_M(p, q) < \delta \Rightarrow d_N(fp, fq) < \epsilon.$$

42 Theorem Every continuous function defined on a compact is uniformly continuous.

Proof Suppose not, and $f : M \to N$ is continuous, $M$ is compact, but $f$ fails to be uniformly continuous. Then there is some $\epsilon > 0$ such that no matter how small