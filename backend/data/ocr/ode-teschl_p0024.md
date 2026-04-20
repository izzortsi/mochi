Rescale by

$$x(\tau) = \frac{N(t)}{N_{\max}}, \quad \tau = \kappa t$$

and show that the equation transforms into

$$\dot{x}(\tau) = (1 - x(\tau))x(\tau) - h, \quad h = \frac{H}{\kappa N_{\max}}.$$

Visualize the region where $f(x,h) = (1 - x)x - h$, $(x,h) \in U = (0,1) \times (0,\infty)$, is positive respectively negative. For given $(x_0,h) \in U$, what is the behavior of the solution as $t \to \infty$? How is it connected to the regions plotted above? What is the maximal harvest rate you would suggest?

Problem 1.17 (Parachutist). Consider the free fall with air resistance modeled by

$$\ddot{x} = \eta \dot{x}^2 - g, \quad \eta > 0.$$

Solve this equation (Hint: Introduce the velocity $v = \dot{x}$ as new independent variable). Is there a limit to the speed the object can attain? If yes, find it. Consider the case of a parachutist. Suppose the chute is opened at a certain time $t_0 > 0$. Model this situation by assuming $\eta = \eta_1$ for $0 < t < t_0$ and $\eta = \eta_2 > \eta_1$ for $t > t_0$ and match the solutions at $t_0$. What does the solution look like?

1.4. Finding explicit solutions

We have seen in the previous section, that some differential equations can be solved explicitly. Unfortunately, there is no general recipe for solving a given differential equation. Moreover, finding explicit solutions is in general impossible unless the equation is of a particular form. In this section I will show you some classes of first-order equations which are explicitly solvable.

The general idea is to find a suitable change of variables which transforms the given equation into a solvable form. In many cases the solvable equation will be the

Linear equation:

The solution of the linear homogeneous equation

$$\dot{x} = a(t)x$$

(1.37)

is given by

$$\phi(t) = x_0 A(t,t_0), \quad A(t,s) = e^{\int_s^t a(s)ds},$$

(1.38)

and the solution of the corresponding inhomogeneous equation

$$\dot{x} = a(t)x + g(t),$$

(1.39)