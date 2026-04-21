Proof of Theorem 19 Let $f : [a, b] \to \mathbb{R}$. We assert that $f$ is Riemann integrable if and only if it is Darboux integrable. One direction is easy: Riemann $\Rightarrow$ Darboux. Riemann integrability implies that $f$ is bounded and that for each $\epsilon > 0$ there exists a $\delta > 0$ such that if $P$ is any partition with mesh $P < \delta$ then

$$|R - I| < \frac{\epsilon}{4}$$

where $R = R(f, P, T)$ and $I$ is the Riemann integral of $f$. Fix such a partition $P$ and choose a set of sample points $T = \{t_i\}$ such that $f(t_i)$ is so near $m_i$ that

$$R(f, P, T) - L(f, P) < \frac{\epsilon}{4}.$$

(It is enough to choose $t_i \in [x_{i-1}, x_i]$ such that $f(t_i) - m_i < \epsilon/4(b - a)$.) Choose a second set of sample points $T' = \{t'_i\}$ so that

$$U(f, P) - R(f, P, T') < \frac{\epsilon}{4}.$$

Both $R = R(f, P, T)$ and $R' = R(f, P, T')$ differ from $I$ by $< \epsilon/4$. Thus

$$U - L = (U - R') + (R' - I) + (I - R) + (R - L) < \epsilon,$$

from which (2) gives Darboux integrability. Since $\underline{I}, I, \overline{I}$ are fixed numbers that belong to the interval $[L, U]$ of length $\epsilon$, and $\epsilon$ is arbitrary, the $\epsilon$-principle implies that

$$\underline{I} = I = \overline{I},$$

which completes the proof that $f$ is Darboux integrable and that the lower, upper, and Riemann integrals are equal.

Next, we assume Darboux integrability and prove Riemann integrability. (The proof is messier because checking Riemann integrability requires that we look at all fine partitions $P$, not just at those for which $U - L$ is small.) Darboux integrability implies that $f$ is bounded, say $f : [a, b] \to [-M, M]$. By (2) we know that for each $\epsilon > 0$ there is a partition $P_1$ such that

$$U_1 - L_1 < \frac{\epsilon}{3}$$

where $L_1 = L(f, P_1)$ and $U_1 = U(f, P_1)$. Fix

$$\delta = \frac{\epsilon}{6n_1M}$$

where $n_1$ is the number of $P_1$-intervals, and consider a partition $P$ with mesh $P < \delta$. Fix a set $T$ of sample points for $P$. We claim that the Riemann sum $R(f, P, T)$ for