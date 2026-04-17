locally has a unique solution if $f(x_0) \neq 0$. Give an implicit formula for the solution.

**Problem 1.12.** Solve the following differential equations:

(i) $\dot{x} = \sin(t)x$.
(ii) $\dot{x} = g(t)\tan(x)$.
(iii) $\dot{x} = \sin(t)e^x$.

Sketch the solutions. For which initial conditions (if any) are the solutions bounded?

**Problem 1.13.** Investigate uniqueness of the differential equation

$$\dot{x} = \begin{cases} -t\sqrt{|x|}, & x \geq 0, \\ t\sqrt{|x|}, & x \leq 0. \end{cases}$$

Show that the initial value problem $x(0) = x_0$ has a unique global solution for every $x_0 \in \mathbb{R}$. However, show that the global solutions still intersect! (Hint: Note that if $x(t)$ is a solution so is $-x(t)$ and $x(-t)$, so it suffices to consider $x_0 \geq 0$ and $t \geq 0$.)

**Problem 1.14.** Charging a capacitor is described by the differential equation

$$R\dot{Q}(t) + \frac{1}{C}Q(t) = V_0,$$

where $Q(t)$ is the charge at the capacitor, $C$ is its capacitance, $V_0$ is the voltage of the battery, and $R$ is the resistance of the wire.

Compute $Q(t)$ assuming the capacitor is uncharged at $t = 0$. What charge do you get as $t \to \infty$?

**Problem 1.15** (Growth of bacteria). A certain species of bacteria grows according to

$$\dot{N}(t) = \kappa N(t), \quad N(0) = N_0,$$

where $N(t)$ is the amount of bacteria at time $t$, $\kappa > 0$ is the growth rate, and $N_0$ is the initial amount. If there is only space for $N_{\max}$ bacteria, this has to be modified according to

$$\dot{N}(t) = \kappa(1 - \frac{N(t)}{N_{\max}})N(t), \quad N(0) = N_0.$$

Solve both equations, assuming $0 < N_0 < N_{\max}$ and discuss the solutions. What is the behavior of $N(t)$ as $t \to \infty$?

**Problem 1.16** (Optimal harvest). Take the same setting as in the previous problem. Now suppose that you harvest bacteria at a certain rate $H > 0$. Then the situation is modeled by

$$\dot{N}(t) = \kappa(1 - \frac{N(t)}{N_{\max}})N(t) - H, \quad N(0) = N_0.$$