Inner product spaces

An inner product on a vector space $V$ is an operation $\langle , \rangle$ on pairs of vectors in $V$ that satisfies the same conditions that the dot product in Euclidean space does: Namely, bilinearity, symmetry, and positive definiteness. A vector space equipped with an inner product is an inner product space. The discriminant proof of the Cauchy-Schwarz Inequality is valid for any inner product defined on any real vector space, even if the space is infinite-dimensional and the standard coordinate proof would make no sense. For the discriminant proof uses only the inner product properties, and not the particular definition of the dot product in Euclidean space.

$\mathbb{R}^m$ has dimension $m$ because it has a basis $e_1, \ldots, e_m$. Other vector spaces are more general. For example, let $C([a, b], \mathbb{R})$ denote the set of all of continuous real-valued functions defined on the interval $[a, b]$. (See Section 6 or your old calculus book for the definition of continuity.) It is a vector space in a natural way, the sum of continuous functions being continuous and the scalar multiple of a continuous function being continuous. The vector space $C([a, b], \mathbb{R})$, however, has no finite basis. It is infinite-dimensional. Even so, there is a natural inner product,

$$\langle f, g \rangle = \int_a^b f(x)g(x) \, dx.$$

Cauchy-Schwarz applies to this inner product, just as to any inner product, and we infer a general integral inequality valid for any two continuous functions,

$$\int_a^b f(x)g(x) \, dx \leq \sqrt{\int_a^b f(x)^2 \, dx} \sqrt{\int_a^b g(x)^2 \, dx}.$$

It would be challenging to prove such an inequality from scratch, would it not? See also the first paragraph of the next chapter.

A norm on a vector space $V$ is any function $| : V \to \mathbb{R}$ with the three properties of vector length: Namely, if $v, w \in V$ and $\lambda \in \mathbb{R}$ then

$$|v| \geq 0 \text{ and } |v| = 0 \text{ if and only if } v = 0,$$

$$|\lambda v| = |\lambda| |v|,$$

$$|v + w| \leq |v| + |w|.$$

An inner product $\langle , \rangle$ defines a norm as $|v| = \sqrt{\langle v, v \rangle}$, but not all norms come from inner products. The unit sphere $\{v \in V : \langle v, v \rangle = 1\}$ for every inner product is smooth (has no corners) while for the norm

$$|v|_{\max} = \max\{|v_1|, |v_2|\}$$