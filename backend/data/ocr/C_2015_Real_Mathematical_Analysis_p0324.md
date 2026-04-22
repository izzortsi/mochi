0 × $\mathbb{R}^{n-k}$ on which the coordinates $y_1, \ldots, y_k$ are zero and $f$ is the $(k+1)^{\text{st}}$ coordinate function $y_{k+1}$. This coordinate function obviously does not attain a maximum on the coordinate plane $0 \times \mathbb{R}^{n-k}$, so $f|_S$ attains no maximum at $p$.

7 Multiple Integrals

In this section we generalize to $n$ variables the one-variable Riemann integration theory appearing in Chapter 3. For simplicity, we assume throughout that the function $f$ we integrate is real-valued, as contrasted to vector-valued, and at first we assume that $f$ is a function of only two variables.

Consider a rectangle $R = [a, b] \times [c, d]$ in $\mathbb{R}^2$. Partitions $P$ and $Q$ of $[a, b]$ and $[c, d]$

$$P : a = x_0 < x_1 < \ldots < x_m = b \quad Q : c = y_0 < y_1 < \ldots < y_n = d$$

give rise to a “grid” $G = P \times Q$ of rectangles

$$R_{ij} = I_i \times J_j$$

where $I_i = [x_{i-1}, x_i]$ and $J_j = [y_{j-1}, y_j]$. Let $\Delta x_i = x_i - x_{i-1}, \Delta y_j = y_j - y_{j-1}$, and denote the area of $R_{ij}$ as

$$|R_{ij}| = \Delta x_i \Delta y_j.$$

Let $S$ be a choice of sample points $(s_{ij}, t_{ij}) \in R_{ij}$. See Figure 117.

Given $f : R \to \mathbb{R}$, the corresponding Riemann sum is

$$R(f, G, S) = \sum_{i=1}^{m} \sum_{j=1}^{n} f(s_{ij}, t_{ij}) |R_{ij}|.$$

If there is a number to which the Riemann sum converge as the mesh of the grid (the diameter of the largest rectangle) tends to zero then $f$ is Riemann integrable and that number is the Riemann integral

$$\int_R f = \lim_{\text{mesh} G \to 0} R(f, G, S).$$

The lower and upper sums of a bounded function $f$ with respect to the grid $G$ are

$$L(f, G) = \sum m_{ij} |R_{ij}| \quad U(f, G) = \sum M_{ij} |R_{ij}|$$