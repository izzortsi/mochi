Boundary value problems

5.1. Introduction

Boundary value problems are of fundamental importance in physics. However, solving such problems usually involves a combination of methods from ordinary differential equations, functional analysis, complex functions, and measure theory. The present chapter tries to give a brief introduction under minimal requirements. Since the remaining chapters do not depend on the present one, you can also skip it and go directly to Chapter 6.

To motivate the investigation of boundary value problems, let us look at a typical example from physics first. The vibrations of a string can be described by its displacement $u(t,x)$ at the point $x$ and time $t$. The equation of motion for this system is the one dimensional wave equation

$$\frac{1}{c^2} \frac{\partial^2}{\partial t^2} u(t,x) = \frac{\partial^2}{\partial x^2} u(t,x),$$

(5.1)

where $c$ is the propagation speed of waves in our string. Moreover, we will assume that the string is fixed at both endpoints, that is, $x \in [0,1]$ and $u(t,0) = u(t,1) = 0$, and that the initial displacement $u(0,x) = u(x)$ and the initial velocity $\frac{\partial u}{\partial t}(0,x) = v(x)$ are given.

Unfortunately, this is a partial differential equation and hence none of our methods found thus far apply. In particular, it is unclear how we should solve the posed problem. Hence let us try to find some solutions of the equation (5.1) first. To make it a little easier, let us try to make an ansatz for $u(t,x)$ as a product of two functions, each of which depends on only one