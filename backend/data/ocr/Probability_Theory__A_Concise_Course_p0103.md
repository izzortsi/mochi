for large $n$, where

$$4pq = (p + q)^2 - (p - q)^2 = 1 - (p - q)^2 < 1$$

(the equality holds only for $p = q = \frac{1}{2}$). Therefore

$$p_{ii}(2n) \sim \frac{1}{\sqrt{\pi n}}(4pq)^n$$

for large $n$, and hence the series

$$\sum_{n=0}^{\infty} p_{ii}(2n), \quad \sum_{n=0}^{\infty} \frac{1}{\sqrt{\pi n}}(4pq)^n$$

either both converge or both diverge. Suppose $p \neq q$, so that $4pq < 1$. Then

$$\sum_{n=0}^{\infty} p_{ii}(2n) < \infty,$$

and hence every state is transient. It is intuitively clear that if $p > q$ (say), then the particle will gradually work its way out along the $x$ axis in the positive direction, and sooner or later permanently abandon any given state $i$. However, if $p = q = \frac{1}{2}$, we have

$$\sum_{n=0}^{\infty} p_{ii}(2n) = \infty,$$

and the particle will return to each state infinitely often, a fact apparent from the symmetry of the problem in this case.

**Example 4.** Next consider the one-dimensional random walk with transition probabilities (7.13). Obviously, if $0 < p_i < 1$ for all $i = 0, 1, \ldots$, every state is accessible from every other state, and hence the states are either all persistent or all transient. Suppose the system is initially in the state $i = 0$. Then the probability that it does not return to the state $i = 0$ after $n$ steps equals the product $p_0 p_1 \cdots p_{n-1}$, the probability of the system making the consecutive transitions $0 \rightarrow 1 \rightarrow \cdots \rightarrow n$. It is easy to see that the probability that the system never returns to its initial state $i = 0$ as $n \rightarrow \infty$ equals the infinite product

$$\prod_{n=0}^{\infty} p_n = \lim_{n \rightarrow \infty} p_0 p_1 \cdots p_n.$$

If this infinite product converges to zero, i.e., if

$$\lim_{n \rightarrow \infty} p_0 p_1 \cdots p_n = 0,$$

then the state $i = 0$ is persistent, and hence so are all the other states. Otherwise, the probability of return to the initial state is

$$v = 1 - \lim_{n \rightarrow \infty} p_0 p_1 \cdots p_n < 1.$$

(7.19)

Then the state $i = 0$ is transient, and hence so are all the other states.

We can arrive at the same result somewhat differently by direct calculation