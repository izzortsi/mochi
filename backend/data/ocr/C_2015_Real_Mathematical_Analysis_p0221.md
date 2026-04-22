**72. Absolutely convergent series can be multiplied in a natural way, the result being their **Cauchy product**,

$$\left( \sum_{i=0}^{\infty} a_i \right) \left( \sum_{j=0}^{\infty} b_j \right) = \sum_{k=0}^{\infty} c_k$$

where $c_k = a_0 b_k + a_1 b_{k-1} + \cdots + a_k b_0$.

(a) Prove that $\sum c_k$ converges absolutely.

(b) Formulate some algebraic laws for such products (commutativity, distributivity, and so on). Prove two of them.

[Hint for (a): Write the products $a_i b_j$ in an $\infty \times \infty$ matrix array $M$, and let $A_n, B_n, C_n$ be the $n^{\text{th}}$ partial sums of $\sum a_i, \sum b_j, \sum c_k$. You are asked to prove that $(\lim A_n)(\lim B_n) = \lim C_n$. The product of the limits is the limit of the products. The product $A_n B_n$ is the sum of all the $a_i b_j$ in the $n \times n$ corner submatrix of $M$ and $c_n$ is the sum of its antidiagonal. Now estimate $A_n B_n - C_n$. Alternately, assume that $a_n, b_n \geq 0$ and draw a rectangle $R$ with edges $A, B$. Observe that $R$ is the union of rectangles $R_{ij}$ with edges $a_i, b_j$.]

**73. With reference to Exercise 72,**

(a) Reduce the hypothesis that both series $\sum a_i$ and $\sum b_j$ are absolutely convergent to merely one being absolutely convergent and the other convergent. (Exercises 72 and 73(a) are known as **Mertens’ Theorem.**)

(b) Find an example to show that the Cauchy product of two conditionally convergent series may diverge.

**74. The Riemann $\zeta$-function** is defined to be $\zeta(s) = \sum_{n=1}^{\infty} n^{-s}$ where $s > 1$. It is the sum of the $p$-series when $p = s$. Establish **Euler’s product formula**,

$$\zeta(s) = \prod_{k=1}^{\infty} \frac{1}{1 - p_k^{-s}}$$

where $p_k$ is the $k^{\text{th}}$ prime number. Thus, $p_1 = 2, p_2 = 3$, and so on. Prove that the infinite product converges. [Hint: Each factor in the infinite product is the sum of a geometric series $1 + p_k^{-s} + (p_k^{-s})^2 + \ldots$. Replace each factor by its geometric series and write out the $n^{\text{th}}$ partial product. Apply Mertens’ Theorem, collect terms, and recall that every integer has a unique prime factorization.]