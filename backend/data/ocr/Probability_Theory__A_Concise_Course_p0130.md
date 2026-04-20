only about one time out of ten. How much information about the weather is conveyed on the average by the predictions?

Solution. Let $A_1$ denote rain, $A_2$ fair weather, $B_1$ a prediction of rain and $B_2$ a prediction of fair weather. Then, to a good approximation,

$$\mathbf{P}(A_1) = \frac{1}{5}, \quad \mathbf{P}(A_2) = \frac{4}{5},$$

$$\mathbf{P}(A_1 \mid B_1) = \frac{1}{2}, \quad \mathbf{P}(A_1 \mid B_2) = \frac{1}{10}.$$

Moreover, since

$$\mathbf{P}(A_1) = \mathbf{P}(A_1 \mid B_1)\mathbf{P}(B_1) + \mathbf{P}(A_1 \mid B_2)\mathbf{P}(B_2),$$

we have

$$\frac{1}{5} = \frac{1}{2} \mathbf{P}(B_1) + \frac{1}{10} [1 - \mathbf{P}(B_1)],$$

and hence

$$\mathbf{P}(B_1) = \frac{1}{4}, \quad \mathbf{P}(B_2) = \frac{3}{4},$$

$$\mathbf{P}(A_1 B_1) = \mathbf{P}(A_1 \mid B_1)\mathbf{P}(B_1) = \frac{1}{8},$$

$$\mathbf{P}(A_1 B_2) = \mathbf{P}(A_1 \mid B_2)\mathbf{P}(B_2) = \frac{3}{40},$$

$$\mathbf{P}(A_2 B_1) = [1 - \mathbf{P}(A_1 \mid B_1)]\mathbf{P}(B_1) = \frac{1}{8},$$

$$\mathbf{P}(A_2 B_2) = [1 - \mathbf{P}(A_1 \mid B_2)]\mathbf{P}(B_2) = \frac{27}{40}.$$

It follows from (12) that

$$I_{AB} = \frac{1}{8} \log_2 \frac{5}{2} + \frac{3}{40} \log_2 \frac{1}{2} + \frac{1}{8} \log_2 \frac{5}{8} + \frac{27}{40} \log_2 \frac{9}{8} \approx 0.12$$

is the average amount of weather conveyed by a prediction. In the case of 100% accurate predictions, $A_1 = B_1$, $A_2 = B_2$ and (12) reduces to

$$I_{AB} = -\frac{1}{5} \log_2 \frac{1}{5} - \frac{4}{5} \log_2 \frac{4}{5} \approx 0.72.$$

PROBLEMS

1. Which conveys more information, a message telling a stranger’s birthday or a message telling his telephone number?