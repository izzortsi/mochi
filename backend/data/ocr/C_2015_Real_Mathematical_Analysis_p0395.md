Tacitly we assume that the covering is countable; the series $\sum_k |I_k|$ is its total length. (Recall that “countable” means either finite or denumerable.) The outer measure of $A$ is the infimum of the total lengths of all possible coverings $\{I_k\}$ of $A$ by open intervals. If every series $\sum_k |I_k|$ diverges then by definition $m^*A = \infty$.

Outer measure is defined for every $A \subset \mathbb{R}$. It measures $A$ from the outside as do calipers. A dual approach measures $A$ from the inside. It is called inner measure, is denoted $m^*A$, and is discussed in Section 4.

Three properties of outer measure (the “axioms of outer measure”) are easy to check.

1 Theorem (a) The outer measure of the empty set is 0, $m^*\emptyset = 0$.

(b) If $A \subset B$ then $m^*A \leq m^*B$.

(c) If $A = \mathbf{U}_{n=1}^{\infty} A_n$ then $m^*A \leq \sum_{n=1}^{\infty} m^*A_n$.

Proof (b) and (c) are called monotonicity and countable subadditivity.

(a) This is obvious. Every interval covers the empty set.

(b) This is obvious. Every covering of $B$ is also a covering of $A$.

(c) This uses the $\epsilon/2^n$ trick. Given $\epsilon > 0$ there exists for each $n$ a covering $\{I_{k,n} : k \in \mathbb{N}\}$ of $A_n$ such that

$$\sum_{k=1}^{\infty} |I_{k,n}| < m^*A_n + \frac{\epsilon}{2^n}.$$

The collection $\{I_{k,n} : k, n \in \mathbb{N}\}$ covers $A$ and

$$\sum_{k,n} |I_{k,n}| = \sum_{n=1}^{\infty} \sum_{k=1}^{\infty} |I_{k,n}| \leq \sum_{n=1}^{\infty} (m^*A_n + \frac{\epsilon}{2^n}) = \sum_{n=1}^{\infty} m^*A_n + \epsilon.$$

Thus the infimum of the total lengths of coverings of $A$ by open intervals is $\leq \sum_n m^*A_n + \epsilon$, and since $\epsilon > 0$ is arbitrary the infimum is $\leq \sum_n m^*A_n$, which is what (c) asserts.

Next, suppose you have a set $A$ in the plane and you want to measure its area. Here is the natural way to do it.

Definition The area of a rectangle $R = (a, b) \times (c, d)$ is $|R| = (b - a) \cdot (d - c)$ and the (planar) outer measure of $A \subset \mathbb{R}^2$ is the infimum of the total area of countable