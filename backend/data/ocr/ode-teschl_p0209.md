Problem 6.12. Which of the following equations determine a submanifold of codimension one of $\mathbb{R}^2$?

(i) $x = 0$.
(ii) $x^2 + y^2 = 1$.
(iii) $x^2 - y^2 = 1$.
(iv) $x^2 + y^2 = 0$.

Which of them is transversal to $f(x,y) = (x,-y)$, $f(x,y) = (1,0)$, or $f(x,y) = (0,1)$, respectively.

Problem 6.13. At what points is $\Sigma = \{(x,y) \in \mathbb{R}^2 | x^2 + y^2 = 1\}$ transversal to the vector field $f(x,y) = (y,-2x)$?

Problem 6.14. The vector field $f(x,y) = (-y,x)$ has the periodic solution $(\cos(t),\sin(t))$. Compute the Poincaré map corresponding to $\Sigma = \{(x,y) \in \mathbb{R}^2 | x > 0, y = 0\}$

6.5. Stability of fixed points

As already mentioned earlier, one of the key questions is the long-time behavior of the dynamical system (6.7). In particular, one often wants to know whether the solution is stable or not. But first we need to define what we mean by stability. Usually one looks at a fixed point and wants to know what happens if one starts close to it. Hence we make the following definition:

A fixed point $x_0$ of $f(x)$ is called (Liapunov) stable if for any given neighborhood $U(x_0)$ there exists another neighborhood $V(x_0) \subseteq U(x_0)$ such that any solution starting in $V(x_0)$ remains in $U(x_0)$ for all $t \geq 0$. In this respect recall that a solution remaining in a compact set exists for all positive times by Lemma 6.3. A fixed point which is not stable will be called unstable.

Similarly, a fixed point $x_0$ of $f(x)$ is called asymptotically stable if it is stable and if there is a neighborhood $U(x_0)$ such that

$$\lim_{t \to \infty} |\phi(t,x) - x_0| = 0 \quad \text{for all } x \in U(x_0).$$

Note that (6.26) does not automatically imply stability (Problem 6.16).

Finally, a fixed point $x_0$ of $f(x)$ is called exponentially stable if there are constants $\alpha,\delta,C > 0$ such that

$$|\phi(t,x) - x_0| \leq C e^{-\alpha t}|x - x_0|, \quad |x - x_0| \leq \delta.$$

Clearly (6.27) implies stability as well as (6.26).

Example. Consider $\dot{x} = ax$ in $\mathbb{R}^1$. Then $x_0 = 0$ is stable if and only if $a \leq 0$ and exponentially stable if and only if $a < 0$.