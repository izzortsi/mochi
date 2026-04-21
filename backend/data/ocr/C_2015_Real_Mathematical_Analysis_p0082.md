Usually, sets defined by strict inequalities are open while those defined by equalities or nonstrict inequalities are closed. Examples of closed sets in $\mathbb{R}$ are finite sets, $[a, b]$, $\mathbb{N}$, and the set $\{0\} \cup \{1/n : n \in N\}$. Each contains all its limits. Examples of open sets in $\mathbb{R}$ are open intervals, bounded or not.

**Topological Description of Continuity**

A property of a metric space or of a mapping between metric spaces that can be described solely in terms of open sets (or equivalently, in terms of closed sets) is called a **topological property**. The next result describes continuity topologically.

**Figure 35** The function $f: (x, y) \mapsto x^2 + y^2 + 2$ and its graph over the preimage of $[3, 6]$

Let $f: M \to N$ be given. The **preimage**† of a set $V \subset N$ is

$$f^{\text{pre}}(V) = \{p \in M : f(p) \in V\}.$$

For example, if $f: \mathbb{R}^2 \to \mathbb{R}$ is the function defined by the formula

$$f(x, y) = x^2 + y^2 + 2$$

then the preimage of the interval $[3, 6]$ in $\mathbb{R}$ is the annulus in the plane with inner radius 1 and outer radius 2. Figure 35 shows the domain of $f$ as $\mathbb{R}^2$ and the target

†The preimage of $V$ is also called the **inverse image** of $V$ and is denoted by $f^{-1}(V)$. Unless $f$ is a bijection, this notation leads to confusion. There may be no map $f^{-1}$ and yet expressions like $V \supset f(f^{-1}(V))$ are written that mix maps and nonmaps. By the way, if $f$ sends no point of $M$ into $V$ then $f^{\text{pre}}(V)$ is the empty set.