10. Bernoulli Trials. The Binomial and Poisson Distributions

By Bernoulli trials we mean identical independent experiments in each of which an event $A$, say, may occur with probability

$$p = \mathbf{P}(A)$$

$(p \neq 0)$ or fail to occur with probability

$$q = 1 - p.$$

Occurrence of the event $A$ is called a “success,” and nonoccurrence of $A$ (i.e., occurrence of the complementary event $\bar{A}$) is called a “failure.”

In the case of $n$ consecutive Bernoulli trials, each elementary event $\omega$ can be described by a sequence like

$$\underbrace{1011 \ldots 0001}_{n \text{ times}}$$

consisting of $n$ digits, each a 0 or a 1, where success at the $i$th trial is denoted by a 1 in the $i$th place and failure at the $i$th trial by a 0 in the $i$th place. Because of the independence of the trials, the probability of an elementary event $\omega$ in which there are precisely $k$ successes and $n - k$ failures is just

$$\mathbf{P}(\omega) = p^k q^{n-k}.$$

Clearly, the various elementary events are equiprobable only if $p = q$.

Now consider the random variable $\xi$ equal to the total number of successes in $n$ Bernoulli trials, i.e., $\xi(\omega) = k$ if precisely $k$ successes occur in the