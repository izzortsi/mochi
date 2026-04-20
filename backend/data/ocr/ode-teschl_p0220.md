7.1. Examples from ecology

In this section we want to consider a model from ecology. It describes two populations, one predator species $y$ and one prey species $x$. Suppose the growth rate of the prey without predators is $A$ (compare Problem 1.15). If predators are present, we assume that the growth rate is reduced proportional to the number of predators, that is,

$$\dot{x} = (A - By)x, \quad A, B > 0. \tag{7.1}$$

Similarly, if there is no prey, the numbers of predators will decay at a rate $-D$. If prey is present, we assume that this rate increases proportional to the amount of prey, that is

$$\dot{y} = (Cx - D)y, \quad C, D > 0. \tag{7.2}$$

Scaling $x, y$, and $t$ we arrive at the system

$$\dot{x} = (1 - y)x, \quad \alpha > 0, \tag{7.3}$$

which are the predator-prey equations of Volterra and Lotka.

There are two fixed points. First of all, there is $(0, 0)$ and the lines $x = 0$ and $y = 0$ are invariant under the flow:

$$\Phi(t, (0, y)) = (0, ye^{-\alpha t}), \quad \Phi(t, (x, 0)) = (xe^t, 0). \tag{7.4}$$