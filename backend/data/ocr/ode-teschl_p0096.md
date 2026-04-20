and note that $\phi_1(t) = (1, t^2)$ is a solution. Hence we can make the change of coordinates

$$x(t) = X(t)y(t), \quad \text{where} \quad X(t) = \begin{pmatrix} 1 & 0 \\ t^2 & 1 \end{pmatrix}$$

in which the differential equation reads

$$\dot{y} = X(t)^{-1}A(t) \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} y = \begin{pmatrix} 0 & -1 \\ 0 & t^2 \end{pmatrix} y.$$

In particular, the right-hand side does not involve $y_1$. Hence this system can be solved by first solving the second component $\dot{y}_2 = t^2y_2$ which gives

$$y_2(t) = e^{t^3/3}.$$

Now integrating the first component $\dot{y}_1 = -y_2$ gives

$$y_1(t) = -\int e^{t^3/3} dt$$

and thus a second solution is given by

$$\phi_2(t) = \begin{pmatrix} 1 & 0 \\ t^2 & 1 \end{pmatrix} \begin{pmatrix} -\int e^{t^3/3} dt \\ e^{t^3/3} \end{pmatrix} = \begin{pmatrix} -\int e^{t^3/3} dt \\ e^{t^3/3} - t^2 \int e^{t^3/3} dt \end{pmatrix}.$$

**Problem 3.25** (Differential calculus for matrices.) Suppose $A(t)$ and $B(t)$ are differentiable. Prove (3.77) and (3.78). (Hint: $AA^{-1} = \mathbb{I}$.)

**Problem 3.26.** Show that for any $n$ by $n$ matrix $A$ we have

$$\det(\mathbb{I} + \varepsilon A + o(\varepsilon)) = 1 + \varepsilon \operatorname{tr}(A) + o(\varepsilon),$$

where $o(\varepsilon)$ (Landau symbol) collects terms which vanish faster than $\varepsilon$ as $\varepsilon \to 0$. (Hint: E.g. Jordan canonical form.)

**Problem 3.27.** Compute $\Pi(t, t_0)$ for the system

$$A(t) = \begin{pmatrix} t & 0 \\ 1 & t \end{pmatrix}.$$

**Problem 3.28.** Compute $\Pi(t, t_0)$ for the system

$$A(t) = \begin{pmatrix} 2 + 2t & 3 + 2t \\ -1 - 2t & -2 - 2t \end{pmatrix}.$$

(Hint: $\phi_1(t) = e^{-t}(1, -1)$ is a solution.)

**Problem 3.29** (Quantum Mechanics). A quantum mechanical system which can only attain finitely many states is described by a complex-valued vector $\psi(t) \in \mathbb{C}^n$. The square of the absolute values of the components $|\psi_j(t)|^2$ is interpreted as the probability of finding the system in the $j$’th state at time $t$. Since there are only $n$ possible states, these probabilities must add up to