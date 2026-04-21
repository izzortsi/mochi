Cauchy sequences

As mentioned above there is a second sense in which $\mathbb{R}$ is complete. It involves the concept of convergent sequences. Let $a_1, a_2, a_3, a_4, \ldots = (a_n)$, $n \in \mathbb{N}$, be a sequence of real numbers. The sequence $(a_n)$ converges to the limit $b \in \mathbb{R}$ as $n \to \infty$ provided that for each $\epsilon > 0$ there exists $N \in \mathbb{N}$ such that for all $n \geq N$ we have

$$|a_n - b| < \epsilon.$$

The statistician’s language is evocative here. Think of $n = 1, 2, \ldots$ as a sequence of times and say that the sequence $(a_n)$ converges to $b$ provided that eventually all its terms nearly equal $b$. In symbols,

$$\forall \epsilon > 0 \exists N \in \mathbb{N} \text{ such that } n \geq N \Rightarrow |a_n - b| < \epsilon.$$

If the limit $b$ exists it is not hard to see (Exercise 20) that it is unique, and we write

$$\lim_{n \to \infty} a_n = b \text{ or } a_n \to b.$$

Suppose that $\lim_{n \to \infty} a_n = b$. Since all the numbers $a_n$ are eventually near $b$ they are all near each other; i.e., every convergent sequence obeys a Cauchy condition:

$$\forall \epsilon > 0 \exists N \in \mathbb{N} \text{ such that if } n, k \geq N \text{ then } |a_n - a_k| < \epsilon.$$

The converse of this fact is a fundamental property of $\mathbb{R}$.

5 Theorem $\mathbb{R}$ is complete with respect to Cauchy sequences in the sense that if $(a_n)$ is a sequence of real numbers which obeys a Cauchy condition then it converges to a limit in $\mathbb{R}$.

Proof First we show that $(a_n)$ is bounded. Taking $\epsilon = 1$ in the Cauchy condition implies there is an $N$ such that for all $n, k \geq N$ we have $|a_n - a_k| < 1$. Take $K$ large enough that $-K \leq a_1, \ldots, a_N \leq K$. Set $M = K + 1$. Then for all $n$ we have

$$-M < a_n < M,$$

which shows that the sequence is bounded.

Define a set $X$ as

$$X = \{x \in \mathbb{R} : \exists \text{ infinitely many } n \text{ such that } a_n \geq x\}.$$

$-M \in X$ since for all $n$ we have $a_n > -M$, while $M \notin X$ since no $x_n$ is $\geq M$. Thus $X$ is a nonempty subset of $\mathbb{R}$ which is bounded above by $M$. The least upper bound property applies to $X$ and we have $b = l. \text{ u. b. } X$ with $-M \leq b \leq M$.