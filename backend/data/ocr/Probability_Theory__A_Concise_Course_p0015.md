reasoned as follows: $A_1$ occurs in just six ways (6:4:1, 6:3:2, 5:5:1, 5:4:2, 5:3:3, 4:4:3), and $A_2$ also occurs in just six ways (6:5:1, 6:4:2, 6:3:3, 5:5:2, 5:4:3, 4:4:4). Therefore $A_1$ and $A_2$ have the same probability $P(A_1) = P(A_2)$.

The fallacy in this argument was found by Pascal, who showed that the outcomes listed by de Méré are not actually equiprobable. In fact, one must take account not only of the numbers of spots showing on the dice, but also of the particular dice on which the spots appear. For example, numbering the dice and writing the number of spots in the corresponding order, we find that there are six distinct outcomes leading to the combination 6:4:1, namely (6, 4, 1), (6, 1, 4), (4, 6, 1), (4, 1, 6), (1, 6, 4), whereas there is only one outcome leading to the combination 4:4:4, namely (4, 4, 4). The appropriate equiprobable outcomes are those described by triples of numbers $(a, b, c)$, where $a$ is the number of spots on the first die, $b$ the number of spots on the second die, and $c$ the number of spots on the third die. It is easy to see that there are then precisely $N = 6^3 = 216$ equiprobable outcomes. Of these, $N(A_1) = 27$ are favorable to the event $A_1$ (in which the sum of all the spots equals 11), but only $N(A_2) = 25$ are favorable to the event $A_2$ (in which the sum of all the spots equals 12). This fact explains the tendency observed by de Méré for 11 spots to appear more often than 12.

2. Rudiments of Combinatorial Analysis

Combinatorial formulas are of great use in calculating probabilities. We now derive the most important of these formulas.

**THEOREM 1.1.** Given $n_1$ elements $a_1, a_2, \ldots, a_{n_1}$ and $n_2$ elements $b_1, b_2, \ldots, b_{n_2}$, there are precisely $n_1n_2$ distinct ordered pairs $(a_i, b_j)$ containing one element of each kind.

**Proof.** Represent the elements of the first kind by points of the $x$-axis, and those of the second kind by points of the $y$-axis. Then the possible pairs $(a_i, b_j)$ are points of a rectangular lattice in the $xy$-plane, as shown in Figure 1. The fact that there are just $n_1n_2$ such pairs is obvious from the figure.

---

$^5$ To see this, note that a combination $a:b:c$ occurs in 6 distinct ways if $a, b$ and $c$ are distinct, in 3 distinct ways if two (and only two) of the numbers $a, b$ and $c$ are distinct, and in only 1 way if $a = b = c$. Hence $A_1$ occurs in $6 + 6 + 3 + 6 + 3 + 3 = 27$ ways, while $A_2$ occurs in $6 + 6 + 3 + 3 + 6 + 1 = 25$ ways.

$^6$ The symbol ■ stands for Q.E.D. and indicates the end of a proof.