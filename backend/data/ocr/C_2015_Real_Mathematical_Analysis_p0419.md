Figure 144 $f_n \uparrow f$ implies $Uf_n \uparrow Uf$. Upward measure continuity (Theorem 6) then implies $\int f_n = m(Uf_n) \uparrow m(Uf) = \int f$.

By Corollary 8 $T_{\pm n}$ is a meseomorphism and $m(T_n(Uf)) = (1 + 1/n)m(Uf)$. The intersection $\bigcap T_n(Uf)$ is $\hat{U}f$ except for points $(x, 0)$ of the $x$-axis at which $f(x) = 0$. The $x$-axis is a planar zero set and has no effect on measurability. Therefore $\hat{U}f$ is measurable.

Similarly, $Uf$ is the union of the sets $T_{-n}(\hat{U}f)$ except for points on the $x$-axis and so measurability of $\hat{U}f$ implies measurability of $Uf$. Upward measure continuity implies that

$$m(Uf) = \lim_{n \to \infty} (1 - 1/n)m(\hat{U}f) = m(\hat{U}f)$$

which completes the proof.

29 Corollary If $(f_n)$ is a sequence of integrable functions that converges monotonically downward to a limit function $f$ almost everywhere then

$$\int f_n \downarrow \int f.$$

Proof Since $m(\hat{U}(f_n)) = \int f_n$ is finite, downward measure continuity is valid. Proposition 28 then implies

$$\int f_n = m(U(f_n)) = m(\hat{U}(f_n)) \downarrow m(\hat{U}f) = m(Uf) = \int f$$

as $n \to \infty$.

Definition If $f_n : X \to [0, \infty)$ is a sequence of functions then the lower and upper envelope sequences are

$$f_n(x) = \inf\{f_k(x) : k \geq n\} \quad \overline{f}_n(x) = \sup\{f_k(x) : k \geq n\}.$$

We permit $\overline{f}_n(x) = \infty$.