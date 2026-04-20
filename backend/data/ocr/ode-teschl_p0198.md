Dynamical systems

6.1. Dynamical systems

You can think of a dynamical system as the time evolution of some physical system, such as the motion of a few planets under the influence of their respective gravitational forces. Usually you want to know the fate of the system for long times, for instance, will the planets eventually collide or will the system persist for all times?

For some systems (e.g., just two planets) these questions are relatively simple to answer since it turns out that the motion of the system is regular and converges, for example, to an equilibrium.

However, many interesting systems are not that regular! In fact, it turns out that for many systems even very close initial conditions might get spread far apart in short times. For example, you probably have heard about the motion of a butterfly which can produce a perturbance of the atmosphere resulting in a thunderstorm a few weeks later.

We begin with the definition: A dynamical system is a semigroup $G$ with identity element $e$ acting on a set $M$. That is, there is a map

$$T : G \times M \rightarrow M$$
$$(g, x) \mapsto T_g(x)$$

(6.1)

such that

$$T_g \circ T_h = T_{g \circ h}, \quad T_e = \mathbb{I}.$$

(6.2)

If $G$ is a group, we will speak of an invertible dynamical system.

We are mainly interested in discrete dynamical systems where

$$G = \mathbb{N}_0 \text{ or } G = \mathbb{Z}$$

(6.3)