equation is defined for all $(t, x) \in \mathbb{R}^2$. However, we will show that a solution must converge to $\pm \infty$ if it does not exist for all $t$ (Corollary 2.16).

In order to get some feeling of what we should expect, a good starting point is a numerical investigation. Using the command

$$\text{In}[7] := \text{NDSolve}[\{x'[t] == x[t]^2 - t^2, x[0] == 1\}, x[t], \{t, -2, 2\}]$$

NDSolve::ndsz: At $t == 1.0374678967709798$‘, step size is effectively zero; singularity suspected.

$$\text{Out}[7] = \{\{x[t] \rightarrow \text{InterpolatingFunction}[\{[-2., 1.03747\}], < >][t]\}\}$$

we can compute a numerical solution on the interval $(-2, 2)$. Numerically solving an ordinary differential equation means computing a sequence of points $(t_j, x_j)$ which are hopefully close to the graph of the real solution (we will briefly discuss numerical methods in Section 2.7). Instead of this list of points, Mathematica returns an interpolation function which – as you might have already guessed from the name – interpolates between these points and hence can be used as any other function.

Note, that in our particular example, Mathematica complained about the step size (i.e., the difference $t_j - t_{j-1}$) getting too small and stopped at $t = 1.037 \ldots$. Hence the result is only defined on the interval $(-2, 1.03747)$ even though we have requested the solution on $(-2, 2)$. This indicates that the solution only exists for finite time.

Combining the solutions for different initial conditions into one plot we get the following picture:

First of all we note the symmetry with respect to the transformation $(t, x) \rightarrow (-t, -x)$. Hence it suffices to consider $t \geq 0$. Moreover, observe that different solutions never cross, which is a consequence of uniqueness.

According to our picture, there seem to be two cases. Either the solution escapes to $+\infty$ in finite time or it converges to the line $x = -t$. But is this really the correct behavior? There could be some numerical errors accumulating. Maybe there are also solutions which converge to the line $x = t$ (we could have missed the corresponding initial conditions in our picture)? Moreover, we could have missed some important things by restricting