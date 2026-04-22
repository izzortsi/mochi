Figure 118 Fubini’s Theorem is like sliced bread.

There is, however, an ambiguity in this formula. What is the value of the integrand $\int_a^b f(x,y) \, dx$ when $y \in Y$? For such a $y$, $\underline{F}(y) < \overline{F}(y)$ and the integral of $f(x,y)$ with respect to $x$ does not exist. The answer is that we can choose any value between $\underline{F}(y)$ and $\overline{F}(y)$. The integral with respect to $y$ will be unaffected. See also Exercise 47.

Proof of Fubini’s Theorem We claim that if $P$ and $Q$ are partitions of $[a,b]$ and $[c,d]$ then

(9) $$L(f,G) \leq L(\underline{F},Q)$$

where $G$ is the grid $P \times Q$. Fix any partition interval $J_j \subset [c,d]$. If $y \in J_j$ then

$$m_{ij} = \inf \{f(s,t) : (s,t) \in R_{ij}\} \leq \inf \{f(s,y) : s \in I_i\} = m_i(f_y).$$

Thus

$$\sum_{i=1}^m m_{ij} \Delta x_i \leq \sum_{i=1}^m m_i(f_y) \Delta x_i = L(f_y,P) \leq \underline{F}(y),$$

and it follows that

$$\sum_{i=1}^m m_{ij} \Delta x_i \leq m_j(\underline{F}).$$