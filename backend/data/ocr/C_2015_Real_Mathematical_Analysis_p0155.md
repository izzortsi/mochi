145. One of the famous theorems in plane topology is the **Jordan Curve Theorem**. A Jordan curve $J$ is a homeomorph of the unit circle in the plane. (Equivalently it is $f([a, b])$ where $f : [a, b] \to \mathbb{R}^2$ is continuous, $f(a) = f(b)$, and for no other pair of distinct $s, t \in [a, b]$ does $f(s) = f(t)$. It is also called a **simple closed curve.** The Jordan Curve Theorem asserts that $\mathbb{R}^2 \setminus J$ consists of two disjoint, connected open sets, its inside and its outside, and every path between them must meet $J$. Prove the Jordan Curve Theorem for the circle, the square, the triangle, and – if you have courage – every simple closed polygon.

146. The **utility problem** gives three houses 1, 2, 3 in the plane and the three utilities, Gas, Water, and Electricity. You are supposed to connect each house to the three utilities without crossing utility lines. (The houses and utilities are disjoint.)

(a) Use the Jordan curve theorem to show that there is no solution to the utility problem in the plane.

*(b) Show also that the utility problem cannot be solved on the 2-sphere $S^2$.

*(c) Show that the utility problem can be solved on the surface of the torus.

*(d) What about the surface of the Klein bottle?

***(e) Given utilities $U_1, \ldots, U_m$ and houses $H_1, \ldots, H_n$ located on a surface with $g$ handles, find necessary and sufficient conditions on $m, n, g$ so that the utility problem can be solved.

147. Let $M$ be a metric space and let $\mathcal{K}$ denote the class of nonempty compact subsets of $M$. The $r$-neighborhood of $A \in \mathcal{K}$ is

$$M_r A = \{x \in M : \exists a \in A \text{ and } d(x, a) < r\} = \bigcup_{a \in A} M_r a.$$

For $A, B \in \mathcal{K}$ define

$$D(A, B) = \inf \{r > 0 : A \subset M_r B \text{ and } B \subset M_r A\}.$$

(a) Show that $D$ is a metric on $\mathcal{K}$. (It is called the **Hausdorff metric** and $\mathcal{K}$ is called the **hyperspace** of $M$.)

(b) Denote by $\mathcal{F}$ the collection of finite nonempty subsets of $M$ and prove that $\mathcal{F}$ is dense in $\mathcal{K}$. That is, given $A \in \mathcal{K}$ and given $\epsilon > 0$ show there exists $F \in \mathcal{F}$ such that $D(A, F) < \epsilon$.

*(c) If $M$ is compact prove that $\mathcal{K}$ is compact.

(d) If $M$ is connected prove that $\mathcal{K}$ is connected.

**(e) If $M$ is path-connected is $\mathcal{K}$ path-connected?

(f) Do homeomorphic metric spaces have homeomorphic hyperspaces?

**Remark** The converse to (f), $\mathcal{K}(M) \cong \mathcal{K}(N) \Rightarrow M \cong N$ is false. The hyperspace of every Peano space is the Hilbert cube. This is a difficult result but a good place to begin reading about hyperspaces is Sam Nadler’s book *Continuum Theory*.