29. A function $f : M \to \mathbb{R}$ is **upper semicontinuous** if

$$\lim_{k \to \infty} x_k = x \Rightarrow \limsup_{k \to \infty} f(x_k) \leq f(x).$$

(M can be any metric space.) Equivalently, $\limsup_{y \to x} fy \leq fx$.

(a) Draw a graph of an upper semicontinuous function that is not continuous.

(b) Show that upper semicontinuity is equivalent to the requirement that for every open ray $(-\infty, a)$, the preimage $f^{\text{pre}}(-\infty, a)$ is an open set.

(c) Lower semicontinuity is defined similarly. Work backward from the fact that the negative of a lower semicontinuous function is upper semicontinuous to give the definition in terms of lim infs.

30. Given a compact set $K \subset \mathbb{R} \times [0, \infty)$ define

$$g(x) = \begin{cases} \max\{y : (x, y) \in K \text{ if } K \cap (x \times \mathbb{R}) \neq \emptyset \\ 0 \text{ otherwise.} \end{cases}$$

Prove that $g$ is upper semicontinuous.

31. Prove that a measurable function $f$ is sandwiched as $u \leq f \leq v$, where $u$ is upper semicontinuous, $v$ is lower semicontinuous, and $v - u$ has small integral.

[Hint: Exercise 30 and regularity.]

32. Prove Proposition 38.

33. Suppose that $f_k : [a, b] \to \mathbb{R}^n$ converges almost everywhere to $f$ as $k \to \infty$.

(a) Verify that the Dominated Convergence Theorem fails if there is no integrable dominating function $g$.

(b) Verify that the inequality in Fatou’s Lemma can be strict.

34. If $f_n : \mathbb{R} \to [0, \infty)$ is a sequence of integrable functions, $f_n \downarrow f$ a.e. as $n \to \infty$, and $\int f_n \downarrow 0$. Prove that $f = 0$ almost everywhere.

35. Find a sequence of integrable functions $f_k : [a, b] \to [0, 1]$ such that $\int_a^b f_k \to 0$ as $k \to \infty$ but it is not true that $f_k(x)$ converges to 0 a.e.

36. Show that the converse to the Dominated Convergence Theorem fails in the following sense: There exists a sequence of functions $f_k : [a, b] \to [0, \infty)$ such that $f_k \to 0$ almost everywhere and $\int_a^b f_k \to 0$ as $k \to \infty$, but there is no integrable dominator $g$. [Hint: Stare at the graph of $f(x) = 1/x$.]

37. Suppose that a sequence of integrable functions $f_k$ converges almost everywhere to $f$ as $k \to \infty$ and $f_k$ takes on both positive and negative values. If there exists an integrable function $g$ such that for almost every $x$ we have $|f_k(x)| \leq g(x)$, prove that $\int f_k \to \int f$ as $k \to \infty$.

38. If $f$ and $g$ are integrable prove that their maximum and minimum are integrable.

39. Suppose that $f$ and $g$ are measurable and their squares are integrable. Prove