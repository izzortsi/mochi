with $0 \leq \epsilon \leq 1$ and $a, b > 0$ implies that

$$|a - b| \leq 16\epsilon b$$

as you are left to check in Exercise 40. Thus (18) implies

$$||W_{ij}| - J_{ij}|R_{ij}| \leq 16\epsilon J|R_{ij}|$$

where $J = \sup\{|Jac_z \varphi| : z \in R\}$.

Let $m_{ij}$ and $M_{ij}$ be the infimum and supremum of $f \circ \varphi$ on $R_{ij}$. Then, for all $w \in \varphi(R)$ we have

$$\sum m_{ij}\chi_{\text{int } W_{ij}}(w) \leq f(w) \leq \sum M_{ij}\chi_{W_{ij}}(w)$$

which integrates to

$$\sum m_{ij}|W_{ij}| \leq \int_{\varphi(R)} f \leq \sum M_{ij}|W_{ij}|.$$

According to (19), replacing $|W_{ij}|$ by $J_{ij}|R_{ij}|$ causes an error of no more than $16\epsilon J|R_{ij}|$.

Thus

$$\sum m_{ij}J_{ij}|R_{ij}| - 16\epsilon MJ|R| \leq \int_{\varphi(R)} f \leq \sum M_{ij}J_{ij}|R_{ij}| + 16\epsilon MJ|R|,$$

where $M = \sup|f|$. These are lower and upper sums for the integrable function $f \circ \varphi \cdot |Jac \varphi|$. Thus

$$\int_R f \circ \varphi \cdot |Jac \varphi| - 16\epsilon MJ|R| \leq \int_{\varphi(R)} f \leq \int_R f \circ \varphi \cdot |Jac \varphi| + 16\epsilon MJ|R|.$$

Since $\epsilon$ is arbitrarily small the proof is complete.

Finally, here is a sketch of the $n$-dimensional theory. Instead of a two-dimensional rectangle we have a box

$$R = [a_1, b_1] \times \cdots \times [a_n, b_n].$$

Riemann sums of a function $f : R \to \mathbb{R}$ are defined as before: Take a grid $G$ of small boxes $R_\ell$ in $R$, take a sample point $s_\ell$ in each, and set

$$R(f, G, S) = \sum f(s_\ell)|R_\ell|$$

where $|R_\ell|$ is the product of the edge lengths of the small box $R_\ell$ and $S$ is the set of sample points. If the Riemann sum converge to a limit it is the integral. The general theory, including the Riemann-Lebesgue Theorem, is the same as in dimension 2.