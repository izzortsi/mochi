There are two “obviously” continuous functions.

3 Proposition For every metric space $M$ the identity map $id : M \to M$ is continuous, and so is every constant function $f : M \to N$.

Proof Let $p_n \to p$ in $M$. Then $id(p_n) = p_n \to p = id(p)$ as $n \to \infty$ which gives continuity of the identity map. Likewise, if $f(x) = q \in N$ for all $x \in M$ and if $p_n \to p$ in $M$ then $fp = q$ and $f(p_n) = q$ for all $n$. Thus $f(p_n) \to fp$ as $n \to \infty$ which gives continuity of the constant function $f$.

Homeomorphism

Vector spaces are isomorphic if there is a linear bijection from one to the other. When are metric spaces isomorphic? They should “look the same.” The letters $\mathcal{Y}$ and $\mathcal{T}$ look the same; and they look different from the letter $\mathcal{O}$. If $f : M \to N$ is a bijection and $f$ is continuous and the inverse bijection $f^{-1} : N \to M$ is also continuous then $f$ is a **homeomorphism**$^\dagger$ (or a “homeo” for short) and $M, N$ are **homeomorphic**. We write $M \cong N$ to indicate that $M$ and $N$ are homeomorphic. $\cong$ is an equivalence relation: $M \cong M$ since the identity map is a homeomorphism $M \to M$; $M \cong N$ clearly implies that $N \cong M$; and the previous theorem shows that the composite of homeomorphisms is a homeomorphism.

Geometrically speaking, a homeomorphism is a bijection that can bend, twist, stretch, and wrinkle the space $M$ to make it coincide with $N$, but it cannot rip,

$^\dagger$This is a rare case in mathematics in which spelling is important. Homeomorphism $\neq$ homomorphism.