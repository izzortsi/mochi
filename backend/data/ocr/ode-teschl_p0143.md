and consider the simply connected domain $\Omega = \mathbb{C} \setminus (-\infty, 0]$. To solve (4.87) we will use the transformation

$$\zeta = \log(z) = \log|z| + i\arg(z), \quad -\pi < \arg(z) < \pi,$$

(4.88)

which maps $\Omega$ to the strip $\tilde{\Omega} = \{z \in \mathbb{C} | -\pi < \operatorname{Im}(z) < \pi\}$. The equation in the new coordinates reads

$$\omega' = A\omega, \quad \omega(\zeta) = w(e^{\zeta}).$$

(4.89)

Hence a fundamental system is given by

$$W(z) = z^A = \exp(\log(z)A),$$

(4.90)

where the last expression is to be understood as the definition of $z^A$. As usual, $z^A$ can be easily computed if $A$ is in Jordan canonical form. In particular, for a Jordan block $J$ we obtain

$$z^J = z^\alpha \begin{pmatrix}
1 & \log(z) & \frac{\log(z)^2}{2!} & \ldots & \frac{\log(z)^{n-1}}{(n-1)!} \\
1 & \log(z) & \ddots & \vdots \\
1 & \ddots & \frac{\log(z)^2}{2!} \\
& \ddots & \log(z) \\
1
\end{pmatrix}.$$

(4.91)

Therefore the solution consists of terms of the form $z^\alpha \log(z)^k$, where $\alpha$ is an eigenvalue of $A$ and $k$ is a nonnegative integer. Note that the logarithmic terms are only present if $A$ is not diagonalizable.

This behavior is in fact typical near any isolated singularity as the following result shows.

**Theorem 4.8.** Suppose $A(z)$ is analytic in $\Omega = \{z \in \mathbb{C} | 0 < |z - z_0| < \varepsilon\}$. Then a fundamental system of $w' = A(z)w$ is of the form

$$W(z) = U(z)(z - z_0)^M,$$

(4.92)

where $U(z)$ is analytic in $\Omega$.

**Proof.** Again we use our change of coordinates $\zeta = \log(z)$ to obtain

$$\omega' = e^{\zeta}A(e^{\zeta})\omega, \quad \operatorname{Re}(\zeta) < \log(\varepsilon).$$

But this system is periodic with period $2\pi i$ and hence the result follows as in the proof of Floquet’s theorem (Theorem 3.15).

Observe that any other fundamental system $\tilde{W}(z)$ can be written as

$$\tilde{W}(z) = W(z)C = U(z)C(z - z_0)^{C-1MC}, \quad \det(C) \neq 0,$$

(4.93)

and hence has a representation $\tilde{W}(z) = \tilde{U}(z)(z - z_0)^{\tilde{M}}$, where $\tilde{M}$ is linearly equivalent to $M$.