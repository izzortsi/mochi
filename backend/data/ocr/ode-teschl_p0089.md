where we have introduced the convenient abbreviations

$$\eta = \frac{R}{2L} \quad \text{and} \quad \omega_0 = \frac{1}{\sqrt{LC}}.$$ (3.65)

If $\eta > \omega_0$ (over damping), both eigenvalues are negative and the solution of the homogeneous equation is given by

$$I_h(t) = k_1 \mathrm{e}^{\alpha_1 t} + k_2 \mathrm{e}^{\alpha_2 t}.$$ (3.66)

If $\eta = \omega_0$ (critical damping), both eigenvalues are equal and the solution of the homogeneous equation is given by

$$I_h(t) = (k_1 + k_2 t) \mathrm{e}^{-\eta t}.$$ (3.67)

Finally, for $\eta < \omega_0$ (under damping) we have complex conjugate eigenvalues and the solution of the homogeneous equation is given by

$$I_h(t) = k_1 \mathrm{e}^{-\eta t} \cos(\beta t) + k_2 \mathrm{e}^{-\eta t} \sin(\beta t), \quad \beta = \sqrt{\omega_0^2 - \eta^2} > 0.$$ (3.68)

In every case the real part of both eigenvalues is negative and the homogeneous solution decays exponentially as $t \to \infty$:

$$I_i(t) = k \mathrm{e}^{\mathrm{i}\omega t}$$ (3.69)

with an unknown constant $k$. This produces

$$k = \frac{V_0}{R + \mathrm{i}(L\omega - \frac{1}{\omega C})}.$$ (3.70)

Since the homogeneous solution decays exponentially, we have after a short time

$$I(t) = I_h(t) + I_i(t) \approx I_i(t) = \frac{V_0}{Z} \mathrm{e}^{\mathrm{i}\omega t} = \frac{1}{Z} V(t),$$ (3.71)

where

$$Z = R + Z_L + Z_C, \quad Z_L = \mathrm{i}L\omega, \quad Z_C = -\mathrm{i}\frac{1}{\omega C}$$ (3.72)

is known as the complex impedance. The current $I(t) = \frac{1}{Z} V(t)$ attains its maximum when

$$|Z|^2 = R^2 + (L\omega - \frac{1}{\omega C})^2$$ (3.73)