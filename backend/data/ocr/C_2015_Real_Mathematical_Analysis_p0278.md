30. Give an example of a continuous map of a compact, nonempty, path-connected metric space into itself that has no fixed-point.

31. On page 233 it is shown that if $b_n \int_{-1}^{1}(1-t^2)^n dt = 1$ then for some constant $c$, and for all $n \in \mathbb{N}$, $b_n \leq c\sqrt{n}$. What is the best (i.e., smallest) value of $c$ that you can prove works? (A calculator might be useful here.)

32. Let $M$ be a compact metric space, and let $C^{\text{Lip}}$ be the set of continuous functions $f : M \to \mathbb{R}$ that obey a Lipschitz condition: For some $L$ and all $p, q \in M$ we have
$$|fp - fq| \leq Ld(p, q).$$
*(a) Prove that $C^{\text{Lip}}$ is dense in $C^0(M, \mathbb{R})$. [Hint: Stone-Weierstrass.]

***(b) If $M = [a, b]$ and $\mathbb{R}$ is replaced by some other complete, path-connected metric space, is the result true or false?

***(c) If $M$ is a general compact metric space and $Y$ is a complete metric space, is $C^{\text{Lip}}(M, Y)$ dense in $C^0(M, Y)$? (Would $M$ equal to the Cantor set make a good test case?)

33. Consider the ODE $x' = x$ on $\mathbb{R}$. Show that its solution with initial condition $x_0$ is $t \mapsto e^t x_0$. Interpret $e^{t+s} = e^t e^s$ in terms of the flow property.

34. Consider the ODE $y' = 2\sqrt{|y|}$ where $y \in \mathbb{R}$.
   (a) Show that there are many solutions to this ODE, all with the same initial condition $y(0) = 0$. Not only does $y(t) = 0$ solve the ODE, but also $y(t) = t^2$ does for $t \geq 0$.
   (b) Find and graph other solutions such as $y(t) = 0$ for $t \leq c$ and $y(t) = (t-c)^2$ for $t \geq c > 0$.
   (c) Does the existence of these nonunique solutions to the ODE contradict Picard’s Theorem? Explain.
   *(d) Find all solutions with initial condition $y(0) = 0$.

35. Consider the ODE $x' = x^2$ on $\mathbb{R}$. Find the solution of the ODE with initial condition $x_0$. Are the solutions to this ODE defined for all time or do they escape to infinity in finite time?

36. Suppose that the ODE $x' = f(x)$ on $\mathbb{R}$ is bounded, $|f(x)| \leq M$ for all $x$.
   (a) Prove that no solution of the ODE escapes to infinity in finite time.
   (b) Prove the same thing if $f$ satisfies a Lipschitz condition, or more generally, if there are constants $C, K$ such that $|f(x)| \leq C|x| + K$ for all $x$.
   (c) Repeat (a) and (b) with $\mathbb{R}^m$ in place of $\mathbb{R}$.
   (d) Prove that if $f : \mathbb{R}^m \to \mathbb{R}^m$ is uniformly continuous then the condition stated in (b) is true. Infer that solutions of uniformly continuous ODEs defined on $\mathbb{R}^m$ do not escape to infinity in finite time.

**37.** (a) Prove Borel’s Lemma, which states that given any sequence whatsoever of real numbers $(a_r)$, there is a smooth function $f : \mathbb{R} \to \mathbb{R}$ such that $f^{(r)}(0) = a_r$. [Hint: Try $f = \sum \beta_k(x)a_kx^k/k!$ where $\beta_k$ is a well-chosen