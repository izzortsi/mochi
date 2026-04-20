1.4. Finding explicit solutions

$$\text{In}[4] := \text{VectorPlot}[\{1, \sin[t]x\}, \{t, 0, 2\pi\}, \{x, 0, 6\}]$$

So it almost looks like *Mathematica* can do everything for us and all we have to do is type in the equation, press enter, and wait for the solution. However, as always, life is not that easy. Since, as mentioned earlier, only very few differential equations can be solved explicitly, the DSolve command can only help us in very few cases. The other cases, that is those which cannot be explicitly solved, will be the subject of the remainder of this book!

Let me close this section with a warning. Solving one of our previous examples using *Mathematica* produces

$$\text{In}[5] := \text{DSolve}[\{x'[t] == \sqrt{x[t]}, x[0] == 0\}, x[t], t]$$

$$\text{Out}[5] = \{\{x[t] \rightarrow \frac{t^2}{4}\}\}$$

However, our investigations of the previous section show that this is not the only solution to the posed problem! *Mathematica* expects you to know that there are other solutions and how to get them.

Moreover, if you try to solve the general initial value problem it gets even worse:

$$\text{In}[6] := \text{DSolve}[\{x'[t] == \sqrt{x[t]}, x[0] == x0\}, x[t], t] // \text{Simplify}$$

$$\text{Out}[6] = \{\{x[t] \rightarrow \frac{1}{4}(t - 2\sqrt{x_0})^2\}, \{x[t] \rightarrow \frac{1}{4}(t + 2\sqrt{x_0})^2\}\}$$

The first "solution" is no solution of our initial value problem at all! It satisfies $\dot{x} = -\sqrt{x}$.

**Problem 1.18.** Try to find solutions of the following differential equations:

(i) $\dot{x} = \frac{3x - 2t}{t}$.

(ii) $\dot{x} = \frac{x - t + 2}{2x + t + 1} + 5$.