Moreover, (4) implies

$$V(x^0, y) = y[v_{11}x^0 + v_{21}(1 - x^0)] + (1 - y)[v_{12}x^0 + v_{22}(1 - x^0)] = V_1(x^0)$$

for any $y$ in the interval $0 \leq y \leq 1$. Hence, by choosing $p_{11}^0 = x^0$, the first player guarantees himself an average gain $V_1(x^0)$ regardless of the value of $y$, i.e., regardless of how his opponent plays. However, if the first player deviates from this optimal strategy, by choosing $p_{11} = x \neq x^0$, then his opponent need only choose $p_{21} = y$ equal to 0 or 1 (as the case may be) to reduce the first player’s average gain to just $V_1(x)$.

Applying the same considerations to the second player, we find that the second player’s optimal strategy is such that $p_{21}^0 = y^0$, where

$$y^0 = \frac{v_{11} - v_{12}}{v_{11} + v_{22} - (v_{12} + v_{21})}$$

[(5) is obtained from (3) by reversing the roles of players 1 and 2, i.e., by interchanging the indices 1 and 2]. As in the case of the first player, this choice guarantees the second player an average gain $V_2(y^0)$ regardless of the first player’s strategy, i.e.,

$$-V(x, y^0) = V_2(y^0), \quad 0 \leq x \leq 1.$$

In particular, it should be noted that

$$V_1(x^0) = V(x^0, y^0),$$

$$V_2(y^0) = -V(x^0, y^0).$$

**Example 1.** One player repeatedly hides either a dime or a quarter, and the second player guesses which coin is hidden. If he guesses properly, he gets the coin, but otherwise he must pay the first player 15 cents. Find both players’ optimal strategies.

**Solution.** Here

$$v_{11} = -10, \quad v_{12} = 15,$$

$$v_{21} = 15, \quad v_{22} = -25,$$

so that, by (3),

$$p_{11}^0 = x^0 = \frac{-25 - 15}{-35 - 30} = \frac{8}{13}.$$

Therefore the first player should hide the dime with probability $\frac{8}{13}$, and hide the quarter with probability $\frac{8}{13}$. Similarly, by (5),

$$p_{21}^0 = y^0 = \frac{-10 - 15}{-35 - 30} = \frac{5}{13},$$

$^3$ For the first player, hiding the dime is (pure) strategy 1, and hiding the quarter is strategy 2. For the second player, guessing the dime is strategy 1, and guessing the quarter is strategy 2.