a $\delta > 0$ such that for any $x \in M$ and any $\varepsilon > 0$ there is a $y \in M$ and an $n \in \mathbb{N}$ such that $d(x, y) < \varepsilon$ and $d(f^n(x), f^n(y)) > \delta$.

However, the example

$$M = (0, \infty), \quad f(x) = (1 + \mu)x, \quad \mu > 0,$$

(11.9)

exhibits sensitive dependence on initial conditions but should definitely not be considered chaotic since all iterates in the above example converge to infinity. To rule out such a situation we introduce another condition.

A map $f$ as above is called **topologically transitive** if for any given open sets $U, V \subseteq M$ there is an $n \in \mathbb{N}$ such that $f^n(U) \cap V \neq \emptyset$. Observe that a system is transitive if it contains a dense forward orbit (Problem 11.3).

A system having both properties is called chaotic in the book by Robinson [33]. However, we will still consider another definition since this one has one draw back. It involves the metric structure of $M$ and hence is not preserved under topological equivalence. Two dynamical systems $(M_j, f_j), j = 1, 2$, are called **topological equivalent** if there is a homeomorphism $\varphi : M_1 \rightarrow M_2$ such that the following diagram commutes.

$$\begin{array}{ccc}
M_1 & \xrightarrow{f_1} & M_1 \\
\varphi \uparrow & & \uparrow \varphi \\
M_2 & \xrightarrow{f_2} & M_2
\end{array}$$

(11.10)

Clearly $p_2 = \varphi(p_1)$ is a periodic point of period $n$ for $f_2$ if and only if $p_1$ is for $f_1$. Moreover, we have $W^s(p_2) = \varphi(W^s(p_1))$ and all topological properties (e.g., transitivity) hold for one system if and only if they hold for the other.

On the other hand, properties involving the metric structure might not be preserved. For example, take $\varphi = x^{-1}$. Then the above example is mapped to the system

$$M = (0, \infty), \quad f(x) = (1 + \mu)^{-1}x, \quad \mu > 0,$$

(11.11)

which no longer exhibits sensitive dependence on initial conditions. (Note that the problem here is that $M$ is not compact. If $M$ is compact, $f$ is uniformly continuous and sensitive dependence on initial conditions is preserved.)

Hence we will use the following definition for chaos due to Devaney [7]. A discrete dynamical system $(M, f)$ with continuous $f$ and infinite $M$ as above is called **chaotic** if it is transitive and if the periodic points are dense. If $M$ is finite and the system is transitive, it is not hard to see that it consists of one single periodic orbit.

The following lemma shows that chaotic dynamical systems exhibit sensitive dependence on initial conditions.