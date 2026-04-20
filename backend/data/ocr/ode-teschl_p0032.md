For $0 < h < \frac{1}{4}$ there are two zeros $x_{1,2} = \frac{1}{2}(1 \pm \sqrt{1-4h})$. If we start at one of these zeros, the solution will stay there for all $t$. If we start below $x_1$ the solution will decrease and converge to $-\infty$. If we start above $x_1$ the solution will increase and converge to $x_2$. If we start above $x_2$ the solution will decrease and again converge to $x_2$.

At $h = \frac{1}{4}$ a bifurcation occurs: The two zeros coincide $x_1 = x_2$ but otherwise the analysis from above still applies. For $h > \frac{1}{4}$ there are no zeros and all solutions decrease and converge to $-\infty$.

So we get a complete picture just by discussing the sign of $f(x)$! More generally, we have the following result (Problem 1.28).

**Lemma 1.1.** Consider the first-order autonomous initial value problem (1.61), where $f \in C(\mathbb{R})$ is such that solutions are unique.

(i) If $f(x_0) = 0$, then $x(t) = x_0$ for all $t$.

(ii) If $f(x_0) \neq 0$, then $x(t)$ converges to the first zero left ($f(x_0) < 0$) respectively right ($f(x_0) > 0$) of $x_0$. If there is no such zero the solution converges to $-\infty$, respectively $\infty$.

If our differential equation is not autonomous, the situation becomes a bit more involved. As a prototypical example let us investigate the differential equation

$$\dot{x} = x^2 - t^2.$$ (1.63)

It is of Riccati type and according to the previous section, it cannot be solved unless a particular solution can be found. But there does not seem to be a solution which can be easily guessed. (We will show later, in Problem 4.13, that it is explicitly solvable in terms of special functions.)

So let us try to analyze this equation without knowing the solution. Well, first of all we should make sure that solutions exist at all! Since we will attack this in full generality in the next chapter, let me just state that if $f(t,x) \in C^1(\mathbb{R}^2,\mathbb{R})$, then for every $(t_0,x_0) \in \mathbb{R}^2$ there exists a unique solution of the initial value problem

$$\dot{x} = f(t,x), \quad x(t_0) = x_0$$ (1.64)

defined in a neighborhood of $t_0$ (Theorem 2.2). As we already know from Section 1.3, solutions might not exist for all $t$ even though the differential