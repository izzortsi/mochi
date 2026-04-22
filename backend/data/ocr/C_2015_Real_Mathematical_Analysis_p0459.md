open, and $m(U_k \setminus K_k) < \epsilon/2^k$. Thus $S = \bigcup(U_k \setminus K_k)$ is an open set with $mS < \epsilon$. We claim that $g = f|_K$ is continuous, where $K$ is the closed set $\mathbb{R}^n \setminus S$. By De Morgan’s Law we have

$$K = S^c = \bigcap_{k=1}^{\infty}(K_k \sqcup U_k^c)$$

and therefore

$$g^{\text{pre}}(Y_k) = f^{\text{pre}}(Y_k) \cap K \subset U_k \cap K$$

$$= U_k \cap \bigcap_{j=1}^{\infty}(K_j \sqcup U_j^c) \subset U_k \cap (K_k \sqcup U_k^c)$$

$$= U_k \cap K_k = K_k \subset g^{\text{pre}}(Y_k).$$

Hence $g^{\text{pre}}(Y_k) = U_k \cap K$ is open in $K$.

Now if $V$ is an arbitrary open subset of $\mathbb{R}$ then it is the union of some members of $\mathcal{Y}$, say $V = \bigcup_{\ell \in L(V)} Y_\ell$, where $L(V) \subset \mathbb{N}$. Then $g^{\text{pre}}(V) = \bigcup_{\ell \in L(V)} g^{\text{pre}}(Y_\ell)$ is open in $K$ which gives continuity of $g$.

**Littlewood’s Third Principle** concerns a sequence of measurable functions $f_n : [a,b] \to \mathbb{R}$ that converges almost everywhere to a limit. Except for an $\epsilon$-set the convergence is actually uniform, which is **Egoroff’s Theorem**: *Almost everywhere convergence implies nearly uniform convergence.*

**Proof of Egoroff’s Theorem** Set

$$X(k,\ell) = \{x \in [a,b] : \forall n \geq k \text{ we have } |f_n(x) - f(x)| < 1/\ell\}.$$

Fix $\ell \in \mathbb{N}$. Since $f_n(x) \to f(x)$ for almost every $x$ we have $\bigcup_k X(k,\ell) \cup Z(\ell) = [a,b]$ where $Z(\ell)$ is a zero set.

Let $\epsilon > 0$ be given. By measure continuity $m(X(k,\ell)) \to b - a$ as $k \to \infty$. This implies we can choose $k_1 < k_2 < \ldots$ such that for $X_\ell = X(k_\ell,\ell)$ we have $m(X_\ell^c) < \epsilon/2^\ell$. Thus $m(X^c) < \epsilon$ where $X = \bigcap_\ell X_\ell$.

We claim that $f_n$ converges uniformly on $X$. Given $\sigma > 0$ we choose and fix $\ell$ such that $1/\ell < \sigma$. For all $n \geq k_\ell$ we have

$$x \in X \Rightarrow x \in X_\ell = X(k_\ell,\ell) \Rightarrow |f_n(x) - f(x)| < 1/\ell < \sigma.$$

Hence $f_n$ converges uniformly to $f$ off the $\epsilon$-set $X^c$. (We used $\sigma$ to avoid writing $\epsilon$ with two different meanings.) $\square$

See also Exercise 83.