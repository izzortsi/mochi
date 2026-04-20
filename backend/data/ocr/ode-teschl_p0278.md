Proof. First of all, it is no restriction to assume that $\mathbb{R}^n = \mathbb{R}^s \oplus \mathbb{R}^u$, where $\mathbb{R}^s$ and $\mathbb{R}^u$ are the stable and unstable subspaces for both flows (in fact, we could even assume that both matrices are in Jordan canonical form using a linear conjugation). Treating both parts separately, it suffices to prove the two cases $s = n$ and $u = n$. Moreover, it even suffices to prove the case $s = n$, since the other one follows by considering $A^{-1}$, $B^{-1}$.

So let us assume $s = n$, that is, all eigenvalues have negative real part. Hence there is a norm such that $|\exp(tA)x|_A \leq \exp(-t\alpha)|x|_A$ for all $t \geq 0$ and some small $\alpha > 0$ (Problem 3.48). Replacing $t \rightarrow -t$ and $x \rightarrow \exp(tA)x$ we also obtain $|\exp(tA)x|_A \geq \exp(-t\alpha)|x|_A$ for all $t \leq 0$. Thus

$$\frac{d}{dt}|x(t)|_A = \lim_{s \rightarrow 0} \frac{|\exp(sA)x(t)|_A - |x(t)|_A}{s}$$

$$\leq \lim_{s \rightarrow 0} \frac{\exp(-s\alpha) - 1}{s}|x(t)|_A = -\alpha|x(t)|_A$$

for $t \geq 0$ and there is a unique time $\tau_A(x) > 0$ such that $|\exp(\tau(x)A)x|_A = 1$ for $|x(t)|_A > 1$. Similarly, $\frac{d}{dt}|x(t)|_A \geq -\alpha|x(t)|_A$ for $t \leq 0$ and there is also a unique time $\tau_A(x) < 0$ such that $|\exp(\tau(x)A)x|_A = 1$ for $0 < |x(t)|_A \leq 1$. Moreover, the unit sphere $|x|_A = 1$ is transversal and hence $\tau_A$ is a smooth function by Lemma 6.9. Note $\tau_A(\exp(tA)x) = \tau_A(x) - t$. Similar considerations can be made for $B$.

Then the function $h_{AB}(x) = x/|x|_B$ maps the unit sphere for $A$ continuously to the one for $B$. Moreover, since the inverse is given by $h_{BA}(x) = x/|x|_A$ it is a homeomorphism. Now consider the map

$$h(x) = \exp(-\tau_A(x)B)h_{AB}(\exp(\tau_A(x)A)x), \quad x \neq 0,$$

which is a homeomorphism from $\mathbb{R}^n \setminus \{0\}$ to itself. In fact its inverse is given by

$$h^{-1}(x) = \exp(-\tau_B(x)A)h_{BA}(\exp(\tau_B(x)B)x), \quad x \neq 0,$$

which follows since $\tau_B(y) = \tau_A(x)$ if $y = h(x)$. Furthermore, since $\tau(x) \rightarrow -\infty$ as $x \rightarrow 0$ we have $|h(x)| \leq c \|\exp(-\tau_A(x)B)\| \rightarrow 0$ as $x \rightarrow 0$. Thus we can extend $h$ to a homeomorphism from $\mathbb{R}^n$ to itself by setting $h(0) = 0$.

Finally, $h$ is a topological conjugation since

$$h(\exp(tA)x) = \exp((t - \tau_A(x))B)h_{AB}(\exp((\tau_A(x) - t)A)\exp(tA)x)$$

$$= \exp(tB)h(x),$$

where we have used $\tau_A(\exp(tA)x) = \tau_A(x) - t$. □

Problem 9.13. Let $X$ be a Banach space and let $A : X \rightarrow X$ be a linear operator. Set

$$\|A\| = \sup_{\|x\|=1} \|Ax\|.$$