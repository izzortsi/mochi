if it were smaller than $n - 1$, all iterates would stay in the interior of $I_1$, a contradiction. So the prime period is $n$ and we are done.

So when does the first period three orbit appear for the logistic map $L_\mu$? For $\mu = 4$ the equation $L^3_\mu(x) = x$ can be solved using Mathematica showing that there are two period three orbits. One of them is given by

$$\left\{ \frac{1}{2}(1 + c), 1 - c^2, 4c^2(1 - c^2) \right\}, \quad c = \cos\left(\frac{\pi}{9}\right),$$

(11.7)

the other one is slightly more complicated. Since there are no period three orbits for $0 \leq \mu \leq 3$, there must be a local change in the zero set of $L^3_\mu(x) - x$. Hence we need to search for a solution of the system of equations $L^3_\mu(x) = x, (L^3_\mu)'(x) = 1$. Plugging this equation into Mathematica gives a rather complicated solution for the orbit, but a simple one for $\mu = 1 + 2\sqrt{2} = 3.828$. Since this is the only solution for $\mu \in \mathbb{R}$ other than $x = 0, \mu = 1$ we know that the logistic equation has orbits of all periods for $\mu \geq 1 + 2\sqrt{2}$.

In fact, this result is only a special case of a much more general theorem due to Sarkovskii. We first introduce a quite unusual ordering of the natural numbers as follows. First note that all integers can be written as $2^m(2n + 1)$ with $m, n \in \mathbb{N}_0$. Now for all $m \in \mathbb{N}_0$ and $n \in \mathbb{N}$ we first arrange them by $m$ and then, for equal $m$, by $n$ in increasing order. Finally we add all powers of two ($n = 0$) in decreasing order. That is, denoting the Sarkovskii ordering by $\succ$ we have

$$3 \succ 5 \succ \cdots \succ 2 \cdot 3 \succ 2 \cdot 5 \succ \cdots \succ 2^m(2n + 1) \succ \cdots \succ 2^2 \succ 2 \succ 1.$$ (11.8)

With this notation the following claim holds.

**Theorem 11.2** (Sarkovskii). Suppose $f: I \rightarrow I$ is continuous and has an orbit of period $m$. Then it also has orbits with prime period $n$ for all $m \succ n$.

The proof is in spirit similar to that of Lemma 11.1 but quite tedious. Hence we omit it here. It can be found (e.g.) in [33].

**Problem 11.2.** Show items (i) and (ii) from the proof of Lemma 11.1.

11.3. On the definition of chaos

In this section we want to define when we consider a discrete dynamical system to be chaotic. We return to our abstract setting and consider a continuous map $f: M \rightarrow M$ on a metric space $M$.

It is quite clear from the outset, that defining chaos is a difficult task. Hence it will not surprise you that different authors use different definitions. But before giving you a definition, let us reflect on the problem for a moment.

First of all, you will certainly agree that a chaotic system should exhibit sensitive dependence on initial conditions. That is, there should be