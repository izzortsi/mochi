Example 3 (Sampling without replacement). Next suppose we choose $r$ objects in succession from a population of $n$ distinct objects $a_1, a_2, \ldots, a_n$, in such a way that an object once chosen is removed from the population. Then we again get an ordered sample of the form (1.4), but now there are $n - 1$ objects left after the first choice, $n - 2$ objects left after the second choice, and so on. Clearly this corresponds to setting

$$n_1 = n, \quad n_2 = n - 1, \ldots, \quad n_r = n - r + 1$$

in Theorem 1.2. Hence, instead of $n^r$ distinct samples as in the case of sampling with replacement, there are now only

$$N = n(n - 1) \cdots (n - r + 1)$$

(1.6)

distinct samples. If $r = n$, then (1.6) reduces to

$$N = n(n - 1) \cdots 2 \cdot 1 = n!$$

(1.7)

the total number of permutations of $n$ objects.

Example 4. Suppose we place $r$ distinguishable objects into $n$ different “cells” ($r \leq n$), with no cell allowed to contain more than one object. Numbering both the objects and the cells, let $i_1$ be the number of the cell into which the first object is placed, $i_2$ the number of the cell into which the second object is placed, and so on. Then the arrangement of the objects in the cells is described by an ordered $r$-tuple $(i_1, i_2, \ldots, i_r)$. Clearly, there are $n_1 = n$ empty cells originally, $n_2 = n - 1$ empty cells after one cell has been occupied, $n_3 = n - 2$ empty cells after two cells have been occupied, and so on. Hence, the total number of distinct arrangements of the objects in the cells is again given by formula (1.6).

Example 5. A subway train made up of $n$ cars is boarded by $r$ passengers ($r \leq n$), each entering a car completely at random. What is the probability of the passengers all ending up in different cars?

Solution. By hypothesis, every car has the same probability of being entered by a given passenger. Numbering both the passengers and the cars, let $i_1$ be the number of the car entered by the first passenger, $i_2$ the number of the car entered by the second passenger, and so on. Then the arrangement of the passengers in the cars is described by an ordered $r$-tuple $(i_1, i_2, \ldots, i_r)$, where each of the numbers $i_1, i_2, \ldots, i_r$ can range from 1 to $n$. This is equivalent to sampling with replacement, and hence, by Example 2, there are

$$N = n^r$$

distinct equiprobable arrangements of the passengers in the cars. Let $A$ be the event that “no more than one passenger enters any car.” Then $A$ occurs if and only if all the numbers $i_1, i_2, \ldots, i_r$ are distinct. In other