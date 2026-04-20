Finally, let me remark that the requirement that $f$ is continuous in Theorem 2.2 is already more than we actually needed in its proof. In fact, all one needs to require is that $f$ is measurable with $M(t)$ finite and $L(t)$ locally integrable (i.e., $\int_I L(t)dt < \infty$ for any compact interval $I$).

However, then the solution of the integral equation is only absolutely continuous and might fail to be continuously differentiable. In particular, when going back from the integral to the differential equation, the differentiation has to be understood in a generalized sense. I do not want to go into further details here, but rather give you an example. Consider

$$\dot{x} = \text{sgn}(t)x, \quad x(0) = 1.$$  

(2.33)

Then $x(t) = \exp(|t|)$ might be considered a solution even though it is not differentiable at $t = 0$. This generalization is known as differential equations in the sense of Carathéodory.

Problem 2.9. Consider the initial value problem $\dot{x} = x^2$, $x(0) = x_0 > 0$. What is the maximal value for $T_0$ (as a function of $x_0$) according to Theorem 2.2 respectively Theorem 2.5? What maximal value do you get from the explicit solution? (Hint: Compute $T_0$ as a function of $\delta$ and find the optimal $\delta$.)

Problem 2.10. Prove Theorem 2.4. Moreover, suppose $K : C \rightarrow C$ and that $K^n$ is a contraction. Show that the fixed point of $K^n$ is also one of $K$ (Hint: Use uniqueness). Hence Theorem 2.4 (except for the estimate) can also be considered as a special case of Theorem 2.1 since the assumption implies that $K^n$ is a contraction for $n$ sufficiently large.

2.4. Dependence on the initial condition

Usually, in applications several data are only known approximately. If the problem is well-posed, one expects that small changes in the data will result in small changes of the solution. This will be shown in our next theorem. As a preparation we need Gronwall’s inequality.

Lemma 2.7 (Generalized Gronwall’s inequality). Suppose $\psi(t)$ satisfies

$$\psi(t) \leq \alpha(t) + \int_0^t \beta(s)\psi(s)ds, \quad t \in [0,T],$$  

(2.34)

with $\alpha(t) \in \mathbb{R}$ and $\beta(t) \geq 0$. Then

$$\psi(t) \leq \alpha(t) + \int_0^t \alpha(s)\beta(s) \exp \left( \int_s^t \beta(r)dr \right)ds, \quad t \in [0,T].$$  

(2.35)

Moreover, if in addition $\alpha(s) \leq \alpha(t)$ for $s \leq t$, then

$$\psi(t) \leq \alpha(t) \exp \left( \int_0^t \beta(s)ds \right), \quad t \in [0,T].$$  

(2.36)