once $j$ reaches the size of $J$:

$$N = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \quad N^2 = \begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \quad N^3 = \begin{pmatrix} 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix},$$

and $N^4 = 0$. In summary, $\exp(J)$ explicitly reads

$$\exp(J) = e^{\alpha} \begin{pmatrix} 1 & 1 & \frac{1}{2!} & \ldots & \frac{1}{(k-1)!} \\ 1 & 1 & \ddots & \vdots \\ 1 & \ddots & \frac{1}{2!} \\ \vdots & \ddots & 1 \\ 1 & \vdots & 1 \end{pmatrix}. \tag{3.19}$$

**Example.** In two dimensions the exponential matrix of

$$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \tag{3.20}$$

is given by

$$\exp(A) = e^{\delta} \left( \cosh(\Delta) \mathbb{I} + \frac{\sinh(\Delta)}{\Delta} \begin{pmatrix} \gamma & b \\ c & -\gamma \end{pmatrix} \right), \tag{3.21}$$

where

$$\delta = \frac{a+d}{2}, \quad \gamma = \frac{a-d}{2}, \quad \Delta = \sqrt{\gamma^2 + bc}. \tag{3.22}$$

Here one has to set $\frac{\sinh(\Delta)}{\Delta} = 1$ for $\Delta = 0$. Moreover, note $\cosh(i\Delta) = \cos(\Delta)$ and $\frac{\sinh(i\Delta)}{\iDelta} = \frac{\sin(\Delta)}{\Delta}$.

To see this set $A = \delta \mathbb{I} + B$ and use $\exp(A) = e^{\delta} \exp(B)$ plus

$$B^m = \begin{cases} \Delta^{2k}B, & m = 2k + 1, \\ \Delta^{2k}\mathbb{I}, & m = 2k, \end{cases} \quad B = \begin{pmatrix} \gamma & b \\ c & -\gamma \end{pmatrix}.$$

Hence

$$\exp(A) = e^{\delta} \left( \sum_{k=0}^{\infty} \frac{\Delta^{2k}}{(2k)!} \mathbb{I} + \sum_{k=0}^{\infty} \frac{\Delta^{2k}}{(2k+1)!} B \right)$$

establishing the claim.

Note that if $A$ is in Jordan canonical form, then it is not hard to see that

$$\det(\exp(A)) = \exp(\text{tr}(A)). \tag{3.23}$$

Since both the determinant and the trace are invariant under linear transformations, the formula also holds for arbitrary matrices. In fact, we even have: