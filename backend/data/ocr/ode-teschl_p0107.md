a certain region. This can be used to filter charged particles according to their mass (quadrupole mass spectrometry).

Hill’s equation also can be used as a simple one-dimensional model in quantum mechanics to describe a single electron moving in a periodic field (cf. Problem 5.36). We will further investigate this problem in Section 5.6.

Problem 3.39. Consider

$$\dot{x} = a(t)Ax,$$

where $a : \mathbb{R} \rightarrow \mathbb{R}$ is periodic with period $T$ and $A$ is a constant two by two matrix. Compute the Floquet exponent, and find $P(t, t_0)$ and $Q(t_0)$ in this case.

Problem 3.40. Compute the monodromy matrix where $A(t)$ is of period 1 and given by

$$A(t) = \begin{cases}
\left( \begin{array}{cc}
\alpha & 1 \\
0 & \alpha \\
\alpha & 0 \\
1 & \alpha \end{array} \right), & 0 \leq t < \frac{1}{2}, \\
\left( \begin{array}{cc}
\frac{1}{2} & t < 1, \\
\end{array} \right), & \alpha \in \mathbb{C}.
\end{cases}$$

Note that since $A(t)$ is not continuous you have to match solutions at every discontinuity such that the solutions are continuous (cf. Section 2.3).

For which values of $\alpha$ remain all solutions bounded? Show that the bound found in Problem 3.31 is optimal by considering $A(t/T)$ as $T \rightarrow 0$.

(Note that we could approximate $A(t)$ by continuous matrices and obtain the same qualitative result with an arbitrary small error.)

Problem 3.41. Show that any fundamental matrix solution $U(t)$ of a periodic linear system can be written as $U(t) = V(t) \exp(tR)$, where $V(t)$ is periodic and $R$ is similar to $Q(t_0)$.