In particular, if there is such a compact set $C$ for every $t_+ > t_0$ (C might depend on $t_+$), then the solution exists for all $t > t_0$.

Similarly for $t_-$.

Proof. Let $t_m \rightarrow t_+$. By compactness $\phi(t_m)$ has a convergent subsequence and the claim follows from the previous lemma. $\square$

The logical negation of this result is also of interest.

Corollary 2.16. Let $I_{(t_0,x_0)} = (T_-(t_0,x_0), T_+(t_0,x_0))$ be the maximal interval of existence of a solution starting at $x(t_0) = x_0$. If $T_+ = T_+(t_0,x_0) < \infty$, then the solution must eventually leave every compact set $C$ with $[t_0,T_+] \times C \subset U$ as $t$ approaches $T_+$. In particular, if $U = \mathbb{R} \times \mathbb{R}^n$, the solution must tend to infinity as $t$ approaches $T_+$.

Now we come to the proof of our anticipated result.

Theorem 2.17. Suppose $U = \mathbb{R} \times \mathbb{R}^n$ and for every $T > 0$ there are constants $M(T), L(T)$ such that

$$|f(t,x)| \leq M(T) + L(T)|x|, \quad (t,x) \in [-T,T] \times \mathbb{R}^n. \tag{2.66}$$

Then all solutions of the IVP (2.10) are defined for all $t \in \mathbb{R}$.

Proof. Using the above estimate for $f$ we have $(t_0 = 0)$ without loss of generality

$$|\phi(t)| \leq |x_0| + \int_0^t (M + L|\phi(s)|)ds, \quad t \in [0,T] \cap I,$$

and the variant (2.38) of Gronwall’s inequality shows

$$|\phi(t)| \leq |x_0|e^{LT} + \frac{M}{L}(e^{LT} - 1).$$

Thus $\phi$ lies in a compact ball and the result follows by the previous lemma. $\square$

Again, let me remark that it suffices to assume

$$|f(t,x)| \leq M(t) + L(t)|x|, \quad x \in \mathbb{R}^n, \tag{2.67}$$

where $M(t), L(t)$ are locally integrable. A slight extension of the above result is outlined in Problem 2.22.

Problem 2.18. Show that Theorem 2.17 is false (in general) if the estimate is replaced by

$$|f(t,x)| \leq M(T) + L(T)|x|^\alpha$$

with $\alpha > 1$.