(a) If $x > 0^*$, what are $C$ and $D$?
(b) If $x < 0^*$, what are they?
(c) Prove that $x$ uniquely determines $y$.

12. Prove that there exists no smallest positive real number. Does there exist a smallest positive rational number? Given a real number $x$, does there exist a smallest real number $y > x$?

13. Let $b = \text{l.u.b.} S$, where $S$ is a bounded nonempty subset of $\mathbb{R}$.
(a) Given $\epsilon > 0$ show that there exists an $s \in S$ with
$$b - \epsilon \leq s \leq b.$$
(b) Can $s \in S$ always be found so that $b - \epsilon < s < b$?
(c) If $x = A|B$ is a cut in $\mathbb{Q}$, show that $x = \text{l.u.b.} A$.

14. Prove that $\sqrt{2} \in \mathbb{R}$ by showing that $x \cdot x = 2$ where $x = A|B$ is the cut in $\mathbb{Q}$ with $A = \{r = \mathbb{Q} : r \leq 0 \text{ or } r^2 < 2\}$. [Hint: Use Exercise 13. See also Exercise 16, below.]

15. Given $y \in \mathbb{R}$, $n \in \mathbb{N}$, and $\epsilon > 0$, show that for some $\delta > 0$, if $u \in \mathbb{R}$ and $|u - y| < \delta$ then $|u^n - y^n| < \epsilon$. [Hint: Prove the inequality when $n = 1$, $n = 2$, and then do induction on $n$ using the identity
$$u^n - y^n = (u - y)(u^{n-1} + u^{n-2}y + \ldots + y^{n-1}).$$]

16. Given $x > 0$ and $n \in \mathbb{N}$, prove that there is a unique $y > 0$ such that $y^n = x$. That is, the $n^{\text{th}}$ root of $x$ exists and is unique. [Hint: Consider
$$y = \text{l.u.b.}\{s \in \mathbb{R} : s^n \leq x\}.$$
Then use Exercise 15 to show that $y^n$ can be neither $< x$ nor $> x.$]

17. Let $x, y \in \mathbb{R}$ and $n \in \mathbb{N}$ be given.
(a) Prove that $x < y$ if and only if $x^n < y^n$.
(b) Infer from Exercise 16 that $x < y$ if and only if the $n^{\text{th}}$ root of $x$ is less than the $n^{\text{th}}$ root of $y$.

18. Prove that real numbers correspond bijectively to decimal expansions not terminating in an infinite strings of nines, as follows. The decimal expansion of $x \in \mathbb{R}$ is $N.x_1x_2 \ldots$, where $N$ is the largest integer $\leq x$, $x_1$ is the largest integer $\leq 10(x - N)$, $x_2$ is the largest integer $\leq 100(x - (N + x_1/10))$, and so on.
(a) Show that each $x_k$ is a digit between 0 and 9.
(b) Show that for each $k$ there is an $\ell \geq k$ such that $x_\ell \neq 9$.
(c) Conversely, show that for each such expansion $N.x_1x_2 \ldots$ not terminating in an infinite string of nines, the set
$$\{N, N + \frac{x_1}{10}, N + \frac{x_1}{10} + \frac{x_2}{100}, \ldots\}$$