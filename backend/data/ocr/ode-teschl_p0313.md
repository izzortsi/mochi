Let $N \in \mathbb{N} \setminus \{1\}$ and define the space on $N$ symbols

$$\Sigma_N = \{0, 1, \ldots, N-1\}^{\mathbb{N}_0}$$

to be the set of sequences taking only the values $0, \ldots, N-1$. Note that $\Sigma_N$ is not countable (why?).

Defining

$$d(x, y) = \sum_{n \in \mathbb{N}_0} \frac{|x_n - y_n|}{N^n},$$

$\Sigma_N$ becomes a metric space. Observe that two points $x$ and $y$ are close if and only if their first $n$ values coincide. More precisely,

**Lemma 11.6.** We have $d(x, y) \leq N^{-n}$ if $x_j = y_j$ for all $j \leq n$ and we have $d(x, y) \geq N^{-n}$ if $x_j \neq y_j$ for at least one $j \leq n$.

**Proof.** Suppose $x_j = y_j$ for all $j \leq n$. Then

$$d(x, y) = \sum_{j>n} \frac{|x_j - y_j|}{N^j} \leq \frac{1}{N^{n+1}} \sum_{j \geq 0} \frac{N-1}{N^j} = \frac{1}{N^n}.$$

Conversely, if $x_j \neq y_j$ for at least one $j \leq n$, we have

$$d(x, y) = \sum_{k \in \mathbb{N}} \frac{|x_k - y_k|}{N^k} \geq \frac{1}{N^j} \geq \frac{1}{N^n}.$$

We first show that $\Sigma_N$ is a Cantor set, that is, it is compact, perfect, and totally disconnected. Here a topological space $M$ is called totally disconnected if for any two points $x$ and $y$ there are disjoint respective open neighborhoods $U$ and $V$ such that $U \cup V = M$. I leave it as an exercise to prove that this is equivalent to our previous definition for subsets of the real line (Problem 11.8).

**Lemma 11.7.** The set $\Sigma_N$ is a Cantor set.

**Proof.** We first prove that $\Sigma_N$ is compact. We need to show that every sequence $x^n$ contains a convergent subsequence. Given $x^n$, we can find a subsequence $x^{0,n}$ such that $x_0^{0,n}$ is the same for all $n$. Proceeding inductively, we obtain subsequences $x^{m,n}$ such that $x_k^{j,n} = x_k^{m,n}$ is the same for all $n$ if $0 \leq k \leq j \leq m$. Now observe that $x^{n,n}$ is a subsequence which converges since $x_j^{n,n} = x_j^{m,m}$ for all $j \leq \min(m,n)$.

To see that $\Sigma_N$ is perfect, fix $x$ and define $x^n$ such that $x_j^n = x_j$ for $0 \leq j \leq n$ and $x_{n+1}^n \neq x_{n+1}$. Then $x \neq x^n$ and $x^n$ converges to $x$.

To see that $\Sigma_N$ is totally disconnected, observe that the map $\delta_{j_0} : \Sigma_N \to \{0, \ldots, N-1\}$, $x \mapsto x_{j_0}$ is continuous. Hence the set $U = \{x | x_{j_0} = c\} =$