Since $\mathcal{A}$ vanishes nowhere there exist $g_1, g_2 \in \mathcal{A}$ such that $g_1(p_1) \neq 0 \neq g_2(p_2)$. Then $g = g_1^2 + g_2^2$ belongs to $\mathcal{A}$ and vanishes at neither $p_1$ nor $p_2$. Since $\mathcal{A}$ separates points there exists $h \in \mathcal{A}$ with different values at $p_1$ and $p_2$. Consider the matrix

$$H = \begin{bmatrix} a & ab \\ c & cd \end{bmatrix} = \begin{bmatrix} g(p_1) & g(p_1)h(p_1) \\ g(p_2) & g(p_2)h(p_2) \end{bmatrix}.$$

By construction $a, c \neq 0$ and $b \neq d$. Hence $\det H = acd - abc = ac(d - b) \neq 0$, $H$ has rank 2, and the linear equations

$$a\xi + ab\eta = c_1$$
$$c\xi + cd\eta = c_2$$

have a solution $(\xi, \eta)$. Then $f = \xi g + \eta gh$ belongs to $\mathcal{A}$ and $f(p_1) = c_1, f(p_2) = c_2.$

**22 Lemma** The closure of a function algebra in $C^0M$ is a function algebra.

**Proof** Clear enough.

**Proof of the Stone-Weierstrass Theorem** Let $\mathcal{A}$ be a function algebra in $C^0M$ that vanishes nowhere and separates points. We must show that $\mathcal{A}$ is dense in $C^0M$. Given $F \in C^0M$ and $\epsilon > 0$, we must find $G \in \mathcal{A}$ such that for all $x \in M$ we have

(11) $$F(x) - \epsilon < G(x) < F(x) + \epsilon.$$

First we observe that

(12) $$f \in \overline{\mathcal{A}} \Rightarrow |f| \in \overline{\mathcal{A}}$$

where $\overline{\mathcal{A}}$ denotes the closure of $\mathcal{A}$ in $C^0M$. Let $\epsilon > 0$ be given. According to the Weierstrass Approximation Theorem, there exists a polynomial $p(y)$ such that

(13) $$\sup\{|p(y) - |y|| : |y| \leq \|f\|\} < \frac{\epsilon}{2}$$

After all, $|y|$ is a continuous function defined on the interval $[-\|f\|, \|f\|]$. The constant term of $p(y)$ is at most $\epsilon/2$ since $|p(0) - |0|| < \epsilon/2$. Let $q(y) = p(y) - p(0)$. Then $q(y)$ is a polynomial with zero constant term and (13) becomes

(14) $$|q(y) - |y|| < \epsilon$$

for all $y \in [-\|f\|, \|f\|]$. Write $q(y) = a_1y + a_2y^2 + \cdots + a_ny^n$ and

$$g = a_1f + a_2f^2 + \cdots + a_nf^n.$$