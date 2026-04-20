Solving this equation is only possible if a particular solution $x_p(t)$ is known. Then the transformation

$$y = \frac{1}{x - x_p(t)}$$

(1.58)

yields the linear equation

$$\dot{y} = -(f(t) + 2x_p(t)g(t))y - g(t).$$

(1.59)

These are only a few of the most important equations which can be explicitly solved using some clever transformation. In fact, there are reference books like the one by Kamke [24] or Zwillinger [48], where you can look up a given equation and find out if it is known to be solvable explicitly. As a rule of thumb one has that for a first-order equation there is a realistic chance that it is explicitly solvable. But already for second-order equations, explicitly solvable ones are rare.

Alternatively, we can also ask a symbolic computer program like Mathematica to solve differential equations for us. For example, to solve

$$\dot{x} = \sin(t)x$$

(1.60)

you would use the command

$$\text{In}[1]:= \text{DSolve}[x'[t] == x[t]Sin[t], x[t], t]$$

$$\text{Out}[1]= \{x[t] \rightarrow e^{-\cos[t]}C[1]\}$$

Here the constant $C[1]$ introduced by Mathematica can be chosen arbitrarily (e.g. to satisfy an initial condition). We can also solve the corresponding initial value problem using

$$\text{In}[2]:= \text{DSolve}[{x'[t] == Sin[t]x[t], x[0] == 1}, x[t], t]$$

$$\text{Out}[2]= \{x[t] \rightarrow e^{1-\cos[t]}\}$$

and plot it using

$$\text{In}[3]:= \text{Plot}[x[t] /. %, {t, 0, 2\pi}]$$

$$\text{Out}[3]=$$

In some situations it is also useful to visualize the corresponding directional field. That is, to every point $(t, x)$ we attach the vector $(1, f(t, x))$. Then the solution curves will be tangent to this vector field in every point: