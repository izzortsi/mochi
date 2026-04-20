Recall that this expansion is not unique since we have, for example, $\frac{1}{3} = 0.1 = 0.0\overline{2}$ or $\frac{2}{3} = 0.2 \cdots = 0.1\overline{2} \cdots$. Here the $\overline{x}$ implies that the corresponding digit repeats infinitely many times. It will be convenient for us to exclude the expansions which end in 1 or $1\overline{2}$. Then we have $\Lambda_n = \{x|x_j \neq 1, 1 \leq j \leq n\}$ (Problem 11.7) and hence

$$\Lambda = \{x|x_j \neq 1, j \in \mathbb{N}\}. \tag{11.21}$$

Moreover, the action of $T_3$ can also be transparently described using this notation

$$\begin{cases}
x_1 = 0 & \Rightarrow T_3(x) = \sum_{n \in \mathbb{N}} \frac{x_{n+1}}{3^n} \\
x_1 = 1 & \Rightarrow T_3(x) \notin [0,1] \\
x_1 = 2 & \Rightarrow T_3(x) = \sum_{n \in \mathbb{N}} \frac{x'_{n+1}}{3^n}
\end{cases}, \tag{11.22}$$

where $x'_n = 2-x_j$ (i.e., $0' = 2, 1' = 1, 2' = 0$). Unfortunately this description still has a few drawbacks. First of all, it is not possible to tell if two points $x, y$ are close by looking at the first $n$ digits and the fact that $T_3$ does not simply shift the sequence $x_n$ is a little annoying. Finally, it only works for $\mu = 3$.

So let us return to arbitrary $\mu > 2$ and let us see whether we can do better. Let $\Sigma_2 = \{0,1\}^{\mathbb{N}_0}$ be the set of sequences taking only the values 0 and 1.

Set $I_0 = [0,\frac{1}{\mu}], I_1 = [1-\frac{1}{\mu},1]$ and define the **itinerary map**

$$\varphi : \Lambda \rightarrow \Sigma_2 \\
x \mapsto x_n = j \text{ if } T^n_\mu(x) \in I_j. \tag{11.23}$$

Then $\varphi$ is well defined and $T_\mu$ acts on $x_n$ just by a simple shift. That is, if we introduce the **shift map** $\sigma : \Sigma_2 \rightarrow \Sigma_2, (x_0,x_1,\ldots) \mapsto (x_1,x_2,\ldots)$, we have $\sigma \circ \varphi = \varphi \circ T_\mu$ and it looks like we have a topological equivalence between $(\Lambda,T_\mu)$ and $(\Sigma_2,\sigma)$. But before we can show this, we need some further definitions first.

First of all we need to make sure that $(\Sigma_2,\sigma)$ is a dynamical system. Hence we need a metric on $\Sigma_2$. We will take the following one

$$d(x,y) = \sum_{n \in \mathbb{N}_0} \frac{|x_n - y_n|}{2^n} \tag{11.24}$$

(prove that this is indeed a metric). Moreover, we need to make sure that $\sigma$ is continuous. But since

$$d(\sigma(x),\sigma(y)) \leq 2 d(x,y) \tag{11.25}$$

it is immediate that $\sigma$ is even uniformly continuous.

So it remains to show that $\varphi$ is a homeomorphism.