Since linearizing the problem was so successful for fixed points, we will try to use a similar approach for periodic points. Abbreviating the linearization of $f$ along the periodic orbit by

$$A(t) = df_{\Phi(t,x_0)}, \quad A(t+T) = A(t),$$

(12.3)

or problem suggests to investigate the first variational equation

$$\dot{y} = A(t)y,$$

(12.4)

which we already encountered in (2.49). Note that choosing a different point of the periodic orbit $x_0 \rightarrow \Phi(s,x_0)$ amounts to $A(t) \rightarrow A(t+s)$.

Our goal is to show that stability of the periodic orbit $\gamma(x_0)$ is related to stability of the first variational equation. As a first useful observation we note that the corresponding principal matrix solution $\Pi(t,t_0)$ can be obtained by linearizing the flow along the periodic orbit.

**Lemma 12.1.** The principal matrix solution of the first variational equation is given by

$$\Pi_{x_0}(t,t_0) = \frac{\partial \Phi_{t-t_0}}{\partial x}(\Phi(t_0,x_0)).$$

(12.5)

Moreover, $f(\Phi(t,x_0))$ is a solution of the first variational equation

$$f(\Phi(t,x_0)) = \Pi_{x_0}(t,t_0)f(\Phi(t_0,x_0)).$$

(12.6)

**Proof.** Abbreviate $J(t,x) = \frac{\partial \Phi_t}{\partial x}(x)$. Then $J(0,x) = \mathbb{I}$ and by interchanging $t$ and $x$ derivatives it follows that $\dot{J}(t,x) = df_{\Phi(t,x)}J(t,x)$. Hence $J(t-t_0, \Phi(t_0,x_0))$ is the principal matrix solution of the first variational equation. Finally, (12.6) follows from

$$0 = \frac{\partial}{\partial t_0}\Phi(t,x_0) = \frac{\partial}{\partial t_0}\Phi(t-t_0, \Phi(t_0,x_0))$$

$$= -f(\Phi(t-t_0, \Phi(t_0,x_0))) + \Pi_{x_0}(t,x_0)f(\Phi(t_0,x_0)).$$

Since $A(t)$ is periodic, all considerations of Section 3.6 apply. In particular, the principal matrix solution is of the form

$$\Pi_{x_0}(t,t_0) = P_{x_0}(t,t_0)\exp((t-t_0)Q_{x_0}(t_0))$$

(12.7)

and the monodromy matrix $M_{x_0}(t_0) = \exp(TQ_{x_0}(t_0)) = \frac{\partial \Phi_{T-t_0}}{\partial x}(\Phi(t_0,x_0))$ has eigenvalues independent of the point in the orbit chosen. Note that one of the eigenvalues is one, since

$$M_{x_0}(t_0)f(\Phi(t_0,x_0)) = f(\Phi(t_0,x_0)).$$

(12.8)