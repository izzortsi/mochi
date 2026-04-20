part of the map analytically. We fix $\lambda \in (0, \frac{1}{2}], \mu \in [2, \infty)$, set

$$J_0 = [0, 1] \times [0, \frac{1}{\mu}], \quad J_1 = [0, 1] \times [1 - \frac{1}{\mu}, 1],$$

(13.1)

and define

$$f : J_0 \rightarrow f(J_0), \quad (x, y) \mapsto (\lambda x, \mu y),$$

(13.2)

respectively

$$f : J_1 \rightarrow f(J_1), \quad (x, y) \mapsto (1 - \lambda x, \mu(1 - y)).$$

(13.3)

A look at the two coordinates shows that $f_1(x, y) \in [0, 1]$ whenever $x \in [0, 1]$ and that $f_2(x, y) = T_\mu(y)$. Hence if we want to stay in $D$ during the first $n$ iterations we need to start in $\Lambda_{+,n} = [0, 1] \times \Lambda_n(T_\mu)$, where $\Lambda_n(T_\mu) = \Lambda_n$ is the same as for $T_\mu$. In particular, if we want to stay in $D$ for all positive iterations we have to start in

$$\Lambda_+ = [0, 1] \times \Lambda(T_\mu) = \bigcap_{n \in \mathbb{N}_0} f^n(D).$$

(13.4)

But note that $f$ is invertible, with inverse given by

$$g = f^{-1} : K_0 = f(J_0) \rightarrow J_0, \quad (x, y) \mapsto (\lambda^{-1}x, \mu^{-1}y),$$

(13.5)

respectively

$$g = f^{-1} : K_1 = f(J_1) \rightarrow J_1, \quad (x, y) \mapsto (\lambda^{-1}(1 - x), 1 - \mu^{-1}y).$$

(13.6)

Hence, by the same consideration, if we want to stay in $D$ for all negative iterations, we have to start in

$$\Lambda_- = \Lambda(T_{1/\lambda}) \times [0, 1] = \bigcap_{n \in \mathbb{N}_0} f^{-n}(D).$$

(13.7)

Finally, if we want to stay in $D$ for all (positive and negative) iterations we have to start in

$$\Lambda = \Lambda_- \cap \Lambda_+ = \Lambda(T_{1/\lambda}) \times \Lambda(T_\mu).$$

(13.8)

The set $\Lambda$ is a Cantor set since any product of two Cantor sets is again a Cantor set (prove this).

Now by our considerations for the tent map, the $y$ coordinate of every point in $\Lambda$ can uniquely defined by a sequence $y_n, n \in \mathbb{N}_0$. Similarly, the $x$ coordinate of every point in $\Lambda$ can be uniquely defined by a sequence $x_n, n \in \mathbb{N}_0$. Hence defining $s_n = y_n$ and $s_{-n} = x_{n-1}$ for $n \in \mathbb{N}_0$ we see that there is a one-to-one correspondence between points in $\Lambda$ and doubly infinite sequences on two symbols. Hence we have found again an itinerary map

$$\varphi : \Lambda \rightarrow \Sigma_2$$

$$\langle x, y \rangle \mapsto s_n = \begin{cases} y_n & n \geq 0 \\ x_{-n-1} & n < 0 \end{cases},$$

(13.9)