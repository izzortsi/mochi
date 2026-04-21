Perfect Metric Spaces

A metric space $M$ is perfect if $M' = M$, i.e., each $p \in M$ is a cluster point of $M$. Recall that $M$ clusters at $p$ if each $M_r p$ is an infinite set. For example $[a, b]$ is perfect and $\mathbb{Q}$ is perfect. $\mathbb{N}$ is not perfect since none of its points are cluster points.

56 Theorem Every nonempty, perfect, complete metric space is uncountable.

Proof Suppose not: Assume $M$ is nonempty, perfect, complete, and countable. Since $M$ consists of cluster points it must be denumerable and not finite. Say

$$M = \{x_1, x_2, \ldots\}$$

is a list of all the elements of $M$. We will derive a contradiction by finding a point of $M$ not in the list. Define

$$\widehat{M}_r p = \{q \in M : d(p, q) \leq r\}.$$

It is the closed neighborhood of radius $r$ at $p$. Choose any $y_1 \in M$ with $y_1 \neq x_1$ and choose $r_1 > 0$ so that $Y_1 = \widehat{M}_{r_1}(y_1)$ “excludes” $x_1$ in the sense that $x_1 \notin Y_1$. We can take $r_1$ as small as we want, say $r_1 < 1$.

Since $M$ clusters at $y_1$ we can choose $y_2 \in M_{r_1}(y_1)$ with $y_2 \neq x_2$ and choose $r_2 > 0$ so that $Y_2 = \widehat{M}_{r_2}(y_2)$ excludes $x_2$. Taking $r_2$ small ensures $Y_2 \subset Y_1$. (Here we are using openness of $M_{r_1}(y_1)$.) Also we take $r_2 < 1/2$. Since $Y_2 \subset Y_1$, it excludes $x_1$ as well as $x_2$. See Figure 45.

Nothing stops us from continuing inductively, and we get a nested sequence of closed neighborhoods $Y_1 \supset Y_2 \supset Y_3 \ldots$ such that $Y_n$ excludes $x_1, \ldots, x_n$, and has radius $r_n \leq 1/n$. Thus the center points $y_n$ form a Cauchy sequence. Completeness of $M$ implies that

$$\lim_{n \to \infty} y_n = y \in M$$

exists. Since the sets $Y_n$ are closed and nested, $y \in Y_n$ for each $n$. Does $y$ equal $x_1$? No, for $Y_1$ excludes $x_1$. Does it equal $x_2$? No, for $Y_2$ excludes $x_2$. In fact, for each $n$ we have $y \neq x_n$. The point $y$ is nowhere in the supposedly complete list of elements of $M$, a contradiction. Hence $M$ is uncountable.

57 Corollary $\mathbb{R}$ and $[a, b]$ are uncountable.

Proof $\mathbb{R}$ is complete and perfect, while $[a, b]$ is compact, therefore complete, and perfect. Neither is empty.