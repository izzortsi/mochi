Moreover,

$$\frac{k}{np} = 1 + \sqrt{\frac{q}{np}} x, \quad \frac{n-k}{nq} = 1 - \sqrt{\frac{p}{nq}} x.$$

Therefore, using the expansion

$$\ln (1 + \alpha_r) \sim \alpha_n - \frac{\alpha_n^2}{2}$$

(as $\alpha_n \to 0$), we have

$$\ln \left( \frac{k}{np} \right)^{-k} = -k \ln \left( 1 + \sqrt{\frac{q}{np}} x \right)$$

$$\sim -(np + \sqrt{npq} x) \left( \sqrt{\frac{q}{np}} x - \frac{1}{2} \frac{q}{np} x^2 \right),$$

$$\ln \left( \frac{n-k}{nq} \right)^{-(n-k)} = -(n-k) \ln \left( 1 - \sqrt{\frac{p}{nq}} x \right)$$

$$\sim -(nq - \sqrt{npq} x) \left( -\sqrt{\frac{p}{nq}} x - \frac{1}{2} \frac{p}{nq} x^2 \right).$$

Adding these expressions, we find that

$$\lim_{n \to \infty} \ln \left( \frac{np}{k} \right)^k \left( \frac{nq}{n-k} \right)^{n-k} = -\frac{x^2}{2},$$

and hence

$$\lim_{n \to \infty} \left( \frac{np}{k} \right)^k \left( \frac{nq}{n-k} \right)^{n-k} = e^{-x^2/2}$$

uniformly in every finite interval $x' \leq x \leq x''$. Since

$$\sqrt{\frac{n}{n(n-k)}} \sim \sqrt{\frac{k}{np \cdot nq}} = \frac{1}{\sqrt{npq}},$$

it follows that

$$\lim_{n \to \infty} \mathbf{P} \{ S_n^* = x \} = \frac{1}{\sqrt{2\pi}} e^{-x^2/2} \Delta x, \quad \Delta x = \frac{1}{\sqrt{npq}}.$$

Therefore

$$\lim_{n \to \infty} \mathbf{P} \{ x' \leq S_n^* \leq x'' \} = \lim_{n \to \infty} \sum_{x' \leq x \leq x''} \mathbf{P} \{ S_n^* = x \}$$

$$= \lim_{n \to \infty} \sum_{x' \leq x \leq x''} \frac{1}{\sqrt{2\pi}} e^{-x^2/2} \Delta x, \quad (5.9)$$