let $(t_-, t_+)$ be the maximal open interval on which both solutions coincide. I claim that $(t_-, t_+) = (T_-, T_+)$. In fact, if $t_+ < T_+$, both solutions would also coincide at $t_+$ by continuity. Next, considering the IVP with initial condition $x(t_+) = \phi_1(t_+) = \phi_2(t_+)$ shows that both solutions coincide in a neighborhood of $t_+$ by local uniqueness. This contradicts maximality of $t_+$ and hence $t_+ = T_+$. Similarly, $t_- = T_-$.

Moreover, we get a solution

$$\phi(t) = \begin{cases} \phi_1(t), & t \in I_1, \\ \phi_2(t), & t \in I_2, \end{cases}$$

(2.63)

defined on $I_1 \cup I_2$. In fact, this even extends to an arbitrary number of solutions and in this way we get a (unique) solution defined on some maximal interval.

**Theorem 2.13.** Suppose the IVP (2.10) has a unique local solution (e.g. the conditions of Theorem 2.5 are satisfied). Then there exists a unique maximal solution defined on some maximal interval $I_{(t_0, x_0)} = (T_-(t_0, x_0), T_+(t_0, x_0))$.

**Proof.** Let $S$ be the set of all solutions $\phi$ of (2.10) which are defined on an open interval $I_\phi$. Let $I = \bigcup_{\phi \in S} I_\phi$, which is again open. Moreover, if $t_1 > t_0 \in I$, then $t_1 \in I_\phi$ for some $\phi$ and thus $[t_0, t_1) \subseteq I_\phi \subseteq I$. Similarly for $t_1 < t_0$ and thus $I$ is an open interval containing $t_0$. In particular, it is of the form $I = (T_-, T_+)$. Now define $\phi_{max}(t)$ on $I$ by $\phi_{max}(t) = \phi(t)$ for some $\phi \in S$ with $t \in I_\phi$. By our above considerations any two $\phi$ will give the same value, and thus $\phi_{max}(t)$ is well-defined. Moreover, for every $t_1 > t_0$ there is some $\phi \in S$ such that $t_1 \in I_\phi$ and $\phi_{max}(t) = \phi(t)$ for $t \in (t_0 - \varepsilon, t_1 + \varepsilon)$ which shows that $\phi_{max}$ is a solution. By construction there cannot be a solution defined on a larger interval.

The solution found in the previous theorem is called the **maximal solution**. A solution defined for all $t \in \mathbb{R}$ is called a **global solution**. Clearly every global solution is maximal.

Remark: If we drop the requirement that $f$ is Lipschitz, we still have existence of solutions (see Theorem 2.19 below), but we already know that we might lose uniqueness. Even without uniqueness, two given solutions of the IVP (2.10) can still be glued together at $t_0$ (if necessary) to obtain a solution defined on $I_1 \cup I_2$. Furthermore, Zorn’s lemma can be used to ensure existence of maximal solutions in this case. For example, consider the differential equation $\dot{x} = \sqrt{|x|}$ where we have found global (and thus maximal) solutions which are however not unique.

Now let us look at how we can tell from a given solution whether an extension exists or not.