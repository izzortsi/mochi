this case $c$ will not follow from the recursion for $j = 2n$ (which just reads $0 = 0$) but can be chosen arbitrary. The recursion can be solved as before and (4.72) is still valid, that is,

$$h_{2,2j} = h_{1,2j} (1 - cH_j) = \frac{(-1)^j}{(j!)^2} (1 - cH_j).$$

Choosing $c = \frac{2}{\pi}$ the linear combination

$$Y_0(z) = u_2(z) + \left( -1 + \frac{2}{\pi} (\gamma - \log(2)) \right) u_1(z)$$

$$= \frac{2}{\pi} (\gamma + \log(\frac{z}{2})) J_0(z) - \frac{2}{\pi} \sum_{j=0}^{\infty} \frac{(-1)^j H_j}{(j!)^2} \left(\frac{z}{2}\right)^{2j}$$

will agree with (4.75) in the special case $n = 0$.

Finally, let me remark that one usually uses the **Hankel function**

$$Y_\nu(z) = \frac{\cos(\pi\nu) J_\nu(z) - J_{-\nu}(z)}{\sin(\pi\nu)}$$

as second solution of the Bessel equation. For fixed $z \neq 0$ the right-hand side has a singularity for $\nu \in \mathbb{N}_0$. However, since

$$J_{-n}(z) = \sum_{j=0}^{\infty} \frac{(-1)^j j! \Gamma(-n+j+1)}{\left(\frac{z}{2}\right)^{2j-n}}$$

$$= \sum_{j=n}^{\infty} \frac{(-1)^j j! \Gamma(-n+j+1)}{\left(\frac{z}{2}\right)^{2j-n}} = (-1)^n J_n(z), \quad n \in \mathbb{N}_0,$$

(here we used $\Gamma(-n+j+1)^{-1} = 0$ for $j = 0, 1, \ldots, n-1$) it can be removed and it can be shown that the limit is a second linearly independent solution (Problem 4.10) which coincides with (4.75) from above.

Whereas you might not find Bessel functions on your pocket calculator, they are available in *Mathematica*. For example, here is a plot of the Bessel and Hankel function of order $\nu = 0$.

$$\text{In}[1]:= \text{Plot}[\{BesselJ[0,z], BesselY[0,z]\}, {z, 0, 12}]$$