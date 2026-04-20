More generally, we have

THEOREM 1.2. Given $n_1$ elements $a_1, a_2, \ldots, a_{n_1}, n_2$ elements $b_1, b_2, \ldots, b_{n_2}$, etc., up to $n_r$ elements $x_1, x_2, \ldots, x_{n_r}$, there are precisely $n_1n_2 \cdots n_r$ distinct ordered $r$-tuples $(a_{i_1}, b_{i_2}, \ldots, x_{i_r})$ containing one element of each kind.$^7$

Proof. For $r = 2$, the theorem reduces to Theorem 1.1. Suppose the theorem holds for $r - 1$, so that in particular there are precisely $n_2 \cdots n_r (r - 1)$-tuples $(b_{i_2}, \ldots, x_{i_r})$ containing one element of each kind. Then, regarding the $(r - 1)$-tuples as elements of a new kind, we note that each $r$-tuple $(a_{i_1}, b_{i_2}, \ldots, x_{i_r})$ can be regarded as made up of a $(r - 1)$-tuple $(b_{i_2}, \ldots, x_{i_r})$ and an element $a_{i_1}$. Hence, by Theorem 1.1, there are precisely

$$n_1(n_2 \cdots n_r) = n_1n_2 \cdots n_r$$

$r$-tuples containing one element of each kind. The theorem now follows for all $r$ by mathematical induction.

Example 1. What is the probability of getting three sixes in a throw of three dice?

Solution. Let $a$ be the number of spots on the first die, $b$ the number of spots on the second die, and $c$ the number of spots on the third die. Then the result of throwing the dice is described by an ordered triple $(a, b, c)$, where each element takes values from 1 to 6. Hence, by Theorem 1.2 with $r = 3$ and $n_1 = n_2 = n_3 = 6$, there are precisely $N = 6^3 = 216$ equiprobable outcomes of throwing three dice (this fact was anticipated in Example 5, p. 3). Three sixes can occur in only one way, i.e., when $a = b = c = 6$. Therefore the probability of getting three sixes is $\frac{216}{6^3}$.

Example 2 (Sampling with replacement). Suppose we choose $r$ objects in succession from a “population” (i.e., set) of $n$ distinct objects $a_1, a_2, \ldots, a_n$, in such a way that after choosing each object and recording the choice, we return the object to the population before making the next choice. This gives an “ordered sample” of the form

$$(a_{i_1}, a_{i_2}, \ldots, a_{i_r}).$$

(1.4)

Setting $n_1 = n_2 = \cdots = n_r = n$ in Theorem 1.2, we find that there are precisely

$$N = n^r$$

(1.5)

distinct ordered samples of the form (1.4).$^8$

$^7$ Two ordered $r$-tuples $(a_{i_1}, b_{i_2}, \ldots, x_{i_r})$ and $(a_{j_1}, b_{j_2}, \ldots, x_{j_r})$ are said to be distinct if the elements of at least one pair $a_{i_1}$ and $a_{j_1}$, $b_{i_2}$ and $b_{j_2}$, $a_{i_r}$ and $b_{j_r}$ are distinct.

$^8$ Two “ordered samples” $(a_{i_1}, a_{i_2}, \ldots, a_{i_r})$ and $(a_{j_1}, a_{j_2}, \ldots, a_{j_r})$ are said to be distinct if $a_{i_j} \neq a_{j_k}$ for at least one $k = 1, 2, \ldots, r$. This is a special case of the definition in footnote 7.