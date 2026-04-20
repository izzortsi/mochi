5.4. Regular Sturm–Liouville problems

(5.73) one obtains

$$0 \leq Q\left(f - \sum_{j=m}^{n} \langle u_j, f \rangle u_j\right)$$

$$= Q(f) - \sum_{j=m}^{n} \langle u_j, f \rangle Q(f, u_j) - \sum_{j=m}^{n} \langle u_j, f \rangle^* Q(u_j, f)$$

$$+ \sum_{j,k=m}^{n} \langle u_j, f \rangle^* \langle u_k, f \rangle Q(u_j, u_k)$$

$$= Q(f) - \sum_{j=m}^{n} E_j |\langle u_j, f \rangle|^2$$

which implies

$$\sum_{j=m}^{n} E_j |\langle u_j, f \rangle|^2 \leq Q(f).$$

In particular, note that this estimate applies to $f(y) = G(\lambda, x, y)$. Now we can proceed as in the proof of the previous theorem (with $\lambda = 0$ and $\alpha_j = E_j^{-1}$)

$$\sum_{j=m}^{n} |\langle u_j, f \rangle u_j(x)| = \sum_{j=m}^{n} E_j |\langle u_j, f \rangle \langle u_j, G(0, x, .) \rangle|$$

$$\leq \left( \sum_{j=m}^{n} E_j |\langle u_j, f \rangle|^2 \sum_{j=m}^{n} E_j |\langle u_j, G(0, x, .) \rangle|^2 \right)^{1/2}$$

$$< Q(f)^{1/2} Q(G(0, x, .))^{1/2},$$

where we have used the Cauchy–Schwarz inequality for the weighted scalar product $(f_j, g_j) \mapsto \sum_j f_j^* g_j E_j$. Finally note that $Q(G(0, x, .))$ is continuous with respect to $x$ and hence can be estimated by its maximum over $[a, b]$.

Finally, if one of the boundary terms is negative, it can still be controlled in terms of the integral using Problem 5.23. Details are again left as an exercise.

**Example.** Let us look at the Sturm–Liouville problem which arose in Section 5.1.

$$L = -\frac{d^2}{dx^2}, \quad \mathfrak{D}(L) = \{f \in C^2([0, 1], \mathbb{C}) | f(0) = f(1) = 0\}.$$

with underlying inner product space and scalar product given by

$$\mathfrak{H}_0 = C([0, 1], \mathbb{C}), \quad \langle f, g \rangle = \int_0^1 f(x)^* g(x) dx.$$