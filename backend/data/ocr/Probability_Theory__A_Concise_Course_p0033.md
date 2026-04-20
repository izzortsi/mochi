A1, A2, ..., with probabilities $p_k = \mathbf{P}(A_k)$, $k = 1, 2, \ldots$, suppose

$$\sum_{k=1}^{\infty} p_k < \infty,$$

(2.17)

i.e., suppose the series on the left converges. Then, with probability 1 only finitely many of the events $A_1, A_2, \ldots$, occur.

Proof. Let $B$ be the event that infinitely many of the events $A_1, A_2, \ldots$ occur, and let

$$B_n = \bigcup_{k \geq n} A_k,$$

so that $B_n$ is the event that at least one of the events $A_n, A_{n+1}, \ldots$ occurs. Clearly $B$ occurs if and only if $B_n$ occurs for every $n = 1, 2, \ldots$. Therefore

$$B = \bigcap_n B_n = \bigcap_n \left( \bigcup_{k \geq n} A_k \right).$$

Moreover, $B_1 \supset B_2 \supset \cdots$, and hence, by Theorem 2.3′,

$$\mathbf{P}(B) = \lim_{n \to \infty} \mathbf{P}(B_n).$$

But, by Theorem 2.4,

$$\mathbf{P}(B_n) \leqslant \sum_{k \geq n} \mathbf{P}(A_k) = \sum_{k \geq n} p_k \to 0 \text{ as } n \to \infty,$$

because of (2.17). Therefore

$$\mathbf{P}(B) = \lim_{n \to \infty} \mathbf{P}(B_n) = 0,$$

i.e., the probability of infinitely many of the events $A_1, A_2, \ldots$ occurring is 0. Equivalently, the probability of only finitely many of the events $A_1, A_2, \ldots$ occurring is 1.

PROBLEMS

1. Interpret the following relations involving events $A, B$ and $C$:
   a) $AB = A$; b) $ABC = A$; c) $A \cup B \cup C = A$.

2. When do the following relations involving the events $A$ and $B$ hold:
   a) $A \cup B = \bar{A}$; b) $AB = \bar{A}$; c) $A \cup B = AB$?

3. Simplify the following expressions involving events $A, B$ and $C$:
   a) $(A \cup B)(B \cup C)$; b) $(A \cup B)(A \cup \bar{B})$; c) $(A \cup B)(A \cup \bar{B})(\bar{A} \cup B)$.
   Ans. a) $AC \cup B$; b) $A$; c) $AB$.

4. Given two events $A$ and $B$, find the event $X$ such that

$$\overline{(X \cup A)} \cup \overline{(X \cup \bar{A})} = B.$$

Ans. $X = \bar{B}$.