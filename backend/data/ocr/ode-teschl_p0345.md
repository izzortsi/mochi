This picture is known as homoclinic tangle.

Theorem 13.2 (Smale–Birkhoff). Suppose $f$ is a diffeomorphism with a hyperbolic fixed point $p$ and a corresponding transversal homoclinic point $q$. Then some iterate $f^n$ has a hyperbolic invariant set $\Lambda$ on which it is topologically equivalent to the bi-infinite shift on two symbols.

The idea of proof is to find a horseshoe map in some iterate of $f$. Intuitively, the above picture shows that this can be done by taking an open set containing one peak of the unstable manifold between two successive homoclinic points. Taking iterations of this set you will eventually end up with a horseshoe like set around the stable manifold lying over our original set. For details see [33].

13.3. Melnikov’s method for homoclinic orbits

Finally we want to combine the Smale–Birkhoff theorem from the previous section with Melnikov’s method from Section 12.5 to obtain a criterion for chaos in ordinary differential equations.

Again we will start with a planar system

$$\dot{x} = f(x)$$

(13.10)

which has a homoclinic orbit $\gamma(x_0)$ at a fixed point $p_0$. For example, we could take Duffing’s equation from Problem 9.5 (with $\delta = 0$). The typical situation for the unperturbed system is depicted below.

Now we will perturb this system a little and consider

$$\dot{x} = f(x) + \varepsilon g(x).$$

(13.11)

Since the original fixed point $p_0$ is hyperbolic it will persist for $\varepsilon$ small, lets call it $p_0(\varepsilon)$. On the other hand, it is clear that in general the stable and unstable manifold of $p_0(\varepsilon)$ will no longer coincide for $\varepsilon \neq 0$ and hence there is no homoclinic orbit at $p_0(\varepsilon)$ for $\varepsilon \neq 0$. Again the typical situation is displayed in the picture below.