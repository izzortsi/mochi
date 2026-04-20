(iii) $y' = y^2 - \frac{y}{x} - \frac{1}{x^2}$.
(iv) $y' = \frac{y}{x} - \tan(\frac{y}{x})$.

**Problem 1.19** (Euler equation). Transform the differential equation

$$t^2 \ddot{x} + 3t \dot{x} + x = \frac{2}{t}$$

to the new coordinates $y = x$, $s = \log(t)$. (Hint: You are not asked to solve it.)

**Problem 1.20.** Pick some differential equations from the previous problems and solve them using your favorite computer algebra system. Plot the solutions.

**Problem 1.21** (Exact equations). Consider the equation

$$F(x, y) = 0,$$

where $F \in C^2(\mathbb{R}^2, \mathbb{R})$. Suppose $y(x)$ solves this equation. Show that $y(x)$ satisfies

$$p(x, y)y' + q(x, y) = 0,$$

where

$$p(x, y) = \frac{\partial F(x, y)}{\partial y} \quad \text{and} \quad q(x, y) = \frac{\partial F(x, y)}{\partial x}.$$

Show that we have

$$\frac{\partial p(x, y)}{\partial x} = \frac{\partial q(x, y)}{\partial y}.$$

Conversely, a first-order differential equation as above (with arbitrary coefficients $p(x, y)$ and $q(x, y)$) satisfying this last condition is called **exact**. Show that if the equation is exact, then there is a corresponding function $F$ as above. Find an explicit formula for $F$ in terms of $p$ and $q$. Is $F$ uniquely determined by $p$ and $q$?

Show that

$$(4bxy + 3x + 5)y' + 3x^2 + 8ax + 2by^2 + 3y = 0$$

is exact. Find $F$ and find the solution.

**Problem 1.22** (Integrating factor). Consider

$$p(x, y)y' + q(x, y) = 0.$$

A function $\mu(x, y)$ is called **integrating factor** if

$$\mu(x, y)p(x, y)y' + \mu(x, y)q(x, y) = 0$$

is exact.

Finding an integrating factor is in general as hard as solving the original equation. However, in some cases making an ansatz for the form of $\mu$ works.