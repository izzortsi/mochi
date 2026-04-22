Also, if $\beta$ is $k$-linear and $k < r$ then $f(x) = \beta(x, \ldots, x)$ has $D^r f = 0$. On the other hand, if $k = r$ then $(D^r f)_p = r!$ Symm($\beta$) where Symm($\beta$) is the symmetrization of $\beta$. See Exercise 28.

The Chain Rule for $r^{\text{th}}$ derivatives is a bit complicated. The difficulties arise from the fact that $x$ appears in two places in the expression for the first-order Chain Rule, $(D(g \circ f))_x = (Dg)_{f(x)} \circ (Df)_x$, and so, differentiating this product produces

$$(D^2 g)_{f(x)} \circ (Df)_x^2 + (Dg)_{f(x)} \circ (D^2 f)_x.$$

(The meaning of $(Df)_x^2$ needs clarification.) Differentiating again produces four terms, two of which combine. The general formula is

$$(D^r (g \circ f))_x = \sum_{k=1}^{r} \sum_{\mu} (D^k g)_{f(x)} \circ (D^\mu f)_x$$

where the sum on $\mu$ is taken as $\mu$ runs through all partitions of $\{1, \ldots, r\}$ into $k$ disjoint subsets. See Exercise 41.

The higher-order Leibniz rule is left for you as Exercise 42.

Smoothness Classes

A map $f : U \to \mathbb{R}^m$ is of class $C^r$ if it is $r^{\text{th}}$-order differentiable at each $p \in U$ and its derivatives depend continuously on $p$. (Since differentiability implies continuity, all the derivatives of order less than $r$ are automatically continuous. Only the $r^{\text{th}}$ derivative is in question.) If $f$ is of class $C^r$ for all $r$ then it is smooth or of class $C^\infty$. According to the differentiation rules, these smoothness classes are closed under the operations of linear combination, product, and composition. We discuss next how they are closed under limits.

Let $(f_k)$ be a sequence of $C^r$ functions $f_k : U \to \mathbb{R}^m$. The sequence is

(a) Uniformly $C^r$ convergent if for some $C^r$ function $f : U \to \mathbb{R}^m$ we have

$$f_k \rightrightarrows f \quad Df_k \rightrightarrows Df \quad \ldots \quad D^r f_k \rightrightarrows D^r f$$

as $k \rightarrow \infty$.

(b) Uniformly $C^r$ Cauchy if for each $\epsilon > 0$ there is an $N$ such that for all $k, \ell \geq N$ and all $x \in U$ we have

$$|f_k(x) - f_\ell(x)| < \epsilon \quad \|(Df_k)_x - (Df_\ell)_x\| < \epsilon \ldots \|(D^r f_k)_x - (D^r f_\ell)_x\| < \epsilon.$$