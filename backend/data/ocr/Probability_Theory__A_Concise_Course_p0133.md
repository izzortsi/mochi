should always choose the first strategy, thereby guaranteeing himself a gain of at least

$$\min(v_{11}, v_{12}).$$

Assuming a “clever” opponent, the second player should then choose the strategy which minimizes the first player’s maximum gain, i.e., the strategy $j$ such that

$$v_{1j} = \min(v_{11}, v_{12}).$$

The case just described is atypical. Usually, a relation like (1) does not hold, and each player should adopt a “mixed strategy,” sometimes choosing one of the two “pure strategies” available to him and sometimes choosing the other, with definite probabilities (found in a way to be discussed). More exactly, the first player should choose the $i$th strategy with probability $p_{1i}$, while the second player should (independently) choose the $j$th strategy with probability $p_{2j}$. Then the first player’s strategy is described by a probability distribution $P_1 = \{p_{11}, p_{12}\}$, while the second player’s strategy is described by a probability distribution $P_2 = \{p_{21}, p_{22}\}$. If these mixed strategies are adopted, the average gain to the first player is clearly just

$$V(P_1, P_2) = \sum_{i,j=1}^{2} v_{ij} p_{1i} p_{2j}. \tag{2}$$

Suppose the second player makes the optimal response to each strategy $P_1 = \{p_{11}, p_{12}\}$ chosen by the first player, by adopting the strategy $P_2^* = \{p_{21}^*, p_{22}^*\}$ minimizing the first player’s gain. The first player then wins an amount

$$V(P_1, P_2^*) = \min_{P_2} V(P_1, P_2) = V_1(P_1)$$

if he chooses the strategy $P_1$. To maximize this gain, the first player should choose the strategy $P_1^0 = \{p_{11}^0, p_{12}^0\}$ such that

$$V_1(P_1^0) = \max_{P_1} V_1(P_1),$$

always, of course, under the assumption that his opponent plays in the best possible way. Exactly the same argument can be applied to the second player, and shows that his optimal strategy, guaranteeing his maximum average gain under the assumption of optimal play on the part of his opponent, is the strategy $P_2^0 = \{p_{21}^0, p_{22}^0\}$ such that

$$V_2(P_2^0) = \max_{P_2} V_2(P_2),$$

where

$$V_2(P_2) = \min_{P_1} \{-V(P_1, P_2)\}.$$