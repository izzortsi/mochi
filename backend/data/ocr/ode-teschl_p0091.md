Problem 3.20. Find a formula for the Wronskian $W(x,y) = x\dot{y} - \dot{x}y$ of two solutions of the second-order autonomous equation

$$\ddot{x} + c_1\dot{x} + c_0x = 0.$$

Problem 3.21. Prove (3.57) (either by reducing it to (3.48) or by a direct verification – I recommend doing both;-)

Problem 3.22. Look at the second-order autonomous equation

$$\ddot{x} + c_1\dot{x} + c_0x = g(t)$$

and let $\alpha_1, \alpha_2$ be the corresponding eigenvalues (not necessarily distinct). Show that the equation can be factorized as

$$\ddot{x} + c_1\dot{x} + c_0x = \left(\frac{d}{dt} - \alpha_2\right)\left(\frac{d}{dt} - \alpha_1\right)x.$$

Hence the equation can be reduced to solving two first order equations

$$\left(\frac{d}{dt} - \alpha_2\right)y = g(t), \quad \left(\frac{d}{dt} - \alpha_1\right)x = y.$$

Use this to prove Theorem 3.7 as well as Lemma 3.8 in the case $n = 2$. Extend this to the general case $n \in \mathbb{N}$. (Hint: The solution for the first order case is given in (3.48). Moreover, $\int p(t)\mathrm{e}^{\beta t}dt = q(t)\mathrm{e}^{\beta t}$, where $q(t)$ is a polynomial of degree $\deg(q) = \deg(p)$ if $\beta \neq 0$ and $\deg(q) = \deg(p) + 1$ if $\beta = 0$. For the general case use induction.)

Problem 3.23. Derive Taylor’s formula with remainder

$$x(t) = \sum_{j=0}^{n} \frac{x^{(j)}(t_0)}{j!}(t - t_0)^j + \frac{1}{n!} \int_{t_0}^{t} x^{(n+1)}(s)(t - s)^n ds$$

for $x \in C^{n+1}$ from (3.57).

Problem 3.24. Show that the geometric multiplicity of every eigenvalue of the matrix $A$ from (3.51) is one. (Hint: Can you find a cyclic vector? Why does this help you?)

3.4. General linear first-order systems

In this section we want to consider the case of linear systems, where the coefficient matrix can depend on $t$. As a preparation let me remark that a matrix $A(t)$ is called differentiable with respect to $t$ if all coefficients are. In this case we will denote by $\frac{d}{dt}A(t) \equiv \dot{A}(t)$ the matrix, whose coefficients are the derivatives of the coefficients of $A(t)$. The usual rules of calculus hold in this case as long as one takes noncommutativity of matrices into account. For example we have the product rule

$$\frac{d}{dt}A(t)B(t) = \dot{A}(t)B(t) + A(t)\dot{B}(t)$$

(3.77)