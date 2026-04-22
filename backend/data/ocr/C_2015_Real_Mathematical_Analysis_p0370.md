casings were a bit weak, and the bologna came out with odd bulges. The scale was not working that day, either, so the only way to compute the price of the bologna was in terms of its volume.

Cavalieri took his best knife and sliced the bologna into $n$ very thin slices, each of thickness $x$, and measured the radii, $r_1, r_2, \ldots, r_n$ of the slices (fortunately they were all round). He then estimated the volume to be $\sum_{i=1}^{n} \pi r_i^2 x$, the sum of the volumes of the slices.

Cavalieri was moonlighting from his regular job as a professor at the University of Bologna. That afternoon he went back to his desk and began the book *Geometria indivisibilium continuorum nova quandum ratione promota* (Geometry shows the continuous indivisibility between new ractions and getting promoted), in which he stated what is now known as Cavalieri’s principle: If two solids are sliced by a family of parallel planes in such a way that corresponding sections have equal areas, then the two solids have the same volume.

The book was such a success that Cavalieri sold his delicatessen and retired to a life of occasional teaching and eternal glory.

**Appendix C A Short Excursion into the Complex Field**

The field $\mathbb{C}$ of complex numbers corresponds bijectively with $\mathbb{R}^2$. The complex number $z = x + iy \in \mathbb{C}$ corresponds to $(x, y) \in \mathbb{R}^2$. A function $T: \mathbb{C} \to \mathbb{C}$ is complex linear if for all $\lambda, z, w \in \mathbb{C}$ we have

$$T(z + w) = T(z) + T(w) \quad \text{and} \quad T(\lambda z) = \lambda T(z).$$

Since $\mathbb{C}$ is a one-dimensional complex vector space the value $\mu = T(1)$ determines $T$, namely, $T(z) = \mu z$ for all $z$. If $z = x + iy$ and $\mu = \alpha + i\beta$ then $\mu z = (\alpha x - \beta y) + i(\beta x + \alpha y)$. In $\mathbb{R}^2$ terms $T: (x, y) \mapsto ((\alpha x - \beta y), (\beta x + \alpha y))$ which shows that $T$ is a linear transformation $\mathbb{R}^2 \to \mathbb{R}^2$ whose matrix is

$$\begin{bmatrix}
\alpha & -\beta \\
\beta & \alpha
\end{bmatrix}.$$

The form of this matrix is special. For instance it could never be

$$\begin{bmatrix}
2 & 1 \\
1 & 1
\end{bmatrix}.$$