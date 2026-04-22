The function $f$ is the **uniform limit** of the sequence $(f_n)$ and we write

$$f_n \Rightarrow f \quad \text{or} \quad \lim_{n \to \infty} f_n = f.$$

Your intuition about uniform convergence is crucial. Draw a tube $V$ of vertical radius $\epsilon$ around the graph of $f$. For $n$ large, the graph of $f_n$ must lie wholly in $V$. See Figure 87. Absorb this picture!

**Figure 87** The graph of $f_n$ is contained in the $\epsilon$-tube around the graph of $f$.

It is clear that uniform convergence implies pointwise convergence. The difference between the two definitions is apparent in the following standard example.

**Example** Define $f_n : (0,1) \to \mathbb{R}$ by $f_n(x) = x^n$. For each $x \in (0,1)$ it is clear that $f_n(x) \to 0$. The functions converge pointwise to the zero function as $n \to \infty$. They do not converge uniformly. For if $\epsilon = 1/10$ then the point $x_n = \sqrt[n]{1/2}$ is sent by $f_n$ to $1/2$ and thus not all points $x$ satisfy (1) when $n$ is large. The graph of $f_n$ fails to lie in the $\epsilon$-tube $V$. See Figure 88.

The lesson to draw is that pointwise convergence of a sequence of functions is frequently too weak a concept. Gravitating toward uniform convergence we ask the natural question:

*Which properties of functions are preserved under uniform convergence?*