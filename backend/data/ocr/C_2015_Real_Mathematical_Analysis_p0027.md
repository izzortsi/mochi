This follows from the corresponding property of $\mathbb{Q}$.

Multiplication is trickier to define. It helps to first say that the cut $x = A|B$ is positive if $0^* < x$ or negative if $x < 0^*$. Since 0 lies in $A$ or $B$, a cut is either positive, negative, or zero. If $x = A|B$ and $y = C|D$ are positive cuts then their product is $x \cdot y = E|F$ where

$$E = \{r \in \mathbb{Q} : r \leq 0 \text{ or } \exists a \in A \text{ and } \exists c \in C \text{ such that } a > 0, c > 0, \text{ and } r = ac\}$$

and $F$ is the rest of $\mathbb{Q}$. If $x$ is positive and $y$ is negative then we define the product to be $-(x \cdot (-y))$. Since $x$ and $-y$ are both positive cuts this makes sense and is a negative cut. Similarly, if $x$ is negative and $y$ is positive then by definition their product is the negative cut $-((-x) \cdot y)$, while if $x$ and $y$ are both negative then their product is the positive cut $(-x) \cdot (-y)$. Finally, if $x$ or $y$ is the zero cut $0^*$ we define $x \cdot y$ to be $0^*$. (This makes five cases in the definition.)

Verifying the arithmetic properties for multiplication is tedious, to say the least, and somehow nothing seems to be gained by writing out every detail. (To pursue cut arithmetic further you could read Landau’s classically boring book, *Foundations of Analysis.*) To get the flavor of it, let’s check the commutativity of multiplication: $x \cdot y = y \cdot x$ for cuts $x = A|B, y = C|D$. If $x, y$ are positive then

$$\{ac : a \in A, c \in C, a > 0, c > 0\} = \{ca : c \in C, a \in A, c > 0, a > 0\}$$

implies that $x \cdot y = y \cdot x$. If $x$ is positive and $y$ is negative then

$$x \cdot y = -(x \cdot (-y)) = -((-y) \cdot x) = y \cdot x.$$

The second equality holds because we have already checked commutativity for positive cuts. The remaining three cases are checked similarly. There are twenty seven cases to check for associativity and twenty seven more for distributivity. All are simple and we omit their proofs. The real point is that cut arithmetic can be defined and it satisfies the same field properties that $\mathbb{Q}$ does:

*The operation of cut addition is well defined, natural, commutative, associative, and has inverses with respect to the neutral element $0^*$.*

*The operation of cut multiplication is well defined, natural, commutative, associative, distributive over cut addition, and has inverses of nonzero elements with respect to the neutral element $1^*$.*