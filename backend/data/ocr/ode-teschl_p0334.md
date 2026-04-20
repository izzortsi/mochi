just reflects the fact that the periodic orbits are not hyperbolic and hence was to be expected from the outset.

The way out of this dilemma is to consider the reduced displacement function $\tilde{\Delta}(q, \varepsilon) = \varepsilon^{-1} \Delta(q, \varepsilon)$ (which is as good as the original one for our purpose). Now $\tilde{\Delta}(q, 0) = \Delta_{\varepsilon}(q, 0)$ and $\tilde{\Delta}_q(q, 0) = \Delta_{\varepsilon, q}(q, 0)$. Thus, if we find a simple zero of $\Delta_{\varepsilon}(q, 0)$, then the implicit function theorem applied to $\tilde{\Delta}(q, \varepsilon)$ tells us that the corresponding periodic orbit persists under small perturbations.

Well, whereas this might be a nice result, it is still of no use unless we can compute $\Delta_{\varepsilon}(q, 0)$ somehow. Abbreviate

$$\left(p(t, \varepsilon), q(t, \varepsilon)\right) = \Phi(t, (0, q), \varepsilon),$$

(12.32)

then

$$\frac{\partial}{\partial \varepsilon} \Delta(q, \varepsilon) \bigg|_{\varepsilon=0} = \frac{\partial}{\partial \varepsilon} q(\tau(q, \varepsilon), \varepsilon) \bigg|_{\varepsilon=0} = \dot{q}(T(q), 0) \tau_{\varepsilon}(q, 0) + q_{\varepsilon}(T(q), 0)$$

$$= p(T(q), 0) \tau_{\varepsilon}(q, 0) + q_{\varepsilon}(T(q), 0) = q_{\varepsilon}(T(q), 0),$$

(12.33)

where $T(q) = \tau(q, 0)$ is the period of the unperturbed orbit. Next, observe that $(p_{\varepsilon}(t), q_{\varepsilon}(t)) = \frac{\partial}{\partial \varepsilon}(p(t, \varepsilon), q(t, \varepsilon)) \bigg|_{\varepsilon=0}$ is the solution of the first variational equation

$$\dot{p}_{\varepsilon}(t) = -U''(q_{\varepsilon}(t)) q_{\varepsilon}(t) + f(p(t), q(t)), \quad \dot{q}_{\varepsilon}(t) = p_{\varepsilon}(t) + g(p(t), q(t))$$

(12.34)

corresponding to the initial conditions $(p_{\varepsilon}(t), q_{\varepsilon}(t)) = (0, 0)$. Here we have abbreviated $(p(t), q(t)) = (p(t, 0), q(t, 0))$. By the variation of constants formula the solution is given by

$$\begin{pmatrix} p_{\varepsilon}(t) \\ q_{\varepsilon}(t) \end{pmatrix} = \int_0^t \Pi_q(t, s) \begin{pmatrix} f(p(s), q(s)) \\ g(p(s), q(s)) \end{pmatrix} ds.$$

(12.35)

We are only interested in the value at $t = T(q)$, where

$$\Pi_q(T(q), s) = \Pi_q(T(q), 0) \Pi_q(0, s) = \Pi_q(T(q), 0) \Pi_q(s, 0)^{-1}.$$

(12.36)

Furthermore, using Lemma 12.1,

$$\Pi_q(t, 0) \begin{pmatrix} -U'(q) \\ 0 \end{pmatrix} = \begin{pmatrix} -U'(q(t)) \\ p(t) \end{pmatrix},$$

(12.37)

and we infer

$$\Pi_q(t, 0) = \frac{1}{U'(q)} \begin{pmatrix} U'(q(t)) & -\alpha(t) U'(q(t)) + \beta(t) p(t) \\ -p(t) & \alpha(t) p(t) + \beta(t) U'(q(t)) \end{pmatrix},$$

(12.38)

where $\alpha(t)$ and $\beta(t)$ are given by

$$\Pi_q(t, 0) \begin{pmatrix} 0 \\ U'(q) \end{pmatrix} = \alpha(t) \begin{pmatrix} -U'(q(t)) \\ p(t) \end{pmatrix} + \beta(t) \begin{pmatrix} p(t) \\ U'(q(t)) \end{pmatrix}.$$

(12.39)