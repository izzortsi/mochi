62. Does there exist a continuous mapping from the circle to itself that has no fixed-point? What about the 2-torus? The 2-sphere?

63. Show that a smooth map $T : U \to V$ induces a linear map of cohomology groups $H^k(V) \to H^k(U)$ defined by

$$T^* : [\omega] \mapsto [T^*\omega].$$

Here, $[\omega]$ denotes the equivalence class of $\omega \in Z^k(V)$ in $H^k(V)$. The question amounts to showing that the pullback of a closed form $\omega$ is closed and that its cohomology class depends only on the cohomology class of $\omega$.†

64. Prove that diffeomorphic open sets have isomorphic cohomology groups.

65. Show that the 1-form defined on $\mathbb{R}^2 \setminus \{(0,0)\}$ by

$$\omega = \frac{-y}{r^2} dx + \frac{x}{r^2} dy$$

is closed but not exact. Why do you think that this 1-form is often referred to as $d\theta$ and why is the name problematic?

66. Let $H \subset \mathbb{R}^3$ be the helicoid $\{(x,y,z) : x^2 + y^2 \neq 0$ and $z = \arctan y/x\}$ and let $\pi : H \to \mathbb{R}^2 \setminus \{(0,0)\}$ be the projection $(x,y,z) \mapsto (x,y)$.

(a) For $\omega = (x dy - y dx)/r^2$ as in Exercise 65, why is $\pi^*\omega$ a closed 1-form on $H$?

(b) Is it exact? That is, does there exist a smooth function $f : H \to \mathbb{R}$ such that $df = \omega$?

(c) Is there more than one?

(d) Is there more than one such that $f(1,0,0) = 0$?

67. Show that the 2-form defined on the spherical shell by

$$\omega = \frac{x}{r^3} dy \wedge dz + \frac{y}{r^3} dz \wedge dx + \frac{z}{r^3} dx \wedge dy$$

is closed but not exact.

68. True or false: If $\omega$ is closed then $f\omega$ is closed.

True or false: If $\omega$ is exact then $f\omega$ is exact.

69. Is the wedge product of closed forms closed? Of exact forms exact? What about the product of a closed form and an exact form? Does this give a ring structure to the cohomology classes?

†A fancier way to present the proof of the Brouwer Fixed Point Theorem goes like this: As always, the question reduces to showing that there is no smooth retraction $T$ of the $n$-ball to its boundary. Such a $T$ would give a cohomology map $T^* : H^k(\partial B) \to H^k(B)$ where the cohomology groups of $\partial B$ are those of its spherical shell neighborhood. The map $T^*$ is seen to be a cohomology group isomorphism because $T \circ \text{inclusion}_{\partial B} = \text{inclusion}_{\partial B}^* = \text{identity}$. But when $k = n - 1 \geq 1$ the cohomology groups are nonisomorphic; they are computed to be $H^{n-1}(\partial B) = \mathbb{R}$ and $H^{n-1}(B) = 0$.