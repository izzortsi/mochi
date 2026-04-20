and $x$ is fixed.

**Problem 6.7.** Consider a first-order autonomous system in $\mathbb{R}^1$. Suppose $f(x)$ is differentiable, $f(0) = f(1) = 0$, and $f(x) > 0$ for $x \in (0, 1)$. Determine the orbit $\gamma(x)$ and $\omega_{\pm}(x)$ if $x \in [0, 1]$.

**Problem 6.8.** Let $\phi(t)$ be the solution of a first-order autonomous system. Suppose $\lim_{t \to \infty} \phi(t) = x \in M$. Show that $x$ is a fixed point and $\lim_{t \to \infty} \phi(t) = 0$.

**Problem 6.9 (Periodic points).** Let $\Phi$ be the flow of some first-order autonomous system.

(i) Show that if $T$ satisfies $\Phi(T, x) = x$, the same is true for any integer multiple of $T$. Moreover, show that we must have $T = nT(x)$ for some $n \in \mathbb{Z}$ if $T(x) \neq 0$.

(ii) Show that a point $x$ is fixed if and only if $T(x) = 0$.

(iii) Show that $x$ is periodic if and only if $\gamma_+(x) \cap \gamma_-(x) \neq \emptyset$ in which case $\gamma_+(x) = \gamma_-(x)$ and $\Phi(t + T(x), x) = \Phi(t, x)$ for all $t \in \mathbb{R}$. In particular, the period is the same for all points in the same orbit.

**Problem 6.10.** A point $x \in M$ is called nonwandering if for every neighborhood $U$ of $x$ there is a sequence of positive times $t_n \to \infty$ such that $\Phi_{t_n}(U) \cap U \neq \emptyset$ for all $t_n$. The **set of nonwandering points** is denoted by $\Omega(f)$.

(i) $\Omega(f)$ is a closed invariant set (Hint: show that it is the complement of an open set).

(ii) $\Omega(f)$ contains all periodic orbits (including all fixed points).

(iii) $\omega_+(x) \subseteq \Omega(f)$ for all $x \in M$.

Find the set of nonwandering points $\Omega(f)$ for the system $f(x, y) = (y, -x)$.

**Problem 6.11.** Denote by $d(x, A) = \inf_{y \in A} |x - y|$ the distance between a point $x \in \mathbb{R}^n$ and a set $A \subseteq \mathbb{R}^n$. Show

$$|d(x, A) - d(z, A)| \leq |x - z|.$$

In particular, $x \mapsto d(x, A)$ is continuous.

**6.4. The Poincaré map**

Recall the Poincaré map used successfully in Section 1.6 for differential equations $\dot{x} = f(t, x)$, where $f$ is periodic with respect to $t$, say $f(t + 1, x) = f(t, x)$. To fit this equation into our current framework we consider the corresponding autonomous equation

$$\dot{y}_1 = 1, \dot{y}_2 = f_1(y_1, y_2, \ldots, y_{n+1}), \ldots, \dot{y}_{n+1} = f_n(y_1, y_2, \ldots, y_{n+1}).$$