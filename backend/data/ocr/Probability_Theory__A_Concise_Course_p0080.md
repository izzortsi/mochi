n such that

$$a - \varepsilon \leqslant \frac{1}{n} (\xi_1 + \cdots + \xi_n) \leqslant a + \varepsilon$$

with probability greater than $1 - \delta$.

Proof. The theorem is an immediate consequence of (6.1) if we choose $n > \sigma^2 / \delta \varepsilon^2$.

Remark. Suppose $\delta$ and $\varepsilon$ are so small that we can practically neglect both the occurrence of events of probability $\delta$ and differences between quantities differing by no more than $\varepsilon$. Then Theorem 6.1 asserts that for sufficiently large $n$, the arithmetic mean

$$\eta = \frac{1}{n} (\xi_1 + \cdots + \xi_n)$$

is an excellent approximation to the mean value $a = E \xi_k$.

Now consider $n$ consecutive Bernoulli trials, in each of which an event $A$ can occur with probability $p = P(A)$ or fail to occur with probability $q = 1 - p$. Let $\xi_k$ be a random variable equal to 1 if $A$ occurs at the $k$th trial and 0 if $A$ fails to occur at the $k$th trial. Then the random variables $\xi_1, \ldots, \xi_n$ are independent and identically distributed (by the very meaning of Bernoulli trials). Obviously

$$P\{\xi_k = 1\} = p, \quad P\{\xi_k = 0\} = q.$$

Moreover, each random variable $\xi_k$ has mean

$$a = E \xi_k = p \cdot 1 + q \cdot 0 = P(A).$$

Let $n(A)$ be the number of trials in which $A$ occurs, so that

$$\frac{n(A)}{n}$$

is the relative frequency of the event $A$. Then clearly

$$n(A) = \xi_1 + \cdots + \xi_n,$$

and hence

$$\frac{n(A)}{n} = \frac{1}{n} (\xi_1 + \cdots + \xi_n).$$

It follows from Theorem 6.1 that $n(A)/n$ virtually coincides with $P(A)$ for sufficiently large $n$, more exactly, that given any $\delta > 0$ and $\varepsilon > 0$, however small, there is an integer $n$ such that

$$P(A) - \varepsilon \leqslant \frac{n(A)}{n} \leqslant P(A) + \varepsilon$$