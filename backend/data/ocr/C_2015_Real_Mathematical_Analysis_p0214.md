(a) If $f$ is continuous, show that the calculus-style limit exists and equals the Riemann integral of $f$. [Hint: This is a one-liner.]

(b) Show by example that the calculus-style limit can exist for functions which are not Riemann integrable.

(c) Infer that the calculus-style definition of the integral is inadequate for real analysis.

28. Suppose that $Z \subset \mathbb{R}$. Prove that the following are equivalent.

(i) $Z$ is a zero set.

(ii) For each $\epsilon > 0$ there is a countable covering of $Z$ by closed intervals $[a_i, b_i]$ with total length $\sum b_i - a_i < \epsilon$.

(iii) For each $\epsilon > 0$ there is a countable covering of $Z$ by sets $S_i$ with total diameter $\sum \text{diam} S_i < \epsilon$.

*29. Prove that the interval $[a, b]$ is not a zero set.

(a) Explain why the following observation is not a solution to the problem: “Every open interval that contains $[a, b]$ has length $b - a$.”

(b) Instead, suppose there is a “bad” covering of $[a, b]$ by open intervals $\{I_i\}$ whose total length is $< b - a$, and justify the following steps.

(i) It is enough to deal with finite bad coverings.

(ii) Let $\mathcal{B} = \{I_1, \ldots, I_n\}$ be a bad covering such that $n$ is minimal among all bad coverings.

(iii) Show that no bad covering has $n = 1$ so we have $n \geq 2$.

(iv) Show that it is no loss of generality to assume $a \in I_1$ and $I_1 \cap I_2 \neq \emptyset$.

(v) Show that $I = I_1 \cup I_2$ is an open interval and $|I| < |I_1| + |I_2|$.

(vi) Show that $\mathcal{B}' = \{I, I_3, \ldots, I_n\}$ is a bad covering of $[a, b]$ with fewer intervals, a contradiction to minimality of $n$.

30. The standard middle-quarters Cantor set $Q$ is formed by removing the middle quarter from $[0, 1]$, then removing the middle quarter from each of the remaining two intervals, then removing the middle quarter from each of the remaining four intervals, and so on.

(a) Prove that $Q$ is a zero set.

(b) Formulate the natural definition of the middle $\beta$-Cantor set.

(c) Is it also a zero set? Prove or disprove.

*31. Define a Cantor set by removing from $[0, 1]$ the middle interval of length 1/4. From the remaining two intervals $F^1$ remove the middle intervals of length 1/16. From the remaining four intervals $F^2$ remove the middle intervals of length 1/64, and so on. At the $n^{\text{th}}$ step in the construction $F^n$ consists of $2^n$ subintervals of $F^{n-1}$.

(a) Prove that $F = \bigcap F^n$ is a Cantor set but not a zero set. It is referred to as a fat Cantor set.

(b) Infer that being a zero set is not a topological property: If two sets are