Then, by construction we have $R_L(z) : \mathfrak{H}_0 \to \mathfrak{D}(L)$ and

$$(L - z)R_L(z)g = g, \quad g \in \mathfrak{H}_0.$$ (5.67)

Similarly we can verify

$$R_L(z)(L - z)f = f, \quad f \in \mathfrak{D}(L),$$ (5.68)

which shows $\text{Ran}(R_L(z)) = \mathfrak{D}(L)$. To see this we proceed as in the proof of the Lagrange identity

$$R_L(z)(L - z)f(x) = \int_a^b G(z,x,t)((L - z)f(t))r(t)dt$$

$$= \frac{u_b(z,x)}{W(z)} \int_a^x u_a(z,t)((L - z)f(t))r(t)dt$$

$$+ \frac{u_a(z,x)}{W(z)} \int_x^b u_b(z,t)((L - z)f(t))r(t)dt$$

$$= \frac{u_a(z,x)W_x(u_b(z),f) - u_b(z,x)W_x(u_a(z),f)}{W(z)}$$

$$= f(x).$$ (5.69)

Here we have used the Lagrange identity (5.56) and $W_a(u_a,f) = -BC_a(f) = 0$, $W_b(u_b,f) = -BC_b(f) = 0$ in the third step.

In other words, $R_L(z)$ is the inverse of $L - z$. Our next lemma shows that $R_L(z)$ is compact.

**Lemma 5.10.** The operator $R_L(z)$ is compact. In addition, for $z \in \mathbb{R}$ it is also symmetric.

**Proof.** Fix $z$ and note that $G(z,..)$ is continuous on $[a,b] \times [a,b]$ and hence uniformly continuous. In particular, for every $\varepsilon > 0$ we can find a $\delta > 0$ such that $|G(z,y,t) - G(z,x,t)| \leq \varepsilon$ whenever $|y-x| \leq \delta$. Let $g(x) = R_L(z)f(x)$. Then

$$|g(x) - g(y)| \leq \int_a^b |G(z,y,t) - G(z,x,t)| |f(t)| r(t)dt$$

$$\leq \varepsilon \int_a^b |f(t)| r(t)dt \leq \varepsilon \|1\| \|f\|,$$

whenever $|y-x| \leq \delta$. (Here we have used the Cauchy–Schwarz inequality in the last step.) Hence, if $f_n(x)$ is a bounded sequence in $\mathfrak{H}_0$, then $g_n(x) = R_L(z)f_n(x)$ is equicontinuous and has a uniformly convergent subsequence by the Arzelà–Ascoli theorem (Theorem 2.18). But a uniformly convergent sequence is also convergent in the norm induced by the scalar product since

$$\|f\| = \sqrt{\int_a^b |f(t)|^2 r(t)dt} \leq \sqrt{\sup_{x \in [a,b]} |f(x)|^2 \int_a^b r(t)dt} = \|1\| \sup_{x \in [a,b]} |f(x)|.$$