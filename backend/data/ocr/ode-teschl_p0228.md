A prototypical $f$ is depicted in Figure 7.4.

Furthermore, let us abbreviate $Q_{\pm} = \{(x, y) | \pm x > 0\}$ and $L_{\pm} = \{(x, y) | x = 0, \pm y > 0\}$. Our symmetry requirement (i) will allow us to restrict our attention to $Q_{+}$ since the corresponding results for $Q_{-}$ will follow via the transformation $(x, y) \rightarrow (-x, -y)$ which maps $Q_{+}$ to $Q_{-}$ and leaves the differential equation (7.26) invariant if $f$ is odd.

As a first observation we note that

**Lemma 7.6.** Every trajectory of Liénard’s equation (7.26) in $Q_{+}$ can cross the graph of $f$ at most once.

**Proof.** A quick calculation shows that for $\Delta = y - f(x)$ we have $\dot{\Delta} = -x - f'(x)\Delta$ and thus $\dot{\Delta}(t_0) > 0$ whenever $\Delta(t_0) = 0$ and $(x, y) \in Q_{+}$. $\square$

Next we show

**Lemma 7.7.** Suppose $f$ satisfies the requirements (ii) and (iii). Then, every trajectory starting in $Q_{+}$ above the graph of $f$ will eventually hit the graph at a finite positive time. Similarly, every trajectory starting in $Q_{+}$ on or below the graph of $f$ will hit $L_{-}$ at a finite positive time. Finally, every trajectory starting on the graph will hit $L_{+}$ at a finite negative time.

**Proof.** Suppose we start at some point $(x_0, y_0)$ with $x_0 \geq 0$. Choose some $C < \min f(x)$ and consider $\Delta = x^2 + (y - C)^2$. Then $\dot{\Delta} = 2(x\dot{x} + (y - C)\dot{y}) = 2x(C - f(x)) < 0$ for $(x, y) \in Q_{+}$. Hence starting in the region bounded by $L_{+}$, the graph of $f$ and a circle $\Delta = R^2$ we stay inside this region until we hit the graph of $f$ by Lemma 7.2 (we cannot converge to the only fixed point $(0, 0)$ since it is unstable). This shows the first claim. The second follows similarly. For the last one use $\Delta = x^2 + (y - M)^2$, where $M > \max_{x \in [0, x_0 + \varepsilon]} f(x)$ and consider the region bounded by the graph of $f$, the vertical line $y = y_0 + \varepsilon$, and a circle $\Delta = R^2$ containing $(x_0, y_0)$. $\square$

Now suppose $f$ satisfies (i)–(iii). Denote the first intersection point of the trajectory starting at $(x(0), y(0)) = (0, y_0) \in L_{+}$ with $L_{-}$ by $(x(T), y(T)) =$