2 Theorem The set $\mathbb{R}$, constructed by means of Dedekind cuts, is complete† in the sense that it satisfies the

Least Upper Bound Property: If $S$ is a nonempty subset of $\mathbb{R}$ and is bounded above then in $\mathbb{R}$ there exists a least upper bound for $S$.

Proof Easy! Let $\mathcal{C} \subset \mathbb{R}$ be any nonempty collection of cuts which is bounded above, say by the cut $X|Y$. Define

$$C = \{a \in \mathbb{Q} : \text{for some cut } A|B \in \mathcal{C} \text{ we have } a \in A\}$$ and $D = \text{the rest of } \mathbb{Q}$.

It is easy to see that $z = C|D$ is a cut. Clearly, it is an upper bound for $\mathcal{C}$ since the $A$ for every element of $\mathcal{C}$ is contained in $C$. Let $z' = C'|D'$ be any upper bound for $\mathcal{C}$. By the assumption that $A|B \leq C'|D'$ for all $A|B \in \mathcal{C}$, we see that the $A$ for every member of $\mathcal{C}$ is contained in $C'$. Hence $C \subset C'$, so $z \leq z'$. That is, among all upper bounds for $\mathcal{C}$, $z$ is least.

The simplicity of this proof is what makes cuts good. We go from $\mathbb{Q}$ to $\mathbb{R}$ by pure thought. To be more complete, as it were, we describe the natural arithmetic of cuts. Let cuts $x = A|B$ and $y = C|D$ be given. How do we add them? subtract them? … Generally the answer is to do the corresponding operation to the elements comprising the two halves of the cuts, being careful about negative numbers. The sum of $x$ and $y$ is $x + y = E|F$ where

$$E = \{r \in \mathbb{Q} : \text{for some } a \in A \text{ and for some } c \in C \text{ we have } r = a + c\}$$

$$F = \text{the rest of } \mathbb{Q}$$

It is easy to see that $E|F$ is a cut in $\mathbb{Q}$ and that it doesn’t depend on the order in which $x$ and $y$ appear. That is, cut addition is well defined and $x + y = y + x$. The zero cut is $0^*$ and $0^* + x = x$ for all $x \in \mathbb{R}$. The additive inverse of $x = A|B$ is $-x = C|D$ where

$$C = \{r \in \mathbb{Q} : \text{for some } b \in B, \text{ not the smallest element of } B, \ r = -b\}$$

$$D = \text{the rest of } \mathbb{Q}$$

Then $(-x) + x = 0^*$. Correspondingly, the difference of cuts is $x - y = x + (-y)$. Another property of cut addition is associativity:

$$(x + y) + z = x + (y + z).$$

†There is another, related, sense in which $\mathbb{R}$ is complete. See Theorem 5 below.