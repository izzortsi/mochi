and with a similar computation as before the solution is given by

$$x(t) = (y_{0,1} + y_{0,2}t)e^{\alpha t}u_1 + y_{0,2}e^{\alpha t}u_2.$$  

(3.41)

This finishes the case where $A$ is not diagonalizable.

Next, let us try to understand the qualitative behavior for large $t$. For this we need to understand the function $\exp(\alpha t)$. From (3.38) we can read off that $\exp(\alpha t)$ will converge to 0 as $t \to \infty$ if $\lambda = \text{Re}(\alpha) < 0$ and grow exponentially if $\lambda = \text{Re}(\alpha) > 0$. It remains to discuss the possible cases according to the respective signs of $\text{Re}(\alpha_1)$ and $\text{Re}(\alpha_2)$.

Firstly, suppose both eigenvalues have positive real part. Then all solutions grow exponentially as $t \to \infty$ and decay exponentially as $t \to -\infty$. The origin is called a **source** in this case. Similarly, if both eigenvalues have negative real part, the situation can be reduced to the previous one by replacing $t \to -t$. The phase portrait stays the same except that the solution curves are traversed in the opposite direction. The origin is called a **sink** in this case. The typical phase portrait is depicted in Figure 3.1 for the case of complex and in Figure 3.2 for the case of real eigenvalues. Note that in the case of real eigenvalues the two lines (plotted thick in the figures) correspond to the two eigenvectors of the coefficient matrix (why are there no eigenvectors visible in the case of complex eigenvalues?). In the complex case, the imaginary part $\omega$ causes a rotational component of the solutions and the origin is also called a spiral source respectively spiral sink.

If one eigenvalue is positive and one eigenvalue is negative, the phase portrait is shown in Figure 3.3 and the origin is called a **saddle**. Again the two lines correspond to the two eigenvectors of the coefficient matrix. The long-time behavior now depends on the initial condition $x_0$. If $x_0$ lies in the eigenspace corresponding to the negative eigenvalue, the solution will decay exponentially as $t \to \infty$ and grow exponentially as $t \to -\infty$. If $x_0$ lies in