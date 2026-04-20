Note that for a bounded operator $A$, there cannot be an eigenvalue with absolute value larger than $\|A\|$, that is, the set of eigenvalues is bounded by $\|A\|$ (Problem 5.10).

Now consider a compact symmetric operator $A$ with eigenvalue $\alpha_0$ (as above) and corresponding normalized eigenvector $u_0$. Then we can establish existence of an orthonormal basis of eigenfunctions by mimicking the proof of the finite dimensional case from Theorem 3.29. Set

$$\mathcal{H}_0^{(1)} = \{f \in \mathcal{H}_0 | \langle u_0, f \rangle = 0\}$$

(5.41)

and observe that $\mathcal{H}_0^{(1)}$ is a closed linear subspace and hence an inner product space of its own. Moreover, we can restrict $A$ to $\mathcal{H}_0^{(1)}$ since $f \in \mathcal{H}_0^{(1)}$ implies $\langle Af, u_0 \rangle = \alpha_0 \langle f, u_0 \rangle = 0$ and hence $Af \in \mathcal{H}_0^{(1)}$. Denoting this restriction by $A_1$, it clearly inherits both the symmetry and compactness from $A$ (check this!). Hence we can apply Theorem 5.5 iteratively to obtain a sequence of eigenvalues $\alpha_j$ with corresponding normalized eigenvectors $u_j$. Moreover, by construction, $u_j$ is orthogonal to all $u_k$ with $k < j$ and hence the eigenvectors $\{u_j\}$ form an orthonormal set. This procedure will not stop unless $\mathcal{H}_0$ is finite dimensional. However, note that $\alpha_j = 0$ for $j \geq n$ might happen if $A_n = 0$.

Theorem 5.6 (Spectral theorem for compact symmetric operators). Suppose $\mathcal{H}_0$ is an inner product space and $A : \mathcal{H}_0 \rightarrow \mathcal{H}_0$ is a compact symmetric operator. Then there exists a sequence of real eigenvalues $\alpha_j$ converging to 0. The corresponding normalized eigenvectors $u_j$ form an orthonormal set and every $f \in \text{Ran}(A) = \{Ag | g \in \mathcal{H}_0\}$ can be written as

$$f = \sum_{j=0}^{N} \langle u_j, f \rangle u_j.$$

(5.42)

If $\text{Ran}(A)$ is dense, then the eigenvectors form an orthonormal basis.

Proof. We assume that $\mathcal{H}_0$ is infinite dimensional without loss of generality. Existence of the eigenvalues $\alpha_j$ and the corresponding eigenvectors $u_j$ has already been established. If the eigenvalues should not converge to zero, there is a subsequence such that $v_k = \alpha_{jk}^{-1} u_{jk}$ is a bounded sequence for which $Av_k$ has no convergent subsequence since $\|Av_k - Av_l\|^2 = \|u_{jk} - u_{jl}\|^2 = 2$.

Next, let $f = Ag \in \text{Ran}(A)$. Set

$$f_n = \sum_{j=0}^{n} \langle u_j, f \rangle u_j, \quad g_n = \sum_{j=0}^{n} \langle u_j, g \rangle u_j$$