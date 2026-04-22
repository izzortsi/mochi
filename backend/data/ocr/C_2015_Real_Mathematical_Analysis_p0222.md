1 Uniform Convergence and $C^0[a, b]$

Points converge to a limit if they get physically closer and closer to it. What about a sequence of functions? When do functions converge to a limit function? What should it mean that they get closer and closer to a limit function? The simplest idea is that a sequence of functions $f_n$ converges to a limit function $f$ if for each $x$, the values $f_n(x)$ converge to $f(x)$ as $n \to \infty$. This is called **pointwise convergence**: A sequence of functions $f_n : [a, b] \to \mathbb{R}$ **converges pointwise** to a limit function $f : [a, b] \to \mathbb{R}$ if for each $x \in [a, b]$ we have

$$\lim_{n \to \infty} f_n(x) = f(x).$$

The function $f$ is the **pointwise limit** of the sequence $(f_n)$ and we write

$$f_n \to f \quad \text{or} \quad \lim_{n \to \infty} f_n = f.$$

Note that the limit refers to $n \to \infty$, not to $x \to \infty$. The same definition applies to functions from one metric space to another.

The requirement of uniform convergence is stronger. The sequence of functions $f_n : [a, b] \to \mathbb{R}$ **converges uniformly** to the limit function $f : [a, b] \to \mathbb{R}$ if for each $\epsilon > 0$ there is an $N$ such that for all $n \geq N$ and all $x \in [a, b]$,

$$|f_n(x) - f(x)| < \epsilon.$$

© Springer International Publishing Switzerland 2015
C.C. Pugh, *Real Mathematical Analysis*, Undergraduate Texts in Mathematics, DOI 10.1007/978-3-319-17771-7_4