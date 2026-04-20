If $f$ and $g$ are orthogonal we have the Pythagorean theorem:

$$\|f + g\|^2 = \|f\|^2 + \|g\|^2, \quad f \perp g,$$

(5.22)

which is one line of computation.

Suppose $u$ is a unit vector. Then the projection of $f$ in the direction of $u$ is given by

$$f_\parallel = \langle u, f \rangle u$$

(5.23)

and $f_\perp$ defined via

$$f_\perp = f - \langle u, f \rangle u$$

(5.24)

is perpendicular to $u$ since $\langle u, f_\perp \rangle = \langle u, f - \langle u, f \rangle u \rangle = \langle u, f \rangle - \langle u, f \rangle \langle u, u \rangle = 0.$$

Taking any other vector parallel to $u$ it is easy to see

$$\|f - \alpha u\|^2 = \|f_\perp + (f_\parallel - \alpha u)\|^2 = \|f_\perp\|^2 + |\langle u, f \rangle - \alpha|^2$$

(5.25)

and this expression attains its minimum precisely if $\alpha = \langle u, f \rangle$. Hence $f_\parallel = \langle u, f \rangle u$ is the unique vector parallel to $u$ which is closest to $f$.

As a first consequence we obtain the Cauchy–Schwarz–Bunjakowski inequality:

**Theorem 5.2** (Cauchy–Schwarz–Bunjakowski). Let $\mathfrak{H}_0$ be an inner product space. Then for every $f, g \in \mathfrak{H}_0$ we have

$$|\langle f, g \rangle| \leq \|f\| \|g\|$$

(5.26)

with equality if and only if $f$ and $g$ are parallel.

**Proof.** It suffices to prove the case $\|g\| = 1$ and use $f = \langle g, f \rangle g + f_\perp$. But then the claim follows from $\|f\|^2 = |\langle g, f \rangle|^2 + \|f_\perp\|^2 \geq |\langle g, f \rangle|^2$ with equality if and only if $f_\perp = 0.$

Note that the Cauchy–Schwarz inequality entails that the scalar product is continuous in both variables, that is, if $f_n \rightarrow f$ and $g_n \rightarrow g$ we have $\langle f_n, g_n \rangle \rightarrow \langle f, g \rangle$.

As another consequence we infer that the map $\|.\|$ is indeed a norm since it satisfies the triangle inequality:

$$\|f + g\|^2 = \|f\|^2 + \langle f, g \rangle + \langle g, f \rangle + \|g\|^2 \leq (\|f\| + \|g\|)^2.$$

(5.27)