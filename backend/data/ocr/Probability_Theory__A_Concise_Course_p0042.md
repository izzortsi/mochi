To this end, we again resort to the empirical fact that the relative frequency of an event in a large series of “independent trials under identical conditions”$^2$ virtually coincides with its probability (recall Sec. 1). Imagine a long series of such trials, where each trial involves carrying out both experiments. If $n$ is the total number of trials and $n(A_1 A_2)$ the number of trials leading to occurrence of both $A_1$ and $A_2$, then

$$\mathbf{P}(A_1 A_2) \sim \frac{n(A_1 A_2)}{n}. \tag{3.11}$$

Moreover, if $n(A_2)$ is the number of trials leading to occurrence of $A_2$, then

$$\mathbf{P}(A_2) \sim \frac{n(A_2)}{n}. \tag{3.12}$$

Suppose we confine ourselves to examining the results of the $n(A_2)$ trials leading to occurrence of $A_2$, and look for occurrence of $A_1$. Then clearly $A_1$ will occur in precisely $n(A_1 A_2)$ of these trials. Moreover, if $n$ is very large, then so is $n(A_2)$, and hence

$$\mathbf{P}(A_1) \sim \frac{n(A_1 A_2)}{n(A_2)}, \tag{3.13}$$

since $A_2$ is associated only with the second experiment, which has nothing whatsoever to do with the first experiment or the event $A_1$ associated with it. Combining (3.11)–(3.13), we find that

$$\mathbf{P}(A_1 A_2) \sim \frac{n(A_1 A_2)}{n} = \frac{n(A_1 A_2)}{n(A_2)} \frac{n(A_2)}{n} \sim \mathbf{P}(A_1) \mathbf{P}(A_2),$$

or, after going over to exact equations (in the limit as $n \to \infty$),

$$\mathbf{P}(A_1 A_2) = \mathbf{P}(A_1) \mathbf{P}(A_2). \tag{3.14}$$

Two events $A_1$ and $A_2$ are said to be (statistically) independent if they satisfy (3.14) and (statistically) dependent otherwise.$^3$

The definition (3.14) is in keeping with the notion of conditional probability introduced in Sec. 5. In fact, if two events $A_1$ and $A_2$ are independent, then, loosely speaking, the occurrence of $A_2$ should have no influence on the probability of occurrence of $A_1$, and hence the conditional probability

$^2$ Thus there remains the problem of just what is meant by “independent trials under identical conditions” (a phrase already encountered on pp. 2 and 16), although the intuitive meaning of the phrase is perfectly clear, e.g., in a series of coin tosses. For a rigorous discussion of this whole issue, see W. Feller, *op. cit.*, p. 128.

$^3$ In the last analysis, (3.14) is a definition, although one strongly suggested by experience, i.e., by the intuitive meaning of independence and the interpretation of probabilities as limiting values of relative frequencies (recall footnote 6, p. 20).