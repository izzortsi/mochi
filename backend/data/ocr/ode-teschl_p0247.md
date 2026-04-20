We observe that all trajectories first move inwards and then encircle the two fixed points in a pretty irregular way.

To get a better understanding, let us show that there exists an ellipsoid $E_\varepsilon$ which all trajectories eventually enter and never leave again. To do this, let us consider a small modification of our Liapunov function from above,

$$L(x, y, z) = rx^2 + \sigma y^2 + \sigma(z - 2r)^2.$$  

(8.25)

A quick computation shows

$$\dot{L}(x, y, z) = -2\sigma(rx^2 + y^2 + b(z - r)^2 - br^2).$$  

(8.26)

Now let $E$ be the ellipsoid defined by $E = \{(x, y, z)|\dot{L}(x, y, z) \geq 0\}$ and let $M = \max_{(x, y, z) \in E} L(x, y, z)$. Define $E_1 = \{(x, y, z)|L(x, y, z) < M + 1\}$. Any point outside $E_1$ also lies outside $E$ and hence $\dot{L} \leq -\delta < 0$ for such points. That is, for $x \in \mathbb{R}^3 \setminus E_1$ the value of $L$ is strictly decreasing along its trajectory and hence it must enter $E_1$ after some finite time.

Moreover, $E_1$ is a trapping region for the Lorenz equation and there is a corresponding attracting set

$$\Lambda = \omega_+(E_1),$$  

(8.27)

which is called the attractor of the Lorenz equation. In particular, we see that solutions exist for all positive times. Note also that $W^+(\Lambda) = \mathbb{R}^3$. All fixed points plus their unstable manifolds (if any) must also be contained in $\Lambda$. Moreover, I even claim that $\Lambda$ is of Lebesgue measure zero. To see this we need a generalized version of Liouville’s formula (3.91).

**Lemma 8.8.** Let $\dot{x} = f(x)$ be a dynamical system on $\mathbb{R}^n$ with corresponding flow $\Phi(t, x)$. Let $U$ be a bounded open subset of $\mathbb{R}^n$ and let $V = \int_U dx$ be its volume. Abbreviate $U(t) = \Phi(t, U)$, respectively, $V(t) = \int_U(t) dx$. Then

$$\dot{V}(t) = \int_U(t) \text{div}(f(x)) dx.$$  

(8.28)