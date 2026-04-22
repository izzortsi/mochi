48. Prove or supply a counterexample: If $f$ is a nondecreasing real-valued function on $[0,1]$ then there is a sequence $f_n$, $n = 1,2,\ldots$, of continuous functions on $[0,1]$ such that for each $x$ in $[0,1]$, $\lim_{n \to \infty} f_n(x) = f(x)$.

49. Show that if $f$ is a homeomorphism of $[0,1]$ onto itself then there is a sequence of polynomials $P_n(x)$, $n = 1,2,\ldots$, such that $P_n \rightarrow f$ uniformly on $[0,1]$ and each $P_n$ is a homeomorphism of $[0,1]$ onto itself. [Hint: First assume that $f$ is $C^1$.]

50. Let $f$ be a $C^2$ function on the real line. Assume that $f$ is bounded with bounded second derivative. Let $A = \sup_x |f(x)|$ and $B = \sup_x |f''(x)|$. Prove that

$$\sup_x |f'(x)| \leq 2\sqrt{AB}.$$

51. Let $f$ be continuous on $\mathbb{R}$ and let

$$f_n(x) = \frac{1}{n} \sum_{k=0}^{n-1} f\left(x + \frac{k}{n}\right).$$

Prove that $f_n(x)$ converges uniformly to a limit on every finite interval $[a,b]$.

52. Let $f$ be a real-valued continuous function on the compact interval $[a,b]$. Given $\epsilon > 0$, show that there is a polynomial $p$ such that

$$p(a) = f(a), \quad p'(a) = 0, \quad \text{and} \quad |p(x) - f(x)| < \epsilon$$

for all $x \in [a,b]$.

53. A function $f : [0,1] \rightarrow \mathbb{R}$ is said to be **upper semicontinuous** if, given $x \in [0,1]$ and $\epsilon > 0$, there exists a $\delta > 0$ such that $|y - x| < \delta$ implies that $f(y) < f(x) + \epsilon$. Prove that an upper semicontinuous function on $[0,1]$ is bounded above and attains its maximum value at some point $p \in [0,1]$.

54. Let $f(x), 0 \leq x \leq 1$, be a continuous real function with continuous derivative $f'(x)$. Let $M$ be the supremum of $|f'(x)|$, $0 \leq x \leq 1$. Prove the following: For $n = 1,2,\ldots,$

$$\left| \frac{1}{n} \sum_{k=0}^{n-1} f\left(\frac{k}{n}\right) - \int_0^1 f(x) \, dx \right| \leq \frac{M}{2n}.$$

55. Let $K$ be a compact subset of $\mathbb{R}^m$ and let $(B_j)$ be a sequence of open balls which cover $K$. Prove that there is an $\epsilon > 0$ such that each $\epsilon$-ball centered at a point of $K$ is contained in at least one of the balls $B_j$.

56. Let $f$ be a continuous real-valued function on $[0,\infty)$ such that

$$\lim_{x \to \infty} \left( f(x) + \int_0^x f(t) \, dt \right)$$

exists (and is finite). Prove that $\lim_{x \to \infty} f(x) = 0$.