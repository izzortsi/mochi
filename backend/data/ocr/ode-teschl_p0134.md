Plugging this into our equation yields

$$z^2 \sum_{j=0}^{\infty} h_{1,j}(j+\nu-1)(j+\nu)z^{j+\nu-2} + z \sum_{j=0}^{\infty} h_{1,j}(j+\nu)z^{j+\nu-1}$$

$$+ (z^2 - \nu^2) \sum_{j=0}^{\infty} h_{1,j}z^{j+\nu} = 0$$

and after multiplying by $z^{-\nu}$ and aligning powers of $z$

$$\sum_{j=0}^{\infty} \left(h_{1,j}(j+\nu-1)(j+\nu) + h_{1,j}(j+\nu) + h_{1,j-2} - h_{1,j}\nu^2\right) z^j = 0,$$

where we set $h_{1,j} = 0$ for $j < 0$. Comparing coefficients we obtain the recurrence relation

$$j(j+2\nu)h_{1,j} + h_{1,j-2} = 0$$

for the unknown expansion coefficients $h_{1,j}$. In particular, this can be viewed as two independent recurrence relations for the even $h_{1,2j}$ and odd $h_{1,2j+1}$ coefficients. The solution is easily seen to be

$$h_{1,2j} = \frac{(-1)^j}{4^j j!(\nu+1)_j}, \quad h_{2j+1} = 0,$$

where we have used the **Pochhammer symbol**

$$(x)_0 = 1, \quad (x)_j = x(x+1) \cdots (x+j-1) = \frac{\Gamma(x+j)}{\Gamma(x)}.$$

Here $\Gamma(x)$ is the usual **Gamma function** (cf. Problem 4.5). This solution, with a different normalization, is called **Bessel function**

$$J_\nu(z) = \frac{u_1(z)}{2^\nu \Gamma(\nu+1)} = \sum_{j=0}^{\infty} \frac{(-1)^j}{j!\Gamma(\nu+j+1)} \left(\frac{z}{2}\right)^{2j+\nu}$$

of order $\nu$. Now what about the second solution? So let us investigate the equation for $-\nu$. Replacing $\nu$ by $-\nu$ in the previous calculation, we see that we can find a second (linearly independent) solution $J_{-\nu}(z)$ provided $\nu \neq 0$ and $(-\nu+1)_j \neq 0$ for all $j$, that is, provided $\nu \notin \mathbb{N}_0$. Hence there are no logarithmic terms even for $\nu = \frac{2n+1}{2}$, where $\alpha_1 - \alpha_2 = 2\nu = 2n+1 \in \mathbb{N}$. It remains to look at the case, where $\nu = n \in \mathbb{N}_0$. We begin with the case $n \in \mathbb{N}$. All odd coefficients must be zero and the recursion for the even ones gives us a contradiction at $j = 2n$. Hence the only possibility left is a logarithmic solution

$$u_2(z) = z^{-n}h_2(z) + c \log(z)u_1(z).$$

Inserting this into our equation yields

$$j(j-2n)h_{2,j} + h_{2,j-2} = -2c(j-n)h_{1,j-2n},$$