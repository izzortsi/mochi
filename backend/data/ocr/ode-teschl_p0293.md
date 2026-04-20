10.2. Fixed and periodic points

Now let us introduce some notation for later use. To set the stage, let $M$ be a metric space and let $f : M \to M$ be continuous. We are interested in investigating the dynamical system corresponding to the iterates

$$f^n(x) = f^{n-1}(f(x)), \quad f^0(x) = x.$$ (10.10)

In most cases $M$ will just be a subset of $\mathbb{R}^n$. However, the more abstract setting chosen here will turn out useful later on.

A point $p \in M$ satisfying

$$f(p) = p$$ (10.11)

is called a **fixed point** of $f$. The set of fixed points of $f$ is denoted by Fix($f$). Similarly, a fixed point of $f^n$,

$$f^n(p) = p,$$ (10.12)

is called a **periodic point** of period $n$. We will usually assume that $n$ is the **prime period** of $p$, that is, we have $f^m(p) \neq p$ for all $1 \leq m < n$. The set of periodic points of $f$ is denoted by Per($f$).

The forward **orbit** of $x$ is defined as

$$\gamma_+(x) = \{f^n(x)|n \in \mathbb{N}_0\}.$$ (10.13)

It is clearly (positively) invariant. Here a set $U \subseteq M$ is called (positively) **invariant**, if $f(U) \subseteq U$. An orbit for $x$ is a set of points

$$\gamma(x) = \{x_n|n \in \mathbb{Z} \text{ such that } x_0 = x, x_{n+1} = f(x_n)\}.$$ (10.14)

It is important to observe that the points $x_{-n}, n \in \mathbb{N}$, are not uniquely defined unless $f$ is one-to-one. Moreover, there might be no such points at all (if $f^{-1}(x) = \emptyset$ for some $x_n$). An orbit is invariant, that is, $f(\gamma(x)) = \gamma(x)$. The points $x_n \in \gamma(x), n < 0$, are also called a past history of $x$.

If $p$ is periodic with period $n$, then $\gamma_+(p)$ is finite and consists of precisely $n$ points

$$\gamma_+(p) = \{p, f(p), \ldots, f^{n-1}(p)\}.$$ (10.15)

The converse is not true since a point might be **eventually periodic** (fixed), that is, it might be that $f^k(x)$ is periodic (fixed) for some $k$. A (forward) orbit of the form (10.15) will be called a **periodic orbit**.

**Example.** If $M = \mathbb{R}$ and $f = 0$, then $p = 0$ is the only fixed point and every other point is eventually fixed.

A point $x \in M$ is called **forward asymptotic** to a periodic point $p$ of period $n$ if

$$\lim_{k \to \infty} f^{nk}(x) = p.$$ (10.16)