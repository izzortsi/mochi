If none of the eigenvalues of $d(f^n)$ at a periodic point $p$ lies on the unit circle, then $p$ is called **hyperbolic**. Note that by the chain rule the derivative is given by

$$d(f^n)(p) = \prod_{x \in \gamma_+(p)} df_x = df_{f^{n-1}(p)} \cdots df_{f(p)} df_p.$$  

(10.17)

Finally, stability of a periodic point can be defined as in the case of differential equations. A periodic orbit $\gamma_+(p)$ of $f(x)$ is called **stable** if for any given neighborhood $U(\gamma_+(p))$ there exists another neighborhood $V(\gamma_+(p)) \subseteq U(\gamma_+(p))$ such that any point in $V(\gamma_+(p))$ remains in $U(\gamma_+(p))$ under all iterations. Note that this is equivalent to the fact that for any given neighborhood $U(p)$ there exists another neighborhood $V(p) \subseteq U(p)$ such that any point in $x \in V(p)$ satisfies $f^{nm}(x) \in U(p)$ for all $m \in \mathbb{N}_0$.

Similarly, a periodic orbit $\gamma_+(p)$ of $f(x)$ is called **asymptotically stable** if it is stable and attracting.

Pick a periodic point $p$ of $f$, $f^n(p) = p$, and an open neighborhood $U(p)$ of $p$. A **Liapunov function** is a continuous function

$$L: U(p) \to \mathbb{R}$$  

(10.18)

which is zero at $p$, positive for $x \neq p$, and satisfies

$$L(x) \geq L(f^n(x)), \quad x, f^n(x) \in U(p) \setminus \{p\}.$$  

(10.19)

It is called a **strict Liapunov function** if equality in (10.19) never occurs.

As in the case of differential equations we have the following analog of Liapunov’s theorem (Problem 10.6).

**Theorem 10.2.** Suppose $p$ is a periodic point of $f$. If there is a Liapunov function $L$, then $p$ is stable. If, in addition, $L$ is strict, then $p$ is asymptotically stable.

**Problem 10.3.** Consider the logistic map $L_\mu(x)$, $x \in \mathbb{R}$, for $\mu = 1$. Show that $W^+(0) = [0, 1]$.

**Problem 10.4.** Determine the stability of all fixed points of the logistic map $L_\mu(x)$, $x \in [0, 1]$, via linearization for $0 \leq \mu \leq 4$.

**Problem 10.5.** Consider the logistic map $L_\mu$ for $\mu = 4$. show that 0 is a repelling fixed point. Find an orbit which is both forward and backward asymptotic to 0.

**Problem 10.6.** Prove Theorem 10.2.

**Problem 10.7.** Define the set of **recurrent** points $\text{Rec}(f) := \{x \in M \mid$ for every neighborhood $U(x)$ there is some $n > 0$ with $f^n(x) \in U(x)\}$ and the set of **nonwandering** points $\text{Nwa}(f) := \{x \in M \mid$ for every neighborhood $U(x)$ there are $n > 0$ and $y \in U(x)$ with $f^n(y) \in U(x)\}$.