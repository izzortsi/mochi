Therefore the transition densities $\lambda_{ij}$ are just

$$\lambda_{ij} = \begin{cases} \lambda & \text{if } j = i + 1, \\ 0 & \text{if } j \neq i, i + 1, \end{cases}$$

$\lambda_{ii} = -\lambda$,

where we use (8.13) and (8.18).

The transition probabilities $p_{ij}(t)$ of the Poisson process $\xi(t)$ clearly satisfy the condition

$$p_{ij}(t) = p_{0,j-i}(t)$$

(why?). Let

$$p_j(t) = p_{0j}(t), \quad j = 0, 1, 2, \ldots$$

Then the forward Kolmogorov equations take the form

$$p'_0(t) = -\lambda p_0(t),$$

$$p'_j(t) = \lambda p_{j-1}(t) - \lambda p_j(t), \quad j = 1, 2, \ldots$$

Introducing the new functions

$$f_j(t) = e^{\lambda t} p_j(t), \quad j = 0, 1, 2, \ldots,$$

we find that

$$f'_0(t) = \lambda f_0(t) + e^{\lambda t} p'_0(t) = \lambda f_0(t) - \lambda e^{\lambda t} p_0(t) = 0,$$

$$f'_j(t) = \lambda f_j(t) + e^{\lambda t} p'_j(t)$$

$$= \lambda f_j(t) + \lambda e^{\lambda t} p_{j-1}(t) - \lambda e^{\lambda t} p_j(t) = \lambda f_{j-1}(t), \quad j = 1, 2, \ldots,$$

where

$$f_0(0) = 1,$$

$$f_j(0) = 0, \quad j = 1, 2, \ldots,$$

because of (8.3). But the solution of the system of differential equations

$$f'_0(t) = 0,$$

$$f'_j(t) = \lambda f_{j-1}(t), \quad j = 1, 2, \ldots,$$

subject to the initial conditions (8.19), is obviously

$$f_0(t) = 1, \quad f_1(t) = \lambda t, \ldots, \quad f_n(t) = \frac{(\lambda t)^n}{n!}, \ldots$$

Returning to the original functions $p_j(t) = e^{-\lambda t} f_j(t)$, we find that

$$p_j(t) = \frac{(\lambda t)^j}{j!} e^{-\lambda t}, \quad j = 0, 1, 2, \ldots$$

or equivalently

$$P \{ \xi(t) = j \} = \frac{(\lambda t)^j}{j!} e^{-\lambda t}, \quad j = 0, 1, 2, \ldots,$$

just as on p. 75.