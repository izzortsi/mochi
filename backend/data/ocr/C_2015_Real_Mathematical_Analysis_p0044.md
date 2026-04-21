We also write card $A = \text{card} B$ and $\#A = \#B$ when $A, B$ have equal cardinality.

If $S$ is denumerable then there is a bijection $f : \mathbb{N} \to S$, and this gives a way to list the elements of $S$ as $s_1 = f(1), s_2 = f(2), s_3 = f(3)$, etc. Conversely, if a set $S$ is presented as an infinite list (without repetition) $S = \{s_1, s_2, s_3, \ldots\}$, then it is denumerable: Define $f(k) = s_k$ for all $k \in \mathbb{N}$. In brief, denumerable = listable.

Let’s begin with a truly remarkable cardinality result, that although $\mathbb{N}$ and $\mathbb{R}$ are both infinite, $\mathbb{R}$ is more infinite than $\mathbb{N}$. Namely,

**10 Theorem** $\mathbb{R}$ is uncountable.

Proof There are other proofs of the uncountability of $\mathbb{R}$, but none so beautiful as this one. It is due to Cantor. I assume that you accept the fact that each real number $x$ has a decimal expansion, $x = N.x_1x_2x_3 \ldots$, and it is uniquely determined by $x$ if one agrees never to terminate the expansion with an infinite string of 9s. (See also Exercise 18.) We want to prove that $\mathbb{R}$ is uncountable. Suppose it is not uncountable. Then it is countable and, being infinite, it must be denumerable. Accordingly let $f : \mathbb{N} \to \mathbb{R}$ be a bijection. Using $f$, we list the elements of $\mathbb{R}$ along with their decimal expansions as an array, and consider the digits $x_{ii}$ that occur along the diagonal in this array. See Figure 14.

$$\begin{array}{c}
f(1) = N_1 x_{11} x_{12} x_{13} x_{14} x_{15} x_{16} x_{17} \\
f(2) = N_2 x_{21} x_{22} x_{23} x_{24} x_{25} x_{26} x_{27} \\
f(3) = N_3 x_{31} x_{32} x_{33} x_{34} x_{35} x_{36} x_{37} \\
f(4) = N_4 x_{41} x_{42} x_{43} x_{44} x_{45} x_{46} x_{47} \\
f(5) = N_5 x_{51} x_{52} x_{53} x_{54} x_{55} x_{56} x_{57} \\
f(6) = N_6 x_{61} x_{62} x_{63} x_{64} x_{65} x_{66} x_{67} \\
f(7) = N_7 x_{71} x_{72} x_{73} x_{74} x_{75} x_{76} x_{77}
\end{array}$$

**Figure 14** Cantor’s diagonal method

For each $i$, choose a digit $y_i$ such that $y_i \neq x_{ii}$ and $y_i \neq 9$. Where is the number $y = 0.y_1y_2y_3 \ldots$? Is it $f(1)$? No, because the first digit in the decimal expansion of