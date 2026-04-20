Show that this defines a norm. Moreover, show that

$$\|AB\| \leq \|A\|\|B\|$$

and that $\mathbb{I} + A$ is invertible if $\|A\| < 1$, with inverse given by the Neumann series

$$(\mathbb{I} - A)^{-1} = \sum_{n=0}^{\infty} A^n.$$

Furthermore, $\|(\mathbb{I} - A)^{-1}\| \leq (1 - \|A\|)^{-1}$.

Problem 9.14. Let $\varphi : \mathbb{R}^n \to \mathbb{R}^n$ be a homeomorphism of the form $\varphi(x) = x + h(x)$ with bounded $h$. Show that $\varphi^{-1}(x) = x + k(x)$, where $k(x)$ is again bounded (with the same bound).

Problem 9.15. Let

$$A = \begin{pmatrix} -\alpha & \beta \\ -\beta & -\alpha \end{pmatrix}, \quad B = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}, \quad \alpha > 0.$$

Explicitly compute the conjugacy found in the proof of Theorem 9.10.

9.4. Appendix: Integral equations

I hope that, after the previous sections, you are by now convinced that integral equations are an important tool in the investigation of differential equations. In this appendix we will prove a few somewhat technical results which can be omitted on first reading.

The main ingredient will again be fixed point theorems. But now we need the case where our fixed point equation depends on additional parameters $\lambda \in \Lambda$, where $\Lambda$ is a subset of some Banach space.

Theorem 9.11 (Uniform contraction principle). Let $C$ be a (nonempty) closed subset of a Banach space $X$ and $\Lambda$ a subset of another Banach space. Suppose $K_\lambda : C \to C$ is a uniform contraction, that is,

$$\|K_\lambda(x) - K_\lambda(y)\| \leq \theta \|x - y\|, \quad x, y \in C, \lambda \in \Lambda,$$

(9.40)

for some $\theta \in [0, 1)$, and $K_\lambda(x)$ is continuous with respect to $\lambda \in \Lambda$ for every $x \in C$. Then the unique fixed point $\overline{x}(\lambda)$ is continuous with respect to $\lambda$.

Moreover, if $\lambda_n \to \lambda$, then

$$x_{n+1} = K_{\lambda_n}(x_n) \to \overline{x}(\lambda).$$

(9.41)

Proof. Existence of $\overline{x}(\lambda)$ for fixed $\lambda$ follows from Theorem 2.1. We first show that $\overline{x}(\lambda)$ is continuous. By the triangle inequality we have

$$\|\overline{x}(\lambda) - \overline{x}(\eta)\| = \|K_\lambda(\overline{x}(\lambda)) - K_\lambda(\overline{x}(\eta)) + K_\lambda(\overline{x}(\eta)) - K_\eta(\overline{x}(\eta))\|$$

$$\leq \theta \|\overline{x}(\lambda) - \overline{x}(\eta)\| + \|K_\lambda(\overline{x}(\eta)) - K_\eta(\overline{x}(\eta))\|$$