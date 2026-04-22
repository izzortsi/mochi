Here, $f^n$ denotes $f \cdot f \cdots f$. Lemma 22 states that $\overline{A}$ is an algebra, so $g \in \overline{A}$.† Besides, if $x \in M$ and $y = f(x)$ then

$$|g(x) - |f(x)|| = |q(y) - |y|| < \epsilon.$$

Hence $|f| \in \overline{A} = \overline{A}$ as claimed in (12).

Next we observe that if $f, g$ belong to $\overline{A}$, then $\max(f, g)$ and $\min(f, g)$ also belong to $\overline{A}$. For

$$\max(f, g) = \frac{f + g}{2} + \frac{|f - g|}{2}$$

$$\min(f, g) = \frac{f + g}{2} - \frac{|f - g|}{2}.$$

Repetition shows that the maximum and minimum of any finite number of functions in $\overline{A}$ also belongs to $\overline{A}$.

Now we return to (11). Let $F \in C^0 M$ and $\epsilon > 0$ be given. We are trying to find $G \in \overline{A}$ whose graph lies in the $\epsilon$-tube around the graph of $F$. Fix any distinct points $p, q \in M$. According to Lemma 21, we can find a function in $\mathcal{A}$ with specified values at $p, q$, so there exists $H_{pq} \in \mathcal{A}$ that satisfies

$$H_{pq}(p) = F(p) \quad \text{and} \quad H_{pq}(q) = F(q).$$

Fix $p$ and let $q$ vary. Each $q \in M$ has a neighborhood $U_q$ such that

(15) $$x \in U_q \Rightarrow F(x) - \epsilon < H_{pq}(x).$$

For $H_{pq}(x) - F(x) + \epsilon$ is a continuous function of $x$ which is positive at $x = q$. See Figure 96.

Compactness of $M$ implies that finitely many of these neighborhoods $U_q$ cover $M$, say $U_{q_1}, \ldots, U_{q_n}$. Define

$$G_p(x) = \max(H_{pq_1}(x), \ldots, H_{pq_n}(x)).$$

Then $G_p \in \overline{A}$ and, as shown in Figure 97, for all $x \in M$ we have

(16) $$G_p(p) = F(p) \quad \text{and} \quad F(x) - \epsilon < G_p(x).$$

Continuity implies that each $p$ has a neighborhood $V_p$ such that

(17) $$x \in V_p \Rightarrow G_p(x) < F(x) + \epsilon.$$