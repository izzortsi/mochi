(c) In general, if $T_0 \in G$ and $\|T\| < 1/\|T_0^{-1}\|$ show that

$$\text{Inv}(T_0 - T) = \text{Inv}(I - T_0^{-1} \circ T) \circ T_0^{-1},$$

and infer that Inv is analytic at $T_0$.

(d) Infer from the general fact that analyticity implies smoothness that inversion is smooth.

(Note that this proof avoids Cramer’s Rule and makes no use of finite-dimensionality.)

*36. Give a proof of smoothness of Inv by the following bootstrap method.

(a) Using the identity

$$X^{-1} - Y^{-1} = X^{-1} \circ (Y - X) \circ Y^{-1}$$

give a simple proof that Inv is continuous.

(b) Infer that $Y = \text{Inv}(X)$ is a continuous solution of the $C^\infty$ implicit function problem

$$F(X, Y) - I = 0,$$

where $F(X, Y) = X \circ Y$ as in Exercise 33. Since the proof of the $C^1$ Implicit Function Theorem relies only continuity of Inv, it is not circular reasoning to conclude that Inv is $C^1$.

(c) Assume simultaneously that the $C^r$ Implicit Function Theorem has been proved and that Inv is known to be $C^{r-1}$. Prove that Inv is $C^r$ and that the $C^{r+1}$ Implicit Function Theorem is true.

(d) Conclude logically that Inv is smooth and the $C^\infty$ Implicit Function Theorem is true.

Note that this proof avoids Cramer’s Rule and makes no use of finite dimensionality.

*37. Use polar decomposition to give an alternate proof of the volume-multiplier formula.

**38. Consider the set $S$ of all $2 \times 2$ matrices $X \in \mathcal{M}$ that have rank 1.

(a) Show that in a neighborhood of the matrix

$$X_0 = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$$

$S$ is diffeomorphic to a two-dimensional disc.

(b) Is this true (locally) for all matrices $X \in S$?

(c) Describe $S$ globally. (How many connected components does it have? Is it closed in $\mathcal{M}$? If not, what are its limit points and how does $S$ approach them? What is the intersection of $S$ with the unit sphere in $\mathcal{M}$?, etc.)

39. Draw pictures of all the possible shapes of $T(S^2)$ where $T : \mathbb{R}^3 \to \mathbb{R}^3$ is a linear transformation and $S^2$ is the 2-sphere. (Don’t forget the cases in which $T$ has rank $< 3$.)