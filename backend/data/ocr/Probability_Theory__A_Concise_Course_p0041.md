call, while $A$ is the event of ruin, then

$$\mathbf{P}(A \mid B_1) = p(x + 1), \quad \mathbf{P}(A \mid B_2) = p(x - 1).$$

The mutually exclusive events $B_1$ and $B_2$ form a “full set,” since the player either wins or loses the first call. Moreover, we have

$$\mathbf{P}(B_1) = \frac{1}{2}, \quad \mathbf{P}(B_2) = \frac{1}{2},$$

assuming fair tosses of an unbiased coin (cf. Problem 1, p. 65). Hence, by (3.6),

$$\mathbf{P}(A) = \mathbf{P}(A \mid B_1)\mathbf{P}(B_1) + \mathbf{P}(A \mid B_2)\mathbf{P}(B_2),$$

i.e.,

$$p(x) = \frac{1}{2}[p(x + 1) + p(x - 1)], \quad 1 < x < m - 1, \tag{3.7}$$

where obviously

$$p(0) = 1, \quad p(m) = 0. \tag{3.8}$$

The solution of (3.7) is the linear function

$$p(x) = C_1 + C_2x, \tag{3.9}$$

where the coefficients $C_1$ and $C_2$ are determined by the boundary conditions (3.8), which imply

$$C_1 = 1, \quad C_1 + C_2m = 0. \tag{3.10}$$

Combining (3.9) and (3.10), we finally find that the probability of ruin given an initial capital of $x$ dollars is just

$$p(x) = 1 - \frac{x}{m}, \quad 0 < x < m.$$

6. Statistical Independence

In saying that two experiments are “statistically independent” (or briefly, “independent”), we mean, roughly speaking, that the outcome of one experiment has no influence on the outcome of the other. Let $A_1$ be an event associated only with the first experiment, and $A_2$ an event associated only with the second experiment. Then the occurrence of $A_1$ has no influence on the probability of occurrence of $A_2$, and conversely. In this sense, we say that the events $A_1$ and $A_2$ are “(statistically) independent.”

To give mathematical expression to the notion of independence, we calculate the probability that two independent events $A_1$ and $A_2$ both occur.