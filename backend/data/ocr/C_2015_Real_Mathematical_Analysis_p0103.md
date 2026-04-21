6 Other Metric Space Concepts

Here are a few standard metric space topics related to what appears above. If $S \subset M$ then its **closure** is the smallest closed subset of $M$ that contains $S$, its **interior** is the largest open subset of $M$ contained in $S$, and its **boundary** is the difference between its closure and its interior. Their notations are

$$\overline{S} = \text{cl} S = \text{closure of } S \quad \text{int} S = \text{interior of } S \quad \partial S = \text{boundary of } S.$$

To avoid inheritance ambiguity it would be better (but too cumbersome) to write $\text{cl}_M S$, $\text{int}_M S$, and $\partial_M S$ to indicate the ambient space $M$. In Exercise 95 you are asked to check various simple facts about them, such as $\overline{S} = \lim S = \text{the intersection of all closed sets that contain } S.$

**Clustering and Condensing**

Two concepts similar to limits are clustering and condensing. The set $S$ “clusters” at $p$ (and $p$ is a **cluster point**† of $S$) if each $M_r p$ contains infinitely many points of $S$. The set $S$ **condenses** at $p$ (and $p$ is a **condensation point** of $S$) if each $M_r p$ contains uncountably many points of $S$. Thus, $S$ limits at $p$, clusters at $p$, or condenses at $p$ according to whether each $M_r p$ contains some, infinitely many, or uncountably many points of $S$. See Figure 44.

**Figure 44** Limiting, clustering, and condensing behavior

†Cluster points are also called **accumulation points**. As mentioned above, they are also sometimes called limit points, a usage that conflicts with the limit idea. A finite set $S$ has no cluster points, but of course, each of its points $p$ is a limit of $S$ since the constant sequence $(p, p, p, \ldots)$ converges to $p$.