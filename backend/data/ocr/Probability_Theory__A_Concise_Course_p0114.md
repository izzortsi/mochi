process$^2$ or simply a Markov process (as opposed to a Markov chain, which might be called a “discrete Markov process”).

Let

$$p_j(t) = \mathbf{P} \{ \xi(t) = \varepsilon_j \}, \quad j = 1, 2, \ldots$$

be the probability that the system will be in the state $\varepsilon_j$ at time $t$. Then, by arguments which hardly differ from those given on p. 84, we have

$$p_j(0) = p_j^0, \quad j = 1, 2, \ldots,$$

$$p_j(s + t) = \sum_k p_k(s)p_{kj}(t), \quad j = 1, 2, \ldots$$

and

$$p_{ij}(0) = \begin{cases} 1 & \text{if } j = i, \\ 0 & \text{if } j \neq i, \end{cases}$$

$$p_{ij}(s + t) = \sum_k p_{ik}(s)p_{kj}(t), \quad i, j = 1, 2, \ldots$$

for arbitrary $s$ and $t$ [cf. (7.5) and (7.7)].

Theorem 8.1. Given a Markov process in the state $\varepsilon$ at time $t = t_0$, let $\tau$ be the (random) time it takes the process to leave $\varepsilon$ by going to some other state.$^3$ Then

$$\mathbf{P} \{ \tau > t \} = e^{-\lambda t}, \quad t \geqslant 0,$$

where $\lambda$ is a nonnegative constant.

Proof. Clearly $\mathbf{P} \{ \tau > t \}$ is some function of $t$, say

$$\varphi(t) = \mathbf{P} \{ \tau > t \}, \quad t \geqslant 0.$$

If $\tau > s$, then the process will be in the same state at time $t_0 + s$ as at time $t_0$, and hence its subsequent behavior will be the same as if $s = 0$. In particular,

$$\mathbf{P} \{ \tau > s + t \mid \tau > s \} = \varphi(t)$$

is the probability of the event $\{ \tau > s + t \}$ given that $\tau > s$. It follows that

$$\mathbf{P} \{ \tau > s + t \} = \mathbf{P} \{ \tau > s + t \mid \tau > s \}\mathbf{P} \{ \tau > s \} = \varphi(t)\varphi(s),$$

and hence

$$\varphi(s + t) = \varphi(s)\varphi(t)$$

or equivalently

$$\ln \varphi(s + t) = \ln \varphi(s) + \ln \varphi(t)$$

$^2$ More exactly, a continuous Markov process with stationary transition probabilities, where we allude to the fact that the numbers (8.1) do not depend on $s$ (cf. footnote 2, p. 84).

$^3$ Here we prefer to talk about states of the process rather than states of the system (as in Chap. 7).