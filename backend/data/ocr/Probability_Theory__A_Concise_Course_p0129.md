message tells us the result of the experiment with complete certainty. More generally, we might ask for the amount of information about one “full set” of mutually exclusive events $A_1, \ldots, A_N$ conveyed by being told which of a related full set of mutually exclusive events $B_1, \ldots, B_N$, has occurred. Suppose the two sets of events have probabilities $\mathbf{P}(A_1), \ldots, \mathbf{P}(A_N)$ and $\mathbf{P}(B_1), \ldots, \mathbf{P}(B_N')$, where $\mathbf{P}(A_1) + \cdots + \mathbf{P}(A_N) = 1$,

$$\mathbf{P}(B_1) + \cdots + \mathbf{P}(B_N') = 1.$$

Moreover, let $\mathbf{P}(A_i B_j)$ be the probability that both events $A_i$ and $B_j$ occur, while $\mathbf{P}(A_i \mid B_j)$ is the probability of $A_i$ occurring if $B_j$ is known to have occurred. Then

$$I_{A \mid B_j} = -\sum_{i=1}^{N} \mathbf{P}(A_i \mid B_j) \log_2 \mathbf{P}(A_i \mid B_j)$$

is the amount of uncertainty about the events $A_1, \ldots, A_N$ remaining after $B_j$ is known to have occurred, and hence

$$I_{A \mid B} = -\sum_{j=1}^{N'} \mathbf{P}(B_j) I_{A \mid B_j} = -\sum_{j=1}^{N'} \sum_{i=1}^{N} \mathbf{P}(B_j) \mathbf{P}(A_i \mid B_j) \log_2 \mathbf{P}(A_i \mid B_j)$$

$$= -\sum_{i,j} \mathbf{P}(A_i B_j) \log_2 \frac{\mathbf{P}(A_i B_j)}{\mathbf{P}(B_j)}$$

is the average amount of uncertainty about $A_1, \ldots, A_N$ remaining after it is known which of the events $B_1, \ldots, B_N$, has occurred. Let $I_{AB}$ be the information about the events $A_1, \ldots, A_N$ conveyed by knowledge of which of the events $B_1, \ldots, B_N$, has occurred. Then clearly

$$I_{AB} = I_A - I_{A \mid B},$$

where

$$I_A = -\sum_{i=1}^{N} \mathbf{P}(A_i) \log_2 \mathbf{P}(A_i) = -\sum_{i=1}^{N} \sum_{j=1}^{N'} \mathbf{P}(A_i B_j) \log_2 \mathbf{P}(A_i)$$

is the quantity previously denoted by $I$ (justify the last step). Combining (9) and (11), we finally get

$$I_{AB} = \sum_{i,j} \mathbf{P}(A_i B_j) \log_2 \frac{\mathbf{P}(A_i B_j)}{\mathbf{P}(A_i) P(B_j)}$$

**Example 2 (Weather prediction).** During a certain season it rains about once every five days, the weather being fair the rest of the time. Every night a prediction is made of the next day’s weather. Suppose a prediction of rain is wrong about half the time, while a prediction of fair weather is wrong.

4 In words, (10) says that “the information in the message” equals “the uncertainty before the message is received” minus “the uncertainty after the message is received.”