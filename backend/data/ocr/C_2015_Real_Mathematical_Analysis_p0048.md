5* Comparing Cardinalities

The following result gives a way to conclude that two sets have the same cardinality. Roughly speaking the condition is that card $A \leq$ card $B$ and card $B \leq$ card $A$.

21 Schroeder-Bernstein Theorem If $A, B$ are sets and $f : A \rightarrow B$, $g : B \rightarrow A$ are injections then there exists a bijection $h : A \rightarrow B$.

Proof-sketch Consider the dynamic Venn diagram, Figure 17. The disc labeled $gfA$

Figure 17 Pictorial proof of the Schroeder-Bernstein Theorem

is the image of $A$ under the map $g \circ f$. It is a subset of $A$. The ring between $A$ and $gfA$ divides into two subrings. $A_0$ is the set of points in $A$ that do not lie in the image of $g$, while $A_1$ is the set points in the image of $g$ that do not lie in $gfA$. Similarly, $B_0$ is the set of points in $B$ that do not lie in $fA$, while $B_1$ is the set of points in $fA$ that do not lie in $fgB$. There is a natural bijection $h$ from the pair of rings $A_0 \cup A_1 = A \setminus gfA$ to the pair of rings $B_0 \cup B_1 = B \setminus fgB$. It equals $f$ on the outer ring $A_0 = A \setminus gB$ and it is $g^{-1}$ on the inner ring $A_1 = gB \setminus gfA$. (The map $g^{-1}$ is not defined on all of $A$, but it is defined on the set $gB$.) In this notation, $h$ sends $A_0$ onto $B_1$ and sends $A_1$ onto $B_0$. It switches the indices. Repeat this on the next pair of rings for $A$ and $B$. That is, look at $gfA$ instead of $A$ and $fgB$ instead of $B$. The next two rings in $A, B$ are

$$A_2 = gfA \setminus gfgB \quad A_3 = gfgB \setminus gfgfA$$
$$B_2 = fgB \setminus fgfA \quad B_3 = fgfA \setminus fgfgB.$$

Send $A_2$ to $B_3$ by $f$ and $A_3$ to $B_2$ by $g^{-1}$. The rings $A_i$ are disjoint, and so are