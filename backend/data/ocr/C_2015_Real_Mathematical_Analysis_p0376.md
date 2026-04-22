where $J_0 = (1, \ldots, k)$. Since elementary column operations do not affect $S$ we have

$$S(A, B) = S(AE_1, E_1^{-1}B) = S(AE_1E_2, E_2^{-1}E_1^{-1}B) = \ldots = S(A', B')$$.

All terms in the sum that defines $S(A', B')$ are zero except the $J_0^{\text{th}}$, and thus

$$\det(AB) = \det A'J_0 \det B'_{J_0} = S(A', B') = S(A, B)$$

as claimed. $\square$