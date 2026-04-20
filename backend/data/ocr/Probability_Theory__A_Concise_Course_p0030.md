i.e., (2.11) holds for any $n$ events. The proof for all $n$ now follows by mathematical induction.

**Example (Coincidences).** Suppose $n$ students have $n$ identical raincoats which they unwittingly hang on the same coat rack while attending class. After class, each student selects a raincoat at random, being unable to tell it apart from all the others. What is the probability that at least one raincoat ends up with its original owner?

**Solution.** We number both the students and the raincoats from 1 to $n$, with the $k$th raincoat belonging to the $k$th student ($k = 1, 2, \ldots, n$). Let $A_k$ be the event that the $k$th student retrieves his own raincoat. Then the event $A$ that “at least one raincoat ends up with its original owner” is just

$$A = \bigcup_{k=1}^{n} A_k.$$

Every outcome of the experiment consisting of “randomly selecting” the raincoats can be described by a permutation $(i_1, i_2, \ldots, i_n)$, where $i_k$ is the number of the raincoat selected by the $k$th student. Consider the event $A_{k_1} A_{k_2} \cdots A_{k_m}$, where $m \leq n$. This event occurs whenever $i_{k_1} = k_1, i_{k_2} = k_2, \ldots, i_{k_m} = k_m$ and the other indices take the remaining $n - m$ values in any order. Therefore

$$\mathbf{P}(A_{k_1} A_{k_2} \cdots A_{k_m}) = \frac{N(A_{k_1} A_{k_2} \cdots A_{k_m})}{N} = \frac{(n - m)!}{n!},$$

where $N(A_{k_1} A_{k_2} \cdots A_{k_m}) = (n - m)!$ is just the total number of permutations of $n - m$ things, and $N = n!$ is the total number of permutations of $n$ things ($m$ is the number of fixed indices $k_1, k_2, \ldots, k_m$). There are precisely

$$C_m^n = \frac{n!}{m! (n - m)!}$$

distinct events of the type $A_{k_1} A_{k_2} \cdots A_{k_m}$, with $m$ fixed indices, this being the number of combinations of $n$ things taken $m$ at a time (recall Theorem 1.3, p. 7). It follows that

$$P_m = \sum_{1 \leq k_1 < k_2 < \cdots < k_m \leq n} \mathbf{P}(A_{k_1} A_{k_2} \cdots A_{k_m}) = C_m^n \frac{(n - m)!}{n!} = \frac{1}{m!}$$

Hence, by formula (2.11),

$$\mathbf{P}\left(\bigcup_{k=1}^{n} A_k\right) = P_1 - P_2 + P_3 - P_4 + \cdots \pm P_n$$

$$= 1 - \frac{1}{2!} + \frac{1}{3!} - \frac{1}{4!} + \cdots \pm \frac{1}{n!},$$