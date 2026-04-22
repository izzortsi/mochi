$\mathbb{R}$ into the group of motions of $\mathbb{R}^m$. In fact each $\varphi_t$ is a homeomorphism of $\mathbb{R}^m$ onto itself and its inverse is $\varphi_{-t}$. For $\varphi_{-t} \circ \varphi_t = \varphi_0$ and $\varphi_0$ is the time-zero map where nothing moves at all, $\varphi_0 = \text{identity map}$.

6* Analytic Functions

Recall from Chapter 3 that a function $f : (a,b) \to \mathbb{R}$ is analytic if it can be expressed locally as a power series. For each $x \in (a,b)$ there exists a convergent power series $\sum c_k h^k$ such that for all $x + h$ near $x$ we have

$$f(x + h) = \sum_{k=0}^{\infty} c_k h^k.$$

As we have shown previously, every analytic function is smooth but not every smooth function is analytic. In this section we give a necessary and sufficient condition that a smooth function be analytic. It involves the speed with which the $r^{\text{th}}$ derivative grows as $r \to \infty$.

Let $f : (a,b) \to \mathbb{R}$ be smooth. The Taylor series for $f$ at $x \in (a,b)$ is

$$\sum_{k=0}^{\infty} \frac{f^{(k)}(x)}{k!} h^k.$$

Let $I = [x - \sigma, x + \sigma]$ be a subinterval of $(a,b), \sigma > 0$, and denote by $M_r$ the maximum of $|f^{(r)}(t)|$ for $t \in I$. The derivative growth rate of $f$ on $I$ is

$$\alpha = \limsup_{r \to \infty} \sqrt[r]{\frac{M_r}{r!}}.$$

Clearly, $\sqrt[r]{\left|f^{(r)}(x)\right|}/r! \leq \sqrt[r]{\frac{M_r}{r!}}$, so the radius of convergence

$$R = \frac{1}{\limsup_{r \to \infty} \sqrt[r]{\left|f^{(r)}(x)\right|}}$$

of the Taylor series at $x$ satisfies

$$\frac{1}{\alpha} \leq R.$$

In particular, if $\alpha$ is finite the radius of convergence of the Taylor series is positive.