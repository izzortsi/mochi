From this example you might get the impression, that solutions of differential equations can always be found by straightforward integration. However, this is not the case in general. The reason why it worked here is that the force is independent of $x$. If we refine our model and take the real gravitational force

$$F(x) = -\gamma m M \frac{x}{|x|^3}, \quad \gamma, M > 0,$$

(1.10)

our differential equation reads

$$m \ddot{x}_1 = -\frac{\gamma m M x_1}{(x_1^2 + x_2^2 + x_3^2)^{3/2}},$$

$$m \ddot{x}_2 = -\frac{\gamma m M x_2}{(x_1^2 + x_2^2 + x_3^2)^{3/2}},$$

$$m \ddot{x}_3 = -\frac{\gamma m M x_3}{(x_1^2 + x_2^2 + x_3^2)^{3/2}}$$

(1.11)

and it is no longer clear how to solve it. Moreover, it is even unclear whether solutions exist at all! (We will return to this problem in Section 8.5.)

**Problem 1.1.** Consider the case of a stone dropped from the height $h$. Denote by $r$ the distance of the stone from the surface. The initial condition reads $r(0) = h, \dot{r}(0) = 0$. The equation of motion reads

$$\ddot{r} = -\frac{\gamma M}{(R + r)^2} \quad \text{(exact model)}$$

respectively

$$\ddot{r} = -g \quad \text{(approximate model)},$$

where $g = \gamma M/R^2$ and $R, M$ are the radius, mass of the earth, respectively.

(i) Transform both equations into a first-order system.

(ii) Compute the solution to the approximate system corresponding to the given initial condition. Compute the time it takes for the stone to hit the surface ($r = 0$).

(iii) Assume that the exact equation also has a unique solution corresponding to the given initial condition. What can you say about the time it takes for the stone to hit the surface in comparison to the approximate model? Will it be longer or shorter? Estimate the difference between the solutions in the exact and in the approximate case. (Hints: You should not compute the solution to the exact equation! Look at the minimum, maximum of the force.)

(iv) Grab your physics book from high school and give numerical values for the case $h = 10m$.