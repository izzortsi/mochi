where $\delta$ is the lower density, $\liminf_{Q \downarrow p}[E : Q]$. We will show that $E_a$ has outer measure zero.

By assumption, at every $p \in E_a$ there are arbitrarily small cubes in which the concentration of $E$ is $< a$. These cubes form a Vitali covering of $E_a$ and by the Vitali Covering Lemma we can select a subcollection $Q_1, Q_2, \ldots$ such that the $Q_k$ are disjoint, cover almost all of $E_a$, and nearly give the outer measure of $E_a$ in the sense that

$$\sum_k m(Q_k) < m^*(E_a) + \epsilon.$$

($E_a$ turns out to be measurable but the Vitali Covering Lemma does not require us to know this in advance.) We get

$$m^*(E_a) = \sum_k m^*(E_a \cap Q_k)$$

$$\leq \sum_k m(E \cap Q_k) < a \sum_k m(Q_k) \leq a(m^*(E_a) + \epsilon)$$

which implies that $m^*(E_a) \leq a\epsilon/(1-a)$. Since $\epsilon > 0$ is arbitrary we have $m^*(E_a) = 0$.