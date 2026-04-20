Note that in the above argument we have shown that existence of an orbit of period two implies existence of an orbit of period one. In fact, a much stronger result is true which will be presented in the next section.

**Problem 11.1.** Show that for $\mu = 2$ we have

$$x_n = L_2^n(x_0) = \frac{1}{2} \left( 1 - (1 - 2x_0)^{2n} \right).$$

**11.2. Sarkovskii’s theorem**

In this section we want to show that certain periods imply others for continuous maps $f : I \rightarrow I$, where $I \subseteq \mathbb{R}$ is some compact interval. As our first result we will show that period three implies all others.

**Lemma 11.1.** Suppose $f : I \rightarrow I$ is continuous and has an orbit of period three. Then it also has orbits with (prime) period $n$ for all $n \in \mathbb{N}$.

**Proof.** The proof is based on the following two elementary facts (Problem 11.2):

(i) If $I, J$ are two compact intervals satisfying $f(J) \supseteq I$, then there is a subinterval $J_0$ of $J$ such that $f(J_0) = I$.

(ii) If $f(J) \supseteq J$, there is a fixed point in $J$.

Let $a < b < c$ be the period three orbit. And suppose $f(a) = b$, $f(b) = c$ (the case $f(a) = c$, $f(b) = a$ is similar). Abbreviate $I_0 = [a, b]$, $I_1 = [b, c]$ and observe $f(I_0) \supseteq I_1$, $f(I_1) \supseteq I_0 \cup I_1$.

Set $J_0 = I_1$ and recall $f(J_0) = f(I_1) \supseteq I_1 = J_0$. By (i) we can find a subinterval $J_1 \subseteq J_0$ such that $f(J_1) = J_0$. Moreover, since $f(J_1) = J_0 \supseteq J_1$ we can iterate this procedure to obtain a sequence of nesting sets $J_k$, $k = 0, \ldots, n$, such that $f(J_k) = J_{k-1}$. In particular, we have $f^n(J_n) = J_0 \supseteq J_n$ and thus $f^n$ has a fixed point in $J_n$ by (ii). The only problem is, is the prime period of this point $n$? Unfortunately, since all iterations stay in $I_1$, we might always get the same fixed point of $f$. To ensure that this does not happen we need to refine our analysis by going to $I_0$ in the $(n-1)$th step and then back to $I_1$.

So let $n > 1$ and define $J_0 \supseteq \cdots \supseteq J_{n-2}$ as before. Now observe $f^{n-1}(J_{n-2}) = f(f^{n-2}(J_{n-2})) = f(I_1) \supseteq I_0$. Hence we can choose a subinterval $J_{n-1} \subseteq J_{n-2}$ such that $f^{n-1}(J_{n-1}) = I_0$ and thus $f^n(J_{n-1}) = f(I_0) \supseteq I_1$. Again there is a subinterval $J_n \subseteq J_{n-1}$ such that $f^n(J_n) = I_1$. Hence there is a fixed point $x \in J_n$ of $f^n$ such that $f^j(x) \in I_1$ for $j \neq n-1$ and $f^{n-1}(x) \in I_0$. Moreover, note that $x$ really leaves $I_1$ in the $(n-1)$-th step since $f^{n-1}(x) \in I_0 \cap I_1 = \{b\}$ contradicts $a = f^{n+1}(x) = f(x) \in I_1$. Consequently the prime period of $x$ cannot be $n-1$ since $f^{n-1}(x) \in [a, b)$ and