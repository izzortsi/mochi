6(b)]. Hence, by the general formula (4.6),

$$\mathbf{P}\{(\xi_1, \xi_2) \in B\} = \iint_B \frac{dx_1 dx_2}{\pi L} = \frac{2l}{\pi L},$$

(4.8)

where

$$l \int_0^{\pi} \sin x_1 dx_1 = 2l$$

is the area of $B$.

In deducing (4.8), we have assumed that $\xi_1$ and $\xi_2$ are independent random variables. This assumption can be tested experimentally. In fact, according to (4.8), if the needle is repeatedly tossed onto the ruled plane, then the frequency of the event $A$, consisting of the needle intersecting one of the rulings, must be approximately $2l/\pi L$. Suppose the needle is tossed $n$ times, and let $n(A)$ be the number of times $A$ occurs, so that $n(A)/n$ is the relative frequency of the event $A$. Then

$$\frac{n(A)}{n} \sim \frac{2l}{\pi L}$$

for large $n$, as discussed on p. 3. Hence

$$\frac{2l}{L} \frac{n}{n(A)}$$

should be a good approximation to $\pi = 3.14 \ldots$ for large $n$. This actually turns out to be the case.6

**Example 4.** Given two independent random variables $\xi_1$ and $\xi_2$, with probability densities $p_{\xi_1}(x_1)$ and $p_{\xi_2}(x_2)$, find the probability density of the random variable

$$\eta = \xi_1 + \xi_2.$$

**Solution.** By (4.7'), the joint probability distribution of $\xi_1$ and $\xi_2$ equals $p_{\xi_1}(x_1)p_{\xi_2}(x_2)$, and hence, by (4.6),

$$P\{y' \leq \eta \leq y''\} = \iint_{y' \leq x_1 + x_2 \leq y''} p_{\xi_1}(x_1)p_{\xi_2}(x_2) dx_1 dx_2$$

$$= \int_{y'}^{\eta} \left[ \int_{-\infty}^{\infty} p_{\xi_1}(y-x) p_{\xi_2}(x) \right] dx.$$

Therefore the probability density of the random variable $\eta$ is given by the expression

$$p_{\eta}(y) = \int_{-\infty}^{\infty} p_{\xi_1}(y-x) p_{\xi_2}(x) dx,$$

called the composition or convolution of the functions $p_{\xi_1}$ and $p_{\xi_2}$.

6 See J. V. Uspensky, *Introduction to Mathematical Probability*, McGraw-Hill Book Co., Inc., New York (1937), p. 113.