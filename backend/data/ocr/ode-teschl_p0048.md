C ⊆ X such that $K : C \to C$. We will try a closed ball of radius $\delta$ around the constant function $x_0$.

Since $U$ is open and $(0, x_0) \in U$ we can choose $V = [0, T] \times \overline{B_\delta(x_0)} \subset U$, where $B_\delta(x_0) = \{x \in \mathbb{R}^n | |x - x_0| < \delta\}$, and abbreviate

$$M = \max_{(t, x) \in V} |f(t, x)|,$$

(2.14)

where the maximum exists by continuity of $f$ and compactness of $V$. Then

$$|K(x)(t) - x_0| \leq \int_0^t |f(s, x(s))| ds \leq t M$$

(2.15)

whenever the graph of $x(t)$ lies within $V$, that is, $\{(t, x(t)) | t \in [0, T]\} \subset V$. Hence, for $t \leq T_0$, where

$$T_0 = \min\{T, \frac{\delta}{M}\},$$

(2.16)

we have $T_0 M \leq \delta$ and the graph of $K(x)$ restricted to $[0, T_0]$ is again in $V$. In the special case $M = 0$ one has to understand this as $\frac{\delta}{M} = \infty$ such that $T_0 = \min\{T, \infty\} = T$. Moreover, note that since $[0, T_0] \subset [0, T]$ the same constant $M$ will also bound $|f|$ on $V_0 = [0, T_0] \times \overline{B_\delta(x_0)} \subset V$.

So if we choose $X = C([0, T_0], \mathbb{R}^n)$ as our Banach space, with norm $\|x\| = \max_{0 \leq t \leq T_0} |x(t)|$, and $C = \{x \in X | \|x - x_0\| \leq \delta\}$ as our closed subset, then $K : C \to C$ and it remains to show that $K$ is a contraction.

To show this, we need to estimate

$$|K(x)(t) - K(y)(t)| \leq \int_0^t |f(s, x(s)) - f(s, y(s))| ds.$$

(2.17)

Clearly, since $f$ is continuous, we know that $|f(s, x(s)) - f(s, y(s))|$ is small if $|x(s) - y(s)|$ is. However, this is not good enough to estimate the integral above. For this we need the following stronger condition: Suppose $f$ is locally Lipschitz continuous in the second argument, uniformly with respect to the first argument, that is, for every compact set $V_0 \subset U$ the following number

$$L = \sup_{(t, x) \neq (t, y) \in V_0} \frac{|f(t, x) - f(t, y)|}{|x - y|}$$

(2.18)

(which depends on $V_0$) is finite. Then,

$$\int_0^t |f(s, x(s)) - f(s, y(s))| ds \leq L \int_0^t |x(s) - y(s)| ds$$

$$\leq L t \sup_{0 \leq s \leq t} |x(s) - y(s)|$$

(2.19)

provided the graphs of both $x(t)$ and $y(t)$ lie in $V_0$. In other words,

$$\|K(x) - K(y)\| \leq L T_0 \|x - y\|, \quad x, y \in C.$$

(2.20)