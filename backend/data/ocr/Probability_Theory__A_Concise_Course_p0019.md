Then there are precisely

$$N = \frac{n!}{n_1! n_2! \cdots n_k!}$$

ways of partitioning the population into $k$ subpopulations, of sizes $n_1, n_2, \ldots, n_k$, respectively.

Proof. The order of the subpopulations matters in the sense that $n_1 = 2, n_2 = 4, n_3, \ldots, n_k$ and $n_1 = 4, n_2 = 2, n_3, \ldots, n_k$ (say) represent different partitions, but the order of elements within the subpopulations themselves is irrelevant. The partitioning can be effected in stages, as follows: First we form a group of $n_1$ elements from the original population. This can be done in

$$N_1 = C_{n_1}^n$$

ways. Then we form a group of $n_2$ elements from the remaining $n - n_1$ elements. This can be done in

$$N_2 = C_{n_2}^{n - n_1}$$

ways. Proceeding in this fashion, we are left with $n - n_1 - \cdots - n_{k-2} = n_{k-1} + n_k$ elements after $k - 2$ stages. These elements can be partitioned into two groups, one containing $n_{k-1}$ elements and the other $n_k$ elements, in

$$N_{k-1} = C_{n_{k-1}}^{n - n_1 - \cdots - n_{k-2}}$$

ways. Hence, by Theorem 1.2, there are

$$N = N_1 N_2 \cdots N_{k-1}$$

$$= C_{n_1}^n C_{n_2}^{n - n_1} \cdots C_{n_{k-1}}^{n - n_1 - \cdots - n_{k-2}}$$

distinct ways of partitioning the given population into the indicated $k$ subpopulations. But

$$C_{n_1}^n C_{n_2}^{n - n_1} \cdots C_{n_{k-1}}^{n - n_1 - \cdots - n_{k-1}}$$

$$= \frac{n!}{n_1! (n - n_1)!} \frac{(n - n_1)!}{n_2! (n - n_1 - n_2)!} \cdots \frac{(n - n_1 - \cdots - n_{k-2})!}{n_{k-1}! (n - n_1 - \cdots - n_{k-2} - n_{k-1})!}$$

$$= \frac{n!}{n_1! (n - n_1)!} \frac{(n - n_1)!}{n_2! (n - n_1 - n_2)!} \cdots \frac{(n - n_1 - \cdots - n_{k-2})!}{n_{k-1}! n_k!}$$

$$= \frac{n!}{n_1! n_2! \cdots n_k!},$$

in keeping with (1.9).

Remark. Theorem 1.4 reduces to Theorem 1.3 if

$$k = 2, \ n_1 = r, \ n_2 = n - r.$$