to some subpiece $L_2 \in \mathcal{M}_2(L_1)$, etc. Coherence of the labeling of the $\mathcal{M}_k$ implies that for each nested sequence $(L_k)$ there is an infinite word $\alpha = \alpha_1\alpha_2\alpha_3 \ldots$ such that $\alpha_i \in W(n_i)$ and $L_k = w_k(\alpha_1 \ldots \alpha_m)$ with $m = n_1 + \cdots + n_k$. The point $p \in C$ with address $\alpha$ is sent by $\sigma$ to $q$.

**Peano Curves**

**72 Theorem** There exists a Peano curve, a continuous path in the plane which is space-filling in the sense that its image has nonempty interior. In fact there is a Peano curve whose image is the closed unit disc $B^2$.

**Proof** Let $\sigma : C \to B^2$ be a continuous surjection supplied by Theorem 70. Extend $\sigma$ to a map $\tau : [0,1] \to B^2$ by setting

$$\tau(x) = \begin{cases} 
\sigma(x) & \text{if } x \in C \\
(1-t)\sigma(a) + t\sigma(b) & \text{if } x = (1-t)a + tb \in (a,b) \\
\text{and } (a,b) \text{ is a gap interval.}
\end{cases}$$

A gap interval is an interval $(a,b) \subset C^c$ such that $a,b \in C$. Because $\sigma$ is continuous, $|\sigma(a) - \sigma(b)| \to 0$ as $|a-b| \to 0$. Hence $\tau$ is continuous. Its image includes the disc $B^2$ and thus has nonempty interior. In fact the image of $\tau$ is exactly $B^2$, since the disc is convex and $\tau$ just extends $\sigma$ via linear interpolation. See Figure 55.

This Peano curve cannot be one-to-one since $C$ is not homeomorphic to $B^2$. ($C$ is disconnected while $B^2$ is connected.) In fact no Peano curve $\tau$ can be one-to-one. See Exercise 102.

**Cantor Spaces**

We say that $M$ is a Cantor space if, like the standard Cantor set $C$, it is compact, nonempty, perfect, and totally disconnected.

**73 Moore-Kline Theorem** Every Cantor space $M$ is homeomorphic to the standard middle-thirds Cantor set $C$.

A Cantor piece is a nonempty clopen subset $S$ of a Cantor space $M$. It is easy to see that $S$ is also a Cantor space. See Exercise 100. Since a Cantor space is totally disconnected, each point has a small clopen neighborhood $N$. Thus, a Cantor space can always be divided into two disjoint Cantor pieces, $M = U \sqcup U^c$.