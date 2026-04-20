Then

$$r_j(n+1) = \min_i p_{ij}(n+1) = \min_i \sum_{k=1}^{m} p_{ik} p_{kj}(n) \geq \min_i \sum_{k=1}^{m} p_{ik} r_j(n) = r_j(n),$$

$$R_j(n+1) = \max_i p_{ij}(n+1) = \max_i \sum_{k=1}^{m} p_{ik} p_{kj}(n) \leq \max_i \sum_{k=1}^{m} p_{ik} R_j(n) = R_j(n),$$

and hence

$$r_j(1) < r_j(2) < \cdots < r_j(n) < \cdots < R_j(n) < \cdots < R_j(2) < R_j(1).$$

Let $N$ be the same as in (7.20). Then, for arbitrary states $\varepsilon_\alpha$ and $\varepsilon_\beta$,

$$\sum_{k=1}^{m} p_{\alpha k}(N) = \sum_{k=1}^{m} p_{\beta k}(N) = 1.$$

Therefore

$$\sum_{k=1}^{m} p_{\alpha k}(N) - \sum_{k=1}^{m} p_{\beta k}(N) = \sum_{k=1}^{+} [p_{\alpha k}(N) - p_{\beta k}(N)] + \sum_{k=1}^{-} [p_{\alpha k}(N) - p_{\beta k}(N)] = 0,$$

where the sum $\sum^+$ ranges over all $k$ such that $p_{\alpha k}(N) - p_{\beta k}(N) > 0$ and $\sum^-$ ranges over all $k$ such that $p_{\alpha k}(N) - p_{\beta k}(N) < 0$. Clearly, (7.20) implies

$$\max_{\alpha,\beta} \sum_{k}^{+} [p_{\alpha k}(N) - p_{\beta k}(N)] = d < 1,$$

for some positive number $d$.

Next we estimate the differences $R_j(n) - r_j(n)$ and $R_j(n+N) - r_j(n+N)$:

$$R_j(N) - r_j(N) = \max_{\alpha} p_{\alpha j}(N) - \min_{\beta} p_{\beta j}(N)$$

$$= \max_{\alpha,\beta} [p_{\alpha j}(N) - p_{\beta j}(N)]$$

$$\leq \max_{\alpha,\beta} \sum_{k}^{+} [p_{\alpha k}(N) - p_{\beta k}(N)] = d,$$

$$R_j(n+N) - r_j(n+N) = \max_{\alpha,\beta} [p_{\alpha j}(n+N) - p_{\beta j}(n+N)]$$

$$= \max_{\alpha,\beta} \sum_{k=1}^{m} [p_{\alpha k}(N) - p_{\beta k}(N)] p_{kj}(n)$$

$$\leq \max_{\alpha,\beta} \left\{ \sum_{k}^{+} [p_{\alpha k}(N) - p_{\beta k}(N)] R_j(n) \right\}$$

$$+ \sum_{k}^{-} [p_{\alpha k}(N) - p_{\beta k}(N)] r_j(n) \right\}$$

$$= \max_{\alpha,\beta} \left\{ \sum_{k}^{+} [p_{\alpha k}(N) - p_{\beta k}(N)] [R_j(n) - r_j(n)] \right\}$$

$$= d[R_j(n) - r_j(n)].$$