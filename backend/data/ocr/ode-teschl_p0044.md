Initial value problems

Our main task in this section will be to prove the basic existence and uniqueness result for ordinary differential equations. The key ingredient will be the contraction principle (Banach fixed point theorem), which we will derive first.

2.1. Fixed point theorems

Let $X$ be a real vector space. A norm on $X$ is a map $\|.\| : X \to [0, \infty)$ satisfying the following requirements:

(i) $\|0\| = 0$, $\|x\| > 0$ for $x \in X \setminus \{0\}$.

(ii) $\|\alpha x\| = |\alpha| \|x\|$ for $\alpha \in \mathbb{R}$ and $x \in X$.

(iii) $\|x + y\| \leq \|x\| + \|y\|$ for $x, y \in X$ (triangle inequality).

From the triangle inequality we also get the inverse triangle inequality (Problem 2.1)

$$\|f\| - \|g\| \leq \|f - g\|.$$

(2.1)

The pair $(X, \|.\|)$ is called a normed vector space. Given a normed vector space $X$, we say that a sequence of vectors $f_n$ converges to a vector $f$ if $\lim_{n \to \infty} \|f_n - f\| = 0$. We will write $f_n \to f$ or $\lim_{n \to \infty} f_n = f$, as usual, in this case. Moreover, a mapping $F : X \to Y$ between two normed spaces is called continuous if $f_n \to f$ implies $F(f_n) \to F(f)$. In fact, it is not hard to see that the norm, vector addition, and multiplication by scalars are continuous (Problem 2.2).

In addition to the concept of convergence we also have the concept of a Cauchy sequence and hence the concept of completeness: A normed