function $p_{\xi_1, \xi_2}(x_1, x_2)$ of two variables $x_1$ and $x_2$ such that the probability of any event of the type $\{(\xi_1, \xi_2) \in B\}$ is given by

$$\mathbf{P}\{(\xi_1, \xi_2) \in B\} = \iint_{B'} p_{\xi_1, \xi_2}(x_1, x_2) \, dx_1 \, dx_2$$

(the integral is over $B$).

Given a family of random variables $\xi_1, \ldots, \xi_n$, suppose the events $\{x'_k \leq \xi_k \leq x''_k\}$, $k = 1, \ldots, n$ are independent for arbitrary $x'_k$ and $x''_k$ ($x'_k \leq x''_k$). Then the random variables $\xi_1, \ldots, \xi_n$ are said to be (statistically) independent. Given an infinite sequence of random variables $\xi_1, \xi_2, \ldots$, suppose the random variables $\xi_1, \ldots, \xi_n$ are independent for every $n$, or equivalently that the events $\{x'_k \leq \xi_k \leq x''_k\}$, $k = 1, 2, \ldots$ are independent for arbitrary $x'_k$ and $x''_k$. Then $\xi_1, \xi_2, \ldots$ is said to be a sequence of independent random variables.

Suppose two random variables $\xi_1$ and $\xi_2$ are independent. Then clearly their joint probability distribution (4.5) is such that

$$P_{\xi_1, \xi_2}(x_1, x_2) = P_{\xi_1}(x_1) P_{\xi_2}(x_2)$$

if $\xi_1$ and $\xi_2$ are discrete, and

$$p_{\xi_1, \xi_2}(x_1, x_2) = p_{\xi_1}(x_1) p_{\xi_2}(x_2)$$

if $\xi_1$ and $\xi_2$ are continuous. In (4.7'), $p_{\xi_1}(x_1)$ is the probability density of $\xi_1$ and $p_{\xi_2}(x_2)$ that of $\xi_2$, while $p_{\xi_1, \xi_2}(x_1, x_2)$ is the joint probability density of $\xi_1$ and $\xi_2$ figuring in (4.6).

**Example 1 (The uniform distribution).** Suppose a point $\xi$ is “tossed at random” onto the interval $[a, b]$. This means that the probability of $\xi$ falling in a subinterval $[x', x''] \subset [a, b]$ does not depend on the location of $[x', x'']$. Hence the probability of $\xi$ falling in $[x', x'']$ is proportional to the length $x'' - x'$. More exactly, we have

$$\mathbf{P}\{x' \leq \xi \leq x''\} = \frac{x'' - x'}{b - a} = \int_{x'}^{x'} \frac{dx}{b - a},$$

since then the probability of $\xi$ falling in $[a, b]$ itself is

$$\mathbf{P}\{a \leq \xi \leq b\} = \int_a^b \frac{dx}{b - a} = 1,$$

as it must be. Clearly, $\xi$ is a continuous random variable, with probability

---

4 Let $f(s)$ be the probability of $\xi$ falling in a subinterval of length $s$. Then clearly $f(s + t) = f(s) + f(t)$. But it can be shown that any function $f(s)$ satisfying this equation is either of the form $ks$ (k a constant) or else unbounded in every interval (see W. Feller, op. cit., p. 459).