To calculate (6), we apply Stirling’s formula (see p. 10) to the expression (5), obtaining

$$N_n \sim \frac{\sqrt{2\pi n} n^n e^{-n}}{\sqrt{2\pi n_1} n_1^{n_1} e^{-n_1} \cdots \sqrt{2\pi n_N} n_N^{n_N} e^{-n_N}},$$

and hence

$$\ln N_n \sim n \ln n - np_1 \ln (np_1) - \cdots - np_N \ln (np_N)$$

$$= n \ln n - (np_1 + \cdots + np_N) \ln n - np_1 \ln p_1 - \cdots - np_N \ln p_N$$

$$= -n \sum_{i=1}^{N} p_i \ln p_i$$

in terms of the natural logarithm

$$\ln x = \log_e x,$$

or equivalently

$$\log_2 N_n \sim -n \sum_{i=1}^{N} p_i \log_2 p_i$$

(7)

in terms of the logarithm to the base 2. Changing $\sim$ to $=$ and substituting (7) into (6), we get Shannon’s formula

$$I = -\sum_{i=1}^{N} p_i \log_2 p_i$$

(8)

for the average amount of information in a message $\mathcal{M}$ telling which of the $N$ outcomes $A_1, \ldots, A_N$ with probabilities (3) has occurred. Note that (8) reduces to (2) if the outcomes are equiprobable, since then

$$p_1 = \cdots = p_N = \frac{1}{N}.$$

Example 1 (Average time of psychological reaction). One of $N$ lamps is illuminated at random, where $p_i$ is the probability of the $i$th lamp being turned on, and an observer is asked to point out the lamp which is lit. In a long series of independent trials it turns out that the average time required to give the correct answer is proportional to the quantity (8) rather than to the number of lamps $N$, as might have been expected.

We can interpret the quantity (8) not only as the average amount of information conveyed by the message $\mathcal{M}$, but also the average amount of “uncertainty” residing in the given random experiment, and hence as a measure of the randomness of the experiment. Receiving the message reduces the uncertainty of the outcome of the experiment to zero, since the

---

2 See A. M. Yaglom and I. M. Yaglom, *Wahrscheinlichkeit und Information*, second edition, VEB Deutscher Verlag der Wissenschaften, Berlin (1965), p. 67.