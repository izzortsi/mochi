Second, we can extend the notion of a super solution by requiring only $x_+(t) \geq f(t, x_+(t))$. Then $x_+(t_0) \geq x(t_0)$ implies $x_+(t) \geq x(t)$ for all $t \geq t_0$ and if strict inequality becomes true at some time it remains true for all later times.

**Problem 1.27.** Let $x$ be a solution of (1.61) which satisfies $\lim_{t \to \infty} x(t) = x_1$. Show that $\lim_{t \to \infty} \dot{x}(t) = 0$ and $f(x_1) = 0$. (Hint: If you prove $\lim_{t \to \infty} \dot{x}(t) = 0$ without using (1.61) your proof is wrong! Can you give a counter example?)

**Problem 1.28.** Prove Lemma 1.1. (Hint: This can be done either by using the analysis from Section 1.3 or by using the previous problem.)

**Problem 1.29.** Generalize the concept of sub and super solutions to the interval $(T, t_0)$, where $T < t_0$.

**Problem 1.30.** Discuss the equation $\dot{x} = x^2 - \frac{t^2}{1+t^2}$.

- Make a numerical analysis.
- Show that there is a unique solution which asymptotically approaches the line $x = 1$.
- Show that all solutions below this solution approach the line $x = -1$.
- Show that all solutions above go to $\infty$ in finite time.

**Problem 1.31.** Discuss the equation $\dot{x} = x^2 - t$.

**Problem 1.32.** Generalize Theorem 1.3 to the interval $(T, t_0)$, where $T < t_0$.

### 1.6. Qualitative analysis of first-order periodic equations

Some of the most interesting examples are periodic ones, where $f(t+1, x) = f(t, x)$ (without loss we have assumed the period to be one). So let us consider the logistic growth model with a time dependent harvesting term

$$\dot{x}(t) = (1 - x(t))x(t) - h \cdot (1 - \sin(2\pi t)),$$

(1.71)

where $h \geq 0$ is some positive constant. In fact, we could replace $1 - \sin(2\pi t)$ by any nonnegative periodic function $g(t)$ and the analysis below will still hold.

The solutions corresponding to some initial conditions for $h = 0.2$ are depicted below.