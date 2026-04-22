By simply writing down a sawtooth series as above, Weierstrass showed that there exists a nowhere differentiable continuous function. Yet more amazing is the fact that most continuous functions (in a reasonable sense defined below) are nowhere differentiable. If you could pick a continuous function at random, it would be nowhere differentiable.

Recall that the set $D \subset M$ is dense in $M$ if $D$ meets every nonempty open subset $W$ of $M$, $D \cap W \neq \emptyset$. The intersection of two dense sets need not be dense; it can be empty, as is the case with $\mathbb{Q}$ and $\mathbb{Q}^c$ in $\mathbb{R}$. On the other hand if $U, V$ are open-dense sets in $M$ then $U \cap V$ is open-dense in $M$. For if $W$ is any nonempty open subset of $M$ then $U \cap W$ is a nonempty open subset of $M$, and by denseness of $V$, we see that $V$ meets $U \cap W$; i.e., $U \cap V \cap W$ is nonempty and $U \cap V$ meets $W$.

**Moral** Open dense sets do a good job of being dense.

The countable intersection $G = \bigcap G_n$ of open-dense sets is called a **thick** (or $\text{residual}^\dagger$) subset of $M$, due to the following result, which we will apply in the complete metric space $C^0([a, b], \mathbb{R})$. Extending our vocabulary in a natural way we say that the complement of a thick set is **thin** (or **meager**). A subset $H$ of $M$ is thin if and only if it is a countable union of nowhere dense closed sets, $H = \bigcup H_n$. Clearly, thickness and thinness are topological properties. A thin set is the topological analog of a zero set (a set whose outer measure is zero).

**32 Baire’s Theorem** Every thick subset of a complete metric space $M$ is dense in $M$. A nonempty, complete metric space is not thin. That is, if $M$ is the union of countably many closed sets then at least one has nonempty interior.

If all points in a thick subset of $M$ satisfy some condition then the condition is said to be **generic**. We also say that “most” points of $M$ obey the condition. As a consequence of Baire’s theorem and the Weierstrass Approximation Theorem we will prove

**33 Theorem** The generic $f \in C^0 = C^0([a, b], \mathbb{R})$ is differentiable at no point of $[a, b]$, nor does it even have a left or right derivative at any $x \in [a, b]$, nor is it monotone on any subinterval of $[a, b]$.

Using Lebesgue’s monotone differentiation theorem from Chapter 6 (monotonicity implies differentiability almost everywhere), one can see that the second assertion follows from the first, but below we give a direct proof.

† “Residual” is an unfortunate choice of words. It connotes smallness, when it should connote just the opposite.