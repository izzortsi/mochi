Prelim Problems†

1. Suppose that $f : \mathbb{R}^m \to \mathbb{R}$ satisfies two conditions:
   (i) For each compact set $K$, $f(K)$ is compact.
   (ii) For every nested decreasing sequence of compacts $(K_n)$,

$$f(\bigcap K_n) = \bigcap f(K_n).$$

Prove that $f$ is continuous.

2. Let $X \subset \mathbb{R}^m$ be compact and $f : X \to \mathbb{R}$ be continuous. Given $\epsilon > 0$, show that there is a constant $M$ such that for all $x, y \in X$ we have $|f(x) - f(y)| \leq M|x - y| + \epsilon$.

3. Consider $f : \mathbb{R}^2 \to \mathbb{R}$. Assume that for each fixed $x_0$, $y \mapsto f(x_0, y)$ is continuous and for each fixed $y_0$, $x \mapsto f(x, y_0)$ is continuous. Find such an $f$ that is not continuous.

4. Let $f : \mathbb{R}^2 \to \mathbb{R}$ satisfy the following properties. For each fixed $x_0 \in \mathbb{R}$ the function $y \mapsto f(x_0, y)$ is continuous and for each fixed $y_0 \in \mathbb{R}$ the function $x \mapsto f(x, y_0)$ is continuous. Also assume that if $K$ is any compact subset of $\mathbb{R}^2$ then $f(K)$ is compact. Prove that $f$ is continuous.

5. Let $f(x, y)$ be a continuous real-valued function defined on the unit square $[0, 1] \times [0, 1]$. Prove that

$$g(x) = \max\{f(x, y) : y \in [0, 1]\}$$

is continuous.

6. Let $\{U_k\}$ be a cover of $\mathbb{R}^m$ by open sets. Prove that there is a cover $\{V_k\}$ of $\mathbb{R}^m$ by open sets $V_k$ such that $V_k \subset U_k$ and each compact subset of $\mathbb{R}^m$ is disjoint from all but finitely many of the $V_k$.

7. A function $f : [0, 1] \to \mathbb{R}$ is said to be **upper semicontinuous** if given $x \in [0, 1]$ and $\epsilon > 0$ there exists a $\delta > 0$ such that $|y - x| < \delta$ implies that $f(y) < f(x) + \epsilon$. Prove that an upper semicontinuous function on $[0, 1]$ is bounded above and attains its maximum value at some point $p \in [0, 1]$.

8. Prove that a continuous function $f : \mathbb{R} \to \mathbb{R}$ which sends open sets to open sets must be monotonic.

9. Show that $[0, 1]$ cannot be written as a countably infinite union of disjoint closed subintervals.

10. A **connected component** of a metric space $M$ is a maximal connected subset of $M$. Give an example of $M \subset \mathbb{R}$ having uncountably many connected components. Can such a subset be open? Closed? Does your answer change if $\mathbb{R}^2$ replaces $\mathbb{R}$?

†These are questions taken from the exam given to first-year math graduate students at U.C. Berkeley.