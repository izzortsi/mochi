37. Prove that $\mathbb{R}^2 \sim \mathbb{R}$. [Hint: Think of shuffling two digit strings]

$$(a_1 a_2 a_3 \ldots) \& (b_1 b_2 b_3 \ldots) \rightarrow (a_1 b_1 a_2 b_2 a_3 b_3 \ldots).$$

In this way you could transform a pair of reals into a single real. Be sure to face the nines-termination issue.

38. Let $S$ be a set and let $\mathcal{P} = \mathcal{P}(S)$ be the collection of all subsets of $S$. [$\mathcal{P}(S)$ is called the **power set** of $S$.] Let $\mathcal{F}$ be the set of functions $f: S \rightarrow \{0, 1\}$.

(a) Prove that there is a natural bijection from $\mathcal{F}$ onto $\mathcal{P}$ defined by

$$f \mapsto \{s \in S : f(s) = 1\}.$$

*(b) Prove that the cardinality of $\mathcal{P}$ is greater than the cardinality of $S$, even when $S$ is empty or finite.

[Hints: The notation $Y^X$ is sometimes used for the set of all functions $X \rightarrow Y$. In this notation $\mathcal{F} = \{0, 1\}^S$ and assertion (b) becomes $\#(S) < \#(\{0, 1\}^S)$. The empty set has one subset, itself, whereas it has no elements, so $\#(\emptyset) = 0$, while $\#(\{0, 1\}^0) = 1$, which proves (b) for the empty set. Assume there is a bijection from $S$ onto $\mathcal{P}$. Then there is a bijection $\beta : S \rightarrow \mathcal{F}$, and for each $s \in S$, $\beta(s)$ is a function, say $f_s : S \rightarrow \{0, 1\}$. Think like Cantor and try to find a function which corresponds to no $s$. Infer that $\beta$ could not have been onto.]

39. A real number is **algebraic** if it is a root of a nonconstant polynomial with integer coefficients.

(a) Prove that the set $A$ of algebraic numbers is denumerable. [Hint: Each polynomial has how many roots? How many linear polynomials are there? How many quadratics? ...]

(b) Repeat the exercise for roots of polynomials whose coefficients belong to some fixed, arbitrary denumerable set $S \subset \mathbb{R}$.

*(c) Repeat the exercise for roots of trigonometric polynomials with integer coefficients.*

(d) Real numbers that are not algebraic are said to be **transcendental**. Trying to find transcendental numbers is said to be like looking for hay in a haystack. Why?

40. A **finite word** is a finite string of letters, say from the roman alphabet.

(a) What is the cardinality of the set of all finite words, and thus of the set of all possible poems and mathematical proofs?

(b) What if the alphabet had only two letters?

(c) What if it had countably many letters?

(d) Prove that the cardinality of the set $\Sigma_n$ of all infinite words formed using a finite alphabet of $n$ letters, $n \geq 2$, is equal to the cardinality of $\mathbb{R}$.