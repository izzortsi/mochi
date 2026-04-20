It follows that

$$R_j(kN) - r_j(kN) < d^k, \quad k = 1, 2, \ldots$$

But, as already noted, the sequence $r_j(n), n = 1, 2, \ldots$ is nondecreasing while the sequence $R_j(n), n = 1, 2, \ldots$ is nonincreasing, and moreover $r_j(n) < R_j(n)$. Hence (7.22) shows that both sequences have the same limit

$$p_j^* = \lim_{n \to \infty} r_j(n) = \lim_{n \to \infty} R_j(n).$$

Moreover, it is clear that

$$|p_{ij}(n) - p_j^*| \leq R_j(n) - r_j(n) < d^{(n/N)-1}, \quad i = 1, \ldots, n.$$

Therefore, given any initial distribution $p_i^0, i = 1, \ldots, n$, we have

$$|p_j(n) - p_j^*| = \left| \sum_{i=1}^{m} p_i^0 p_{ij}(n) - p_j^* \right| = \left| \sum_{i=1}^{m} p_i^0 [p_{ij}(n) - p_j^*] \right|$$

$$< \sum_{i=1}^{m} p_i^0 [R_j(n) - r_j(n)] = R_j(n) - r_j(n) < d^{(n/N)-1}, \quad d < 1.$$

But then

$$\lim_{n \to \infty} |p_j(n) - p_j^*| = 0,$$

i.e.,

$$\lim_{n \to \infty} p_j(n) = p_j^*$$

independently of the initial distribution, as asserted. Choosing

$$C = \frac{1}{d}, \quad D = -\frac{1}{N} \ln d$$

in (7.23) and (7.24), we get (7.21).

Corollary. The limiting probabilities $p_j^*, j = 1, \ldots, m$ are a solution of the system of linear equations

$$p_j^* = \sum_{i=1}^{m} p_i^* p_{ij}, \quad j = 1, \ldots, m.$$

Proof. According to (7.5),

$$p_j(n) = \sum_{i=1}^{m} p_i(n-1) p_{ij}.$$

But this becomes (7.25), after taking the limit as $n \to \infty$.

Remark. Given an arbitrary Markov chain with states $\varepsilon_1, \varepsilon_2, \ldots$, let $p_i^0, i = 1, 2, \ldots$ be numbers such that

$$p_i^0 > 0, \quad \sum_{i} p_i^0 = 1$$

and

$$p_j^0 = \sum_{i} p_i^0 p_{ij}, \quad j = 1, 2, \ldots$$