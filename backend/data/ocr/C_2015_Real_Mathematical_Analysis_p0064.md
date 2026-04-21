(e) Give a solution to Exercise 37 by justifying the equivalence chain

$$\mathbb{R}^2 = \mathbb{R} \times \mathbb{R} \sim \Sigma_2 \times \Sigma_2 \sim \Sigma_4 \times \Sigma_4 \sim \mathbb{R}.$$

(f) How many decimal expansions terminate in an infinite string of 9’s? How many don’t?

41. If $v$ is a value of a continuous function $f : [a, b] \to \mathbb{R}$ use the Least Upper Bound Property to prove that there are smallest and largest $x \in [a, b]$ such that $f(x) = v$.

42. A function defined on an interval $[a, b]$ or $(a, b)$ is **uniformly continuous** if for each $\epsilon > 0$ there exists a $\delta > 0$ such that $|x - t| < \delta$ implies that $|f(x) - f(t)| < \epsilon$. (Note that this $\delta$ cannot depend on $x$, it can only depend on $\epsilon$. With ordinary continuity, the $\delta$ can depend on both $x$ and $\epsilon$.)

(a) Show that a uniformly continuous function is continuous but continuity does not imply uniform continuity. (For example, prove that $\sin(1/x)$ is continuous on the interval $(0, 1)$ but is not uniformly continuous there. Graph it.)

(b) Is the function $2x$ uniformly continuous on the unbounded interval $(-\infty, \infty)?$

(c) What about $x^2$?

*43. Prove that a continuous function defined on an interval $[a, b]$ is uniformly continuous. [Hint: Let $\epsilon > 0$ be given. Think of $\epsilon$ as fixed and consider the sets

$$A(\delta) = \{u \in [a, b] : \text{if } x, t \in [a, u] \text{ and } |x - t| < \delta$$

then $|f(x) - f(t)| < \epsilon\}$

$$A = \bigcup_{\delta > 0} A(\delta).$$

Using the Least Upper Bound Property, prove that $b \in A$. Infer that $f$ is uniformly continuous. The fact that continuity on $[a, b]$ implies uniform continuity is one of the important, fundamental principles of continuous functions.]

*44. Define injections $f : \mathbb{N} \to \mathbb{N}$ and $g : \mathbb{N} \to \mathbb{N}$ by $f(n) = 2n$ and $g(n) = 2n$. From $f$ and $g$, the Schroeder-Bernstein Theorem produces a bijection $\mathbb{N} \to \mathbb{N}$. What is it?

*45. Let $(a_n)$ be a sequence of real numbers. It is **bounded** if the set $A = \{a_1, a_2, \ldots\}$ is bounded. The **limit supremum**, or lim sup, of a bounded sequence $(a_n)$ as $n \to \infty$ is

$$\limsup_{n \to \infty} a_n = \lim_{n \to \infty} \left( \sup_{k \geq n} a_k \right)$$

(a) Why does the lim sup exist?

(b) If $\sup\{a_n\} = \infty$, how should we define $\limsup_{n \to \infty} a_n$?

(c) If $\lim_{n \to \infty} a_n = -\infty$, how should we define $\limsup_{n \to \infty} a_n$?