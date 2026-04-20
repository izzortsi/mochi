for the first time after precisely $n$ steps. Then

$$u_n = u_0 v_n + u_1 v_{n-1} + \cdots + u_{n-1} v_1 + u_n v_0, \quad n = 1, 2, \ldots,$$

(7.14)

where we set

$$u_0 = 1, \quad v_0 = 0$$

by definition. To see this, let $B_k$ ($k = 1, \ldots, n$) be the event that “the system returns to $\varepsilon_i$ for the first time after $k$ steps,” $B_{n+1}$ the event that “the system does not return at all to $\varepsilon_i$ during the first $n$ steps,” and $A$ the event that “the system is in the initial state $\varepsilon_i$ after $n$ steps.” Then the events $B_1, \ldots, B_n, B_{n+1}$ form a full set of mutually exclusive events, and hence, by the “total probability formula” (3.6), p. 26,

$$\mathbf{P}(A) = \sum_{i=1}^{n+1} \mathbf{P}(A \mid B_k) \mathbf{P}(B_k),$$

(7.15)

where clearly $\mathbf{P}(A \mid B_{n+1}) = 0$ and

$$\mathbf{P}(B_k) = v_k, \quad \mathbf{P}(A \mid B_k) = u_{n-k}, \quad k = 1, \ldots, n.$$

Substituting these values into (7.15), we get (7.14).

In terms of the generating functions

$$U(z) = \sum_{k=0}^{\infty} u_k z^k, \quad V(z) = \sum_{k=0}^{\infty} v_k z^k, \quad |z| < 1,$$

we can write (7.14) in the form

$$U(z) - u_0 = U(z) V(z), \quad u_0 = 1,$$

which implies

$$U(z) = \frac{1}{1 - V(z)}.$$

(7.16)

The quantity

$$v = \sum_{n=0}^{\infty} v_n$$

is the probability that the system sooner or later returns to the original state $\varepsilon_i$. The state $\varepsilon_i$ is said to be persistent if $v = 1$ and transient if $v < 1$.

**Theorem 7.1.** The state $\varepsilon_i$ is persistent if and only if

$$\sum_{n=0}^{\infty} u_n = \sum_{n=0}^{\infty} p_{ii}(n) = \infty.$$

(7.17)

5 Although the numbers $u_0, u_1, u_2, \ldots$ do not correspond to a probability distribution as on p. 70 (in fact, we will consider the case where $\sum_{k=0}^{\infty} u_k = \infty$), we continue to call $U(z)$ a “generating function.” The convergence of the series $\sum_{k=0}^{\infty} u_k z^k$ for $|z| < 1$ follows by comparison with the geometric series, since $|u_k| \ll 1$ for every $k$.