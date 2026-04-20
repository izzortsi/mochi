Differential equations in the complex domain

This chapter requires some basic knowledge from complex analysis. Readers only interested in dynamical systems can skip this and the next chapter and go directly to Chapter 6.

4.1. The basic existence and uniqueness result

Until now we have only imposed rather weak requirements on the smoothness of our differential equations. However, on the other hand, most examples encountered were in fact (real) analytic. Up to this point we did not use this additional information, but in the present chapter I want to show how to gain a better understanding for these problems by taking the detour over the complex plane.

We want to look at differential equations in a complex domain $\Omega \subseteq \mathbb{C}^{n+1}$. We suppose that

$$f : \Omega \to \mathbb{C}^n, \quad (z, w) \mapsto f(z, w),$$

(4.1)

is analytic (complex differentiable) in $\Omega$ and consider the equation

$$w' = f(z, w), \quad w(z_0) = w_0.$$

(4.2)

Here the prime denotes complex differentiation,

$$w'(z_0) = \frac{dw(z_0)}{dz} = \lim_{z \to z_0} \frac{w(z) - w(z_0)}{z - z_0},$$

(4.3)

and hence the equation only makes sense if $w(z)$ is analytic as well.