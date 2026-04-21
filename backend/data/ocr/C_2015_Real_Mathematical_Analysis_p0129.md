compact, perfect, nonempty, and totally disconnected. It is homeomorphic to $C$. See Exercise 139.

Certainly $A$ is bizarre, but is it wild? Is there no ambient homeomorphism $h$ of $\mathbb{R}^3$ that sends the standard Cantor set $C$ onto $A$? The reason that $h$ cannot exist is explained next.

**Figure 57** $\kappa$ loops through $A^0$, which contains the necklace of solid tori.

Referring to Figure 57, the loop $\kappa$ passing through the hole of $A^0$ cannot be continuously shrunk to a point in $\mathbb{R}^3$ without hitting $A$. For if such a motion of $\kappa$ avoids $A$ then, by compactness, it also avoids one of the high-order necklaces $A^n$. In $\mathbb{R}^3$ it is impossible to continuously de-link two linked loops, and it is also impossible to continuously de-link a loop from a necklace of loops. (These facts are intuitively believable but hard to prove. See Dale Rolfsen’s book, *Knots and Links.*)

On the other hand, each loop $\lambda$ in $\mathbb{R}^3 \setminus C$ can be continuously shrunk to a point without hitting $C$. For there is no obstruction to pushing $\lambda$ through the gap intervals of $C$.

Now suppose that there is an ambient homeomorphism $h$ of $\mathbb{R}^3$ that sends $C$ to $A$. Then $\lambda = h^{-1}(\kappa)$ is a loop in $\mathbb{R}^3 \setminus C$, and it can be shrunk to a point in $\mathbb{R}^3 \setminus C$, avoiding $C$. Applying $h$ to this motion of $\lambda$ continuously shrinks $\kappa$ to a point, avoiding $A$, which we have indicated is impossible. Hence $h$ cannot exist, and $A$ is wild.