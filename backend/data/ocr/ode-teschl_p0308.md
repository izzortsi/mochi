Lemma 11.3. Suppose $f : M \to M$ is chaotic. Then it exhibits sensitive dependence on initial conditions.

Proof. First observe that there is a number $\delta$ such that for all $x \in M$ there exists a periodic point $q \in M$ whose orbit is of distance at least $4\delta$ from $x$. In fact, since $M$ is not finite we can pick two periodic points $q_1$ and $q_2$ with disjoint orbits. Let $8\delta$ be the distance between the two orbits. Then, by the triangle inequality the distance from at least one orbit to $x$ must be larger than $4\delta$.

Fix $x \in M$ and $\varepsilon > 0$ and let $q$ be a periodic orbit with distance at least $4\delta$. Without restriction we assume $\varepsilon < \delta$. Since periodic orbits are dense, there is a periodic point $p \in B_\varepsilon(x)$ of period $n$.

Now the idea is as follows. By transitivity there is a $y$ close to $x$ which gets close to $q$ after $k$ iterations. Now iterate another $j$ times such that $k+j$ is a multiple of $n$. Since $0 \leq j < n$ is small, $f^{k+j}(y)$ is still close to the orbit of $q$. Hence $f^{k+j}(y)$ is far away from $x$ and $f^{k+j}(p) = p$ is close to $x$. Since $f^{k+j}(x)$ cannot be close to both, we have sensitive dependence on initial conditions.

Now to the boring details. Let $V = \bigcap_{i=0}^{n-1} f^{-i}(B_\delta(f^i(q)))$ (i.e., $z \in V$ implies that $f^i(z) \in B_\delta(f^i(q))$ for $0 \leq i < n$). By transitivity there is a $y \in B_\varepsilon(x)$ such that $f^k(y) \in V$ and hence $f^{k+j}(y) \in B_\delta(f^j(q))$. Now by the triangle inequality and $f^{k+j}(p) = p$ we have

$$d(f^{k+j}(p), f^{k+j}(y)) \geq d(x, f^j(q)) - d(f^j(q), f^{k+j}(y)) - d(p, x)$$

$$> 4\delta - \delta - \delta = 2\delta.$$

Thus either $d(f^{k+j}(y), f^{k+j}(x)) > \delta$ or $d(f^{k+j}(p), f^{k+j}(x)) > \delta$ and we are done.

Now we have defined what a chaotic dynamical system is, but we haven’t seen one yet! Well, in fact we have, I claim that the logistic map is chaotic for $\mu = 4$.

To show this we will take a detour via the tent map

$$M = [0, 1], \quad T_\mu(x) = \frac{\mu}{2}(1 - |2x - 1|)$$

using topological equivalence. The tent map $T_2$ is equivalent to the logistic map $L_4$ by virtue of the homeomorphism $\varphi(x) = \sin(\frac{\pi x}{2})^2$ (Problem 11.4). Hence it follows that $L_4$ is chaotic once we have shown that $T_2$ is.

The main advantage of $T_2$ is that the iterates are easy to compute. Using

$$T_2(x) = \begin{cases} 2x, & 0 \leq x \leq \frac{1}{2}, \\ 2 - 2x, & \frac{1}{2} \leq x \leq 1, \end{cases}$$

(11.13)