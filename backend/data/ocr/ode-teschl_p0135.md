where we again set $h_{2,j} = 0$ for $j < 0$. Again all odd coefficients vanish, $h_{2,2j+1} = 0$. The even coefficients $h_{2,2j}$ can be determined recursively for $j < n$ as before

$$h_{2,2j} = \frac{1}{4^j j!(n-1)_j}, \quad j < n. \tag{4.69}$$

The recursion (4.68) for $j = 2n$ reads $h_{2,2(n-1)} = -2c n$ from which

$$c = \frac{-2}{4^n n!(n-1)!} \tag{4.70}$$

follows. The remaining coefficients now follow recursively from

$$4j(j+n)h_{2,2j+2n} + h_{2,2(j-1)+2n} = -2c(2j+n)h_{1,2j} \tag{4.71}$$

once we choose a value for $h_{2,2n}$ (this freedom just reflects the fact that we can always add a multiple of $u_1(z)$ to $u_2(z)$). This is a first-order linear inhomogeneous recurrence relation with solution given by (see Problem 4.9 and note that the solution of the homogeneous equation is $h_{1,2j}$)

$$h_{2,2j+2n} = h_{1,2j} \left( h_{2,2n} - \frac{c}{2} \sum_{k=1}^{j} \frac{2k+n}{k(k+n)} \right). \tag{4.72}$$

Choosing $h_{2,2n} = -\frac{c}{2} H_n$, where

$$H_j = \sum_{k=1}^{j} \frac{1}{k} \tag{4.73}$$

are the harmonic numbers, we obtain

$$h_{2,2n+2j} = \frac{(-1)^j(H_{j+n} + H_j)}{4^{j+n}(n-1)!j!(j+n)!}. \tag{4.74}$$

Usually, the following linear combination

$$Y_n(z) = -\frac{2^n(n-1)!}{\pi} u_2(z) + \frac{\gamma - \log(2)}{2^{n-1}\pi n!} u_1(z)$$

$$= \frac{2}{\pi} (\gamma + \log(\frac{z}{2})) J_n(z) - \frac{1}{\pi} \sum_{j=0}^{n-1} \frac{(-1)^j(n-1)!}{j!(1-n)j} \left(\frac{z}{2}\right)^{2j-n}$$

$$- \frac{1}{\pi} \sum_{j=0}^{\infty} \frac{(-1)^j(H_{j+n} + H_j)}{j!(j+n)!} \left(\frac{z}{2}\right)^{2j+n} \tag{4.75}$$

is taken as second independent solution. Here $\gamma = \lim_{j \to \infty} (H_j - \log(j)) \approx 0.577216$ is the Euler–Mascheroni constant.

So the only remaining case is $n = 0$. In this case the recursion does not give a contradiction at $j = 2n$ but we still need to take the logarithmic term in order to get a different solution. In particular, we still make the ansatz (4.67) and the recursion (4.68) remains valid for $n = 0$. However, in