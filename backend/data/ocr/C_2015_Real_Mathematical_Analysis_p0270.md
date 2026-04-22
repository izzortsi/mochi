where $\Delta f = f(x + h) - f(x)$. We claim that each of these sets is open-dense in $C^0$.

To check denseness it is enough to prove that the closures of $R_n$, $L_n$, and $G_n$ contain the set $\mathcal{P}$ of polynomials. For by the Weierstrass Approximation Theorem $\mathcal{P}$ is dense in $C^0$. (A set whose closure contains a dense set is dense itself.)

Fix $n$, fix a $P \in \mathcal{P}$, and let $\epsilon > 0$ be given. Consider a sawtooth function $\sigma$ which has period $< 1/n$, size $< \epsilon$, and

$$\min_x \{ |\text{slope}_x(\sigma)| \} > n + \max_x \{ |\text{slope}_x(P)| \}$$

Since the slopes of $\sigma$ are far greater than those of $P$, the slopes of $f = P + \sigma$ alternate in sign with period $< 1/2n$. At any $x \in [a, b - 1/n]$, $f$ has a rightward slope of either $n$ or $-n$. Thus $f \in R_n$. Likewise $f \in L_n$ and $f \in G_n$, so the three sets are dense in $C^0$.

Next we prove $R_n$ is open. Let $f \in R_n$ be given. For each $x \in [a, b - 1/n]$ there is an $h = h(x) > 0$ such that

$$\left| \frac{f(x + h) - f(x)}{h} \right| > n.$$

Since $f$ is continuous, there is a neighborhood $T_x$ of $x$ in $[a, b]$ and a constant $\nu = \nu(x) > 0$ such that this same $h$ yields

$$\left| \frac{f(t + h) - f(t)}{h} \right| > n + \nu$$

for all $t \in T_x$. Since $[a, b - 1/n]$ is compact, finitely many of these neighborhoods $T_x$ cover it, say $T_{x_1}, \ldots, T_{x_m}$. Continuity of $f$ implies that for all $t \in \overline{T}_{x_i}$ we have

$$\left| \frac{f(t + h_i) - f(t)}{h_i} \right| \geq n + \nu_i,$$

where $h_i = h(x_i)$ and $\nu_i = \nu(x_i)$. These $m$ inequalities for points $t$ in the $m$ sets $T_{x_i}$ remain nearly valid if $f$ is replaced by a function $g$ with $d(f, g)$ small enough. Then (25) becomes

$$\left| \frac{g(t + h_i) - g(t)}{h_i} \right| > n,$$

which means that $g \in R_n$ and $R_n$ is open in $C^0$. Similarly $L_n$ is open in $C^0$.

Checking that $G_n$ is open is easier. If $(f_k)$ is a sequence of functions in $G_n^c$ and $f_k \Rightarrow f$ then we must show that $f \in G_n^c$. Each $f_k$ is monotone on some interval $I_k$