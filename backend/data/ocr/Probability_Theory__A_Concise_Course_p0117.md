Proof. It follows from (8.4) that

$$p_{ij}(t + \Delta t) = \sum_k p_{ik}(t) p_{kj}(\Delta t) = \sum_k p_{ik}(\Delta t) p_{kj}(t).$$

Hence, using (8.12) and (8.13), we have

$$\frac{p_{ij}(t + \Delta t) - p_{ij}(t)}{\Delta t} = \sum_k p_{ik}(t) \left[ \lambda_{kj} + \frac{o(\Delta t)}{\Delta t} \right] = \sum_k \left[ \lambda_{ik} + \frac{o(\Delta t)}{\Delta t} \right] p_{kj}(t).$$

Both sums have definite limits as $\Delta t \to 0$. In fact,

$$\lim_{\Delta t \to 0} \sum_k p_{ik}(t) \left[ \lambda_{kj} + \frac{o(\Delta t)}{\Delta t} \right] = \sum_k p_{ik}(t) \lambda_{kj},$$

$$\lim_{\Delta t \to 0} \sum_k \left[ \lambda_{ik} + \frac{o(\Delta t)}{\Delta t} \right] p_{kj}(t) = \sum_k \lambda_{ik} p_{kj}(t).$$

Therefore

$$\lim_{\Delta t \to 0} \frac{p_{ij}(t + \Delta t) - p_{ij}(t)}{\Delta t} = p'_{ij}(t)$$

also exists, and equals (8.16) and (8.17).

Remark 1. It follows from (8.12) and the condition

$$\sum_j p_{ij}(\Delta t) = 1$$

that

$$\sum_{j \neq i} \lambda_{ij} = \lambda_i.$$

Remark 2. The Kolmogorov equations hold not only in the case of a finite number of states, but also in the case of a countably infinite number of states $\varepsilon_1, \varepsilon_2, \ldots$ if we make certain additional assumptions. In fact, suppose the error terms $o(\Delta t)$ in (8.12) are such that

$$\frac{o(\Delta t)}{\Delta t} \to 0 \text{ as } \Delta t \to 0$$

uniformly in all $i$ and $j$. Then the forward equations (8.14) hold if for any fixed $j$, there is a constant $C < \infty$ such that

$$\lambda_{ij} < C, \quad i = 1, 2, \ldots,$$

while the backward equations (8.15) hold if the series (8.18) converges.

Example 1 (The Poisson process). As in Example 4, p. 73, consider a "random flow of events" with density $\lambda$, and let $\xi(t)$ be the number of events which occur in time $t$. Then $\xi(t)$ is called a Poisson process. Clearly $\xi(t)$ is a Markov process, whose states can be described by the integers 0, 1, 2, $\ldots$. Moreover, $\xi(t)$ can only leave the state $i$ by going into the state $i + 1$.