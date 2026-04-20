6.2. The flow of an autonomous equation

We will return to this example in Section 6.7.

In particular, solutions of the IVP (6.7) are also called integral curves or trajectories. We will say that $\phi$ is an integral curve at $x_0$ if it satisfies $\phi(0) = x_0$.

By Theorem 2.13 there is a (unique) maximal integral curve $\phi_x$ at every point $x$, defined on a maximal interval $I_x = (T_-(x), T_+(x))$.

Introducing the set

$$W = \bigcup_{x \in M} I_x \times \{x\} \subseteq \mathbb{R} \times M$$

(6.8)

we define the flow of our differential equation to be the map

$$\Phi : W \rightarrow M, \quad (t, x) \mapsto \phi(t, x),$$

(6.9)

where $\phi(t, x)$ is the maximal integral curve at $x$. We will sometimes also use $\Phi_x(t) = \Phi(t, x)$ and $\Phi_t(x) = \Phi(t, x)$.

If $\phi(.)$ is the maximal integral curve at $x$, then $\phi(.+s)$ is the maximal integral curve at $y = \phi(s)$ and in particular $I_x = s + I_y$. As a consequence, we note that for $x \in M$ and $s \in I_x$ we have

$$\Phi(s + t, x) = \Phi(t, \Phi(s, x))$$

(6.10)

for all $t \in I_{\Phi(s, x)} = I_x - s$.

Theorem 6.1. Suppose $f \in C^k(M, \mathbb{R}^n)$. For all $x \in M$ there exists an interval $I_x \subseteq \mathbb{R}$ containing 0 and a corresponding unique maximal integral curve $\Phi(., x) \in C^k(I_x, M)$ at $x$. Moreover, the set $W$ defined in (6.8) is open and $\Phi \in C^k(W, M)$ is a (local) flow on $M$, that is,

$$\Phi(0, x) = x,$$

$$\Phi(t + s, x) = \Phi(t, \Phi(s, x)), \quad x \in M, \ s, t + s \in I_x.$$

(6.11)

Proof. It remains to show that $W$ is open and $\Phi \in C^k(W, M)$. Fix a point $(t_0, x_0) \in W$ (implying $t_0 \in I_{x_0}$) and set $\gamma = \Phi_{x_0}([0, t_0])$. By Theorem 2.10