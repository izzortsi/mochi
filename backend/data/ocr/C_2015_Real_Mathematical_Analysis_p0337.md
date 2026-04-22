Fubini’s Theorem is proved by induction on $n$, and has the same meaning: Integration on a box can be done slice by slice, and the order in which the iterated integration is performed has no effect on the answer.

The Change of Variables Formula has the same statement, only now the Jacobian is the determinant of an $n \times n$ matrix. In place of area we have volume, the $n$-dimensional volume of a set $S \subset \mathbb{R}^n$ being the integral of its characteristic function. The volume-multiplier formula, Proposition 33, has essentially the same proof but the elementary matrix notation is messier. (It helps to realize that the following types of elementary row operations suffice for row reduction: Transposition of two adjacent rows, multiplication of the first row by $\lambda$, and addition of the second row to the first.) The proof of the Change of Variables Formula itself differs only in that 16 becomes $4^n$.

8 Differential Forms

The Riemann integral notation

$$\sum_{i=1}^{n} f(t_i) \Delta x_i \approx \int_a^b f(x) dx$$

may lead one to imagine the integral as an “infinite sum of infinitely small quantities $f(x)dx$.” Although this idea itself seems to lead nowhere, it points to a good question – how do you give an independent meaning to the symbol $f dx$? The answer: differential forms. Not only does the theory of differential forms supply coherent, independent meanings for $f dx$, $dx$, $dy$, $df$, $dxdy$, and even for $d$ and $x$ separately, but it also unifies vector calculus results. A single result, the General Stokes Formula for differential forms

$$\int_M d\omega = \int_{\partial M} \omega,$$

encapsulates all integral theorems about divergence, gradient, and curl.

The presentation of differential forms in this section appears in the natural generality of $n$ dimensions, and as a consequence it is unavoidably fraught with complicated index notation – armies of $i$’s, $j$’s, double subscripts, multi-indices, and so on. Your endurance may be tried.

First, consider a function $y = F(x)$. Normally, you think of $F$ as the function, $x$ as the input variable, and $y$ as the output variable. But you can also take a dual