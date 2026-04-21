The fact that $\chi_{\mathbb{Q}}$ fails to be Riemann integrable is actually a failing of Riemann integration theory, for the function $\chi_{\mathbb{Q}}$ is fairly tame. Its integral ought to exist and it ought to be 0, because the undergraph is just countably many line segments of height 1, and their area ought to be 0.

A handy consequence of Riemann’s Integrability Criterion is the

**22 Sandwich Principle** $f : [a, b] \to \mathbb{R}$ is Riemann integrable if, given $\epsilon > 0$, there are functions $g, h \in \mathbb{R}$ such that $g \leq f \leq h$ and $\int_{a}^{b} h(x) - g(x) \, dx \leq \epsilon$.

**Proof** For any partition $P$ it is clear that

$$L(g, P) \leq L(f, P) \leq U(f, P) \leq U(h, P).$$

Let $\epsilon > 0$ be given. Since $g$ and $h$ are Riemann integrable, there is a $\delta > 0$ such that if mesh $P < \delta$ then their Darboux sums differ from their integrals by $< \epsilon/3$, and $\int_{a}^{b} h(x) - g(x) \, dx \leq \epsilon/3$. Thus

$$\int_{a}^{b} g(x) \, dx - L(g, P) < \frac{\epsilon}{3} \text{ and } U(h, P) - \int_{a}^{b} h(x) \, dx < \frac{\epsilon}{3},$$

from which it follows that

$$\int_{a}^{b} g(x) \, dx - \frac{\epsilon}{3} < L(g, P) \leq L(f, P) \leq U(f, P) \leq U(h, P) < \int_{a}^{b} h(x) \, dx + \frac{\epsilon}{3}.$$

Then $\int_{a}^{b} h(x) \, dx - \int_{a}^{b} g(x) \, dx = \int_{a}^{b} h(x) - g(x) \, dx \leq \epsilon/3$ gives $U(f, P) - L(f, P) < \epsilon$ and Riemann’s Integrability Criterion implies that $f$ is Riemann integrable. See Figure 74.

**Figure 74** The graphs of $g$ and $h$ sandwich the graph of $f$.

**Example** Let $f : [0, 1] \to \mathbb{Q}$ be defined as $f(p/q) = 1/q$ when $p/q \in \mathbb{Q}$ is written in lowest terms, and $f(x) = 0$ when $x$ is irrational. This is the **rational ruler function**.