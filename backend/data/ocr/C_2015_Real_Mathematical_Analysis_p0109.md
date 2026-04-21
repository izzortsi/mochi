Also, boundedness has little connection to the existence of a boundary – a clopen subset of a metric space has empty boundary, but some clopen sets are bounded, others not.

Exercise 39 asks you to show that every convergent sequence is bounded, and to decide whether it is also true that every Cauchy sequence is bounded, even when the metric space is not complete.

Boundedness is not a topological property. For example, $(-1, 1)$ and $\mathbb{R}$ are homeomorphic although $(-1, 1)$ is bounded and $\mathbb{R}$ is unbounded. The same example shows that completeness is not a topological property.

A function from $M$ to another metric space $N$ is a **bounded function** if its range is a bounded subset of $N$. That is, there exist $q \in N$ and $r > 0$ such that

$$fM \subset N_rq.$$

Note that a function can be bounded even though its graph is not. For example, $x \mapsto \sin x$ is a bounded function $\mathbb{R} \to \mathbb{R}$ although its graph, $\{(x, y) \in \mathbb{R}^2 : y = \sin x\}$, is an unbounded subset of $\mathbb{R}^2$.

7 Coverings

For the sake of simplicity we have postponed discussing compactness in terms of open coverings until this point. Typically, students find coverings a challenging concept. It is central, however, to much of analysis – for example, measure theory.

**Definition** A collection $\mathcal{U}$ of subsets of $M$ covers $A \subset M$ if $A$ is contained in the union of the sets belonging to $\mathcal{U}$. The collection $\mathcal{U}$ is a **covering** of $A$. If $\mathcal{U}$ and $\mathcal{V}$ both cover $A$ and if $\mathcal{V} \subset \mathcal{U}$ in the sense that each set $V \in \mathcal{V}$ belongs also to $\mathcal{U}$ then we say that $\mathcal{U}$ **reduces to** $\mathcal{V}$, and that $\mathcal{V}$ is a **subcovering** of $A$.

**Definition** If all the sets in a covering $\mathcal{U}$ of $A$ are open then $\mathcal{U}$ is an **open covering** of $A$. If every open covering of $A$ reduces to a finite subcovering of $A$ then we say that $A$ is **covering compact**†.

The idea is that if $A$ is covering compact and $\mathcal{U}$ is an open covering of $A$ then just a finite number of the open sets are actually doing the work of covering $A$. The rest are redundant.

†You will frequently find it said that an open covering of $A$ has a finite subcovering. “Has” means “reduces to.”