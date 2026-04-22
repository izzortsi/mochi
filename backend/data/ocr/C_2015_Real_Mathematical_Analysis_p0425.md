Then $f_{\pm} \geq 0$ and $f = f_+ - f_-$. See Exercise 28. If $f_{\pm}$ are integrable we say that $f$ is integrable and define its integral as

$$\int f = \int f_+ - \int f_-.$$

38 Proposition The set of measurable functions $f : \mathbb{R} \to \mathbb{R}$ is a vector space, the set of integrable functions is a subspace, and the integral is a linear map from the latter into $\mathbb{R}$.

The proof is left to the reader as Exercise 32.

7 Italian Measure Theory

In Chapter 5 the slice method is developed in terms of Riemann integrals. Here we generalize to Lebesgue integrals. If $E \subset \mathbb{R}^k \times \mathbb{R}^n$ and $x \in \mathbb{R}^k$ then the $x$-slice through a point $x \in \mathbb{R}^k$ is

$$E_x = \{y \in \mathbb{R}^n : (x,y) \in E\}.$$

The $y$-slice is $E^y = \{x : (x,y) \in E\}$. Similarly, the $x$-slice and $y$-slice of a function $f : E \to \mathbb{R}$ are $f_x : y \mapsto f(x,y)$ and $f^y : x \mapsto f(x,y)$.

Remark In this section we frequently write $dx$ and $dy$ to indicate which variable is the integration variable.

39 Cavalieri’s Principle If $E$ is measurable then almost every slice $E_x$ of $E$ is measurable, the function $x \mapsto m(E_x)$ is measurable, and its integral is

$$mE = \int m(E_x) dx.$$

(Note that $mE$ refers to $(k+n)$-dimensional measure while $m(E_x)$ refers to $n$-dimensional measure.)

See Figure 148.

Proof We take $k = 1 = n$. The proof of the Zero Slice Theorem (Theorem 26) contains the hard work; if $E$ is a zero set then it asserts that almost every slice $E_x$ is a zero set, and since the integral of a function that vanishes almost everywhere is zero we get (4) for zero sets.