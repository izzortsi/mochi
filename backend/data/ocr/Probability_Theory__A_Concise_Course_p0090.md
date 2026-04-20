functions $f_n(t)$, $n = 1, 2, \ldots$ of the random variables $S_n^*$ converges uniformly in every finite interval $t' \leq t \leq t''$ to the characteristic function $f(t) = e^{-t^2/2}$ of this normal distribution (recall Example 1). Clearly,

$$S_n^* = \sum_{k=1}^{n} \frac{\xi_k - a_k}{B_n}, \quad B_n^2 = DS_n.$$

The random variable $\xi_k - a_k$ has zero mean and variance $\sigma_k^2$, and hence, by (6.21), has characteristic function

$$g_k(t) = 1 - \frac{\sigma_k^2}{2} t^2 + R_k(t),$$

where

$$|R_k(t)| \leq C |t|^3 \mathbf{E} |\xi_k - a_k|^3$$

($C$ is some constant). Therefore the characteristic function of the random variable $\eta_k = (\xi_k - a_k)/B_n$ is

$$f_{kn}(t) = g_k\left(\frac{t}{B_n}\right) = 1 - \frac{\sigma_k^2}{2B_n^2} t^2 + R_k\left(\frac{t}{B_n}\right),$$

where

$$\left|R_k\left(\frac{t}{B_n}\right)\right| \leq C |t|^3 \frac{\mathbf{E} |\xi_k - a_k|^3}{B_n^3}.$$

It follows from (6.24) that the random variable $S_n^* = \eta_1 + \cdots + \eta_n$ has characteristic function

$$f_n(t) = \prod_{k=1}^{n} f_{kn}(t).$$

Hence

$$\ln f_n(t) = \sum_{k=1}^{n} f_{kn}(t) \sim \sum_{k=1}^{n} \left[ -\frac{\sigma_k^2}{2B_n^2} t^2 + R_k\left(\frac{t}{B_n}\right) \right],$$

where, because of the hypothesis (6.26),

$$\left| \sum_{k=1}^{n} R_k\left(\frac{t}{B_n}\right) \right| \leq C |t|^3 \frac{1}{B_n^3} \sum_{k=1}^{n} \mathbf{E} |\xi_k - a_k|^3 \to 0$$

as $n \to \infty$ uniformly in every finite interval $t' \leq t \leq t''$. Therefore

$$\ln f_n(t) \sim -\frac{t^2}{2B_n^2} \sum_{k=1}^{n} \sigma_k^2 = -\frac{t^2}{2},$$

or equivalently

$$f_n(t) \to e^{-t^2/2}$$

as $n \to \infty$.