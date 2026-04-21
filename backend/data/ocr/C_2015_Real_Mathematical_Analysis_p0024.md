Case 2. $p$ is even. Since $p$ and $q$ have no common factors, $q$ is odd. Then $p^2$ is divisible by 4 while $2q^2$ is not. Therefore $p^2 \neq 2q^2$.

Since $p^2 \neq 2q^2$ for all integers $p$, there is no rational number $r = p/q$ whose square is 2.

The set $\mathbb{Q}$ of rational numbers is incomplete. It has “gaps,” one of which occurs at $\sqrt{2}$. These gaps are really more like pinholes; they have zero width. Incompleteness is what is wrong with $\mathbb{Q}$. Our goal is to complete $\mathbb{Q}$ by filling in its gaps. An elegant method to arrive at this goal is *Dedekind cuts* in which one visualizes real numbers as places at which a line may be cut with scissors. See Figure 3.

**Figure 3** A Dedekind cut

**Definition** A cut in $\mathbb{Q}$ is a pair of subsets $A, B$ of $\mathbb{Q}$ such that

(a) $A \cup B = \mathbb{Q}$, $A \neq \emptyset$, $B \neq \emptyset$, $A \cap B = \emptyset$.

(b) If $a \in A$ and $b \in B$ then $a < b$.

(c) $A$ contains no largest element.

$A$ is the left-hand part of the cut and $B$ is the right-hand part. We denote the cut as $x = A|B$. Making a semantic leap, we now answer the question “what is a real number?”

**Definition** A real number is a cut in $\mathbb{Q}$.

$\mathbb{R}$ is the class$^\dagger$ of all real numbers $x = A|B$. We will show that in a natural way $\mathbb{R}$ is a complete ordered field containing $\mathbb{Q}$. Before spelling out what this means, here are two examples of cuts.

$^\dagger$The word “class” is used instead of the word “set” to emphasize that for now the members of $\mathbb{R}$ are set-pairs $A|B$, and not the numbers that belong to $A$ or $B$. The notation $A|B$ could be shortened to $A$ since $B$ is just the rest of $\mathbb{Q}$. We write $A|B$, however, as a mnemonic device. It looks like a cut.