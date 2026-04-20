from our theorem. Inserting this ansatz into our differential equation we obtain

$$\hat{u}_2''(z) + p(z)\hat{u}_2'(z) + q(z)\hat{u}_2(z) = -c \left( \frac{2}{z} u_1'(z) + \left( \frac{p(z)}{z} - \frac{1}{z^2} \right) u_1(z) \right),$$

(4.51)

where the logarithmic terms cancel since $u_1$ solves our equation. For the generalized power series of the expression on the right-hand side we obtain

$$-cz^{\alpha_2-2} \sum_{j=m}^{\infty} \left( (2j-m)h_{1,j-m} + \sum_{k=1}^{j-m} p_k h_{1,j-m-k} \right) z^j.$$

(4.52)

Now comparing powers between both sides (for the left-hand sides the coefficients are given by (4.35) with $\alpha = \alpha_2$) we obtain the following cases: For $j < m$ the right-hand side does not contribute and thus $h_{2,j}, 1 \leq j < m$, are uniquely determined by $h_{2,0} = 1$ and

$$h_{2,j} = \frac{-1}{(j-m)j} \sum_{k=1}^{j} \left( (\alpha_2 + j-k)p_k + q_k \right) h_{2,j-k}.$$

(4.53)

At $j = m$ we obtain

$$\sum_{k=1}^{m} \left( (\alpha_1-k)p_k + q_k \right) h_{2,m-k} = -cm.$$

(4.54)

If $m = 0$ this equation is trivially satisfied and we can choose any (nonzero) $c$. Otherwise we obtain the unique value

$$c = -\frac{1}{m} \sum_{k=1}^{m} \left( (\alpha_1-k)p_k + q_k \right) h_{2,m-k}, \quad m \in \mathbb{N}.$$

(4.55)

Finally, for $j > m$ we obtain

$$h_{2,j} = \frac{-1}{(j-m)j} \sum_{k=1}^{j} \left( (\alpha_2 + j-k)p_k + q_k \right) h_{2,j-k}$$

$$-c \left( (2j-m)h_{1,j-m} + \sum_{k=1}^{j-m} p_k h_{1,j-m-k} \right).$$

(4.56)

which determines the remaining coefficients uniquely once a value for $h_{2,m}$ is chosen.

Furthermore, the conditions on $p$ and $q$ are optimal:

**Theorem 4.6** (Fuchs). The equation (4.20) has two solutions $u_1(z), u_2(z)$ as in the previous theorem if and only if $p(z)$ and $zq(z)$ have at most first-order poles.