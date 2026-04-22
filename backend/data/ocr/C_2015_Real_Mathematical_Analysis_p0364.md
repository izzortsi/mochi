10* The Brouwer Fixed-Point Theorem

Let $B = B^n$ be the closed unit $n$-ball,

$$B = \{x \in \mathbb{R}^n : |x| \leq 1\}.$$

The following is one of the deep results in topology and analysis:

**52 Brouwer Fixed-Point Theorem** If $F : B \to B$ is continuous then it has a fixed-point, a point $p \in B$ such that $F(p) = p$.

**Proof** The proof is relatively short and depends on Stokes’ Theorem. Note that Brouwer’s Theorem is trivial when $n = 0$, for $B^0$ is a point and is the fixed-point of $F$. Also, if $n = 1$ then, as observed on page 242, the result is a consequence of the Intermediate Value Theorem on $B^1 = [-1, 1]$. For the continuous function $F(x) - x$ is nonnegative at $x = -1$ and nonpositive at $x = +1$, so at some $p \in [-1, 1]$ we have $F(p) - p = 0$; i.e., $F(p) = p$.

The strategy of the proof in higher dimensions is to suppose that there does exist a continuous $F : B \to B$ which fails to have a fixed-point, and from this supposition to derive a contradiction, namely that the volume of $B$ is zero. The first step in the proof is standard.

**Step 1.** The existence of a continuous $F : B \to B$ without a fixed-point implies the existence of a smooth retraction $T$ of a neighborhood $U$ of $B$ to $\partial B$. The map $T$ sends $U$ to $\partial B$ and fixes every point of $\partial B$.

If $F$ has no fixed-point as $x$ varies in $B$, then compactness of $B$ implies there is some $\mu > 0$ such that for all $x \in B$ we have

$$|F(x) - x| > \mu.$$

The Stone-Weierstrass Theorem then produces a multivariable polynomial $\widetilde{F} : \mathbb{R}^n \to \mathbb{R}^n$ that $\mu/2$-approximates $F$ on $B$. The map

$$G(x) = \frac{1}{1 + \mu/2} \widetilde{F}(x)$$

is smooth and sends $B$ into the interior of $B$. It $\mu$-approximates $F$ on $B$, so it too has no fixed-point. The restriction of $G$ to a small neighborhood $U$ of $B$ also sends $U$ into $B$ and has no fixed-point.

Figure 129 shows how to construct the retraction $T$ from the map $G$. Since $G$ is smooth, so is $T$.