(b) Why is this impossible if the series $\sum b_k$ is absolutely convergent?

67. An infinite product is an expression $\prod c_k$ where $c_k > 0$. The $n^{\text{th}}$ partial product is $C_n = c_1 \cdots c_n$. If $C_n$ converges to a limit $C \neq 0$ then the product converges to $C$. Write $c_k = 1 + a_k$. If each $a_k \geq 0$ or each $a_k \leq 0$ prove that $\sum a_k$ converges if and only if $\prod c_k$ converges. [Hint: Take logarithms.]

68. Show that conditional convergence of the series $\sum a_k$ and the product $\prod(1 + a_k)$ can be unrelated to each other:

(a) Set $a_k = (-1)^k/\sqrt{k}$. The series $\sum a_k$ converges but the corresponding product $\prod(1 + a_k)$ diverges. [Hint: Group the terms in the product two at a time.]

(b) Let $e_k = 0$ when $k$ is odd and $e_k = 1$ when $k$ is even. Set $b_k = e_k/k + (-1)^k/\sqrt{k}$. The series $\sum b_k$ diverges while the corresponding product $\prod_{k \geq 2}(1 + b_k)$ converges.

69. Consider a series $\sum a_k$ and rearrange its terms by some bijection $\beta : \mathbb{N} \to \mathbb{N}$, forming a new series $\sum a_{\beta(k)}$. The rearranged series converges if and only if the partial sums $a_{\beta(1)} + \ldots + a_{\beta(n)}$ converge to a limit as $n \to \infty$.

(a) Prove that every rearrangement of a convergent series of nonnegative terms converges – and converges to the same sum as the original series.

(b) Do the same for absolutely convergent series.

*70. Let $\sum a_k$ be given.

(a) If $\sum a_k$ converges conditionally, prove that rearrangement totally alters its convergence in the sense that some rearrangements $\sum b_k$ of $\sum a_k$ diverge to $+\infty$, others diverge to $-\infty$, and others converge to any given real number.

(b) Infer that a series is absolutely convergent if and only if every rearrangement converges. (The fact that rearrangement radically alters conditional convergence shows that although finite addition is commutative, infinite addition (i.e., summing a series) is not.)

**71. Suppose that $\sum a_k$ converges conditionally. If $\sum b_k$ is a rearrangement of $\sum a_k$, let $Y$ be the set of subsequential limits of $(B_n)$ where $B_n$ is the $n^{\text{th}}$ partial sum of $\sum b_k$. That is, $y \in Y$ if and only if some $B_{n_\ell} \to y$ as $\ell \to \infty$.

(a) Prove that $Y$ is closed and connected.

(b) If $Y$ is compact and nonempty, prove that $\sum b_k$ converges to $Y$ in the sense that $d_H(Y_n, Y) \to 0$ as $n \to \infty$, where $d_H$ is the Hausdorff metric on the space of compact subsets of $\mathbb{R}$ and $Y_n$ is the closure of $\{B_m : m \geq n\}$. See Exercise 2.147.

(c) Prove that each closed and connected subset of $\mathbb{R}$ is the set of subsequential limits of some rearrangement of $\sum a_k$.

The article, “The Remarkable Theorem of Lévy and Steinitz” by Peter Rosenthal in the American Math Monthly of April 1987 deals with some of these issues, including the higher dimensional situation.