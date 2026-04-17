ourselves to the interval $t \in (-2, 2)$! So let us try to prove that our picture is indeed correct and that we have not missed anything.

We begin by splitting the plane into regions according to the sign of $f(t, x) = x^2 - t^2$. Since it suffices to consider $t \geq 0$ there are only three regions: I: $x > t$, II: $-t < x < t$, and III: $x < -t$. In region I and III the solution is increasing, in region II it is decreasing.

Furthermore, on the line $x = t$ each solution has a horizontal tangent and hence solutions can only get from region I to II but not the other way round.

Similarly, solutions can only get from III to II but not from II to III.

This already has important consequences for the solutions:

- For solutions starting in region I there are two cases; either the solution stays in I for all time and hence must converge to $+\infty$ (maybe in finite time) or it enters region II.
- A solution starting in region II (or entering region II) will stay there for all time and hence must converge to $-\infty$ (why can’t it remain bounded?). Since it must stay above $x = -t$ this cannot happen in finite time.
- A solution starting in III will eventually hit $x = -t$ and enter region II.

Hence there are two remaining questions: Do the solutions in region I which converge to $+\infty$ reach $+\infty$ in finite time, or are there also solutions which converge to $+\infty$, e.g., along the line $x = t$? Do the other solutions all converge to the line $x = -t$ as our numerical solutions indicate?

To answer these questions we need to generalize the idea from above that a solution can only cross the line $x = t$ from above and the line $x = -t$ from below.