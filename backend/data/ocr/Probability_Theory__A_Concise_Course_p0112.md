13. Find the stationary distribution $p_0^0, p_1^0, \ldots$ for the Markov chain whose only nonzero transition probabilities are

$$p_{j1} = \frac{j}{j+1}, \quad p_{j,j+1} = \frac{1}{j+1} \quad (j = 1, 2, \ldots).$$

Ans. $p_j^0 = \frac{1}{(e-1)j!}$.

14. Two gamblers $A$ and $B$ repeatedly play a game such that $A$'s probability of winning is $p$, while $B$'s probability of winning is $q = 1 - p$. Each bet is a dollar, and the total capital of both players is $m$ dollars. Find the probability of each player being ruined, given that $A$'s initial capital is $j$ dollars.

Hint. Let $\varepsilon_j$ denote the state in which $A$ has $j$ dollars. Then the situation is described by a Markov chain whose only nonzero transition probabilities are

$$p_{00} = 1, \quad p_{mm} = 1,$$
$$p_{j,j+1} = p, \quad p_{j,j-1} = q \quad (j = 1, \ldots, m-1).$$

Ans. Let $\hat{\rho}_j = \lim_{n \to \infty} p_{j0}(n)$ be the probability of $A$'s ruin, starting with an initial capital of $j$ dollars. Then

$$\hat{\rho}_1 = p\hat{\rho}_2 + q, \quad \hat{\rho}_{m-1} = q\hat{\rho}_{m-2},$$
$$\hat{\rho}_j = q\hat{\rho}_{j-1} + p\hat{\rho}_{j+1} \quad (j = 2, \ldots, m-2)$$

(why?). Solving this system of equations, we get

$$\hat{\rho}_j = 1 - \frac{j}{m}$$

(7.33)

if $p = q$ (as in Example 3, p. 29), and

$$\hat{\rho}_j = \frac{1 - (p/q)^{m-j}}{1 - (p/q)^m}$$

(7.34)

if $p \neq q$. The probability of $B$'s ruin is $1 - \hat{\rho}_j$.

15. In the preceding problem, prove that if $p > q$, then $A$'s probability of ruin increases if the stakes are doubled.

16. Prove that a gambler playing against an adversary with unlimited capital is certain to be ruined unless his probability of winning in each play of the game exceeds $\frac{1}{2}$.

Hint. Let $m \to \infty$ in (7.33) and (7.34).