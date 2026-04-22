If $T$ is onto then its rank is $m$. If it is one-to-one then its rank is $n$. A standard formula in linear algebra states that

$$\text{rank } T + \text{nullity } T = n$$

where nullity is the dimension of the kernel of $T$. A differentiable function $f : U \to \mathbb{R}^m$ has constant rank $k$ if for all $p \in U$ the rank of $(Df)_p$ is $k$.

An important property of rank is that if $T$ has rank $k$ and $\|S - T\|$ is small then $S$ has rank $\geq k$. The rank of $T$ can increase under a small perturbation of $T$ but it cannot decrease. Thus, if $f$ is $C^1$ and $(Df)_p$ has rank $k$ then automatically $(Df)_x$ has rank $\geq k$ for all $x$ near $p$. See Exercise 43.

The Rank Theorem describes maps of constant rank. It says that locally they are just like linear projections. To formalize this we say that maps $f : A \to B$ and $g : C \to D$ are equivalent (for want of a better word) if there are bijections $\alpha : A \to C$ and $\beta : B \to D$ such that $g = \beta \circ f \circ \alpha^{-1}$. An elegant way to express this equation is a commutative diagram

$$\begin{array}{ccc}
A & f & B \\
\alpha & \downarrow & \beta \\
C & g & D.
\end{array}$$

Commutativity means that for each $a \in A$ we have $\beta(f(a)) = g(\alpha(a))$. Following the maps around the rectangle clockwise from $A$ to $D$ gives the same result as following them around it counterclockwise. The $\alpha, \beta$ are “changes of variable.” If $f, g$ are $C^r$ and $\alpha, \beta$ are $C^r$ diffeomorphisms, $1 \leq r \leq \infty$, then $f$ and $g$ are said to be $C^r$ equivalent, and we write $f \approx_r g$. As $C^r$ maps, $f$ and $g$ are indistinguishable.

24 Lemma $C^r$ equivalence is an equivalence relation and it has no effect on rank.

Proof Since diffeomorphisms form a group, $\approx_r$ is an equivalence relation. Also, if $g = \beta \circ f \circ \alpha^{-1}$ then the chain rule implies

$$Dg = D\beta \circ Df \circ D\alpha^{-1}.$$

Since $D\beta$ and $D\alpha^{-1}$ are isomorphisms, $Df$ and $Dg$ have equal rank.