Since it has constant coefficients, a basis of solutions can be given in terms of the characteristic eigenvalues

$$\alpha_{1,2} = \frac{1}{2}(1 - p_0 \pm \sqrt{(p_0 - 1)^2 - 4q_0})$$

according to Theorem 3.7. If they are different, $\alpha_1 \neq \alpha_2$, we have two linearly independent solutions

$$u_1(z) = z^{\alpha_1}, \quad u_2(z) = z^{\alpha_2}$$

and if they are equal, $\alpha_1 = \alpha_2$, we have two linearly independent solutions

$$u_1(z) = z^{\alpha_1}, \quad u_2(z) = \log(z)z^{\alpha_1}.$$

Now let us turn to the general case. As a warm up, we will look at first-order equations.

**Lemma 4.4. The first-order equation**

$$u' + p(z)u = 0$$

has a solution of the form

$$u(z) = z^{\alpha}h(z), \quad h(z) = \sum_{j=0}^{\infty} h_jz^j, \quad h_0 = 1,$$

if and only if $p(z)$ has at most a first-order pole. In this case we have $\alpha = -\lim_{z \to 0} zp(z)$ and the radius of convergence for the power series of $h(z)$ and the Laurent series of $p(z)$ are the same.

**Proof.** If $p(z) = \frac{p_0}{z} + p_1 + p_2z + \ldots$ has a first-order pole, the solution of the above equation is explicitly given by (cf. [1.38])

$$u(z) = \exp\left(-\int^z p(t)dt\right) = \exp\left(-p_0 \log(z) + c - p_1z + \ldots\right)$$

$$= z^{-p_0} \exp\left(c - p_1z + \ldots\right).$$

Conversely we have

$$p(z) = -\frac{u'(z)}{u(z)} = -\frac{\alpha}{z} - \frac{h'(z)}{h(z)}.$$

Now we are ready for our second-order equation (4.20). Motivated by our example, we will assume that the coefficients are of the form

$$p(z) = \frac{1}{z} \sum_{j=0}^{\infty} p_jz^j, \quad q(z) = \frac{1}{z^2} \sum_{j=0}^{\infty} q_jz^j,$$