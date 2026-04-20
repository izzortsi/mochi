for arbitrary $c_1$ and $c_2$. It follows that the minimum of $\mathbf{E}(\eta_1 - c_1 - c_2\eta_2)^2$ is achieved for $c_1 = 0$, $c_2 = r$, and is equal to

$$\min_{c_1, c_2} \mathbf{E}(\eta_1 - c_1 - c_2\eta_2)^2 = 1 - r^2. \tag{4.27}$$

But

$$\eta_1 - r\eta_2 = \frac{1}{\sigma_1} \left[ \xi_1 - a_1 - r \frac{\sigma_1}{\sigma_2} (\xi_2 - a_2) \right]$$

in terms of the original random variables $\xi_1$ and $\xi_2$. Therefore

$$\hat{c}_1 + \hat{c}_2\xi_2 = a_1 + r \frac{\sigma_1}{\sigma_2} (\xi_2 - a_2)$$

is the minimizing linear expression figuring in (4.23), where $a_1, a_2, \sigma_1^2, \sigma_2^2$ and $r$ are defined by (4.24) and (4.25).

If $\xi_1$ and $\xi_2$ are independent, then, by (4.22),

$$r = \frac{\mathbf{E}(\xi_1 - a_1)(\xi_2 - a_2)}{\sigma_1\sigma_2} = \frac{\mathbf{E}(\xi_1 - a_1)\mathbf{E}(\xi_2 - a_2)}{\sigma_1\sigma_2} = 0.$$

It is clear from (4.27) that $r$ lies in the interval $-1 < r < 1$. Moreover, if $r = \pm 1$, then the random variable $\xi_1$ is simply a linear expression of the form

$$\xi_1 = \hat{c}_1 + \hat{c}_2\xi_2.$$

In fact, if $r = \pm 1$, then, by (4.26) and (4.27), the mean square value of $\xi_1 - \hat{c}_1 - \hat{c}_2\xi_2$ is just

$$\mathbf{E}(\xi_1 - \hat{c}_1 - \hat{c}_2\xi_2)^2 = \sigma_1^2(1 - r^2) = 0,$$

and hence $\xi_1 - \hat{c}_1 - \hat{c}_2\xi_2 = 0$ with probability 1 (why?).

The above considerations seem to suggest the use of $r$ as a measure of the extent to which the random variables $\xi_1$ and $\xi_2$ are dependent. However, although suitable in some situations (see Problem 15, p. 67), this use of $r$ is not justified in general (see Problem 19, p. 53).

**PROBLEMS**

1. A motorist encounters four consecutive traffic lights, each equally likely to be red or green. Let $\xi$ be the number of green lights passed by the motorist before being stopped by a red light. What is the probability distribution of $\xi$?

2. Give an example of two distinct random variables with the same distribution function.

3. Find the distribution function of the uniformly distributed random variable $\xi$ considered in Example 1, p. 40.

---

11 See also W. Feller, *op. cit.*, p. 236.