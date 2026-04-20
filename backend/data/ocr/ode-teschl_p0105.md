and the principal matrix solution is given by

$$\Pi(t, t_0) = \begin{pmatrix} c(t, t_0) & s(t, t_0) \\ \dot{c}(t, t_0) & \dot{s}(t, t_0) \end{pmatrix},$$

(3.131)

where $c(t, t_0)$ is the solution of (3.129) corresponding to the initial condition $c(t_0, t_0) = 1$, $\dot{c}(t_0, t_0) = 0$ and similarly for $s(t, t_0)$ but corresponding to the initial condition $s(t_0, t_0) = 0$, $\dot{s}(t_0, t_0) = 1$. Liouville’s formula (3.91) shows

$$\det \Pi(t, t_0) = 1$$

(3.132)

and hence the characteristic equation for the monodromy matrix

$$M(t_0) = \begin{pmatrix} c(t_0 + T, t_0) & s(t_0 + T, t_0) \\ \dot{c}(t_0 + T, t_0) & \dot{s}(t_0 + T, t_0) \end{pmatrix},$$

(3.133)

is given by

$$\rho^2 - 2\Delta \rho + 1 = 0,$$

(3.134)

where

$$\Delta = \frac{\text{tr}(M(t_0))}{2} = \frac{c(t_0 + T, t_0) + \dot{s}(t_0 + T, t_0)}{2}.$$

(3.135)

If $\Delta^2 > 1$ we have two different real eigenvalues

$$\rho_{\pm} = \Delta \pm \sqrt{\Delta^2 - 1},$$

(3.136)

with corresponding eigenvectors

$$u_{\pm}(t_0) = \begin{pmatrix} 1 \\ m_{\pm}(t_0) \end{pmatrix},$$

(3.137)

where

$$m_{\pm}(t_0) = \frac{\rho_{\pm} - c(t_0 + T, t_0)}{s(t_0 + T, t_0)} = \frac{\dot{c}(t_0 + T, t_0)}{\rho_{\pm} - \dot{s}(t_0 + T, t_0)}.$$

(3.138)

Note that $u_{\pm}(t_0)$ are also eigenvectors of $Q(t_0)$ corresponding to the eigenvalues $\gamma_{\pm} = \frac{1}{T} \log(\rho_{\pm})$ (Lemma 3.3). From $\rho_+ \rho_- = 1$ we obtain $\gamma_+ + \gamma_- = 0$ mod $2\pi i$ and it is no restriction to assume $|\rho_+| \geq 1$ respectively $\text{Re}(\gamma_+) \geq 0$. If we set $\gamma = \text{Re}(\gamma_+)$, we have $\gamma_{\pm} = \pm \gamma$ if $\rho_{\pm} > 0$ (i.e. $\Delta = (\rho_+ + \rho_-)/2 > 0$) and $\gamma_{\pm} = \pm \gamma + i\pi$ if $\rho_{\pm} < 0$ (i.e. $\Delta < 0$). In summary, the characteristic multipliers are of the form

$$\rho_{\pm} = \sigma \text{e}^{\pm T\gamma}, \quad \sigma = \text{sgn}(\Delta), \quad \gamma = \frac{1}{T} \log |\rho_+| > 0.$$

(3.139)

Considering

$$\Pi(t, t_0)u_{\pm}(t_0) = P(t, t_0) \exp((t - t_0)Q(t_0))u_{\pm}(t_0)$$

$$= \text{e}^{\gamma_{\pm}(t - t_0)}P(t, t_0)u_{\pm}(t_0),$$

(3.140)

we see that there are two solutions of the form

$$\text{e}^{\pm \gamma t}p_{\pm}(t), \quad p_{\pm}(t + T) = \sigma p_{\pm}(t).$$

(3.141)