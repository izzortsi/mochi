We end this section with a generalization of Lemma 1.2 which is often useful. Indeed, you might wonder what happens if we allow equality in the definition of a super solution (1.65). At first sight you might expect that this should not do much harm and the conclusion of Lemma 1.2 should still hold if we allow for equality there as well. However, if you apply this conclusion to two solutions of the same equation it will automatically give you uniqueness of solutions. Hence this generalization cannot be true without further assumptions on $f$. One assumption which will do the trick (and which will hence also guarantee uniqueness of solutions) is the following condition: We will say that $f$ is locally Lipschitz continuous in the second argument, uniformly with respect to the first argument, if

$$L = \sup_{(t,x) \neq (t,y) \in V} \frac{|f(t,x) - f(t,y)|}{|x - y|}$$

(1.69)

is finite for every compact set $V$ contained in the domain of $f$. We will meet this condition again in Section 2.2 where we will also further discuss it. For now notice that it will hold if $f$ has a continuous partial derivative with respect to $x$ by the mean value theorem.

**Theorem 1.3.** Suppose $f$ is locally Lipschitz continuous with respect to $x$ uniformly in $t$. Let $x(t)$ and $y(t)$ be two differentiable functions such that

$$x(t_0) \leq y(t_0), \quad \dot{x}(t) - f(t,x(t)) \leq \dot{y}(t) - f(t,y(t)), \quad t \in [t_0,T)$$

(1.70)

Then we have $x(t) \leq y(t)$ for every $t \in [t_0,T)$. Moreover, if $x(t) < y(t)$ for some $t$ this remains true for all later times.

**Proof.** We argue by contradiction. Suppose the first claim were not true. Then we could find some time $t_1$ such that $x(t_1) = y(t_1)$ and $x(t) > y(t)$ for $t \in (t_1,t_1 + \varepsilon)$. Introduce $\Delta(t) = x(t) - y(t)$ and observe

$$\dot{\Delta}(t) = \dot{x}(t) - \dot{y}(t) \leq f(t,x(t)) - f(t,y(t)) \leq L\Delta(t), \quad t \in [t_1,t_1 + \varepsilon),$$

where the first inequality follows from assumption and the second from (1.69). But this implies that the function $\tilde{\Delta}(t) = \Delta(t)e^{-Lt}$ satisfies $\dot{\Delta}(t) \leq 0$ and thus $\tilde{\Delta}(t) \leq \tilde{\Delta}(t_1) = 0$, that is, $x(t) \leq y(t)$ for $t \in [t_0,T)$ contradicting our assumption.

So the first part is true. To show the second part set $\Delta(t) = y(t) - x(t)$ which is now nonnegative by the first part. Then, as in the previous case one shows $\dot{\Delta}(t) \geq 0$ where $\tilde{\Delta}(t) = \Delta(t)e^{Lt}$ and the claim follows.

A few consequences are worth while noting:

First of all, if $x(t)$ and $y(t)$ are two solutions with $x(t_0) \leq y(t_0)$, then $x(t) \leq y(t)$ for all $t \geq t_0$ (for which both solutions are defined). In particular, in the case $x(t_0) = y(t_0)$ this shows uniqueness of solutions: $x(t) = y(t)$.