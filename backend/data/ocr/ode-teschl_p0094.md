since both sides solve $\dot{\Pi} = A(t)\Pi$ and coincide for $t = t_1$. In particular, choosing $t = t_0$, we see that $\Pi(t, t_0)$ is an isomorphism with inverse

$$\Pi(t, t_0)^{-1} = \Pi(t_0, t).$$

(3.89)

More generally, taking $n$ solutions $\phi_1, \ldots, \phi_n$ we obtain a matrix solution $U(t) = (\phi_1(t), \ldots, \phi_n(t))$. Note that the differential equation is uniquely determined by $n$ linearly independent solutions by virtue of $A(t) = \dot{U}(t)U(t)^{-1}$.

The determinant of $U(t)$ is called **Wronski determinant**

$$W(t) = \det(\phi_1(t), \ldots, \phi_n(t)).$$

(3.90)

If $\det U(t) \neq 0$, the matrix solution $U(t)$ is called a **fundamental matrix solution**. Moreover, if $U(t)$ is a matrix solution, so is $U(t)C$, where $C$ is a constant matrix. Hence, given two fundamental matrix solutions $U(t)$ and $V(t)$ we always have $V(t) = U(t)U(t_0)^{-1}V(t_0)$, since a matrix solution is uniquely determined by an initial condition. In particular, the principal matrix solution can be obtained from any fundamental matrix solution via $\Pi(t, t_0) = U(t)U(t_0)^{-1}$.

The following lemma shows that it suffices to check $\det U(t) \neq 0$ for one $t \in \mathbb{R}$.

**Lemma 3.11.** The Wronski determinant of $n$ solutions satisfies

$$W(t) = W(t_0) \exp \left( \int_{t_0}^{t} \text{tr}(A(s)) \, ds \right).$$

(3.91)

This is known as **Abel’s identity or Liouville’s formula**.

**Proof.** By (3.83) we have

$$\Pi(t + \varepsilon, t) = \mathbb{I} + A(t)\varepsilon + o(\varepsilon)$$

and using $U(t + \varepsilon) = \Pi(t + \varepsilon, t)U(t)$ we obtain (Problem 3.26)

$$W(t + \varepsilon) = \det(\mathbb{I} + A(t)\varepsilon + o(\varepsilon))W(t) = (1 + \text{tr}(A(t))\varepsilon + o(\varepsilon))W(t)$$

implying

$$\frac{d}{dt}W(t) = \text{tr}(A(t))W(t).$$

This equation is separable and the solution is given by (3.91).

Now let us turn to the inhomogeneous system

$$\dot{x} = A(t)x + g(t),$$

(3.92)

where $A \in C(I, \mathbb{R}^n \times \mathbb{R}^n)$ and $g \in C(I, \mathbb{R}^n)$. Since the difference of two solutions of the inhomogeneous system (3.92) satisfies the corresponding homogeneous system (3.79), it suffices to find one particular solution. This can be done using the following ansatz

$$x(t) = \Pi(t, t_0)c(t), \quad c(t_0) = x(t_0) = x_0,$$

(3.93)