6* The Skeleton of Calculus

The behavior of a continuous function defined on an interval $[a, b]$ is at the root of all calculus theory. Using solely the Least Upper Bound Property of the real numbers we rigorously derive the basic properties of such functions. The function $f : [a, b] \to \mathbb{R}$ is continuous if for each $\epsilon > 0$ and each $x \in [a, b]$ there is a $\delta > 0$ such that

$$t \in [a, b] \text{ and } |t - x| < \delta \Rightarrow |f(t) - f(x)| < \epsilon.$$

See Figure 19.

Figure 19 The graph of a continuous function of a real variable

Continuous functions are found everywhere in analysis and topology. Theorems 22, 23, and 24 present their simplest properties. Later we generalize these results to functions that are neither real valued nor dependent on a real variable. Although it is possible to give a combined proof of Theorems 22 and 23 I prefer to highlight the Least Upper Bound Property and keep them separate.

22 Theorem The values of a continuous function defined on an interval $[a, b]$ form a bounded subset of $\mathbb{R}$. That is, there exist $m, M \in \mathbb{R}$ such that for all $x \in [a, b]$ we have $m \leq f(x) \leq M$.

Proof For $x \in [a, b]$, let $V_x$ be the value set of $f(t)$ as $t$ varies from $a$ to $x$,

$$V_x = \{y \in \mathbb{R} : \text{for some } t \in [a, x] \text{ we have } y = f(t)\}.$$

Set

$$X = \{x \in [a, b] : V_x \text{ is a bounded subset of } \mathbb{R}\}.$$