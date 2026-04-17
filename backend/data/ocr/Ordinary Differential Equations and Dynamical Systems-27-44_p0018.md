• Solve the initial value problem $y(0) = 0$, $y'(0) = p_0 > 0$ as follows: Set $y' = p(y)$ and derive a first-order equation for $p(y)$. Solve this equation for $p(y)$ and then solve the equation $y' = p(y)$. (Note that this works for any equation of the type $y'' = f(y)$.)

• Does the solution found in the previous item attain $y'(x_0) = 0$ at some $x_0$? What value should $x_0$ have for $y(x)$ to solve our boundary value problem?

• Can you find a value for $p_0$ in terms of special functions?

1.5. Qualitative analysis of first-order equations

As already noted in the previous section, only very few ordinary differential equations are explicitly solvable. Fortunately, in many situations a solution is not needed and only some qualitative aspects of the solutions are of interest. For example, does it stay within a certain region, what does it look like for large $t$, etc.

Moreover, even in situations where an exact solution can be obtained, a qualitative analysis can give a better overview of the behavior than the formula for the solution. To get more specific, let us look at the first-order autonomous initial value problem

$$\dot{x} = f(x), \quad x(0) = x_0,$$

(1.61)

where $f \in C(\mathbb{R})$ is such that solutions are unique (e.g. $f \in C^1(\mathbb{R})$). We already saw how to solve this equation in Section 1.3. However, for a given $f$ we might well shipwreck when computing the integral $F(x) = \int_x^x \frac{dy}{f(y)}$ or when trying to solve $F(x(t)) = t$ for $x(t)$. On the other hand, to get a qualitative understanding of the solution an explicit formula turns out to be unessential.

Example. For example, consider the logistic growth model (Problem 1.16)

$$\dot{x}(t) = (1 - x(t))x(t) - h,$$

(1.62)

which can be solved by separation of variables. To get an overview we plot the corresponding right-hand side $f(x) = (1 - x)x - h$:

Since the sign of $f(x)$ tells us in what direction the solution will move, all we have to do is to discuss the sign of $f(x)$!