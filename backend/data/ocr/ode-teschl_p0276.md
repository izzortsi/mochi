First of all we will need to control

$$\Pi(t, x) = \frac{\partial}{\partial x} \Phi(t, x).$$

From

$$\dot{\Phi}(t, x) = f(\Phi(t, x)), \quad \Phi(0, x) = x,$$

we obtain

$$\dot{\Pi}(t, x) = \frac{\partial f}{\partial x}(\Phi(t, x))\Pi(t, x), \quad \Pi(0, x) = \mathbb{I},$$

(9.35)

and, setting $x = 0$,

$$\Pi(t, 0) = e^{tA}.$$

Thus

$$\Phi_1(x) = e^A x + G(x),$$

where (9.30) holds at least when we are sufficiently close to our fixed point. To make sure it always holds we will modify $f$.

Let $\phi : [0, \infty) \to \mathbb{R}$ be a smooth bump function such that $\phi(x) = 0$ for $0 \leq x \leq 1$ and $\phi(x) = 1$ for $x \geq 2$. Replacing $f(x) = Ax + g(x)$ by the function $\tilde{f}(x) = Ax + (1 - \phi(|x|/\delta))g(x)$, it is no restriction to consider the global problem with $f = A$ for $|x| \geq 2\delta$. Note that (show this!)

$$\left| \frac{\partial \tilde{g}}{\partial x}(x) \right| \leq C \sup_{|x| \leq 2\delta} \left| \frac{\partial g}{\partial x}(x) \right|$$

can be made arbitrarily small by choosing $\delta$ small. Moreover, note that $\tilde{G}(x)$ will be 0 for $|x|$ sufficiently large (e.g., for $|x| \geq 2\delta e^\alpha$, where $\alpha$ is some nonnegative number which satisfies $\alpha \geq -\text{Re}(\alpha_j)$ for all eigenvalues $\alpha_j$ of $A$). We will use $\tilde{f}$ from now on and drop the tilde for notational simplicity.

To be able to apply Lemma 9.7 we need to show that $z(1, x)$, defined by

$$\Pi(t, x) = e^{tA} + z(t, x),$$

can be made arbitrarily small by choosing $\delta$ small. Plugging this into (9.35) we obtain

$$z(t, x) = \int_0^t \frac{\partial g}{\partial x}(\Phi(s, x))e^{sA} ds + \int_0^t \frac{\partial f}{\partial x}(\Phi(s, x))z(s, x)ds$$

and the claim follows from Gronwall’s inequality using that $\frac{\partial g}{\partial x}$ can be made arbitrarily small by choosing $\delta$ small as noted above.

Hence, there is a $\varphi$ such that (9.34) holds at least for $t = 1$. Furthermore, the map $\varphi_s = \Phi_s \circ \varphi \circ e^{-sA}$ also satisfies (9.34) for $t = 1$:

$$\varphi_s \circ e^A = \Phi_s \circ \varphi \circ e^A \circ e^{-sA} = \Phi_s \circ \Phi_1 \circ \varphi \circ e^{-sA} = \Phi_1 \circ \varphi_s.$$

Hence, if we can show that $\varphi_t(x) = x + h_t(x)$ with $h_t$ bounded, then Corollary 9.8 will tell us $\varphi = \varphi_t$ which is precisely (9.34). Now observe

$$h_t = \Phi_t \circ \varphi \circ e^{-tA} - \mathbb{I} = (\Phi_t - e^{tA}) \circ e^{-tA} + \Phi_t \circ h \circ e^{-tA},$$