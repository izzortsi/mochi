where $p$ and $q$ are polynomials with real coefficients and $q$ is not the zero polynomial. (It does not matter that $q(x) = 0$ at a finite number of points.) Addition and multiplication are defined in the usual fashion of high school algebra, and it is easy to see that $\mathbb{R}(x)$ is a field. The order relation on $\mathbb{R}(x)$ is also easy to define. If $R(x) > 0$ for all sufficiently large $x$ then we say that $R$ is positive in $\mathbb{R}(x)$, and if $R - S$ is positive then we write $S < R$. Since a nonzero rational function vanishes (has value zero) at only finitely many $x \in \mathbb{R}$, we get trichotomy: either $R = S$, $R < S$, or $S < R$. (To be rigorous, we need to prove that the values of a rational function do not change sign for $x$ large enough.) The other order properties are equally easy to check, and $\mathbb{R}(x)$ is an ordered field.

Is $\mathbb{R}(x)$ Archimedean? That is, given $R \in \mathbb{R}(x)$, does there exist a natural number $n \in \mathbb{R}(x)$ such that $R < n$? (A number $n$ is the rational function whose numerator is the constant polynomial $p(x) = n$, a polynomial of degree zero, and whose denominator is the constant polynomial $q(x) = 1$.) The answer is “no.” Take $R(x) = x/1$. The numerator is $x$ and the denominator is 1. Clearly we have $n < x$, not the opposite, so $\mathbb{R}(x)$ fails to be Archimedean.

The same remarks hold for any positive rational function $R = p(x)/q(x)$ where the degree of $p$ exceeds the degree of $q$. In $\mathbb{R}(x)$, $R$ is never less than a natural number. (You might ask yourself: exactly which rational functions are less than $n$?)

The $\epsilon$-principle

Finally let us note a nearly trivial principle that turns out to be invaluable in deriving inequalities and equalities in $\mathbb{R}$.

8 Theorem ($\epsilon$-principle) If $a, b$ are real numbers and if for each $\epsilon > 0$ we have $a \leq b + \epsilon$ then $a \leq b$. If $x, y$ are real numbers and for each $\epsilon > 0$ we have $|x - y| \leq \epsilon$ then $x = y$.

Proof Trichotomy implies that either $a \leq b$ or $a > b$. In the latter case we can choose $\epsilon$ with $0 < \epsilon < a - b$ and get the absurdity

$$\epsilon < a - b \leq \epsilon.$$

Hence $a \leq b$. Similarly, if $x \neq y$ then choosing $\epsilon$ with $0 < \epsilon < |x - y|$ gives the contradiction $\epsilon < |x - y| \leq \epsilon$. Hence $x = y$. See also Exercise 12.