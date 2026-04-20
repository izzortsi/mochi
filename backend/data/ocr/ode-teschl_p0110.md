Then the linear system (3.153) is asymptotically stable. More precisely, for every $\alpha < \min\{-\text{Re}(\alpha_j)\}_{j=1}^m$ there is a constant $C$ such that

$$|x(t)| \leq C \text{e}^{-t\alpha}|x_0|, \quad t \geq 0,$$

(3.155)

where $x(t)$ is the solution corresponding to the initial condition $x(0) = x_0$.

Example. Consider the two dimensional system with

$$A = \begin{pmatrix} -a & 0 \\ 0 & -a \end{pmatrix}, \quad B(t) = \begin{pmatrix} 0 & \sin(t) \\ \cos(t) & 0 \end{pmatrix}.$$

Since

$$\|B(t)\| = \max(|\sin(t)|, |\cos(t)|)$$

does not tend to 0 (use Problem 3.49 to compute the norm), our corollary does not apply. However, $A$ satisfies (3.150) with $C = 1$, $\alpha = a$ and hence we can conclude that this system is asymptotically stable if $a > 1$.

Since, by Floquet’s theorem (Theorem 3.15), the principal matrix solution of a periodic linear system looks like the one of a constant system up to periodic factors, the above result applies even in this more general case.

Corollary 3.22. Let $A(t)$ be periodic. Suppose all Floquet exponents $\gamma_j$ of $A(t)$ have negative real part and $B(t)$ satisfies

$$\lim_{t \to \infty} \|B(t)\| = 0.$$

(3.156)

Then the linear system (3.149) is asymptotically stable. More precisely, for every $\gamma < \min\{-\text{Re}(\gamma_j)\}_{j=1}^m$ there is a constant $C$ such that

$$|x(t)| \leq C \text{e}^{-t\gamma}|x_0|, \quad t \geq 0,$$

(3.157)

where $x(t)$ is the solution corresponding to the initial condition $x(0) = x_0$.

As our second result we will show that stability is preserved under such perturbations if the norm of the perturbation is integrable.

Theorem 3.23. Consider the system (3.149) and suppose that the principal matrix solution of the unperturbed system corresponding to $B(t) \equiv 0$ satisfies

$$\|\Pi_A(t,s)\| \leq C, \quad t \geq s \geq t_0,$$

(3.158)

for some constant $C > 0$ and a time $t_0 \geq 0$. Suppose that

$$\int_0^\infty \|B(t)\| dt < \infty.$$

(3.159)

Then we have

$$\|\Pi_{A+B}(t,0)\| \leq D, \quad t \geq 0,$$

(3.160)

for some constant $D > 0$.