of the probability $v_n$ that the particle first returns to its initial state $i = 0$ in precisely $n$ steps. Obviously, $v_n$ is just the probability of the particle making the consecutive transitions $0 \rightarrow 1 \rightarrow \cdots \rightarrow n - 1$ in the first $n - 1$ steps and then returning to the state $i = 0$ in the $n$th step. Therefore, since the transition $i - 1 \rightarrow i$ has probability $p_{i-1}$,

$$v_1 = 1 - p_0,$$
$$v_n = p_0 p_1 \cdots p_{n-2}(1 - p_{n-1}),$$
$$n = 2, 3, \ldots$$

By definition, the probability of eventually returning to the initial state $i = 0$ is

$$v = \sum_{n=0}^{\infty} v_n.$$

Therefore

$$v = 1 - p_0 + p_0(1 - p_1) + p_0 p_1(1 - p_2) + \cdots = 1 - \lim_{n \to \infty} p_0 p_1 \cdots p_n,$$

in keeping with (7.19).

17. Limiting Probabilities. Stationary Distributions

As before, let $p_j(n)$ be the probability of the system occupying the state $\varepsilon_j$ after $n$ steps. Then, under certain conditions, the numbers $p_j(n), j = 1, 2, \ldots$ approach definite limits as $n \rightarrow \infty$:

**THEOREM 7.4.** Given a Markov chain with a finite number of states $\varepsilon_1, \ldots, \varepsilon_m$, each accessible from every other state, suppose

$$\min_{i,j} p_{ij}(N) = \delta > 0$$

(7.20)

for some $N$. Then

$$\lim_{n \to \infty} p_j(n) = p_j^*.$$

where the numbers $p_j^*, j = 1, \ldots, m$, called the limiting probabilities, do not depend on the initial probability distribution and satisfy the inequalities

$$\max_i |p_{ij}(n) - p_j^*| \leqslant Ce^{-Dn},$$
$$|p_j(n) - p_j^*| \leqslant Ce^{-Dn}$$

(7.21)

for suitable positive constants $C$ and $D$.

**Proof.** Let

$$r_j(n) = \min_i p_{ij}(n),$$
$$R_j(n) = \max_i p_{ij}(n).$$

7 In other words, suppose the probability of the system going from any state $\varepsilon_i$ to any other state $\varepsilon_j$ in some (fixed) number of steps $N$ is positive.

8 Clearly, the numbers $p_j^*$ are nonnegative and have the sum 1 (why?). Hence they are candidates for the probabilities of a discrete probability distribution, as implicit in the term "limiting probabilities."